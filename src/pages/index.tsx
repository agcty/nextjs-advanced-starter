import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center min-h-screen py-24 bg-gradient-to-b from-geist-50 via-geist-50 to-geist-100">
        <div>
          <h1 className="px-5 text-4xl font-bold leading-none tracking-tight text-center sm:mt-20 sm:leading-tight sm:text-6xl">
            Next.js Template.
            <br />
            Advanced Starter.
          </h1>

          <h2 className="max-w-4xl px-10 mx-auto mt-8 text-base tracking-tight text-center text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            Open source Next.js template for busy devs: keep setups DRY. It's
            2020, no need to config absolute-imports, code-formatting & linting.
          </h2>

          <div className="px-4 sm:px-0">
            <section
              className="grid w-full grid-cols-1 mt-6 bg-white rounded-lg sm:mt-20 sm:grid-cols-2 sm:w-1000"
              style={{
                minHeight: "350px",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center rounded-l-lg bg-geist-50">
                <FeatureList>
                  <Feature>
                    Fast design workflow with <InfoText text="Tailwind CSS" />
                  </Feature>
                  <Feature>
                    <InfoText text="TypeScript" /> rules that make sense
                  </Feature>
                  <Feature>
                    Customizable <InfoText text="ESLint config" />
                  </Feature>
                  <Feature>
                    <InfoText text="Auto code formatting" /> with Prettier
                  </Feature>
                  <Feature>
                    Beautiful <InfoText text="Inter font" />
                  </Feature>
                  <Feature>
                    Standardized <InfoText text="absolute imports" />{" "}
                  </Feature>
                </FeatureList>
              </div>

              <div className="px-4 py-24 space-y-5 text-center place-self-center">
                <h3 className="text-3xl font-bold">Get it 👇</h3>

                <span className="inline-flex rounded-md shadow-sm">
                  <Link href="  https://github.com/agcty/nextjs-advanced-starter">
                    <a
                      type="button"
                      className="inline-flex items-center px-10 py-4 text-base leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                    >
                      Copy Template from GitHub
                    </a>
                  </Link>
                </span>

                <h2 className="tracking-tight text-gray-600">
                  Used by devs around the world
                </h2>
              </div>
            </section>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          .test {
            @apply bg-red-500;
          }
        `}
      </style>
    </div>
  );
}

interface FeatureListProps {
  children: React.ReactNode;
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="px-12 py-12 space-y-5">{children}</ul>;
}

function Feature({ children }) {
  return (
    <li className="flex items-center leading-relaxed">
      <CheckIcon className="flex-shrink-0 w-5 h-5 p-1 text-gray-100 bg-blue-600 rounded-full" />
      <p className="ml-3 text-lg text-gray-600">{children}</p>
    </li>
  );
}

function InfoText({ text }) {
  return (
    <span className="flex items-center px-3 py-2 font-medium text-gray-700 rounded-md bg-geist-100 gap-x-2">
      <CheckIcon className="flex-shrink-0 w-5 h-5 p-1 text-gray-100 bg-blue-600 rounded-full sm:hidden" />
      {text}
    </span>
  );
}

function DarkModal({ children }) {
  return (
    <div
      className="max-w-4xl p-8 space-y-6 transition-all transform border rounded-lg bg-dark-800 border-dark-900"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {children}
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
