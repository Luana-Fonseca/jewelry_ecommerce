import { useState } from "react";
import { ShoppingCart, Heart, Search, Menu, X, ChevronRight, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
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

const products: Product[] = [
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
    id: 2,
    name: "Coleção de Colares em Ouro",
    category: "Colares",
    price: 1200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/necklace-collection-8YCL5gCZykXqS8BPwhcoSY.webp",
    description: "Colares elegantes em ouro e prata para qualquer ocasião",
    rating: 5,
  },
  {
    id: 3,
    name: "Pulseira de Tênis com Diamantes",
    category: "Pulseiras",
    price: 2800,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira luxuosa de tênis com diamantes em platina",
    rating: 5,
  },
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
    id: 5,
    name: "Anel de Safira",
    category: "Anéis",
    price: 3200,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp",
    description: "Anel exquisito de safira com ouro branco",
    rating: 5,
  },
  {
    id: 6,
    name: "Pulseira de Ouro",
    category: "Pulseiras",
    price: 1600,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/bracelet-showcase-H7HRyXa3Vik9HErXLti4ux.webp",
    description: "Pulseira clássica de ouro com design atemporal",
    rating: 5,
  },
];

export default function Home() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const handleLogout = async () => {
    await logout();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => setLocation("/")}>
              <h1 className="text-2xl font-bold text-accent">LUXE</h1>
              <span className="text-xs tracking-widest text-muted-foreground ml-2">
                JOIAS
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setLocation("/colecoes")}
                className="text-sm hover:text-accent transition-colors"
              >
                Coleções
              </button>
              <button
                onClick={() => setLocation("/sobre")}
                className="text-sm hover:text-accent transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => setLocation("/contato")}
                className="text-sm hover:text-accent transition-colors"
              >
                Contato
              </button>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <Search size={20} />
              </button>
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              
              {user ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLocation("/perfil")}
                    className="px-3 py-2 text-sm hover:bg-secondary rounded-lg transition-colors"
                  >
                    {user.name || "Perfil"}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    title="Sair"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Button
                  onClick={() => (window.location.href = getLoginUrl())}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Entrar
                </Button>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <button
                onClick={() => setLocation("/colecoes")}
                className="block w-full text-left py-2 text-sm hover:text-accent transition-colors"
              >
                Coleções
              </button>
              <button
                onClick={() => setLocation("/sobre")}
                className="block w-full text-left py-2 text-sm hover:text-accent transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => setLocation("/contato")}
                className="block w-full text-left py-2 text-sm hover:text-accent transition-colors"
              >
                Contato
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-accent text-sm tracking-widest uppercase mb-4">
                  Elegância Atemporal
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  Joias Luxuosas para Cada Momento
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Descubra nossa exquisita coleção de joias artesanais, cada peça
                  projetada para capturar a essência da beleza e sofisticação atemporais.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base">
                  Comprar Agora
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 text-base border-border hover:bg-secondary"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663397842081/SF2HWimCqAogVno944CGmJ/hero-jewelry-banner-289iPCEjcu8hMNBZvzeUrp.webp"
                alt="Joias Luxuosas"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-secondary/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-widest uppercase mb-4">
              Nossas Coleções
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Coleções Selecionadas
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada peça em nossa coleção é cuidadosamente selecionada e confeccionada
              para representar o pico do design de joias de luxo.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Image */}
                <div 
                  className="relative overflow-hidden h-80 bg-secondary cursor-pointer"
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
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                      wishlist.includes(product.id)
                        ? "bg-accent text-accent-foreground"
                        : "bg-background/80 text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Heart
                      size={20}
                      fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div 
                    className="cursor-pointer"
                    onClick={() => setLocation(`/joia/${product.id}`)}
                  >
                    <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-accent">
                      R$ {product.price.toLocaleString("pt-BR")}
                    </p>
                    <div className="flex gap-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={() => addToCart(product)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Por Que Nos Escolher</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos comprometemos a fornecer joias de qualidade superior com
              excepcional atendimento ao cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Qualidade Autêntica",
                description:
                  "Cada peça é certificada e confeccionada com materiais premium",
              },
              {
                title: "Artesanato Expert",
                description:
                  "Confeccionadas à mão por mestres joalheiros com décadas de experiência",
              },
              {
                title: "Garantia Vitalícia",
                description:
                  "Garantimos nossos produtos com uma garantia abrangente",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <ChevronRight className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-accent/5 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fique Atualizado com Novas Coleções
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscreva-se em nossa newsletter e receba ofertas exclusivas e atualizações
            sobre nossas mais recentes coleções de joias.
          </p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Digite seu email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Inscrever
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">LUXE JOIAS</h3>
              <p className="text-sm text-muted-foreground">
                Confeccionando elegância atemporal há mais de duas décadas.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Coleções</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => setLocation("/colecoes")}
                    className="hover:text-accent transition-colors"
                  >
                    Anéis
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation("/colecoes")}
                    className="hover:text-accent transition-colors"
                  >
                    Colares
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation("/colecoes")}
                    className="hover:text-accent transition-colors"
                  >
                    Pulseiras
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation("/colecoes")}
                    className="hover:text-accent transition-colors"
                  >
                    Brincos
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => setLocation("/sobre")}
                    className="hover:text-accent transition-colors"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setLocation("/contato")}
                    className="hover:text-accent transition-colors"
                  >
                    Contato
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Envio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Devoluções
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Luxe Joias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setCartOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-background shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-border">
              <h2 className="text-2xl font-bold">Carrinho de Compras</h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Seu carrinho está vazio
                </p>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 pb-4 border-b border-border"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">{item.name}</h3>
                      <p className="text-accent font-bold">
                        R$ {item.price.toLocaleString("pt-BR")}
                      </p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-xs text-destructive hover:underline mt-2"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-accent">
                    R$ {cartTotal.toLocaleString("pt-BR")}
                  </span>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6">
                  Ir para Checkout
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
