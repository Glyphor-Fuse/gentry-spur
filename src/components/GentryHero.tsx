import { motion } from "motion/react";

export const GentryHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-oxblood text-parchment">
      {/* Background Image Layer with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/Glyphor-Fuse/gentry-spur/main/public/images/hero-bulldog.jpg"
          alt="Gentleman Bulldog in Barn"
          className="h-full w-full object-cover opacity-60 grayscale filter transition-all duration-1000 hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-oxblood via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex h-full flex-col justify-end pb-24 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="font-mono text-gold text-sm tracking-[0.3em] uppercase mb-4 border-l-2 border-gold pl-4">
            Est. 1924 • West Texas • Savile Row
          </h2>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-parchment mb-8">
            GENTRY <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-leather stroke-1 stroke-parchment">& SPUR</span>
          </h1>
          <p className="font-mono text-lg md:text-xl text-parchment/80 max-w-2xl leading-relaxed border-t border-gold/30 pt-6 mt-6">
            Hereditary Weight. We don't breed pets; we curate landed gentlemen with a Texas permit. 
            A collision of aristocracy and grit.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 z-20 flex flex-col items-center gap-2">
        <span className="font-mono text-xs text-gold uppercase tracking-widest rotate-90 origin-right translate-x-2">Scroll to Inspect</span>
        <div className="h-24 w-[1px] bg-gold/50" />
      </div>
    </section>
  );
};

export default GentryHero;
