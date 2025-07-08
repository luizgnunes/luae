# Luaé Tarot - Site Profissional

Site profissional de tarot da Luaé, desenvolvido com foco em performance, SEO e experiência do usuário.

## 🚀 Características

- **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- **Performance Otimizada** - Imagens comprimidas, CSS/JS minificados
- **SEO Otimizado** - Meta tags, sitemap, robots.txt
- **Cache Inteligente** - Service Worker para cache offline
- **Acessibilidade** - Navegação por teclado, contraste adequado
- **Estrutura Modular** - Código organizado e fácil de manter

## 📁 Estrutura do Projeto

```
site_tarot/
├── 📁 src/                          # Código fonte
│   ├── 📁 assets/                   # Recursos estáticos
│   │   ├── 📁 css/                  # Estilos modulares
│   │   ├── 📁 js/                   # JavaScript modulares
│   │   └── 📁 images/               # Imagens
│   ├── 📁 pages/                    # Páginas adicionais
│   └── index.html                   # Página principal
├── 📁 dist/                         # Arquivos de produção
├── 📁 scripts/                      # Scripts de build
├── 📁 docs/                         # Documentação
└── 📄 package.json                  # Configurações do projeto
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Limpar arquivos de build
npm run clean
```

### Build
```bash
# Build básico (concatenar arquivos)
npm run build

# Build com minificação
npm run build:minify

# Build completo (otimizar imagens + concatenar + minificar)
npm run build:full

# Deploy (mesmo que build:full)
npm run deploy
```

### Otimização
```bash
# Otimizar imagens
npm run optimize-images

# Minificar arquivos
npm run minify
```

## 🎯 Como Usar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Desenvolvimento
```bash
# Iniciar servidor local
npm run dev

# Acessar: http://localhost:3000
```

### 3. Build para Produção
```bash
# Build completo
npm run build:full

# Os arquivos otimizados estarão em ./dist/
```

### 4. Deploy
```bash
# Fazer deploy (build completo)
npm run deploy

# Fazer upload da pasta ./dist/ para o servidor
```

## 📊 Otimizações Implementadas

### Performance
- ✅ **Imagens comprimidas** (62.8% de redução)
- ✅ **CSS/JS minificados**
- ✅ **Lazy loading** de imagens
- ✅ **Preload** de recursos críticos
- ✅ **Cache inteligente** (Service Worker)

### SEO
- ✅ **Meta tags** otimizadas
- ✅ **Sitemap.xml**
- ✅ **Robots.txt**
- ✅ **Estrutura semântica**
- ✅ **Open Graph** tags

### Acessibilidade
- ✅ **Navegação por teclado**
- ✅ **Contraste adequado**
- ✅ **Alt text** em imagens
- ✅ **ARIA labels**

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modulares e responsivos
- **JavaScript ES6+** - Funcionalidades interativas
- **Node.js** - Scripts de build
- **Sharp** - Otimização de imagens

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large screens** (1200px+)

## 🚀 Hospedagem Recomendada

### Gratuita
- **Netlify** - Hospedagem gratuita para sites estáticos
- **Vercel** - Deploy automático
- **GitHub Pages** - Totalmente gratuito

### Paga (Baixo Custo)
- **Hostinger** - R$ 8-15/mês
- **GoDaddy** - R$ 10-20/mês
- **Locaweb** - R$ 15-25/mês

## 📈 Monitoramento

### Google Analytics
Adicione o código do Google Analytics no `<head>` do HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. Adicione o site ao Google Search Console
2. Verifique a propriedade via HTML tag
3. Envie o sitemap.xml

## 🔄 Manutenção

### Atualizar Conteúdo
1. Edite os arquivos em `src/`
2. Execute `npm run build:full`
3. Faça upload da pasta `dist/`

### Adicionar Novas Funcionalidades
1. Crie módulos em `src/assets/js/`
2. Adicione estilos em `src/assets/css/`
3. Atualize o build script se necessário
4. Teste com `npm run dev`

## 📞 Suporte

Para dúvidas ou suporte:
- 📧 Email: [seu-email@exemplo.com]
- 📱 WhatsApp: [seu-número]
- 🌐 Site: [seu-site.com]

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 🚨 AVISO IMPORTANTE SOBRE O FLUXO DE DESENVOLVIMENTO E DEPLOY

- **Sempre faça suas alterações nos arquivos dentro da pasta `src/`** (HTML, CSS, JS, imagens, etc).
- **NUNCA edite manualmente os arquivos da raiz do projeto** (ex: `index.html`, `script.min.js`, `styles.min.css`).
- **Após editar, rode `npm run build`** para gerar/atualizar os arquivos finais na raiz.
- **O Hostinger serve os arquivos da raiz** — é isso que vai para produção.
- **A pasta `dist/` foi removida** e não deve ser usada. Ignore qualquer instrução antiga que mencione `dist`.

**Resumo do fluxo:**
1. Edite em `src/`
2. Rode `npm run build`
3. Faça o deploy dos arquivos da raiz

---

**Desenvolvido com ❤️ para Luaé Tarot** 