import Image from "next/image";

function Logo() {
  return (
    <div className="mt-[3px]">
      <Image src="/logo-sm.png" alt="Logo" width={272} height={1} priority />
    </div>
  );
}

export default Logo;
