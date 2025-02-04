const Timeline = () => {
  const events = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Wargaming was established in Minsk, Belarus"
    },
    {
      year: "2010",
      title: "World of Tanks",
      description: "Launch of the legendary World of Tanks game"
    },
    {
      year: "2013",
      title: "World of Warplanes",
      description: "Expansion into aerial combat gaming"
    },
    {
      year: "2015",
      title: "World of Warships",
      description: "Introduction of naval warfare to the portfolio"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Multiple studios worldwide and growing player base"
    }
  ];

  return (
    <div id="history" className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
      <div className="relative pl-8">
        {events.map((event, index) => (
          <div key={index} className="mb-12 timeline-dot relative">
            <div className="font-bold text-primary text-xl mb-2">{event.year}</div>
            <div className="font-semibold text-lg mb-1">{event.title}</div>
            <div className="text-muted-foreground">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;