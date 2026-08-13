import Image from "next/image";
import { FiArrowDownRight, FiArrowUpRight, FiMapPin } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="top" className="hero-grid scroll-mt-28 pb-20 pt-6 sm:pb-28 sm:pt-10">
      <div className="max-w-3xl">
        <div className="eyebrow mb-7">
          <span className="status-dot" />
          Available for ambitious AI work
        </div>

        <h1 className="text-balance text-[clamp(3.2rem,9vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
          I build AI that
          <span className="hero-gradient block pb-2">earns its place.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-balance text-lg leading-8 text-muted sm:text-xl">
          I&apos;m Sumit, an AI Engineer turning complex data, enterprise systems, and language models into useful products that work in the real world.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="button-primary">
            Explore my work <FiArrowDownRight aria-hidden="true" />
          </a>
          <a href="mailto:sumit341@icloud.com" className="button-secondary">
            Start a conversation <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>

      <aside className="hero-card" aria-label="About Sumit">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-slate-200 dark:bg-slate-800">
          <Image
            src="/sumit_ai.jpg"
            width={680}
            height={680}
            priority
            className="aspect-square w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0"
            alt="Portrait of Sumit"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-5 pb-5 pt-16 text-white">
            <p className="flex items-center gap-2 text-sm"><FiMapPin /> Melbourne, Australia</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-4">
          <div className="metric-card">
            <strong>5+</strong>
            <span>years building</span>
          </div>
          <div className="metric-card">
            <strong>1M</strong>
            <span>AI requests / day</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
