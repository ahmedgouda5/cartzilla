import { ProfileForm } from "@/components/FormAuth";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6  container mx-auto my-8 ">
      <section className="md:col-span-2 flex flex-col  ">
        <h2 className="text-4xl font-bold  mb-20">Cartzilla</h2>
        <div>
          <h3 className="text-3xl font-semibold mb-4">Welcome back 👋</h3>
          <ProfileForm />
        </div>
      </section>

      <section className="md:col-span-3  hidden md:block bg-blue-200  rounded-lg shadow-lg">
        <Image
          src="/Register1.png"
          alt="Login Illustration"
          width={1000}
          height={1000}
          className="h-full "
        />
      </section>
    </div>
  );
}
