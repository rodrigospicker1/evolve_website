import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (<>
    <Header />
    <Hero />
    <Pricing />
    <Testimonials />
    <Footer />
  </>);
}
