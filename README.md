# Лендинг «Лучшая CRM»

Одна статичная страница. Все кнопки ведут в приложение: `https://app.tgfdh.xyz`.

## Запустить у себя

```
pnpm install
pnpm dev
```

Сайт откроется на http://localhost:4321. Собрать готовую папку `dist/`: `pnpm build`.

## Где что лежит

- Тексты карточек, тарифов, отзывов, вопросов — `src/data/content.ts`
- Заголовки и тексты секций — в файлах секций `src/components/`
- Адрес приложения — `src/config.ts`
- Цвета, шрифт, размеры текста, отступы — `src/styles/tokens.css`
- Шрифт Rubik — `public/fonts/`
- Макет — `design/`
