import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/logo.png" alt="Liga de Boxeo" width={40} height={40} className="rounded" />
      <div className="flex flex-col leading-tight">
        <span className="text-ldb-gold font-semibold tracking-widest text-xs">LIGA DE</span>
        <span className="text-cream text-lg font-extrabold -mt-1">BOXEO</span>
      </div>
    </Link>
  );
}
