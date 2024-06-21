const Home = () => {
  return (
    <section className="mt-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Welcome to Book Haven
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-center">
          Discover your next favorite book from our vast collection of genres
          and authors.
        </p>
        <a
          href="#shop"
          className="bg-white text-blue-500 hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Home;
