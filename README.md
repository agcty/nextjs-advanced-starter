# Next.js Advanced Starter

An opinionated starter skeleton with advanced features for Next.js.

Use tailwind css, eslint, prettier & absolute imports instantly.
Easily extendable zero-config template for pros and beginners.

## Why?

This template aims to provide a minimal well-thought-out base for building advanced Next.js powered websites.

It feels like there are so many templates and tutorials about configuring stacks out there that just don't work, no matter what you do. This is the template that **just works**. I know how frustrating it can be starting out and wanting to build webapps like the pros but having to think about configuring your stack just prevents you from using all the cool features technology has to offer in 2020. Especially getting eslint + prettier + absolute imports to work (well) together is super annoying and I believe using these features should be as simple as clicking a button.

Go check out the [Features 🎁](#features)!

## Who this template is for

**TLDR**
For Pros: You don't have to copy the same config over to a new project.
For Beginners: Start coding like the pros without having to configure anything.

If you're a newcomer to Next.js or React and you're interested in the most exciting features in web development, this is a great place to start without worrying about configuring rules, code-formatting, css purging etc. You can figure that out later, just get developing and build things people love.

If you're already a pro, this is the base-template for you. It's incredibly easy to extend or reconfigure. It's deliberately kept small so it stays performant while you build on top of it. This is the minimal base-template I wish I've had when I started developing with React.

## How to use

1. Click **"Use Template"** button which will create a new github repo for you automatically
2. Pull the newly created repo by following the github guide which will be shown after you finish step 1.
3. Install dependencies and run dev server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

After going through these steps it should look like this [Demo website.](https://nextjs-advanced-starter.vercel.app/)

## Features

- Fast design workflow with Tailwind CSS
  - write css like the cool kids
  - unused classes are purged automatically = really small css bundle size
- TypeScript
  - #1 must have in any web-dev project
- Customizable ESLint config
  - AirBnB code guidelines + prettier rules
- Code formatting with Prettier
  - Code is auto-formatted
  - No config needed
- Inter font
  - Really good looking apple-like open source font.
  - Don't like it? It's easily [replacable](#changing-the-font)
- Standardized absolute imports
  - Just import from @components/MyComp instead of ../../components/MyComp

## Explanation why some dependencies are in this template

### @tailwindcss/ui

You need to install this package if you use the incredible [TailwindUI components library](https://tailwindui.com/), it adds new spacing values, improved colors and beautiful shadows and will as [@adamwathan](https://twitter.com/adamwathan) pointed out, it will make its way into the core library soon. Once this happens, the dependency will be removed. ![tailwind ui](https://i.imgur.com/gm83Ydx.png)

### @tailwindcss/typography

A Tailwind CSS plugin for automatically styling plain HTML content with beautiful typographic defaults. Just add the class "prose" to your html and content will be styled automatically.

E.g this html:

```html
<article class="prose lg:prose-xl">
  <h1>How to set up an enterprise Next.js stack</h1>
  <p>
    Configuring Next.js with TypeScript, ESLint & prettier can become really annoying, especially if you're a beginner and don't know the intricate details of all the moving parts in a web-dev environment. The most important things you have to set up are:
  </p>
  <ul>
    <li>A working ESLint config</li>
    <li>Prettier plugins that auto-format your code</li>
    <li>Absolute imports</li>
  </ul>
</article>
```

will be rendered like this:

![prose output](https://i.imgur.com/xJD5Ojv.png)

If you don't need or want this dependency you can safely remove it.

## Extending the template

### Changing the font

1. In src/pages/_app.tsx replace the link tag with your url (can be Google Fonts, Adobe Typekit, etc.)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
```

2. In tailwind.config.js replace "Inter" with your custom font

```javascript
extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
  }
```

Tip: The font you choose should have at least these weights: 400, 500, 600, 700, 800. You need these weights for the tailwind font classes to have an effect. E.g if you don't include the weight 500, the class "font-medium" won't have any effect.

### Configuring ESLint rules

### Adding new absolute import paths



This template of the most exciting trends features and gives you a comfortable development environment to get started.
The reason why it exists is because I absolutely hate setting up the same stack twice. 

most tedious things are usually the easiest ones to implement (once you know what you're doing).
If you've ever set up an eslint config with auto-formatting and absolute imports for a new project from scratch you probably know the struggle.