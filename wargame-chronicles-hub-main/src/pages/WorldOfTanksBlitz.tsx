
import Navigation from "@/components/Navigation";

const WorldOfTanksBlitz = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="hero-section bg-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">World of Tanks Blitz</h1>
          <p className="text-xl text-muted-foreground">
            Mobile tank warfare with realistic graphics and dynamic gameplay.
          </p>
        </div>
      </section>

      <section className="features-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Mobile Optimized</h3>
              <p className="text-muted-foreground">Designed specifically for mobile devices</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
              <p className="text-muted-foreground">Play with friends on different devices</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Quick Battles</h3>
              <p className="text-muted-foreground">Fast-paced 7v7 combat</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorldOfTanksBlitz;
