import Head from "next/head";
import ContextProvider from "../store/ContextProvider";
import { Logo, GenerateArtForm, Main, Footer } from "../components";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContextProvider>
      <Head>
        <title>Txt 2 Art</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div
        className={`${mont.className} text-[0.9375rem] text-gray-100 mt-[2.0625rem] pb-[3.0625rem]`}
      >
        <header className="flex justify-center">
          <div className="sm:flex sm:justify-between w-[15rem] xs:w-auto sm:w-[50rem] pr-0 sm:pr-[0.3125rem] md:pr-0">
            <Logo />
            <GenerateArtForm />
          </div>
        </header>

        <div className="flex justify-center">
          <main className="mt-[1.9375rem] pt-[1.6875rem] border-t border-gray-700 w-full md:w-[52.9375rem]">
            <Main />
          </main>
        </div>

        <Footer />
      </div>
    </ContextProvider>
  );
}
