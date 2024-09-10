import ServiceCard, { ServiceCardHover } from '../services/ServiceCard';

export default function Services() {
  const servicesOffered = [
    {
      title: 'Full Wraps',
      description: 'We offer a wide range of wraps for your vehicle.',
    },
    {
      title: 'Partial Wraps',
      description: 'We offer a wide range of wraps for your vehicle.',
    },
    {
      title: 'Chrome Deletes',
      description: 'We offer a wide range of wraps for your vehicle.',
    },
    {
      title: 'Ceramic Coating',
      description: 'We offer a wide range of wraps for your vehicle.',
    },
    {
      title: 'Detailing',
      description: 'We offer a wide range of wraps for your vehicle.',
    },
    {
      title: 'Tinting - Coming Soon',
      description: 'We offer a wide range of wraps for your vehicle.',
    },
  ];
  return (
    <div className="container flex flex-col items-center justify-center gap-10 py-10">
      <h1 className="text-4xl font-bold">Services</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {servicesOffered.map((service, index) => (
          <ServiceCard id={service.title} key={index} title={service.title} description={service.description} />
        ))}
      </div>{' '}
      <h1 className="text-4xl font-bold">Services</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {servicesOffered.map((service, index) => (
          <ServiceCardHover key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
}
