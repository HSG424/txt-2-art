import Image from "next/image";

export function Logo() {
  return (
    <h1 className="flex sm:block justify-center sm:justify-normal mt-[0.75rem] mb-[2.3125rem] sm:m-0 sm:relative sm:top-[1.25rem] md:right-[0.375rem]">
      <Image src="/logo-sm.png" alt="Logo" width={240} height={83} priority />
    </h1>
  );
}
