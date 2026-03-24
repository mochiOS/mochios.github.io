import { Layers, Users, Shield } from "lucide-react";

export function ValueSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-semibold mb-20 text-center">
          Values
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Elegance & Integration
            </h3>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400">
              We pursue beauty in code and seamless integration—small,
              dependable primitives composed into a polished whole.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Open &amp; Flat Community
            </h3>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400">
              We foster an environment where everyone&apos;s voice matters and
              learning is encouraged—even for our youngest contributors.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-pink-500 to-orange-500 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Autonomy & Responsibility
            </h3>
            <p className="text-lg font-light text-gray-600 dark:text-gray-400">
              Members take ownership and ship reliable code—prioritizing
              stability and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
