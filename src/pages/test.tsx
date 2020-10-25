import React from "react";

function test() {
  return (
    <article className="py-12 mx-auto prose lg:prose-xl">
      <h1>How to set up an enterprise Next.js stack</h1>
      <p>
        Configuring Next.js with TypeScript, ESLint & prettier can become really
        annoying, especially if you're a beginner and don't know the intricate
        details of all the moving parts in a web-dev environment. The most
        important things you have to set up are:
      </p>
      <ul>
        <li>A working ESLint config</li>
        <li>Prettier plugins that auto-format your code</li>
        <li>Absolute imports</li>
      </ul>
    </article>
  );
}

export default test;
