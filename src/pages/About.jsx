import cycle from "../assets/cycle.jpg"
const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src={cycle}
          alt="Logistics"
          className="rounded-lg shadow-lg" data-aos="fade-right"
        />

        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-dark mb-4">
            Fast Logistics
          </h2>
          <p className="text-white-600 mb-6">
            We provide global logistics services with a focus on reliability,
            speed, and safety.
          </p>

          <ul className="space-y-4">
            <li> Secure Transportation</li>
            <li> Warehousing</li>
            <li> Packaging</li>
          </ul>

          <button className="mt-6 bg-primary px-6 py-3 text-white rounded">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
