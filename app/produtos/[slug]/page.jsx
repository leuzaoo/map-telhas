import { roofTiles } from "@/app/data/roof-tiles";
import MyButton from "@/app/ui/button";
import Center from "@/app/ui/center";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const { slug } = params;
  const product = roofTiles.find((product) => product.slug === slug);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <>
      <Center>
        <div className="lg:flex items-end gap-10">
          <div>
            <h1 className="mt-5 text-[40px] font-semibold">{product.name}</h1>
            <p className="text-sm lg:text-xl">{product.description}</p>
            <Image
              className="shadow-md rounded-xl mt-3"
              src={product.image}
              alt={`${product.name} image`}
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <ul className="flex flex-col gap-5 mt-3 text-lg lg:text-2xl pb-5 lg:pb-0">
              <li>
                {product.material ? (
                  <>
                    <span className="font-bold">Opções de Material: </span>
                    <br />
                    {product.material}
                  </>
                ) : (
                  ""
                )}
              </li>
              <li>
                {product.application ? (
                  <>
                    <span className="font-bold">Aplicações: </span>
                    <br />
                    {product.application}
                  </>
                ) : (
                  ""
                )}
              </li>
              <MyButton style="red-white" text="Orçamento" />
            </ul>
          </div>
        </div>
        <hr className="mt-5 mb-5" />
        <div className="flex flex-col gap-3">
          <h1 className="text-[40px] font-semibold">Informações</h1>
          <h2 className="hidden">Tipos de Telhas</h2>
          <p>
            <h3 className="hidden">Telha de Aço</h3>
            <span className="font-bold">Telha de Aço: </span> Telhas de aço são
            produzidas com um dos materiais mais duráveis e resistentes
            disponíveis, oferecendo proteção excepcional contra intempéries e
            durabilidade de longo prazo para sua estrutura.
          </p>
          <p>
            <h3 className="hidden">Telha Térmica</h3>
            <span className="font-bold">Telha Térmica: </span>
            As telhas térmicas são especificamente projetadas para proporcionar
            isolamento térmico, mantendo seu espaço interno mais fresco no calor
            do verão e mais quente durante os meses frios, garantindo conforto
            em todas as estações.
          </p>
          <p>
            <h3 className="hidden">Telha Chapa</h3>
            <span className="font-bold">Telha de Chapa: </span>
            Telha de Chapa: Feitas a partir de chapas de aço, as telhas de chapa
            oferecem uma combinação de robustez e proteção, sendo ideais para
            diversas aplicações onde resistência é fundamental.
          </p>
          <p>
            <h3 className="hidden">Telha Trapézio</h3>
            <span className="font-bold">Telha Trapézio: </span>
            As telhas trapézio possuem um perfil em formato de trapézio, sendo
            uma escolha versátil e prática para uma variedade de coberturas,
            proporcionando eficiência e estética.
          </p>
          <p>
            <h3 className="hidden">Telha Colorida</h3>
            <span className="font-bold">Telha Colorida: </span>
            Disponíveis em uma ampla gama de cores vibrantes e atraentes, as
            telhas coloridas adicionam um toque de estilo e personalidade ao seu
            projeto, combinando com a estética desejada.
          </p>
          <p>
            <h3 className="hidden">Telha Sanduíche</h3>
            <span className="font-bold">Telha Sanduíche: </span>
            Telhas sanduíche são compostas por duas camadas metálicas e um
            núcleo isolante, oferecendo excelente isolamento térmico e acústico,
            tornando-as ideais para uma variedade de aplicações.
          </p>
          <p>
            <h3 className="hidden">Telha Metálicas</h3>
            <span className="font-bold">Telha Metálicas: </span>
            As telhas metálicas apresentam uma ampla variedade de acabamentos e
            aplicações, oferecendo soluções duráveis e versáteis para projetos
            de construção.
          </p>
          <p>
            <h3 className="hidden">Telha Galvalume</h3>
            <span className="font-bold">Telha Galvalume: </span>
            Revestidas com uma camada de alumínio, zinco e silício, as telhas
            galvalume oferecem resistência à corrosão e durabilidade superior em
            comparação com outros materiais.
          </p>
          <p>
            <h3 className="hidden">Telha Trapezoidal</h3>
            <span className="font-bold">Telha Trapezoidal: </span>
            Com perfil em forma de trapézio, as telhas trapezoidais oferecem
            robustez e eficiência estrutural, sendo ideais para projetos que
            exigem resistência e desempenho.
          </p>
          <p>
            <h3 className="hidden">Telha Termoacústica</h3>
            <span className="font-bold">Telha Termoacústica: </span>
            Projetadas para proporcionar isolamento térmico e acústico, as
            telhas termoacústicas mantêm o ambiente interno confortável e
            silencioso, independentemente das condições externas.
          </p>
          <p>
            <h3 className="hidden">Telha Galvanizada</h3>
            <span className="font-bold">Telha Galvanizada: </span>
            Telhas galvanizadas são revestidas com uma camada de zinco para
            proteção contra corrosão, oferecendo durabilidade e resistência em
            ambientes desafiadores.
          </p>
          <p>
            <h3 className="hidden">Telha para Cobertura</h3>
            <span className="font-bold">Telha para Cobertura: </span>
            Oferecemos telhas especialmente projetadas para coberturas de
            diferentes tipos de edificações, garantindo proteção e estética para
            o seu projeto.
          </p>
          <p>
            <h3 className="hidden">Telha de Aço Galvanizado</h3>
            <span className="font-bold">Telha de Aço Galvanizado: </span>
            Fabricadas em aço revestido com uma camada de zinco, as telhas de
            aço galvanizado oferecem proteção contra corrosão e durabilidade
            excepcional para sua cobertura.
          </p>
          <p>
            <h3 className="hidden">Telha Trapézio Sanduíche</h3>
            <span className="font-bold">Telha Trapézio Sanduíche: </span>
            Telhas com perfil em formato de trapézio, compostas por duas camadas
            metálicas e um núcleo isolante, oferecendo excelente desempenho
            térmico e acústico.
          </p>
          <p>
            <h3 className="hidden">Telha Galvalume com Isopor</h3>
            <span className="font-bold">Telha Galvalume com Isopor: </span>
            Telhas com revestimento de Galvalume e núcleo isolante de isopor
            proporcionam isolamento térmico e resistência à corrosão, sendo
            ideais para uma variedade de aplicações.
          </p>
          <p>
            <h3 className="hidden">Pintura Eletrostática</h3>
            <span className="font-bold">Pintura Eletrostática: </span>
            Um método de aplicação de tinta que garante uma cobertura uniforme e
            durável em telhas metálicas, proporcionando uma aparência estética e
            resistência à corrosão.
          </p>
          <p>
            <h3 className="hidden">Telha Colorida</h3>
            <span className="font-bold">Telha Colorida: </span>
            Telhas disponíveis em uma variedade de cores vibrantes e duradouras,
            permitindo que você personalize sua cobertura de acordo com sua
            preferência estética.
          </p>
          <p>
            <h3 className="hidden">Telha Pintada</h3>
            <span className="font-bold">Telha Pintada: </span>
            Telhas que passaram pelo processo de pintura para adicionar cor e
            proteção à superfície, proporcionando durabilidade e estética
            atraente.
          </p>
          <p>
            <h3 className="hidden">Telha Forro Pintada</h3>
            <span className="font-bold">Telha Forro Pintada: </span>
            Telhas pintadas especialmente projetadas para uso em forros,
            oferecendo uma aparência limpa e acabamento elegante para o interior
            de edifícios.
          </p>
          <p>
            <h3 className="hidden">Telha Termoacústica Pintada</h3>
            <span className="font-bold">Telha Termoacústica Pintada: </span>
            Telhas termoacústicas que passaram pelo processo de pintura,
            oferecendo isolamento térmico e acústico juntamente com opções de
            cores vibrantes.
          </p>
          <p>
            <h3 className="hidden">Telha Termoacústica Pintada</h3>
            <span className="font-bold">Telha Termoacústica Pintada: </span>
            Telhas termoacústicas que passaram pelo processo de pintura,
            oferecendo isolamento térmico e acústico juntamente com opções de
            cores vibrantes.
          </p>
          <p>
            <h3 className="hidden">Telha Termoacústica Colorida</h3>
            <span className="font-bold">Telha Termoacústica Colorida: </span>
            Telhas termoacústicas disponíveis em uma variedade de cores,
            oferecendo isolamento térmico e acústico juntamente com
            personalização estética.
          </p>
          <p>
            <h3 className="hidden">Telha Branca</h3>
            <span className="font-bold">Telha Branca: </span>
            Telhas de cor branca, ideais para refletir a luz solar e manter o
            ambiente interno mais fresco, além de proporcionar uma aparência
            moderna e limpa.
          </p>
          <p>
            <h3 className="hidden">Telha Preta</h3>
            <span className="font-bold">Telha Preta: </span>
            Telhas de cor preta, ideais para absorver calor e criar uma estética
            sofisticada e elegante para sua cobertura.
          </p>
        </div>
        <hr className="mt-5 mb-5" />
        <footer className="pb-5">
          <h1 className="text-[40px] font-semibold">Sobre Nós</h1>
          <p>
            Bem-vindo à Map Telhas, líder em soluções de telhas metálicas de
            qualidade excepcional. Com uma trajetória de 28 anos de excelência,
            nós estabelecemos como uma referência confiável e inovadora no
            setor.
          </p>
          <br />
          <p>
            Desde 1996, nos dedicamos incansavelmente a fornecer telhas
            metálicas de alta qualidade e serviços relacionados para uma ampla
            gama de aplicações. Trabalhamos com os melhores aços disponíveis no
            mercado, garantindo durabilidade, resistência e desempenho
            superiores em cada projeto que realizamos.
          </p>
          <br />
          <p>
            Nossa gama de produtos inclui uma variedade de telhas metálicas,
            cumeeiras, bobinas slitadas e oferecemos serviços de pintura
            eletrostática para atender às necessidades específicas de nossos
            clientes.
          </p>
          <br />
          <p>
            Na Map Telhas, a qualidade é a nossa prioridade número um. Contamos
            com uma equipe dedicada de profissionais altamente qualificados e
            experientes, comprometidos em oferecer produtos e serviços que
            superem as expectativas de nossos clientes.
          </p>
        </footer>
      </Center>
    </>
  );
}
