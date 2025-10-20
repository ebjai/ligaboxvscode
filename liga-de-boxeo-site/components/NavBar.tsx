"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "./BrandMark";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/fighters", label: "Fighters" },
  { href: "/events", label: "Events" },
  { href: "/rankings", label: "Rankings" },
  { href: "/about", label: "About" }
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <div className="flex-1">
          <BrandMark />
        </div>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
                  className={clsx("text-sm hover:text-ldb-gold", pathname === l.href && "text-ldb-gold")}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/search" className="hidden md:inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-ldb-gold">
          <Search size={16}/> Search
        </Link>
        <button className="md:hidden p-2 rounded-lg border border-zinc-800" onClick={()=>setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800/60 px-4 py-3 space-y-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block text-sm">
              {l.label}
            </Link>
          ))}
          <Link href="/search" onClick={()=>setOpen(false)} className="block text-sm">Search</Link>
        </div>
      )}
    </header>
  );
}
