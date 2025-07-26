import Hero from "@/components/Hero";
import HouseParts from "@/components/HouseParts";
import Inspiration from "@/components/Inspiration";
import ProductsShow from "@/components/ProductsShow";

export default function Home() {
  return (
    <>
   
        <main>
          <section className="Hero mb-2">
            <Hero />
          </section>
          <section className="HouseParts mb-2">
            <HouseParts />
          </section>
          <section className="ProductsShow mb-2">
            <ProductsShow />
          </section>
          <section>
            <div className="Inspiration mb-2">
              <Inspiration />
            </div>
          </section>
        </main>
    
    </>
  );
}
