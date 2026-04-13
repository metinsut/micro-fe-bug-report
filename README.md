# Bun + Vite Module Federation Example

Bu workspace iki uygulama içerir:

- `apps/remote`: `HelloCard` bileşenini expose eder
- `apps/host`: `remote/HelloCard` modülünü yükleyip ekrana basar

## Kurulum

```bash
bun install
```

## Geliştirme

Tek komutla iki uygulamayı da çalıştır:

```bash
bun run dev
```

Adresler:

- Host: `http://127.0.0.1:4174`
- Remote: `http://127.0.0.1:4173`

## Build

```bash
bun run build
```

## Test

```bash
bun test
```
