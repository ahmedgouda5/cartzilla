// app/providers.tsx
"use client";
import HeroNav from "@/components/HeroNav";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "../store/store";
import AOSProvider from "@/components/AOSProvider";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return  <>
      <AOSProvider />
      <Provider store={store}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-[90%] mx-auto min-h-screen relative overflow-hidden">
              <nav>
                <Navbar />
              </nav>
              <section>
                <HeroNav />
              </section>
              <main>{children}</main>
              <Toaster
                position="bottom-center"
                toastOptions={{
                  duration: 500,
                }}
              />
            </div>
            <footer className="bg-gray-800">
              <Footer />
            </footer>
          </ThemeProvider>
        
        </Provider>
    </>
}
