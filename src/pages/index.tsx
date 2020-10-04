import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex justify-center py-24">
        <div>
          <h1 className="text-6xl font-bold mt-12 text-center leading-tight">
            Next.js Template.
            <br />
            Advanced Starter.
          </h1>

          <h2 className="text-gray-700 text-center text-2xl mt-6">
            Don't setup a tech stack twice, use this template and get developing
            instantly.
          </h2>

          <div
            className="bg-white rounded-lg shadow-xl mt-12 grid grid-cols-2"
            style={{ width: "1000px" }}
          >
            <FeatureList>
              <Feature text="Tailwind CSS (with auto purge)" />
              <Feature text="TypeScript config" />
              <Feature text="Eslint" />
              <Feature text="Prettier" />
              <Feature text="Inter Font" />
            </FeatureList>
            <div className="place-self-center">
              <h3 className="text-xl font-semibold">Copy Template now</h3>

              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Copy Template
                </button>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface FeatureListProps {
  children: React.ReactNode;
}
function FeatureList({ children }: FeatureListProps) {
  return <ul className="space-y-4 bg-gray-50 p-8 rounded-l-lg">{children}</ul>;
}

function Feature({ text }) {
  return (
    <li className="flex items-center">
      <CheckIcon className="w-5 h-5 p-0.5 rounded-full flex-shrink-0 text-gray-100 bg-blue-500" />
      <p className="ml-3 text-gray-800 text-lg">{text}</p>
    </li>
  );
}

function DarkModal({ children }) {
  return (
    <div
      className="max-w-4xl p-8 space-y-6 transition-all transform border rounded-lg shadow-lg bg-dark-800 border-dark-900"
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
