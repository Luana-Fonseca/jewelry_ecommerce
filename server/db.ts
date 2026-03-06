import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, cartItems, wishlistItems } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function addToCart(
  userId: number,
  productId: number,
  productName: string,
  productPrice: number,
  productImage: string,
  quantity: number = 1
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const existing = await db
    .select()
    .from(cartItems)
    .where(
      and(eq(cartItems.userId, userId), eq(cartItems.productId, productId))
    )
    .limit(1);

  if (existing.length > 0) {
    return await db
      .update(cartItems)
      .set({ quantity: existing[0].quantity + quantity })
      .where(
        and(eq(cartItems.userId, userId), eq(cartItems.productId, productId))
      );
  }

  return await db.insert(cartItems).values({
    userId,
    productId,
    productName,
    productPrice,
    productImage,
    quantity,
  });
}

export async function getCartItems(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db.select().from(cartItems).where(eq(cartItems.userId, userId));
}

export async function removeFromCart(userId: number, cartItemId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db
    .delete(cartItems)
    .where(and(eq(cartItems.userId, userId), eq(cartItems.id, cartItemId)));
}

export async function addToWishlist(
  userId: number,
  productId: number,
  productName: string,
  productPrice: number,
  productImage: string
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const existing = await db
    .select()
    .from(wishlistItems)
    .where(
      and(eq(wishlistItems.userId, userId), eq(wishlistItems.productId, productId))
    )
    .limit(1);

  if (existing.length > 0) return existing[0];

  return await db.insert(wishlistItems).values({
    userId,
    productId,
    productName,
    productPrice,
    productImage,
  });
}

export async function getWishlistItems(userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db
    .select()
    .from(wishlistItems)
    .where(eq(wishlistItems.userId, userId));
}

export async function removeFromWishlist(userId: number, productId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return await db
    .delete(wishlistItems)
    .where(
      and(eq(wishlistItems.userId, userId), eq(wishlistItems.productId, productId))
    );
}

// TODO: add feature queries here as your schema grows.
