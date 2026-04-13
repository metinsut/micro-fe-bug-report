# Bun + Vite Module Federation Example

Bu workspace uc uygulama icerir:

- `apps/remote`: `HelloCard` bileşenini expose eder
- `apps/scheduler`: `SchedulePanel` bileşenini expose eder
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
- Scheduler: `http://127.0.0.1:4175`

## Build

```bash
bun run build
```

## Test

```bash
bun test
```
