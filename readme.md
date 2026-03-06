# 🎉 Luxe Joias - E-commerce de Joias Luxuosas

Um site completo de e-commerce de joias desenvolvido com React 19, TypeScript, Tailwind CSS, Express e tRPC.

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- MySQL 8.0+ ([Download](https://dev.mysql.com/downloads/mysql/))

### Instalação em Windows

1. **Extraia o arquivo ZIP**

```powershell
# Navegue até a pasta
cd C:\caminho\para\jewelry_ecommerce
```

2. **Instale as dependências**

```powershell
pnpm install
```

3. **Configure o banco de dados**

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mysql://root:sua_senha@localhost:3306/jewelry_ecommerce"
JWT_SECRET="sua_chave_secreta_minimo_32_caracteres"
VITE_APP_ID="seu_app_id"
OAUTH_SERVER_URL="https://api.manus.im"
VITE_OAUTH_PORTAL_URL="https://auth.manus.im"
OWNER_OPEN_ID="seu_open_id"
OWNER_NAME="Seu Nome"
BUILT_IN_FORGE_API_URL="https://api.manus.im"
BUILT_IN_FORGE_API_KEY="sua_api_key"
VITE_FRONTEND_FORGE_API_KEY="sua_frontend_api_key"
VITE_FRONTEND_FORGE_API_URL="https://api.manus.im"
VITE_APP_TITLE="Luxe Joias"
VITE_APP_LOGO="https://seu-logo-url.com/logo.png"
VITE_ANALYTICS_ENDPOINT="https://analytics.manus.im"
VITE_ANALYTICS_WEBSITE_ID="seu_website_id"
```

4. **Crie o banco de dados**

```powershell
mysql -u root -p
```

Dentro do MySQL:

```sql
CREATE DATABASE jewelry_ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

5. **Execute as migrações**

```powershell
pnpm db:push
```

6. **Inicie o servidor**

```powershell
pnpm dev
```

Abra seu navegador em: `http://localhost:3000`

## 📁 Estrutura do Projeto

```
jewelry_ecommerce/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx           # Página inicial
│   │   │   ├── Collections.tsx    # Coleções (40 produtos)
│   │   │   ├── ProductDetail.tsx  # Detalhes do produto
│   │   │   ├── Profile.tsx        # Perfil do usuário
│   │   │   ├── About.tsx          # Sobre nós
│   │   │   └── Contact.tsx        # Contato
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── _core/         # Hooks e utilitários
│   │   └── App.tsx        # Roteamento
│   └── index.html
├── server/                # Backend Express + tRPC
│   ├── routers.ts         # Procedimentos tRPC
│   ├── db.ts              # Funções do banco de dados
│   └── _core/             # Configuração
├── drizzle/               # Schema do banco de dados
│   └── schema.ts          # Definição das tabelas
├── shared/                # Código compartilhado
├── package.json
└── INSTALACAO_WINDOWS.md  # Guia detalhado
```

## ✨ Funcionalidades

- ✅ **40 Produtos** - Distribuídos em 4 coleções (Anéis, Colares, Pulseiras, Brincos)
- ✅ **Página de Detalhes** - Informações completas com especificações
- ✅ **Carrinho de Compras** - Adicionar/remover produtos
- ✅ **Lista de Desejos** - Salvar produtos favoritos
- ✅ **Perfil do Usuário** - Gerenciar informações e pedidos
- ✅ **Páginas Informativas** - Sobre, Contato, Coleções
- ✅ **Banco de Dados** - Persistência com MySQL
- ✅ **Design Responsivo** - Funciona em desktop, tablet e mobile
- ✅ **Design Luxury Minimalism** - Elegância sofisticada

## 🎨 Design

O site utiliza um design **Modern Luxury Minimalism** com:

- Paleta de cores: Ouro, neutros (branco, bege, preto)
- Tipografia: Playfair Display (títulos) e Lato (corpo)
- Muito espaço negativo para destaque dos produtos
- Transições e hover effects elegantes

## 📱 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| Home | `/` | Página inicial com hero section e produtos destaque |
| Coleções | `/colecoes` | 40 produtos em 4 categorias com filtros |
| Detalhes | `/joia/:id` | Informações completas de cada joia |
| Perfil | `/perfil` | Informações do usuário e pedidos |
| Sobre | `/sobre` | História, valores e certificações |
| Contato | `/contato` | Formulário e informações de atendimento |

## 🛠️ Comandos Disponíveis

```powershell
# Desenvolvimento
pnpm dev              # Iniciar servidor de desenvolvimento
pnpm check            # Verificar erros de TypeScript
pnpm format           # Formatar código
pnpm test             # Executar testes

# Banco de Dados
pnpm db:push          # Fazer push das migrações
pnpm db:generate      # Gerar novas migrações

# Produção
pnpm build            # Fazer build para produção
pnpm start            # Iniciar servidor de produção
```

## 🔧 Configuração Avançada

### Usar Banco de Dados em Nuvem

Se preferir não instalar MySQL localmente, use:

- **PlanetScale** (MySQL compatível): https://planetscale.com
- **AWS RDS**: https://aws.amazon.com/rds/
- **DigitalOcean**: https://www.digitalocean.com/products/managed-databases/

Atualize a variável `DATABASE_URL` no `.env` com a string de conexão fornecida.

### Integrar com Stripe (Futuro)

```powershell
pnpm add stripe @stripe/react-stripe-js
```

### Deploy para Produção

O projeto pode ser deployado em:

- Vercel
- Netlify
- Railway
- Render
- AWS
- DigitalOcean

## 🐛 Solução de Problemas

### Erro: "Porta 3000 já está em uso"

```powershell
$env:PORT=3001; pnpm dev
```

### Erro: "Não consegue conectar ao banco de dados"

1. Verifique se MySQL está rodando
2. Confirme as credenciais no `.env`
3. Verifique se o banco de dados foi criado

### Erro: "pnpm: comando não encontrado"

```powershell
npm install -g pnpm
```

## 📚 Documentação

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com
- **Express**: https://expressjs.com
- **tRPC**: https://trpc.io
- **Drizzle ORM**: https://orm.drizzle.team

