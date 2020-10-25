# Nextjs Advanced Starter

An opinionated starter skeleton with advanced features for Next.js. 

Use tailwind css, eslint, prettier & absolute imports instantly.
Easily extendable zero-config template for pros and beginners.

## Why?
This project aims to provide a minimal well-thought-out base for building advanced Next.js powered websites.

It feels like there are so many templates and tutorials about configuring stacks out there, that just don't work, no matter what you do. When I started This is the template that **just works**.

TLDR;
This template combines some of the most exciting trends in web development and just works. Use it as a pro and don't.
Check out the [Features 🎁](#features)

This template of the most exciting trends features and gives you a comfortable development environment to get started.
The reason why it exists is because I absolutely hate setting up the same stack twice. Especially getting eslint + prettier + absolute imports to work (well) together is super annoying and I don't any people to be annoyed by it.

most tedious things are usually the easiest ones to implement (once you know what you're doing).
If you've ever set up an eslint config with auto-formatting and absolute imports for a new project from scratch you probably know the struggle.

For Pros: You don't have to copy the same config over to a new project.
For Beginners: Start coding like the pros without setting up configs for days.

## How can I use this?
If you're a newcomer to Next.js or React and you're interested in the most exciting features in web development, this is a great place to start without worrying about configuring rules, code-formatting, css purging etc. You can figure that out later, just get developing and build things people love.

If you're already a pro, this is the base-template for you. It's incredibly easy to extend or reconfigure. It's deliberately kept small so it stays performant while you build on top of it. This is the minimal base-template I wish I've had when I started developing with React.

[Demo website.](https://nextjs-advanced-starter.vercel.app/)

## Features
 * Fast design workflow with Tailwind CSS
   * write css like the cool kids
   * unused classes are purged automatically = really small css bundle size
 * TypeScript
   * #1 must have in any web-dev project
 * Customizable ESLint config
   * AirBnB code guidelines + prettier rules
 * Code formatting with Prettier
   * Code is auto-formatted
   * No config needed (seriously, no config)
 * Inter font
   * Really good looking apple-like open source font.
   * Don't like it? just replace two strings
 * Standardized absolute imports
   * Just import from @components/MyComp instead of ../../components/MyComp
   
   
## Explanation why some dependencies are in this template
### @tailwindcss/ui
You need to install this package if you use the incredible [TailwindUI components library](https://tailwindui.com/), it adds new spacing values, improved colors and beautiful shadows and will as [@adamwathan](https://twitter.com/adamwathan) pointed out, it will make its way into the core library soon. Once this happens, the dependency will be removed. ![tailwind ui](https://i.imgur.com/gm83Ydx.png)


## Extending the template
### Changing the font
### Configuring ESLint rules
### Adding new absolute import paths
