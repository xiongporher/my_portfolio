const Experience = () => {
  return (
    <section className="py-12 border-y border-border bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Experience", value: "1 Years" },
          { label: "Projects", value: "10+" },
          { label: "Clients", value: "5+" },
          { label: "Availability", value: "Remote" },
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left">
            <div className="text-2xl font-black text-blue-600">
              {stat.value}
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
