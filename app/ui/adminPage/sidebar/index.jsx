"use client";
import { signOut, useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <aside className="h-screen p-5 min-w-[320px] bg-primaryRed">
      <div className="h-full flex flex-col justify-between">
        <div className="text-white p-3 rounded-lg">
          <p className="text-xl">
            Bem vindo, <span className="font-semibold">{session?.user?.name}</span>
            .
          </p>
        </div>
        <button
          className="rounded-xl bg-white hover:opacity-85 transition-all duration-200 text-xl max-w-max mx-auto px-3 flex justify-center items-center gap-3"
          onClick={() => signOut()}
        >
          <p className="p-3">Finalizar sessão</p>
          <LogOut />
        </button>
      </div>
    </aside>
  );
}
