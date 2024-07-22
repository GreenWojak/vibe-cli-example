# Vibe-CLI Example Project

This is an example project for [Vibe-CLI](https://github.com/GreenWojak/vibe-cli).

## Developing

Install dependencies with `npm install` (or `pnpm`/`yarn`/`bun`).

Fork a network locally, deploy contracts and start a development server:

```bash
vibe fork polygon -d
npm run dev
```

You can now interact with the deployed contract using the front-end by connecting your wallet.

Run scripts with `vibe run`:
```bash
vibe run increment
vibe run decrement
```