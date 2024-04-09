# Pacemaker

Et artig lite prosjekt

## Nyttig lenke om man vil lage en github action for dette

<https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages>

## Til Morten

```bash
# Installer git på maskinen din om du ikke har det allerede
# Lag en mappe feks c:\git_morten
# Stå i den mappen og kjør:
git clone https://github.com/jerschio/pacemaker.git
# Om dette går bra så har du fått en mappe c:\git_morten\pacemaker
# Installer node https://nodejs.org/en (grønn knapp download node.js LTS)
# Etter det gå til mappen c:\git_morten\pacemaker og kjør 
npm install

# Åpne mappen fra vs code
# Åpne en terminal i vs code og kjør 
npm run dev

# Når du kjører commandoen over så sier den noe slikt som at nå kjører websiden på den og den adressen
# Gå ditt fra din favoritt nettleser

```

## create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
