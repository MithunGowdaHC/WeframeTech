import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OtherProducts from "@/components/OtherProducts";
import ProductDetails from "@/components/ProductDetails";
import SimilarProducts from "@/components/SimilarProducts";
import Features from "@/components/Features";
export default function Home() {
  return (
    <div>
      <Navbar />
      <ProductDetails />
      <SimilarProducts />
      <OtherProducts />
      <Features />
      <Banner />
      <Footer />
    </div>
  );
}
