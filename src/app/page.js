import Hero from "@/components/Hero/Hero";
import Image from "next/image";

export default function Home() {
  console.log(process.env.DATABASE_URL)
  return (
    <>
      <Hero/>
    </>
  );
}
