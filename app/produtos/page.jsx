import ProductCard from "../ui/product-card";
import { produtos } from "../data/produtos";
import Center from "../ui/center";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="px-5 py-5 text-xl font-medium">
      <Center>
        <h1 className="uppercase">Nossos Produtos</h1>
        <section id="telhas-metalicas">
          <h1 className="text-[32px] font-bold mt-10">Telhas Metálicas</h1>
          <ul className="md:flex flex-wrap gap-5 items-start justify-between">
            {produtos
              .filter((product) => product.name.toLowerCase().includes("telha"))
              .map((product) => (
                <li key={product.id}>
                  <Link href={`/produtos/${product.slug}`}>
                    <ProductCard
                      product_name={product.name}
                      image={product.image}
                      model={product.model}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        <section id="telhas-metalicas">
          <h1 className="text-[32px] font-bold mt-10">Cumeeira</h1>
          <ul className="md:flex flex-wrap gap-5 items-start justify-between">
            {produtos
              .filter((product) =>
                product.name.toLowerCase().includes("cumeeira")
              )
              .map((product) => (
                <li key={product.id}>
                  <Link href={`/produtos/${product.slug}`}>
                    <ProductCard
                      product_name={product.name}
                      image={product.image}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </Center>
    </div>
  );
}
