import Hero from "@/components/Hero";
import HeroNav from "@/components/HeroNav";
import HouseParts from "@/components/HouseParts";
import Navbar from "@/components/Navbar";
import ProductsShow from "@/components/ProductsShow";

export default function Home() {
  return (
    <>
      <div className=" w-[90%] min-h-screen relative mx-auto  ">
        <nav>
          <Navbar />
        </nav>
        <main>
          <section className="Hero mb-2">
            <HeroNav />
            <Hero />
          </section>
          <section className="HouseParts mb-2">
            <HouseParts />
          </section>
          <section className="ProductsShow mb-2">
            <ProductsShow />
          </section>
        </main>
      </div>
    </>
  );
}
