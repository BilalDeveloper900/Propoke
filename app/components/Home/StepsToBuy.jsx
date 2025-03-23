const steps = [
    {
      number: '1.',
      title: 'View Listing',
      description: `Find your dream home with Propoke Real Estate! Explore our exclusive listings featuring the best properties in prime locations. Whether you’re looking for a cozy apartment, a spacious family home, or a luxurious villa, we have the perfect option for you.`,
    },
    {
      number: '2.',
      title: 'Contact Us',
      description: `We’re here to help you find your dream home! Whether you have questions about a listing, need assistance with buying a property, or require expert real estate advice, our team is ready to assist you.`,
    },
    {
      number: '3.',
      title: 'Request a Visit',
      description: `Experience your dream home in person! Schedule a visit to any of our featured properties and let us guide you through every detail. Our team is here to ensure a smooth and personalized home tour.`,
    },
    {
      number: '4.',
      title: 'Rent The House',
      description: `Ready to make your dream home a reality? Our expert team is here to guide you through every step of the buying process, ensuring a smooth and hassle-free experience.`,
    },
  ];
  
  const StepsToBuy = () => {
    return (
      <section className="bg-[#0a0a0a] text-white px-6 py-20">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Easy Step to Buy Property on Propoke Real Estate
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Buying your dream home with Propoke Real Estate is simple and hassle-free!
            Follow these easy steps to secure your perfect property:
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="w-10 h-10 rounded-full bg-white text-black font-bold text-center flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
  
        {/* CTA at Bottom */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            Have questions about buying or selling a property with Propoke Real Estate? Check out our Frequently Asked Questions (FAQ).
          </p>
          <button className="border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
            See Our FAQ
          </button>
        </div>
      </section>
    );
  };
  
  export default StepsToBuy;
  