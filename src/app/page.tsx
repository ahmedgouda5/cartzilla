import Hero from "@/components/Hero";
import HeroNav from "@/components/HeroNav";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="  w-[90%] min-h-screen relative mx-auto ">
        <Navbar />
        <main>
          <section className="Hero mb-2">
            <HeroNav />
            <Hero />
          </section>
        </main>
      </div>
    </>
  );
}
