import HookahScroll from "@/components/HookahScroll";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";

export default function Home() {
  return (
    <main className="bg-black">
      <HookahScroll />
      <OurStory />
      <ProductSection />
      <Footer />
    </main>
  );
}
