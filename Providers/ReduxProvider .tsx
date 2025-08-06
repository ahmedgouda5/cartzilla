"use client";
import HeroNav from "@/components/HeroNav";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "../store/store";
import AOSProvider from "@/components/AOSProvider";
import { useIsAuthPage } from "../hooks/useIsAuthPage";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
 const isAuthPage = useIsAuthPage();

  
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
              <nav className={isAuthPage ? "hidden" : "block"}>
                <Navbar />
              </nav>
              <section className={isAuthPage ? "hidden" : "block"}>
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
            <footer className={isAuthPage ? "hidden" : "block bg-gray-800"}>
              <Footer />
            </footer>
          </ThemeProvider>
        
        </Provider>
    </>
}
