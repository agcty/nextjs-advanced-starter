import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-geist-50 via-geist-50 to-geist-100 flex justify-center py-24">
        <div>
          <h1 className="font-bold mt-20 text-center leading-none sm:leading-tight tracking-tight text-5xl sm:text-6xl">
            Next.js Template.
            <br />
            Advanced Starter.
          </h1>

          <h2 className="mt-3 max-w-4xl mx-auto text-center text-gray-600 text-base sm:text-2xl md:mt-5 md:text-2xl tracking-tight">
            Open source Next.js template for busy devs: keep setups DRY. It's
            2020, no need to config absolute-imports, code-formatting & linting.
          </h2>

          <div className="px-4 sm:px-0">
            <section
              className="bg-white rounded-lg mt-20 grid grid-cols-1 sm:grid-cols-2 w-full sm:w-1000"
              style={{
                minHeight: "350px",
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 30px 60px 0px",
              }}
            >
              <div className="flex flex-col justify-center bg-geist-50 rounded-l-lg">
                <FeatureList>
                  <Feature>
                    Fast design workflow with <InfoText text="Tailwind CSS" />
                  </Feature>
                  <Feature>
                    <InfoText text="TypeScript rules" /> that make sense
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
                  {/* <Feature text="TypeScript config" />
                <Feature text="ESLint config" />
                <Feature text="Prettier" />
                <Feature text="Inter Font" /> */}
                </FeatureList>
              </div>

              <div className="place-self-center text-center space-y-5 py-24 px-4">
                <h3 className="text-3xl font-bold">Get it 👇</h3>

                <span className="inline-flex rounded-md shadow-sm">
                  <Link href="  https://github.com/agcty/nextjs-advanced-starter">
                    <a
                      type="button"
                      className="inline-flex items-center px-10 py-4 border border-transparent text-base leading-6 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                    >
                      Copy Template from GitHub
                    </a>
                  </Link>
                </span>

                <h2 className="text-gray-600 tracking-tight">
                  Used by devs around the world
                </h2>
              </div>
            </section>
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
  return <ul className="space-y-5 px-12  py-12">{children}</ul>;
}

function Feature({ children }) {
  return (
    <li className="flex items-center leading-relaxed">
      <CheckIcon className="w-5 h-5 p-1 rounded-full flex-shrink-0 text-gray-100 bg-blue-600" />
      <p className="ml-3 text-gray-600 text-lg">{children}</p>
    </li>
  );
}

function InfoText({ text }) {
  return (
    <span className="text-gray-700 font-medium bg-geist-100 rounded-md py-2 px-3">
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
