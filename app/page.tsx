import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/Navbar';
import AboutUs from '@/components/sections/AboutUs';
import ContactUs from '@/components/sections/ContactUs';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Wraps from '@/components/sections/Wraps';

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[100dvw] flex-col items-center justify-between overflow-x-hidden bg-main lg:overflow-x-visible">
      <Navbar />
      <Hero />
      <AboutUs />
      <Wraps />
      <Services />
      <Gallery />
      <ContactUs />
      <Footer />
    </main>
  );
}
