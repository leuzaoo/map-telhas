import MyButton from "../../button";
import Center from "../../center";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Center>
        <h1 className="text-3xl lg:text-[60px] uppercase font-bold">
          Sobre Nós
        </h1>
        <div className="lg:grid grid-cols-2 gap-10 items-center text-center mx-auto lg:mt-5">
          <div className="text-xl text-left flex flex-col gap-3 mx-auto">
            <p>
              Somos uma empresa especializada há 28 anos na fabricação de telhas
              metálicas, bobina slitada, cumeeiras e pintura eletrostática.
            </p>
            <p>
              Nosso compromisso se baseia em tradição, qualidade e durabilidade,
              garantindo a satisfação dos clientes.
            </p>
            <p>
              Contamos com uma equipe qualificada, materiais de alto padrão e
              seguimos rigorosamente as normas regulamentadoras para oferecer
              serviços confiáveis e tranquilidade aos nossos clientes.
            </p>
          </div>
          <div className="mx-auto mt-5 lg:mt-0">
            <Image
              className="shadow-md rounded-xl mx-auto"
              src="/empresa.jpg"
              width={3000}
              height={3000}
              alt="Sobre nós"
            />
          </div>
        </div>
      </Center>
      <div className="my-5">
        <Link href="/sobre">
          <MyButton text="Mais Informações" style="red-white" />
        </Link>
      </div>
    </>
  );
}
