# Como rodar e fazer deploy do portfólio

## 1. Salvar a foto
Salve sua foto como: `src/assets/mariana.jpg`

## 2. Instalar dependências
Abra o terminal nesta pasta e rode:
```
npm install
```

## 3. Rodar localmente
```
npm run dev
```
Abre http://localhost:5173 no navegador.

## 4. Configurar o formulário de contato (Formspree)
1. Acesse https://formspree.io e crie uma conta gratuita
2. Crie um novo form
3. Copie o ID (ex: `xpwzagjb`)
4. Abra `src/components/Contact.tsx`
5. Substitua `SEU_ID_AQUI` pelo seu ID

## 5. Deploy no Vercel
1. Suba a pasta no GitHub (novo repo: `portfolio`)
2. Acesse https://vercel.com → "New Project"
3. Importe o repo do GitHub
4. Clique em Deploy — zero configuração necessária

## 6. Apontar o domínio marianapontes.info
No painel do Vercel, vá em Settings → Domains → adicione `marianapontes.info`
Siga as instruções para atualizar o DNS no seu registrador de domínio.
