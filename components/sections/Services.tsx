'use client';
import SampleImage from '@/public/img/samplewraps/wrap3.png';
import ServiceCard from '../services/ServiceCard';

export default function Services() {
  const servicesOffered = [
    {
      title: 'Full Wraps',
      description: 'Transform your vehicle with a complete color change.',
      longDescription: [
        "Our Full Wrap service offers a complete transformation of your vehicle's appearance.",
        'Choose from a wide range of colors and finishes to match your style.',
        'Protects the original paint from scratches, UV rays, and other environmental damage.',
        'Easily removable, allowing you to revert to the original paint or change colors as desired.',
      ],
      image: SampleImage,
    },
    {
      title: 'Partial Wraps',
      description: 'Customize specific parts of your vehicle for a unique look.',
      longDescription: [
        'Our Partial Wrap service allows you to highlight specific areas of your vehicle.',
        'Perfect for adding accents, logos, or unique designs to your car.',
        'Cost-effective way to achieve a custom look without a full wrap.',
        'Available for hoods, roofs, mirrors, and other sections of your vehicle.',
      ],
      image: SampleImage,
    },
    {
      title: 'Chrome Deletes',
      description: 'Give your vehicle a sleek, modern look by removing chrome accents.',
      longDescription: [
        'Chrome Deletes service provides a stylish and contemporary appearance by eliminating chrome accents.',
        'Ideal for achieving a stealthy, monochromatic look.',
        'Uses high-quality vinyl to cover chrome trims, emblems, and grilles.',
        'Enhances the overall aesthetic without permanent modifications.',
      ],
      image: SampleImage,
    },
    {
      title: 'Ceramic Coating',
      description: 'Protect your vehicle with a durable, high-gloss ceramic coating.',
      longDescription: [
        "Our Ceramic Coating service offers long-lasting protection for your vehicle's paint.",
        'Creates a hydrophobic surface that repels water, dirt, and contaminants.',
        "Enhances the shine and depth of your vehicle's color.",
        'Reduces maintenance time and effort with its easy-to-clean properties.',
      ],
      image: SampleImage,
    },
    {
      title: 'Detailing',
      description: 'Keep your vehicle in pristine condition with our comprehensive detailing services.',
      longDescription: [
        'Our Detailing service ensures your vehicle looks its best inside and out.',
        'Includes thorough cleaning, polishing, and protection for both the interior and exterior.',
        "Removes dirt, grime, and minor imperfections to restore your vehicle's original beauty.",
        'Tailored packages available to meet your specific needs and preferences.',
      ],
      image: SampleImage,
    },
    {
      title: 'Tinting - Coming Soon',
      description: 'Enhance privacy and reduce heat with professional window tinting.',
      longDescription: [
        'Our Tinting service offers a range of tint levels to suit your privacy and aesthetic preferences.',
        'Reduces glare and heat, making your driving experience more comfortable.',
        'Protects the interior from UV damage, reducing fading and cracking.',
        'Professionally installed to ensure a flawless, long-lasting finish.',
      ],
      image: SampleImage,
    },
  ];
  return (
    <section
      id="servicesBody"
      className="container flex flex-col items-center justify-center gap-10 px-4 py-10 lg:px-8"
    >
      <h1 className="text-4xl font-bold">Services</h1>
      <div className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-20">
        {servicesOffered.map((service, index) => (
          <ServiceCard id={service.title} key={index} {...service} />
        ))}
      </div>{' '}
    </section>
  );
}
