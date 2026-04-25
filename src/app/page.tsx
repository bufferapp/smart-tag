import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Flow } from "@/components/flow";
import { Specs } from "@/components/specs";
import { Program } from "@/components/program";
import { VideoSection } from "@/components/video";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Flow />
        <VideoSection />
        <Specs />
        <Program />
      </main>
      <Footer />
    </>
  );
}
