export default function AboutUs() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-row gap-12 bg-[#f8f8ff] py-8">
        <div className="w-1/2">
          <div className="aspect-square h-full w-auto rounded-xl bg-black" />
        </div>
        <div className="flex w-1/2 flex-col gap-12">
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
    </div>
  );
}
