import HomeProductCard from "../../home-product-card";
import MyButton from "../../button";
import Link from "next/link";

export default function ProductsGridCard() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        <HomeProductCard
          title="Telha Simples"
          image="/original/telha-simples.png"
          link="/produtos/telha-simples"
        />
        <HomeProductCard
          title="Telha Sanduíche"
          image="/original/telha-sanduiche.png"
          link="/produtos/telha-sanduiche"
        />
        <HomeProductCard
          title="Pintura Eletrostática"
          image="/original/pintura-eletrostatica-home.png"
          link="/produtos/pintura-eletrostatica"
        />
        <HomeProductCard
          title="Bobina Slitada"
          image="/bobina.svg"
          link="/produtos/bobina-slitada"
        />
        <HomeProductCard
          title="Cumeeira"
          image="/original/cumeeira.png"
          link="/produtos/cumeeira"
        />
        <HomeProductCard
          title="Parafusos"
          image="/original/parafusos.png"
          link="/produtos/parafusos"
        />
      </div>
      <div className="my-10">
        <Link href="/produtos">
          <MyButton text="Todos os Produtos" style="red-white" />
        </Link>
      </div>
    </>
  );
}
