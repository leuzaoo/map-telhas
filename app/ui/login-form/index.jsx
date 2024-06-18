"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("second");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Login ou senha inválido.");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white flex place-items-center h-screen">
      <div className="p-5 rounded-lg w-full max-w-[440px]">
        <h1 className="text-xl text-primaryRed font-medium underline underline-offset-2">
          Painel de Administrador
        </h1>
        <p className="text-3xl font-bold my-4 uppercase">
          Fazer login
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:opacity-80 transition-all duration-200 text-white font-medium cursor-pointer px-6 py-2 rounded-md"
          >
            Entrar
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>

        <Link
          className="mt-10 text-blue-600 flex items-center justify-center gap-2 text-xl"
          href="/"
        >
          <ArrowLeft />
          Voltar para o site
        </Link>
      </div>
      <div className="hidden lg:flex">
        <Image
          className="h-screen w-screen"
          src="/homepage/telha-metalica-2.jpg"
          width={3000}
          height={2000}
          alt="Banner image"
        />
      </div>
    </div>
  );
}
