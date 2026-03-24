export function VisionSection() {
  return (
    <section className="py-32 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-semibold mb-6">Mission</h3>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
            Build a crash-resistant, high-performance, and elegant operating
            system that is easy to learn and use.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-semibold mb-6">Vision</h3>
          <p className="text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed">
            Empower the next generation of developers by providing a
            well-designed platform where learning, experimentation, and
            performance matter.
          </p>
        </div>
      </div>
    </section>
  );
}
