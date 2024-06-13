"use client";
import { signOut, useSession } from "next-auth/react";
import { Home, LogOut, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: 0,
    name: "Home",
    link: "/dashboard",
    icon: <Home />,
  },
  {
    id: 1,
    name: "Mensagens",
    link: "/dashboard/mensagens",
    icon: <Mail />,
  },
];

export default function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <aside className="h-screen p-5 min-w-[320px] bg-neutral-50">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="text-black p-3 rounded-lg">
            <p className="text-xl">
              Bem vindo,{" "}
              <span className="font-semibold">{session?.user?.name}</span>.
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            {navItems.map((link) => (
              <>
                <Link key={link.id} href={link.link}>
                  <div
                    className={`p-2 rounded-lg text-lg flex items-center gap-2 ${
                      pathname === link.link
                        ? "bg-softDark text-white"
                        : ""
                    }`}
                  >
                    <span>{link.icon}</span>
                    <p>{link.name}</p>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
        <button
          className="rounded-xl bg-primaryRed text-white hover:opacity-85 transition-all duration-200 text-xl max-w-max mx-auto px-5 py-0 flex justify-center items-center"
          onClick={() => signOut()}
        >
          <p className="p-3">Sair</p>
          <LogOut />
        </button>
      </div>
    </aside>
  );
}
