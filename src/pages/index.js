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
        className={`${mont.className} text-[15px] text-gray-100 mt-[33px] pb-[49px]`}
      >
        <header className="flex justify-center">
          <div className="sm:flex sm:justify-between w-[240px] xs:w-auto sm:w-[800px] pr-0 sm:pr-[5px] md:pr-0">
            <Logo />
            <GenerateArtForm />
          </div>
        </header>

        <div className="flex justify-center">
          <main className="mt-[31px] pt-[27px] border-t border-gray-700 w-full md:w-[847px]">
            <Main />
          </main>
        </div>

        <Footer />
      </div>
    </ContextProvider>
  );
}
