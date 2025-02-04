const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-black"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Shaping the Future of
          <span className="text-primary block mt-2">Digital Entertainment</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Since 1998, Wargaming has been crafting legendary games that bring millions of players together in epic battles across land, sea, and air.
        </p>
      </div>
    </div>
  );
};

export default Hero;