# Bun + Vite Module Federation Example

This workspace contains three applications:

- `apps/remote`: exposes the `HelloCard` component
- `apps/scheduler`: exposes the `SchedulePanel` component
- `apps/host`: loads and renders `remote/HelloCard` and `scheduler/SchedulePanel`

## Install

```bash
bun install
```

## Development

Run all applications with one command:

```bash
bun run dev
```

Addresses:

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
