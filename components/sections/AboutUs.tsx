import AlexWrap from '@/public/img/Alex_Tesla.jpg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="flex min-h-screen w-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col gap-8 bg-[#f8f8ff] px-6 py-8 lg:flex-row lg:gap-16 lg:px-8">
        <div className="w-full lg:w-1/2">
          {/* <div className="aspect-square h-auto w-full rounded-xl bg-black" /> */}
          <Image
            src={AlexWrap}
            alt="Tesla Model S Matte Black"
            className="aspect-square h-auto w-full rounded-xl border-4 border-black object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-12">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl font-light">
            At 360 Auto Concepts, we specialize in delivering high-quality car wraps and automotive services with
            precision and care. Based in Arizona, our skilled team is passionate about transforming vehicles with
            top-tier vinyl wraps and ceramic coating packages. With 2 years of experience and a dedication to
            perfection, we ensure that every project reflects our commitment to excellence. Whether you&apos;re looking
            for a fresh new look or protection for your vehicle, 360 Auto Concepts has you covered.
          </p>
          <p className="text-xl font-light">
            Our team is dedicated to providing the best customer service and ensuring that every customer is satisfied
            with the results. We use the latest technology and equipment to ensure that every project is completed to
            the highest standards.
          </p>
        </div>
      </div>
    </section>
  );
}
