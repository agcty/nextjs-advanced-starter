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

### Config files

| File name             | What it does                                                                                               |
|-----------------------|------------------------------------------------------------------------------------------------------------|
| `tsconfig.json`         | TypeScript configuration. Tells IDE which absolute imports exist and works in conjunction with .babelrc    |
| `.eslintrc.js`          | Config file for finding and fixing problems in code. E.g: No function should be used before it's defined.  |
| `tailwind.config.js`    | TailwindCSS config. Adds new sizes, shadows, borders etc. to your tailwind classes.                        |
| `postcss.config.js`     | Tells your project to include TailwindCSS in build chain.                                                  |
| `prettier.config.js`    | Rules for formatting your code. E.g: indent code 6 spaces instead of 4                                     |
| `babelrc.js`            | Extends the Next.js babel config and defines absolute imports.                                             |
| `.vscode/settings.json` | Custom settings for your VSCode workspace. Tells VSCode to auto-format code on save.                       |

### Changing the font

1. In `src/pages/_app.tsx` replace the link tag with your url (can be Google Fonts, Adobe Typekit, etc.)

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

If you need additional rules or want to turn off specific rules just edit `.eslintrc.js`. Only change the order of plugins and items in the "extends" array if you know what you're doing as this can have unexpected side effects: Items on the bottom ovverride the former items. This is the intended behaviour so you can extend and configure existing rules easily. For example first we add the popular airbnb rules and then have prettier ovverride some of these rules so code formatting doesn't interfere with other rules.

### Adding new absolute import paths

1. Add a new alias in `.babelrc`

```javascript
"@myalias": "./src/myaliasfolder",
```

This will instruct Next.js to set up a new alias to your specific folder. If you try to import a file with @myalias now it will still throw an error however because we need to tell our IDE that this path actually exists:

2. Add path in `.tsconfig`

```javascript
"@myalias/*": ["./src/myaliasfolder/*"]
```

## Recommended extensions for VSCode

If you're a beginner and don't know which extensions you need, definitely install these:

1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Adds error highlighting to VSCode.
2. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Auto-fixes formatting errors everytime you hit save.
3. [TailwindCSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Tailwind className suggestions as you type
4. [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind): Makes sure your tailwind classes have the correct order which makes components easier to read.