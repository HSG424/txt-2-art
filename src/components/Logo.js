import Image from "next/image";

function Logo() {
  return (
    <div className="relative top-[20px] right-[6px]">
      <Image src="/logo-sm.png" alt="Logo" width={240} height={1} priority />
    </div>
  );
}

export default Logo;
