import AboutUs from '@/components/sections/AboutUs';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Wraps from '@/components/sections/Wraps';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#f8f8ff] px-24">
      <Hero />
      <AboutUs />
      <Wraps />
      <Services />
    </main>
  );
}
