import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { LogOut, User, ShoppingBag, Heart, Settings } from "lucide-react";
import { useState } from "react";

export default function Profile() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("info");

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Você precisa estar conectado</h1>
          <Button
            onClick={() => (window.location.href = "/api/oauth/login")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Fazer Login
          </Button>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await logout();
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-accent cursor-pointer" onClick={() => setLocation("/")}>
            LUXE
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-lg sticky top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                  <User size={32} className="text-accent" />
                </div>
                <div>
                  <p className="font-bold text-lg">{user.name || "Usuário"}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("info")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                    activeTab === "info"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  <User size={18} />
                  <span>Informações Pessoais</span>
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                    activeTab === "orders"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  <ShoppingBag size={18} />
                  <span>Meus Pedidos</span>
                </button>
                <button
                  onClick={() => setActiveTab("wishlist")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                    activeTab === "wishlist"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  <Heart size={18} />
                  <span>Minha Lista de Desejos</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                    activeTab === "settings"
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  <Settings size={18} />
                  <span>Configurações</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {/* Informações Pessoais */}
            {activeTab === "info" && (
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Informações Pessoais</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        value={user.name || ""}
                        readOnly
                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        value={user.email || ""}
                        readOnly
                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                      Data de Cadastro
                    </label>
                    <input
                      type="text"
                      value={new Date(user.createdAt).toLocaleDateString("pt-BR")}
                      readOnly
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border"
                    />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Para alterar suas informações, entre em contato com nosso suporte.
                    </p>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Contatar Suporte
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Meus Pedidos */}
            {activeTab === "orders" && (
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Meus Pedidos</h2>
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6">
                    Você ainda não realizou nenhum pedido.
                  </p>
                  <Button
                    onClick={() => setLocation("/")}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Começar a Comprar
                  </Button>
                </div>
              </div>
            )}

            {/* Minha Lista de Desejos */}
            {activeTab === "wishlist" && (
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Minha Lista de Desejos</h2>
                <div className="text-center py-12">
                  <Heart size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-6">
                    Sua lista de desejos está vazia.
                  </p>
                  <Button
                    onClick={() => setLocation("/")}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Explorar Coleções
                  </Button>
                </div>
              </div>
            )}

            {/* Configurações */}
            {activeTab === "settings" && (
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Configurações</h2>
                <div className="space-y-6">
                  <div className="border-b border-border pb-6">
                    <h3 className="text-xl font-bold mb-4">Notificações</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span>Receber emails sobre novas coleções</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" defaultChecked className="w-4 h-4" />
                        <span>Receber ofertas e promoções exclusivas</span>
                      </label>
                      <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Receber notificações de pedidos</span>
                      </label>
                    </div>
                  </div>

                  <div className="border-b border-border pb-6">
                    <h3 className="text-xl font-bold mb-4">Privacidade</h3>
                    <p className="text-muted-foreground mb-4">
                      Suas informações pessoais são protegidas e nunca serão compartilhadas
                      com terceiros sem seu consentimento.
                    </p>
                    <Button variant="outline" className="border-border hover:bg-secondary">
                      Ler Política de Privacidade
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Conta</h3>
                    <Button
                      onClick={handleLogout}
                      className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                    >
                      Sair da Conta
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
