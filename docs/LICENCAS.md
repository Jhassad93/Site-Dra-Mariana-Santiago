# Licenças de terceiros — Dra. Helena Duarte

Preenchido durante o projeto com cada componente de terceiros efetivamente usado. Este arquivo alimenta o Anexo III do contrato.

| Componente ou recurso | Origem | Licença | Observação |
| --- | --- | --- | --- |
| Next.js | nextjs.org | MIT | — |
| Tailwind CSS | tailwindcss.com | MIT | — |
| shadcn/ui (configuração e utilitário `cn`) | ui.shadcn.com | MIT | Nenhum componente copiado; todos os componentes do site são próprios |
| class-variance-authority, clsx, tailwind-merge | npm | Apache-2.0 / MIT / MIT | Variantes dos botões |
| Fonte Host Grotesk | @fontsource/host-grotesk (Google Fonts) | SIL Open Font License 1.1 | Servida pelo próprio site |
| Fonte Libre Caslon Text | @fontsource/libre-caslon-text (Google Fonts) | SIL Open Font License 1.1 | Servida pelo próprio site |
| @next/third-parties (carregador do Google Analytics) | npm (Vercel) | MIT | Só carrega depois do aceite no banner |
| playwright-core, pngjs, sharp, lighthouse (só ferramentas de build e verificação, fora do site publicado) | npm | Apache-2.0 / MIT / Apache-2.0 / Apache-2.0 | sharp comprime as imagens e vídeos; ffmpeg do sistema (LGPL) usado pelo script de mídia |
| Imagem de compartilhamento (`public/og.png`) e ícones (`app/icon.png`, `apple-icon.png`, `favicon.ico`) | Gerados no projeto (`npm run og`) a partir da imagem do hero (Runway) e das fontes acima | Mesma licença da imagem do hero e das fontes | Texto e monograma próprios |
| Ícones (seta, menu, fechar, +/−) | Desenhados no projeto (SVG) | — | Sem pacote de ícones |
| Imagens do hero, do painel de planejamento e dos 3 cards (5 arquivos) | Geradas por IA pelo responsável no **Runway** (pasta `Imagens/Runway`, 22/10/2026), com os prompts do DESIGN.md. Substituíram a primeira versão (pasta `Imagens/Adapta`) | Termos de uso do Runway; plano com uso comercial (confirmado pelo responsável em 22/10/2026) | Só ambiente e matéria, sem pessoas, texto ou marca (R4, R6, R9, R11 🟡: imagem de IA de ambiente) |
| Foto da Dra. (seção de fechamento) | Pendente: o post de apresentação do Instagram tem textos sobrepostos ("Dermatologia estética", "melhor versão") vedados pelo harness (R2, R4) | Uso exclusivo na prévia privada apresentada à retratada | Usar foto sem texto; substituir por sessão profissional antes de publicar |
| Vídeo 1 (hero) | Gerado por IA pelo responsável no **Runway** (22/10/2026), prompt do DESIGN.md; montado em ida e volta para o loop | Termos de uso do Runway; uso comercial confirmado | Sem pessoas, texto ou marca (R11 🟡: ambiente) |
| Vídeo 2 (planejamento) | Gerado por IA pelo responsável no **Runway** (22/10/2026), prompt do DESIGN.md; 1920 × 1080, montado em ida e volta | Termos de uso do Runway; uso comercial confirmado | Sem pessoas, texto ou marca (R11 🟡: ambiente) |
| Vídeo 3 (fechamento: mãos escrevendo) | Gerado por IA pelo responsável no **Runway** (22/10/2026), prompt do DESIGN.md; loop por fusão de 1 s | Termos de uso do Runway; uso comercial confirmado | Só mãos, sem rosto, texto legível ou marca (R11 🟡). Ocupa o lugar da foto da Dra. no fechamento e na Sobre até haver foto real |
