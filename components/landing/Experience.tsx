const Experience = () => {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
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
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
