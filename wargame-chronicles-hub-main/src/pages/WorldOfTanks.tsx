
import Navigation from "@/components/Navigation";

const WorldOfTanks = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="hero-section bg-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">World of Tanks</h1>
          <p className="text-xl text-muted-foreground">
            Experience legendary tank warfare with over 600 armored vehicles.
          </p>
        </div>
      </section>

      <section className="features-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Historical Accuracy</h3>
              <p className="text-muted-foreground">Carefully recreated tanks from different eras</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Strategic Gameplay</h3>
              <p className="text-muted-foreground">Plan your moves and coordinate with teammates</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Regular Updates</h3>
              <p className="text-muted-foreground">New content and improvements every month</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorldOfTanks;
