# Portfólio de Erick Sousa Oliveira

Portfólio de desenvolvimento back-end em Next.js, React e TypeScript, com identidade visual em vermelho, preto e branco.

## Executar

```bash
npm ci
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm start
```

## Organização

- `src/app/page.tsx`: seções e conteúdo do portfólio.
- `src/app/globals.css`: paleta, componentes e layouts responsivos.
- `src/lib/portfolio.js`: demonstração da API e animações, com cleanup para React.
- `public/icon.svg`: ícone do site.

A demonstração da API usa dados locais ilustrativos e não chama um servidor real.
As fontes são carregadas via Google Fonts no CSS.

Os componentes da versão anterior continuam em `src/components/` como referência; a página atual está em `src/app/page.tsx`.
