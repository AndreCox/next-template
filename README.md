This is a [Next.js](https://nextjs.org/) template that is pre setup with mobile using capacitor.js and Tailwind CSS and MobX.

It also comes pre set-up to deploy static websites to github pages.

This template is the predecessor to my previous react template which you can find here [Rocket Template 🚀](https://github.com/AndreCox/Rocket-Template). This new template contains many of the same features however improves it in a couple of key areas.

## About

### Key Features

1. 🗳️ MobX State Management
2. 📱 Fully cross platform, you can create your web app, then deploy to both IOS and Android
3. 🪶 Comes with Tailwindcss by default; no more thinking up css class names while still being lightweight
4. 📄 Github Pages support, simply push your code and your website will be automatically deployed.
5. ⏭️ NEW! Next Js seriously makes development way easier. The major update from previous template.

## Getting Started

First, install dependencies:

```bash
yarn install
```

Next, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Building for mobile

```bash
yarn build-mobile
```

You can open in your ide of choice with

```bash
yarn android
```

or

```bash
yarn  ios
```

## Deploy to Github-Pages

To deploy your site to github pages, simply update the `.github\workflows\gh-pages.deploy.yml` file to set the `NEXT_PUBLIC_BASE_PATH:` to the name of your repository. For instance this repository would be `\next-template`

You can also update this file to only deploy when you push to a specific branch. For instance `release`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
