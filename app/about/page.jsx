function AboutPage() {
  return (
    <div className="flex flex-col items-center mt-32 min-h-screen gap-6 w-full px-10 md:px-6 lg:px-4 xl:px-0 max-w-4xl mx-auto text-center ">
      <h1 className="text-4xl font-bold text-gray-800">About Logo AI</h1>

      <p className="text-lg text-gray-600 leading-relaxed">
        Logo AI is your creative assistant for generating unique and memorable
        logo ideas using the power of artificial intelligence. Whether you're
        launching a startup, rebranding a business, or exploring fresh concepts,
        Logo AI helps you get inspired quickly with tailored designs based on
        your vision and industry.
      </p>

      <div className="text-left mt-8 w-full space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            ✨ How It Works
          </h2>
          <p className="text-gray-600">
            Simply enter a description of your brand, product, or idea — and
            Logo AI will generate logo ideas complete with visual themes,
            typography suggestions, and stylistic inspirations. Each result is
            based on your input and tuned for creativity and relevance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🎯 Why Use Logo AI?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Instantly brainstorm logo directions</li>
            <li>Save time and spark creativity</li>
            <li>No design skills needed</li>
            <li>Great for startups, freelancers, and branding pros</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 ">
            💡 Start Creating
          </h2>
          <p className="text-gray-600">
            Ready to discover the perfect logo concept? Try out the generator on
            our homepage and let AI help shape your brand’s identity!
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
