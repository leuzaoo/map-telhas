import Link from "next/link";
import React from "react";

export default function LoginForm() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-primaryRed w-full max-w-[440px]">
        <h1 className="text-3xl font-bold my-4 uppercase text-primaryRed">
          Insira seus dados
        </h1>

        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button
            type="submit"
            className="bg-blue-600 hover:opacity-80 transition-all duration-200 text-white font-medium cursor-pointer px-6 py-2 rounded-md"
          >
            Entrar
          </button>
          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            Mensagem de Erro
          </div>

          {/* <Link href="/registrar" className="text-sm mt-5 text-right">
            Não possui uma conta? <span className="underline">Crie agora.</span>
          </Link> */}
        </form>
      </div>
    </div>
  );
}
