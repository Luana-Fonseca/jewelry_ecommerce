import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronLeft, Award, Users, Heart, Globe } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre a Luxe Joias</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 25 anos criando joias que transcendem o tempo, combinando
            tradição artesanal com design contemporâneo.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16 bg-secondary/30 p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              A Luxe Joias foi fundada em 1999 por um grupo de mestres joalheiros
              apaixonados por criar peças únicas que celebram os momentos mais
              importantes da vida. O que começou como um pequeno atelier em São Paulo
              se transformou em uma referência internacional de elegância e sofisticação.
            </p>
            <p>
              Cada joia que criamos é mais do que um acessório – é uma obra de arte
              que carrega histórias, emoções e a dedicação de artesãos experientes.
              Utilizamos apenas materiais de primeira qualidade: ouro 18K, platina,
              diamantes certificados e pedras preciosas naturais.
            </p>
            <p>
              Nossa missão é criar joias que se tornem herdadas de geração em geração,
              peças que ganham valor e significado com o tempo. Acreditamos que a
              verdadeira luxo está na qualidade, na durabilidade e na beleza atemporal.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Qualidade Excepcional",
                description:
                  "Cada peça passa por rigorosos controles de qualidade para garantir perfeição.",
              },
              {
                icon: Heart,
                title: "Paixão pela Criação",
                description:
                  "Nossos artesãos dedicam-se com amor a cada detalhe de suas criações.",
              },
              {
                icon: Users,
                title: "Atendimento Personalizado",
                description:
                  "Oferecemos consultoria especializada para encontrar a joia perfeita.",
              },
              {
                icon: Globe,
                title: "Sustentabilidade",
                description:
                  "Comprometidos com práticas éticas e responsáveis em toda a cadeia.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16 bg-secondary/30 p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-8">Nosso Time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendes",
                role: "Fundador & Mestre Joalheiro",
                bio: "Com 35 anos de experiência, Carlos lidera a visão criativa da Luxe Joias.",
              },
              {
                name: "Marina Silva",
                role: "Diretora de Design",
                bio: "Marina traz inovação e modernidade aos designs clássicos da marca.",
              },
              {
                name: "Roberto Santos",
                role: "Especialista em Gemas",
                bio: "Roberto garante a seleção das melhores pedras preciosas do mundo.",
              },
            ].map((member, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <Users size={48} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-accent font-semibold">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Certificações & Prêmios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Certificado GIA (Gemological Institute of America)",
              "Membro da Associação Brasileira de Joalheiros",
              "Prêmio de Melhor Joalheria - 2022",
              "Certificação de Comércio Justo",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg text-center border border-border hover:border-accent transition-colors"
              >
                <Award className="text-accent mx-auto mb-3" size={32} />
                <p className="font-semibold text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent/5 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Encontrar Sua Joia?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore nossa coleção completa e descubra a peça perfeita que celebra
            seus momentos especiais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setLocation("/colecoes")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
            >
              Ver Coleções
            </Button>
            <Button
              onClick={() => setLocation("/contato")}
              variant="outline"
              className="border-border hover:bg-secondary px-8 py-6"
            >
              Entrar em Contato
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
