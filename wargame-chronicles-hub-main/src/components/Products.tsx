
import { ExternalLink } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "World of Tanks",
      description: "Experience legendary tank warfare with over 600 armored vehicles.",
      link: "/world-of-tanks"
    },
    {
      title: "World of Tanks Blitz",
      description: "Mobile tank warfare with realistic graphics and dynamic gameplay.",
      link: "/world-of-tanks-blitz"
    },
    {
      title: "Project Cold War",
      description: "Immerse yourself in the atmosphere of Cold War conflicts.",
      link: "/project-cold-war"
    }
  ];

  return (
    <div id="products" className="bg-muted py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <a
                  href={product.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
