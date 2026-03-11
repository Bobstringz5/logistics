import background from "../assets/ship.jpg"
const Hero = () => {
  return (

    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 bg-dark/60"></div>

      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            We Make Transport <br /> Fast And Safe
          </h1>
          <p className="mt-4 text-lg">
            Professional logistics solutions tailored for your business.
          </p>
          <button className="mt-6 bg-primary px-6 py-3 rounded text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
