import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Destination from "./components/Destination";
import Section from "./components/Section";
export default function Home() {
  return(
    <main>
      <Hero />
      <Destination />
      <Section />
    </main>
  )
}
