import Hero from "@/components/Hero/Hero";
import LatestProducts from "@/components/LatestProducts/LatestProducts";

export default function Home() {

  // console.log(process.env.apiKey)
  return (
    <>
      <Hero/>
      <LatestProducts/>
    </>
  );
}
