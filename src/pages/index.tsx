import React from "react"

import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js advanced start template.</title>

        <meta
          name="description"
          content="Use tailwind css, eslint, prettier & absolute imports instantly.
            Easily extendable zero-config template for pros and beginners."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center min-h-screen py-20 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100">
        <div>
          <h1 className="px-5 text-4xl font-bold leading-tight tracking-tight text-center sm:mt-4 sm:text-6xl">
            Next.js
            <br />
            Advanced Starter
          </h1>

          <h2 className="max-w-4xl px-10 mx-auto mt-8 text-base tracking-tight text-center text-gray-600 sm:text-2xl md:mt-5 md:text-2xl">
            Tailwind CSS 2.0, ESLint & Prettier without a single line of config!
            Easily extendable zero-config template for pros and beginners.
          </h2>

          <div className="px-4 sm:px-0">
            <section
              className="w-full mt-6 bg-white rounded-lg grid grid-cols-1 sm:mt-20 sm:grid-cols-2 sm:min-w-[1000px] min-h-[350px]"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center rounded-l-lg bg-gray-50">
                <FeatureList>
                  <Feature main="Tailwind CSS">
                    Fast design workflow with <InfoText text="Tailwind CSS" />
                  </Feature>

                  <Feature main="TypeScript">
                    <InfoText text="TypeScript" /> by default
                  </Feature>

                  <Feature main="ESLint config">
                    Customizable <InfoText text="ESLint config" />
                  </Feature>

                  <Feature main="Code formatting">
                    <InfoText text="Code formatting" /> with Prettier
                  </Feature>

                  <Feature main="Absolute imports">
                    Standardized <InfoText text="absolute imports" />
                  </Feature>

                  <Feature main="Absolute imports">
                    Ready-to-go <InfoText text="Jest" /> setup
                  </Feature>
                </FeatureList>
              </div>

              <div className="px-4 py-24 text-center space-y-5 place-self-center">
                <h3 className="text-3xl font-bold">Get it 👇</h3>

                <span className="inline-flex rounded-md shadow-sm">
                  <Link href="https://github.com/agcty/nextjs-advanced-starter">
                    <a
                      type="button"
                      className="inline-flex items-center px-4 py-4 font-medium text-white bg-blue-600 border border-transparent leading-6 transition duration-150 ease-in-out rounded-md sm:px-10 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring-blue-400 active:bg-blue-700 focus:ring-4"
                    >
                      Copy Template from GitHub
                    </a>
                  </Link>
                </span>
              </div>
            </section>
            <p className="mt-6 text-xs font-medium text-center text-gray-600">
              Built by{" "}
              <a
                className="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline"
                href="https://twitter.com/agctyz"
              >
                @agctyz
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

interface FeatureListProps {
  children: React.ReactNode
}

function FeatureList({ children }: FeatureListProps) {
  return <ul className="px-12 py-12 space-y-5">{children}</ul>
}

function Feature({ children, main }) {
  return (
    <li className="flex items-center">
      <CheckIcon className="flex-shrink-0 hidden w-5 h-5 p-1 text-gray-100 bg-blue-600 rounded-full sm:inline hiddden" />
      <p className="hidden ml-3 text-lg text-gray-600 sm:inline">{children}</p>

      <p className="mx-auto sm:hidden">
        <InfoText text={main} />
      </p>
    </li>
  )
}

function InfoText({ text }) {
  return (
    <span className="inline-flex items-center px-3 py-2 font-medium text-gray-700 bg-gray-100 rounded-md">
      <CheckIcon className="inline-flex flex-shrink-0 w-5 h-5 p-1 mr-3 text-gray-100 bg-blue-600 rounded-full sm:hidden" />
      {text}
    </span>
  )
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
  )
}
