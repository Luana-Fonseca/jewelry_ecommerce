import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ChevronLeft, Star } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  details: string;
  material: string;
  dimensions: string;
  weight: string;
}

// Todos os 40 produtos das coleções
const products: Record<number, Product> = {
  // Anéis (1-10)
  1: {
    id: 1,
    name: "Anel de Noivado com Diamante",
    category: "Anéis",
    price: 4500,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel de noivado em ouro rosado com diamante brilhante",
    rating: 5,
    details: "Este magnífico anel de noivado apresenta um diamante redondo brilhante de alta qualidade, definido em ouro rosado 18 quilates.",
    material: "Ouro Rosado 18K, Diamante",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "3.5g",
  },
  11: {
    id: 11,
    name: "Anel de Safira",
    category: "Anéis",
    price: 3200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel exquisito de safira com ouro branco",
    rating: 5,
    details: "Um anel exquisito com uma safira azul profunda cercada por diamantes em ouro branco 18 quilates.",
    material: "Ouro Branco 18K, Safira, Diamante",
    dimensions: "Tamanho 6 (ajustável)",
    weight: "4.1g",
  },
  12: {
    id: 12,
    name: "Anel de Rubi Clássico",
    category: "Anéis",
    price: 3800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel elegante com rubi natural e diamantes",
    rating: 5,
    details: "Anel elegante com rubi natural de alta qualidade cercado por diamantes brilhantes.",
    material: "Ouro Amarelo 18K, Rubi, Diamante",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "3.8g",
  },
  13: {
    id: 13,
    name: "Anel de Esmeralda Luxo",
    category: "Anéis",
    price: 4200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel sofisticado com esmeralda colombiana",
    rating: 5,
    details: "Anel sofisticado com esmeralda colombiana natural de primeira qualidade.",
    material: "Ouro Branco 18K, Esmeralda, Diamante",
    dimensions: "Tamanho 6 (ajustável)",
    weight: "4.2g",
  },
  14: {
    id: 14,
    name: "Anel de Diamante Solitário",
    category: "Anéis",
    price: 5500,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel com diamante solitário de alta quilatagem",
    rating: 5,
    details: "Anel com diamante solitário de alta quilatagem em ouro branco puro.",
    material: "Ouro Branco 18K, Diamante",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "3.9g",
  },
  15: {
    id: 15,
    name: "Anel de Ouro Branco Minimalista",
    category: "Anéis",
    price: 1800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel minimalista em ouro branco 18K",
    rating: 5,
    details: "Anel minimalista em ouro branco puro com design elegante e simples.",
    material: "Ouro Branco 18K",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "2.5g",
  },
  16: {
    id: 16,
    name: "Anel de Ouro Amarelo Vintage",
    category: "Anéis",
    price: 2200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel vintage em ouro amarelo com padrão clássico",
    rating: 5,
    details: "Anel vintage em ouro amarelo com padrão clássico e elegante.",
    material: "Ouro Amarelo 14K",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "3.2g",
  },
  17: {
    id: 17,
    name: "Anel de Platina com Diamantes",
    category: "Anéis",
    price: 6000,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel de platina com diamantes laterais",
    rating: 5,
    details: "Anel de platina pura com diamantes laterais brilhantes.",
    material: "Platina, Diamante",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "5.1g",
  },
  18: {
    id: 18,
    name: "Anel de Ouro Rosado com Pérola",
    category: "Anéis",
    price: 2800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel elegante com pérola de água doce",
    rating: 5,
    details: "Anel elegante com pérola de água doce natural em ouro rosado.",
    material: "Ouro Rosado 14K, Pérola",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "3.1g",
  },
  19: {
    id: 19,
    name: "Anel de Turquesa Artesanal",
    category: "Anéis",
    price: 1500,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel artesanal com turquesa natural",
    rating: 5,
    details: "Anel artesanal com turquesa natural em ouro amarelo.",
    material: "Ouro Amarelo 14K, Turquesa",
    dimensions: "Tamanho 7 (ajustável)",
    weight: "2.8g",
  },

  // Colares (2, 20-28)
  2: {
    id: 2,
    name: "Coleção de Colares em Ouro",
    category: "Colares",
    price: 1200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colares elegantes em ouro e prata para qualquer ocasião",
    rating: 5,
    details: "Uma coleção versátil de colares em ouro amarelo e prata.",
    material: "Ouro 14K e Prata 925",
    dimensions: "Comprimento 16-18 polegadas (ajustável)",
    weight: "2.8g",
  },
  20: {
    id: 20,
    name: "Colar de Diamante Solitário",
    category: "Colares",
    price: 2500,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar com diamante solitário em ouro branco",
    rating: 5,
    details: "Colar com diamante solitário em ouro branco 18 quilates.",
    material: "Ouro Branco 18K, Diamante",
    dimensions: "Comprimento 18 polegadas",
    weight: "3.2g",
  },
  21: {
    id: 21,
    name: "Colar de Pérola Barroca",
    category: "Colares",
    price: 1800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar elegante com pérola barroca",
    rating: 5,
    details: "Colar elegante com pérola barroca natural.",
    material: "Ouro Amarelo 14K, Pérola",
    dimensions: "Comprimento 18 polegadas",
    weight: "2.9g",
  },
  22: {
    id: 22,
    name: "Colar de Ouro Amarelo Corrente",
    category: "Colares",
    price: 1400,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar com corrente em ouro amarelo 14K",
    rating: 5,
    details: "Colar com corrente em ouro amarelo 14K de alta qualidade.",
    material: "Ouro Amarelo 14K",
    dimensions: "Comprimento 18 polegadas",
    weight: "2.5g",
  },
  23: {
    id: 23,
    name: "Colar de Safira Azul",
    category: "Colares",
    price: 2800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar com safira azul e diamantes",
    rating: 5,
    details: "Colar com safira azul natural e diamantes brilhantes.",
    material: "Ouro Branco 18K, Safira, Diamante",
    dimensions: "Comprimento 18 polegadas",
    weight: "3.5g",
  },
  24: {
    id: 24,
    name: "Colar de Ouro Branco Minimalista",
    category: "Colares",
    price: 950,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar minimalista em ouro branco",
    rating: 5,
    details: "Colar minimalista em ouro branco puro.",
    material: "Ouro Branco 18K",
    dimensions: "Comprimento 18 polegadas",
    weight: "2.1g",
  },
  25: {
    id: 25,
    name: "Colar de Esmeralda Vintage",
    category: "Colares",
    price: 3200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar vintage com esmeralda natural",
    rating: 5,
    details: "Colar vintage com esmeralda natural de primeira qualidade.",
    material: "Ouro Amarelo 18K, Esmeralda",
    dimensions: "Comprimento 18 polegadas",
    weight: "3.8g",
  },
  26: {
    id: 26,
    name: "Colar de Platina com Diamantes",
    category: "Colares",
    price: 4500,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar de platina com diamantes brilhantes",
    rating: 5,
    details: "Colar de platina pura com diamantes brilhantes.",
    material: "Platina, Diamante",
    dimensions: "Comprimento 18 polegadas",
    weight: "4.2g",
  },
  27: {
    id: 27,
    name: "Colar de Rubi Clássico",
    category: "Colares",
    price: 3500,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar elegante com rubi natural",
    rating: 5,
    details: "Colar elegante com rubi natural de alta qualidade.",
    material: "Ouro Amarelo 18K, Rubi",
    dimensions: "Comprimento 18 polegadas",
    weight: "3.6g",
  },
  28: {
    id: 28,
    name: "Colar de Cristal de Rocha",
    category: "Colares",
    price: 1100,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colar artesanal com cristal de rocha",
    rating: 5,
    details: "Colar artesanal com cristal de rocha natural.",
    material: "Ouro Amarelo 14K, Cristal",
    dimensions: "Comprimento 18 polegadas",
    weight: "2.3g",
  },

  // Pulseiras (3, 29-37)
  3: {
    id: 3,
    name: "Pulseira de Tênis com Diamantes",
    category: "Pulseiras",
    price: 2800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira luxuosa de tênis com diamantes em platina",
    rating: 5,
    details: "Uma pulseira de tênis clássica e elegante com diamantes redondos brilhantes definidos em platina.",
    material: "Platina, Diamantes",
    dimensions: "Comprimento 7 polegadas (ajustável)",
    weight: "8.2g",
  },
  29: {
    id: 29,
    name: "Pulseira de Ouro Amarelo Clássica",
    category: "Pulseiras",
    price: 1600,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira clássica de ouro amarelo",
    rating: 5,
    details: "Pulseira clássica de ouro amarelo com design atemporal.",
    material: "Ouro Amarelo 14K",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "6.3g",
  },
  30: {
    id: 30,
    name: "Pulseira de Platina com Safiras",
    category: "Pulseiras",
    price: 3500,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira de platina com safiras azuis",
    rating: 5,
    details: "Pulseira de platina com safiras azuis naturais.",
    material: "Platina, Safira",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "7.8g",
  },
  31: {
    id: 31,
    name: "Pulseira de Ouro Branco Minimalista",
    category: "Pulseiras",
    price: 1200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira minimalista em ouro branco",
    rating: 5,
    details: "Pulseira minimalista em ouro branco puro.",
    material: "Ouro Branco 18K",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "5.2g",
  },
  32: {
    id: 32,
    name: "Pulseira de Pérolas Naturais",
    category: "Pulseiras",
    price: 2200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira elegante com pérolas naturais",
    rating: 5,
    details: "Pulseira elegante com pérolas naturais de água doce.",
    material: "Ouro Amarelo 14K, Pérola",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "6.1g",
  },
  33: {
    id: 33,
    name: "Pulseira de Ouro Rosado com Diamantes",
    category: "Pulseiras",
    price: 2600,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira de ouro rosado com diamantes",
    rating: 5,
    details: "Pulseira de ouro rosado com diamantes brilhantes.",
    material: "Ouro Rosado 14K, Diamante",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "6.5g",
  },
  34: {
    id: 34,
    name: "Pulseira de Esmeralda Vintage",
    category: "Pulseiras",
    price: 3200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira vintage com esmeralda natural",
    rating: 5,
    details: "Pulseira vintage com esmeralda natural de primeira qualidade.",
    material: "Ouro Amarelo 18K, Esmeralda",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "7.1g",
  },
  35: {
    id: 35,
    name: "Pulseira de Rubi Clássica",
    category: "Pulseiras",
    price: 2900,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira elegante com rubi natural",
    rating: 5,
    details: "Pulseira elegante com rubi natural de alta qualidade.",
    material: "Ouro Amarelo 18K, Rubi",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "6.8g",
  },
  36: {
    id: 36,
    name: "Pulseira de Cristal de Rocha",
    category: "Pulseiras",
    price: 1400,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira artesanal com cristal de rocha",
    rating: 5,
    details: "Pulseira artesanal com cristal de rocha natural.",
    material: "Ouro Amarelo 14K, Cristal",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "5.8g",
  },
  37: {
    id: 37,
    name: "Pulseira de Ouro Branco Gravada",
    category: "Pulseiras",
    price: 1800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira de ouro branco com gravação",
    rating: 5,
    details: "Pulseira de ouro branco com gravação personalizada.",
    material: "Ouro Branco 14K",
    dimensions: "Comprimento 7.5 polegadas (ajustável)",
    weight: "5.9g",
  },

  // Brincos (4, 38-46)
  4: {
    id: 4,
    name: "Brincos de Pérola",
    category: "Brincos",
    price: 950,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos elegantes de pérola e diamante",
    rating: 5,
    details: "Brincos sofisticados que combinam pérolas de água doce com diamantes em ouro branco.",
    material: "Ouro Branco 14K, Pérola, Diamante",
    dimensions: "Comprimento 1.2 polegadas",
    weight: "1.5g",
  },
  38: {
    id: 38,
    name: "Brincos de Diamante Solitário",
    category: "Brincos",
    price: 1800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos com diamante solitário",
    rating: 5,
    details: "Brincos com diamante solitário de alta qualidade.",
    material: "Ouro Branco 18K, Diamante",
    dimensions: "Comprimento 1.0 polegada",
    weight: "1.8g",
  },
  39: {
    id: 39,
    name: "Brincos de Safira Azul",
    category: "Brincos",
    price: 1600,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos com safira azul natural",
    rating: 5,
    details: "Brincos com safira azul natural de primeira qualidade.",
    material: "Ouro Branco 18K, Safira",
    dimensions: "Comprimento 1.0 polegada",
    weight: "1.6g",
  },
  40: {
    id: 40,
    name: "Brincos de Ouro Amarelo Clássicos",
    category: "Brincos",
    price: 800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos clássicos em ouro amarelo",
    rating: 5,
    details: "Brincos clássicos em ouro amarelo com design atemporal.",
    material: "Ouro Amarelo 14K",
    dimensions: "Comprimento 0.8 polegada",
    weight: "1.2g",
  },
  41: {
    id: 41,
    name: "Brincos de Esmeralda",
    category: "Brincos",
    price: 1900,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos com esmeralda natural",
    rating: 5,
    details: "Brincos com esmeralda natural de alta qualidade.",
    material: "Ouro Amarelo 18K, Esmeralda",
    dimensions: "Comprimento 1.0 polegada",
    weight: "1.7g",
  },
  42: {
    id: 42,
    name: "Brincos de Rubi Clássicos",
    category: "Brincos",
    price: 1700,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos com rubi natural",
    rating: 5,
    details: "Brincos com rubi natural de primeira qualidade.",
    material: "Ouro Amarelo 18K, Rubi",
    dimensions: "Comprimento 1.0 polegada",
    weight: "1.65g",
  },
  43: {
    id: 43,
    name: "Brincos de Ouro Branco Minimalista",
    category: "Brincos",
    price: 700,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos minimalista em ouro branco",
    rating: 5,
    details: "Brincos minimalista em ouro branco puro.",
    material: "Ouro Branco 18K",
    dimensions: "Comprimento 0.8 polegada",
    weight: "1.1g",
  },
  44: {
    id: 44,
    name: "Brincos de Cristal de Rocha",
    category: "Brincos",
    price: 600,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos artesanais com cristal",
    rating: 5,
    details: "Brincos artesanais com cristal de rocha natural.",
    material: "Ouro Amarelo 14K, Cristal",
    dimensions: "Comprimento 0.8 polegada",
    weight: "0.9g",
  },
  45: {
    id: 45,
    name: "Brincos de Ouro Rosado com Pérola",
    category: "Brincos",
    price: 1100,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos de ouro rosado com pérola",
    rating: 5,
    details: "Brincos de ouro rosado com pérola natural.",
    material: "Ouro Rosado 14K, Pérola",
    dimensions: "Comprimento 0.9 polegada",
    weight: "1.3g",
  },
  46: {
    id: 46,
    name: "Brincos de Platina com Diamantes",
    category: "Brincos",
    price: 2200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/earrings-detail-n2ViHaSZUDcdKQLVNsoauC.webp",
    description: "Brincos de platina com diamantes",
    rating: 5,
    details: "Brincos de platina pura com diamantes brilhantes.",
    material: "Platina, Diamante",
    dimensions: "Comprimento 1.0 polegada",
    weight: "1.9g",
  },
};

export default function ProductDetail() {
  const [, setLocation] = useLocation();
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quantity, setQuantity] = useState(1);

  // Get product ID from URL
  const pathname = window.location.pathname;
  const productId = parseInt(pathname.split("/").pop() || "1");
  const product = products[productId];

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
          <Button onClick={() => setLocation("/")} className="bg-accent hover:bg-accent/90">
            Voltar para Home
          </Button>
        </div>
      </div>
    );
  }

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Voltar</span>
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`absolute top-4 right-4 p-3 rounded-full transition-all ${
                  wishlist.includes(product.id)
                    ? "bg-accent text-accent-foreground"
                    : "bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <Heart
                  size={24}
                  fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                />
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-accent text-sm tracking-widest uppercase mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">({product.rating} avaliações)</span>
              </div>

              <p className="text-2xl font-bold text-accent mb-4">
                R$ {product.price.toLocaleString("pt-BR")}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold mb-2">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">{product.details}</p>
            </div>

            {/* Specifications */}
            <div className="bg-secondary/30 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-bold mb-4">Especificações</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Material</p>
                  <p className="font-semibold">{product.material}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Dimensões</p>
                  <p className="font-semibold">{product.dimensions}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Peso</p>
                  <p className="font-semibold">{product.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Categoria</p>
                  <p className="font-semibold">{product.category}</p>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-semibold">Quantidade:</label>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Adicionar ao Carrinho
              </Button>

              <Button
                variant="outline"
                className="w-full border-border hover:bg-secondary py-6 text-lg"
              >
                Comprar Agora
              </Button>
            </div>

            {/* Shipping Info */}
            <div className="bg-accent/5 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                ✓ Envio grátis para pedidos acima de R$ 500<br/>
                ✓ Garantia de autenticidade<br/>
                ✓ Devolução gratuita em 30 dias
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20 border-t border-border pt-12">
          <h2 className="text-3xl font-bold mb-8">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(products)
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => setLocation(`/joia/${relatedProduct.id}`)}
                  className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden h-64 bg-secondary">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-accent font-bold">
                      R$ {relatedProduct.price.toLocaleString("pt-BR")}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
