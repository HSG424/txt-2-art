import Image from "next/image";

export function Logo() {
  return (
    <div className="flex sm:block justify-center sm:justify-normal mt-[12px] mb-[37px] sm:m-0 sm:relative sm:top-[20px] md:right-[6px]">
      <Image src="/logo-sm.png" alt="Logo" width={240} height={83} priority />
    </div>
  );
}
