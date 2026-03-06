import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar. Envie-nos uma mensagem e responderemos
            o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">contato@luxejoias.com.br</p>
                  <p className="text-muted-foreground">vendas@luxejoias.com.br</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(11) 3456-7890</p>
                  <p className="text-muted-foreground">(11) 98765-4321</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua das Joias, 123<br />
                    São Paulo, SP 01234-567<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 09:00 - 18:00<br />
                    Sábado: 10:00 - 16:00<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-accent" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-muted-foreground">
                    Obrigado por entrar em contato. Responderemos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="(11) 98765-4321"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Assunto
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="vendas">Dúvida sobre Produtos</option>
                        <option value="pedido">Acompanhamento de Pedido</option>
                        <option value="devolucao">Devoluções e Trocas</option>
                        <option value="personalizado">Peça Personalizada</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Digite sua mensagem aqui..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base font-semibold"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-secondary/30 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Qual é o prazo de entrega?",
                answer:
                  "Oferecemos entrega em 5-7 dias úteis para pedidos dentro de São Paulo e 10-15 dias para o resto do Brasil.",
              },
              {
                question: "Vocês oferecem garantia?",
                answer:
                  "Sim, todas as nossas joias têm garantia vitalícia contra defeitos de fabricação.",
              },
              {
                question: "É possível fazer uma peça personalizada?",
                answer:
                  "Absolutamente! Oferecemos serviço de design personalizado. Entre em contato para mais detalhes.",
              },
              {
                question: "Qual é a política de devolução?",
                answer:
                  "Aceitamos devoluções em até 30 dias após a compra, sem perguntas.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
