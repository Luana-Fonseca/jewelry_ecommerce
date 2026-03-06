# 🎉 Guia de Instalação - E-commerce de Joias Luxe

## Requisitos do Sistema

Antes de começar, certifique-se de ter instalado:

- **Node.js 18+** - [Download aqui](https://nodejs.org/)
- **Git** - [Download aqui](https://git-scm.com/)
- **pnpm** - Gerenciador de pacotes (será instalado automaticamente com Node.js 16+)

## Passo 1: Preparar o Ambiente

### 1.1 Instalar pnpm (se necessário)

Abra o PowerShell como Administrador e execute:

```powershell
npm install -g pnpm
```

Verifique a instalação:

```powershell
pnpm --version
```

### 1.2 Extrair o Arquivo

1. Extraia o arquivo `jewelry_ecommerce_source.zip` em um local de sua preferência
2. Abra o PowerShell ou CMD
3. Navegue até a pasta extraída:

```powershell
cd C:\caminho\para\jewelry_ecommerce
```

## Passo 2: Instalar Dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

```powershell
pnpm install
```

Isso pode levar alguns minutos na primeira vez.

## Passo 3: Configurar o Banco de Dados

O projeto usa MySQL. Você tem duas opções:

### Opção A: Usar um Banco de Dados Local (Recomendado para Desenvolvimento)

1. Instale o MySQL Community Server: [Download aqui](https://dev.mysql.com/downloads/mysql/)

2. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/jewelry_ecommerce"
JWT_SECRET="sua_chave_secreta_aqui_minimo_32_caracteres"
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

3. Crie o banco de dados:

```powershell
mysql -u root -p
```

Dentro do MySQL:

```sql
CREATE DATABASE jewelry_ecommerce CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

4. Execute as migrações:

```powershell
pnpm db:push
```

### Opção B: Usar um Serviço em Nuvem

Se preferir não instalar MySQL localmente, use serviços como:

- **PlanetScale** (MySQL compatível): [https://planetscale.com](https://planetscale.com)
- **AWS RDS**: [https://aws.amazon.com/rds/](https://aws.amazon.com/rds/)
- **DigitalOcean Managed Databases**: [https://www.digitalocean.com/products/managed-databases/](https://www.digitalocean.com/products/managed-databases/)

Após criar o banco de dados em nuvem, atualize a variável `DATABASE_URL` no arquivo `.env`.

## Passo 4: Iniciar o Servidor de Desenvolvimento

Execute o comando para iniciar o servidor:

```powershell
pnpm dev
```

O servidor iniciará em `http://localhost:3000`

## Passo 5: Acessar o Site

Abra seu navegador e acesse:

```
http://localhost:3000
```

## Comandos Úteis

### Desenvolvimento

```powershell
# Iniciar servidor de desenvolvimento
pnpm dev

# Verificar erros de TypeScript
pnpm check

# Formatar código
pnpm format

# Executar testes
pnpm test
```

### Banco de Dados

```powershell
# Fazer push das migrações
pnpm db:push

# Gerar migrações
pnpm db:generate
```

### Build para Produção

```powershell
# Fazer build
pnpm build

# Iniciar servidor de produção
pnpm start
```

## Estrutura do Projeto

```
jewelry_ecommerce/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/         # Páginas (Home, Collections, About, Contact, etc)
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── _core/         # Hooks e utilitários
│   │   └── App.tsx        # Roteamento principal
│   └── index.html
├── server/                # Backend Express + tRPC
│   ├── routers.ts         # Procedimentos tRPC
│   ├── db.ts              # Funções do banco de dados
│   └── _core/             # Configuração do servidor
├── drizzle/               # Schema do banco de dados
│   └── schema.ts          # Definição das tabelas
├── shared/                # Código compartilhado
└── package.json
```

## Funcionalidades Implementadas

✅ **Autenticação** - Login com OAuth Manus
✅ **Catálogo de Produtos** - 40 produtos em 4 coleções
✅ **Página de Detalhes** - Informações completas de cada joia
✅ **Carrinho de Compras** - Adicionar/remover produtos
✅ **Lista de Desejos** - Salvar produtos favoritos
✅ **Perfil do Usuário** - Informações pessoais e pedidos
✅ **Página Sobre** - Histórico e valores da marca
✅ **Página de Contato** - Formulário e informações
✅ **Banco de Dados** - Persistência de dados

## Próximas Melhorias

- [ ] Integração com Stripe para pagamento
- [ ] Filtros avançados de produtos
- [ ] Sistema de avaliações
- [ ] Admin panel
- [ ] Notificações por email

## Solução de Problemas

### Erro: "pnpm: comando não encontrado"

Instale pnpm globalmente:

```powershell
npm install -g pnpm
```

### Erro: "DATABASE_URL não configurado"

Certifique-se de que o arquivo `.env` existe na raiz do projeto com a variável `DATABASE_URL` configurada.

### Erro: "Porta 3000 já está em uso"

A porta 3000 já está sendo usada por outro programa. Você pode:

1. Fechar o programa que está usando a porta
2. Ou usar uma porta diferente:

```powershell
$env:PORT=3001; pnpm dev
```

### Erro ao conectar ao banco de dados

Verifique se:

1. O MySQL está rodando
2. As credenciais no `.env` estão corretas
3. O banco de dados foi criado

## Suporte

Para dúvidas ou problemas, consulte a documentação:

- **React**: [https://react.dev](https://react.dev)
- **Express**: [https://expressjs.com](https://expressjs.com)
- **tRPC**: [https://trpc.io](https://trpc.io)
- **Drizzle ORM**: [https://orm.drizzle.team](https://orm.drizzle.team)

## Licença

Este projeto é fornecido como está para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ para Luxe Joias**
