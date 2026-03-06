import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { addToCart, getCartItems, removeFromCart, addToWishlist, getWishlistItems, removeFromWishlist } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  cart: router({
    list: protectedProcedure.query(({ ctx }) => getCartItems(ctx.user.id)),
    add: protectedProcedure
      .input(
        z.object({
          productId: z.number(),
          productName: z.string(),
          productPrice: z.number(),
          productImage: z.string(),
          quantity: z.number().default(1),
        })
      )
      .mutation(({ ctx, input }) =>
        addToCart(
          ctx.user.id,
          input.productId,
          input.productName,
          input.productPrice,
          input.productImage,
          input.quantity
        )
      ),
    remove: protectedProcedure
      .input(z.object({ cartItemId: z.number() }))
      .mutation(({ ctx, input }) => removeFromCart(ctx.user.id, input.cartItemId)),
  }),

  wishlist: router({
    list: protectedProcedure.query(({ ctx }) => getWishlistItems(ctx.user.id)),
    add: protectedProcedure
      .input(
        z.object({
          productId: z.number(),
          productName: z.string(),
          productPrice: z.number(),
          productImage: z.string(),
        })
      )
      .mutation(({ ctx, input }) =>
        addToWishlist(
          ctx.user.id,
          input.productId,
          input.productName,
          input.productPrice,
          input.productImage
        )
      ),
    remove: protectedProcedure
      .input(z.object({ productId: z.number() }))
      .mutation(({ ctx, input }) => removeFromWishlist(ctx.user.id, input.productId)),
  }),
});

export type AppRouter = typeof appRouter;
