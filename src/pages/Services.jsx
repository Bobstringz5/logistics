const services = [
  {
    title: "Safe Delivery",
    desc: "We ensure your products arrive safely and on time.",
  },
  {
    title: "Quick Transport",
    desc: "Fast and efficient transport services worldwide.",
  },
  {
    title: "Air Freight",
    desc: "Reliable air cargo for urgent deliveries.",
  },
  {
    title: "Service Technology",
    desc: "Advanced tracking and logistics technology.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="bg-white dark:bg-gray-800 p-8 text-center shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <button className="bg-primary px-4 py-2 text-white rounded">
              More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
