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
            {activeTab === "info" && (
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Informações Pessoais</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Nome */}
                    <div>
                      <label
                        htmlFor="nome"
                        className="text-sm font-semibold text-muted-foreground mb-2 block"
                      >
                        Nome Completo
                      </label>

                      <input
                        id="nome"
                        type="text"
                        value={user.name || ""}
                        readOnly
                        aria-label="Nome completo"
                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-border"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-muted-foreground mb-2 block"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        type="email"
                        value={user.email || ""}
                        readOnly
                        aria-label="Email do usuário"
                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-border"
                      />
                    </div>

                  </div>

                  {/* Data */}
                  <div>
                    <label
                      htmlFor="dataCadastro"
                      className="text-sm font-semibold text-muted-foreground mb-2 block"
                    >
                      Data de Cadastro
                    </label>

                    <input
                      id="dataCadastro"
                      type="text"
                      aria-label="Data de cadastro"
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
          </div>
        </div>
      </div>
    </div>
  );
}
