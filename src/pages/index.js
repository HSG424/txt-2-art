import { Fragment } from "react";
import Image from "next/image";
import GenerateArtForm from "../components/GenerateArtForm";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <header
        className={`flex justify-center gap-x-[73px] ${mont.className} text-base`}
      >
        <Image
          src="/logo.png"
          alt="Logo"
          className="mt-[69px] mb-16"
          width={270}
          height={1}
          priority
        />
        <GenerateArtForm />
      </header>
      <main></main>
      <footer></footer>
    </Fragment>
  );
}
