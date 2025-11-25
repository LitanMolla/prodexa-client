import Hero from "@/components/Hero/Hero";
import LatestProducts from "@/components/LatestProducts/LatestProducts";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";

export default function Home() {

  // console.log(process.env.apiKey)
  return (
    <>
      <Hero/>
      <LatestProducts/>
      <TestimonialsSection />
    </>
  );
}
