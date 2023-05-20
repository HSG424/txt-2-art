import GenerateArtForm from "../components/GenerateArtForm";
import { Montserrat } from "next/font/google";
import Logo from "../components/Logo";
import ExampleImage from "../components/ExampleImage";
import ContextProvider from "../store/ContextProvider";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <ContextProvider>
      <div className={`${mont.className} text-[15px] text-gray-100 mt-[33px]`}>
        <header className="flex justify-center">
          <div className="flex justify-between w-[800px]">
            <Logo />
            <GenerateArtForm />
          </div>
        </header>

        <div className="flex justify-center">
          <main className="mt-[31px] pt-[27px] border-t border-gray-700 w-[847px]">
            <ExampleImage />
          </main>
        </div>
      </div>
    </ContextProvider>
  );
}
