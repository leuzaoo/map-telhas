import { informacoes } from "../data/informacoes";
import Center from "../ui/center";
import InfoCard from "../ui/info-card";

export default function InformationPage() {
  return (
    <div className="mt-10 py-10 px-5 text-xl font-medium">
      <Center>
        <h1 className="uppercase text-[40px] text-primaryRed font-bold">
          Informações
        </h1>
        <div className="h-[2px] w-full md:w-5/6 bg-primaryRed mt-3 mr-auto" />
        <section className="mt-5">
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-between">
            {informacoes.map((product) => (
              <li key={product.id}>
                <InfoCard
                  image={product.image}
                  title={product.title}
                  desc={product.desc}
                />
              </li>
            ))}
            <li className="hidden">
              <h2>Telha de Chapa</h2>
              <h3>
                Feitas a partir de chapas de aço, as telhas de chapa oferecem
                uma combinação de robustez e proteção, sendo ideais para
                diversas aplicações onde resistência é fundamental.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Trapézio</h2>
              <h3>
                As telhas trapézio possuem um perfil em formato de trapézio,
                sendo uma escolha versátil e prática para uma variedade de
                coberturas, proporcionando eficiência e estética.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telhas Metálicas</h2>
              <h3>
                As telhas metálicas apresentam uma ampla variedade de
                acabamentos e aplicações, oferecendo soluções duráveis e
                versáteis para projetos de construção.
              </h3>
            </li>
            <li className="hidden">
              <h2>Fábrica de Telhas</h2>
              <h3>
                Somos uma empresa especializada na fabricação de telhas
                metálicas em diversos modelos e especificações, garantindo
                produtos de alta qualidade para atender às necessidades de
                nossos clientes.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telhas Trapezoidais</h2>
              <h3>
                Com perfil em forma de trapézio, as telhas trapezoidais oferecem
                robustez e eficiência estrutural, sendo ideais para projetos que
                exigem resistência e desempenho.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telhas Galvanizadas</h2>
              <h3>
                Telhas galvanizadas são revestidas com uma camada de zinco para
                proteção contra corrosão, oferecendo durabilidade e resistência
                em ambientes desafiadores.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha de Aço Galvanizado</h2>
              <h3>
                Fabricadas em aço revestido com uma camada de zinco, as telhas
                de aço galvanizado oferecem proteção contra corrosão e
                durabilidade excepcional para sua cobertura.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Trapézio Sanduíche</h2>
              <h3>
                Telhas com perfil em formato de trapézio, compostas por duas
                camadas metálicas e um núcleo isolante, oferecendo excelente
                desempenho térmico e acústico.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Galvalume com Isopor</h2>
              <h3>
                Telhas com revestimento de Galvalume e núcleo isolante de isopor
                proporcionam isolamento térmico e resistência à corrosão, sendo
                ideais para uma variedade de aplicações.
              </h3>
            </li>
            <li className="hidden">
              <h2>Fabricante de Telha de Aço</h2>
              <h3>
                Somos uma empresa especializada na fabricação de telhas
                metálicas em aço, oferecendo produtos de alta qualidade e
                durabilidade para nossos clientes.
              </h3>
            </li>
            <li className="hidden">
              <h2>Fabricante de Telhas Metálicas</h2>
              <h3>
                Nossa fábrica é especializada na produção de telhas metálicas em
                diferentes modelos e especificações, garantindo soluções sob
                medida para suas necessidades de cobertura.
              </h3>
            </li>
            <li className="hidden">
              <h2>Fabricante de Telhas Galvalume</h2>
              <h3>
                Somos uma empresa especializada na fabricação de telhas com
                revestimento de Galvalume, oferecendo durabilidade e resistência
                superior para sua cobertura.
              </h3>
            </li>
            <li className="hidden">
              <h2>Pintura Eletrostática</h2>
              <h3>
                Um método de aplicação de tinta que garante uma cobertura
                uniforme e durável em telhas metálicas, proporcionando uma
                aparência estética e resistência à corrosão.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Pintada</h2>
              <h3>
                Telhas que passaram pelo processo de pintura para adicionar cor
                e proteção à superfície, proporcionando durabilidade e estética
                atraente.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Forro Pintada</h2>
              <h3>
                Telhas pintadas especialmente projetadas para uso em forros,
                oferecendo uma aparência limpa e acabamento elegante para o
                interior de edifícios.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Forro Colorida</h2>
              <h3>
                Telhas coloridas projetadas para uso em forros, adicionando um
                toque de cor e estilo aos espaços interiores.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Termoacústica Pintada</h2>
              <h3>
                Telhas termoacústicas que passaram pelo processo de pintura,
                oferecendo isolamento térmico e acústico juntamente com opções
                de cores vibrantes.
              </h3>
            </li>
            <li className="hidden">
              <h2>Telha Termoacústica Colorida</h2>
              <h3>
                Telhas termoacústicas disponíveis em uma variedade de cores,
                oferecendo isolamento térmico e acústico juntamente com
                personalização estética.
              </h3>
            </li>
          </ul>
        </section>
      </Center>
    </div>
  );
}
