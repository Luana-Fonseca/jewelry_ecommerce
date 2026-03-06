import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

const collectionsData: Record<string, Product[]> = {
  anéis: [
    {
      id: 1,
      name: "Anel de Noivado com Diamante",
      category: "Anéis",
      price: 4500,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel de noivado em ouro rosado com diamante brilhante",
      rating: 5,
    },
    {
      id: 11,
      name: "Anel de Safira",
      category: "Anéis",
      price: 3200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel exquisito de safira com ouro branco",
      rating: 5,
    },
    {
      id: 12,
      name: "Anel de Rubi Clássico",
      category: "Anéis",
      price: 3800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel elegante com rubi natural e diamantes",
      rating: 5,
    },
    {
      id: 13,
      name: "Anel de Esmeralda Luxo",
      category: "Anéis",
      price: 4200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel sofisticado com esmeralda colombiana",
      rating: 5,
    },
    {
      id: 14,
      name: "Anel de Diamante Solitário",
      category: "Anéis",
      price: 5500,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel com diamante solitário de alta quilatagem",
      rating: 5,
    },
    {
      id: 15,
      name: "Anel de Ouro Branco Minimalista",
      category: "Anéis",
      price: 1800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel minimalista em ouro branco 18K",
      rating: 5,
    },
    {
      id: 16,
      name: "Anel de Ouro Amarelo Vintage",
      category: "Anéis",
      price: 2200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel vintage em ouro amarelo com padrão clássico",
      rating: 5,
    },
    {
      id: 17,
      name: "Anel de Platina com Diamantes",
      category: "Anéis",
      price: 6000,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel de platina com diamantes laterais",
      rating: 5,
    },
    {
      id: 18,
      name: "Anel de Ouro Rosado com Pérola",
      category: "Anéis",
      price: 2800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel elegante com pérola de água doce",
      rating: 5,
    },
    {
      id: 19,
      name: "Anel de Turquesa Artesanal",
      category: "Anéis",
      price: 1500,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
      description: "Anel artesanal com turquesa natural",
      rating: 5,
    },
  ],
  colares: [
    {
      id: 2,
      name: "Coleção de Colares em Ouro",
      category: "Colares",
      price: 1200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colares elegantes em ouro e prata",
      rating: 5,
    },
    {
      id: 20,
      name: "Colar de Diamante Solitário",
      category: "Colares",
      price: 2500,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar com diamante solitário em ouro branco",
      rating: 5,
    },
    {
      id: 21,
      name: "Colar de Pérola Barroca",
      category: "Colares",
      price: 1800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar elegante com pérola barroca",
      rating: 5,
    },
    {
      id: 22,
      name: "Colar de Ouro Amarelo Corrente",
      category: "Colares",
      price: 1400,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar com corrente em ouro amarelo 14K",
      rating: 5,
    },
    {
      id: 23,
      name: "Colar de Safira Azul",
      category: "Colares",
      price: 2800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar com safira azul e diamantes",
      rating: 5,
    },
    {
      id: 24,
      name: "Colar de Ouro Branco Minimalista",
      category: "Colares",
      price: 950,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar minimalista em ouro branco",
      rating: 5,
    },
    {
      id: 25,
      name: "Colar de Esmeralda Vintage",
      category: "Colares",
      price: 3200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar vintage com esmeralda natural",
      rating: 5,
    },
    {
      id: 26,
      name: "Colar de Platina com Diamantes",
      category: "Colares",
      price: 4500,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar de platina com diamantes brilhantes",
      rating: 5,
    },
    {
      id: 27,
      name: "Colar de Rubi Clássico",
      category: "Colares",
      price: 3500,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar elegante com rubi natural",
      rating: 5,
    },
    {
      id: 28,
      name: "Colar de Cristal de Rocha",
      category: "Colares",
      price: 1100,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
      description: "Colar artesanal com cristal de rocha",
      rating: 5,
    },
  ],
  pulseiras: [
    {
      id: 3,
      name: "Pulseira de Tênis com Diamantes",
      category: "Pulseiras",
      price: 2800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira luxuosa de tênis com diamantes",
      rating: 5,
    },
    {
      id: 29,
      name: "Pulseira de Ouro Amarelo Clássica",
      category: "Pulseiras",
      price: 1600,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira clássica de ouro amarelo",
      rating: 5,
    },
    {
      id: 30,
      name: "Pulseira de Platina com Safiras",
      category: "Pulseiras",
      price: 3500,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira de platina com safiras azuis",
      rating: 5,
    },
    {
      id: 31,
      name: "Pulseira de Ouro Branco Minimalista",
      category: "Pulseiras",
      price: 1200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira minimalista em ouro branco",
      rating: 5,
    },
    {
      id: 32,
      name: "Pulseira de Pérolas Naturais",
      category: "Pulseiras",
      price: 2200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira elegante com pérolas naturais",
      rating: 5,
    },
    {
      id: 33,
      name: "Pulseira de Ouro Rosado com Diamantes",
      category: "Pulseiras",
      price: 2600,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira de ouro rosado com diamantes",
      rating: 5,
    },
    {
      id: 34,
      name: "Pulseira de Esmeralda Vintage",
      category: "Pulseiras",
      price: 3200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira vintage com esmeralda natural",
      rating: 5,
    },
    {
      id: 35,
      name: "Pulseira de Rubi Clássica",
      category: "Pulseiras",
      price: 2900,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira elegante com rubi natural",
      rating: 5,
    },
    {
      id: 36,
      name: "Pulseira de Cristal de Rocha",
      category: "Pulseiras",
      price: 1400,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira artesanal com cristal de rocha",
      rating: 5,
    },
    {
      id: 37,
      name: "Pulseira de Ouro Branco Gravada",
      category: "Pulseiras",
      price: 1800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
      description: "Pulseira de ouro branco com gravação",
      rating: 5,
    },
  ],
  brincos: [
    {
      id: 4,
      name: "Brincos de Pérola",
      category: "Brincos",
      price: 950,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos elegantes de pérola e diamante",
      rating: 5,
    },
    {
      id: 38,
      name: "Brincos de Diamante Solitário",
      category: "Brincos",
      price: 1800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos com diamante solitário",
      rating: 5,
    },
    {
      id: 39,
      name: "Brincos de Safira Azul",
      category: "Brincos",
      price: 1600,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos com safira azul natural",
      rating: 5,
    },
    {
      id: 40,
      name: "Brincos de Ouro Amarelo Clássicos",
      category: "Brincos",
      price: 800,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos clássicos em ouro amarelo",
      rating: 5,
    },
    {
      id: 41,
      name: "Brincos de Esmeralda",
      category: "Brincos",
      price: 1900,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos com esmeralda natural",
      rating: 5,
    },
    {
      id: 42,
      name: "Brincos de Rubi Clássicos",
      category: "Brincos",
      price: 1700,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos com rubi natural",
      rating: 5,
    },
    {
      id: 43,
      name: "Brincos de Ouro Branco Minimalista",
      category: "Brincos",
      price: 700,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos minimalista em ouro branco",
      rating: 5,
    },
    {
      id: 44,
      name: "Brincos de Cristal de Rocha",
      category: "Brincos",
      price: 600,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos artesanais com cristal",
      rating: 5,
    },
    {
      id: 45,
      name: "Brincos de Ouro Rosado com Pérola",
      category: "Brincos",
      price: 1100,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos de ouro rosado com pérola",
      rating: 5,
    },
    {
      id: 46,
      name: "Brincos de Platina com Diamantes",
      category: "Brincos",
      price: 2200,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
      description: "Brincos de platina com diamantes",
      rating: 5,
    },
  ],
};

export default function Collections() {
  const [, setLocation] = useLocation();
  const [selectedCollection, setSelectedCollection] = useState("anéis");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = collectionsData[selectedCollection] || [];

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Voltar</span>
          </button>
          <h1 className="text-2xl font-bold text-accent">LUXE JOIAS</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Nossas Coleções</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nossas exclusivas coleções de joias, cada uma cuidadosamente
            selecionada para representar o pico do luxo e sofisticação.
          </p>
        </div>

        {/* Collection Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {Object.keys(collectionsData).map((collection) => (
            <button
              key={collection}
              onClick={() => setSelectedCollection(collection)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCollection === collection
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              {collection.charAt(0).toUpperCase() + collection.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div
                className="relative overflow-hidden h-64 bg-secondary cursor-pointer"
                onClick={() => setLocation(`/joia/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                    wishlist.includes(product.id)
                      ? "bg-accent text-accent-foreground"
                      : "bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <div
                  className="cursor-pointer"
                  onClick={() => setLocation(`/joia/${product.id}`)}
                >
                  <h3 className="text-sm font-bold hover:text-accent transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {product.description}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-accent">
                    R$ {product.price.toLocaleString("pt-BR")}
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <span key={i} className="text-accent text-xs">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xs py-2 flex items-center justify-center gap-1"
                >
                  <ShoppingCart size={14} />
                  Adicionar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
