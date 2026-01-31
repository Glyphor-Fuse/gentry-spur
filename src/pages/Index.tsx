import { GentryHero } from "@/components/GentryHero";
import { PedigreeLedger } from "@/components/PedigreeLedger";
import { HeritageGallery } from "@/components/HeritageGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-parchment selection:bg-gold selection:text-oxblood">
      <GentryHero />
      <PedigreeLedger />
      <HeritageGallery />
      
      {/* Simple Footer */}
      <footer className="bg-oxblood text-gold py-12 text-center border-t-8 border-gold">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl mb-4">GENTRY & SPUR</h2>
          <p className="font-mono text-sm opacity-60 uppercase tracking-widest">
            Fort Worth, TX • London, UK
          </p>
          <p className="mt-8 font-serif italic opacity-40 text-sm">
            © {new Date().getFullYear()} Hereditary Weight. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;