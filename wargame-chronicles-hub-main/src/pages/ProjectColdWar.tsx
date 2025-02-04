
import Navigation from "@/components/Navigation";

const ProjectColdWar = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="hero-section bg-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Project Cold War</h1>
          <p className="text-xl text-muted-foreground">
            Immerse yourself in the atmosphere of Cold War conflicts.
          </p>
        </div>
      </section>

      <section className="features-section py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Historical Setting</h3>
              <p className="text-muted-foreground">Experience Cold War era conflicts</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Modern Combat</h3>
              <p className="text-muted-foreground">Advanced warfare mechanics</p>
            </div>
            <div className="p-6 bg-card rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Global Conflict</h3>
              <p className="text-muted-foreground">Multiple theaters of operation</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectColdWar;
