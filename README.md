# Verbum Reformata API

API open-source para estudo bíblico profundo com foco em textos originais (grego/hebraico), tradição reformada, e léxicos como Strong, MorphGNT e Tanach.

## 🛠️ Tecnologias

- Node.js + Express
- TypeScript
- TypeORM + PostgreSQL
- Tsyringe (Injeção de Dependência)
- Class-validator
- Estrutura baseada em DDD
- yarn

## 📁 Módulos Atuais

- Lexicon (Strong)
- Interlinear (em planejamento)

## 📚 Fontes de Dados

- [Open Scriptures](https://openscriptures.org)
- [STEP Bible](https://stepbible.org)
- [MorphGNT](https://github.com/morphgnt/sblgnt)

## ▶️ Execução

```bash
# Usando npm
npm install
cp .env.example .env
npm run dev

# Ou usando yarn
yarn install
cp .env.example .env
yarn dev

