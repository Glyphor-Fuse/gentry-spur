import { useState } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";

interface Dog {
  id: string;
  name: string;
  title: string;
  regNumber: string;
  notes: string;
  sire: string;
  dam: string;
}

const DOGS: Dog[] = [
  {
    id: "001",
    name: "Sir Winston of Lubbock",
    title: "The Ranch Hand",
    regNumber: "TX-992-BULL",
    notes: "Exceptional bone density. Temperament: Stoic but watchful. Prefers shade.",
    sire: "Lord Nelson",
    dam: "Dusty Rose"
  },
  {
    id: "002",
    name: "Lady Margaret",
    title: "The Matriarch",
    regNumber: "UK-221-EXP",
    notes: "Imported 2019. Wide chest. A true aristocrat—refuses to sit on bare ground.",
    sire: "King George V",
    dam: "Queen Victoria's Ghost"
  },
  {
    id: "003",
    name: "Barnaby Jones",
    title: "The Enforcer",
    regNumber: "TX-404-GRIT",
    notes: "Heavy wrinkle set. Undershot jaw perfection. Chase drive: Low. Nap drive: High.",
    sire: "Rusty Spur",
    dam: "Golden Ticket"
  },
  {
    id: "004",
    name: "Duchess Clementine",
    title: "The Debutante",
    regNumber: "UK-TX-HYB",
    notes: "Show quality topline. Coat: Red Brindle. Wants belly rubs, demands respect.",
    sire: "Sir Winston",
    dam: "Lady Margaret"
  }
];

export const PedigreeLedger = () => {
  const [hoveredDog, setHoveredDog] = useState<string | null>(null);

  return (
    <section className="py-24 bg-parchment text-oxblood relative">
       {/* Background Grid Lines simulating a ledger */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a040405_1px,transparent_1px),linear-gradient(to_bottom,#4a040405_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b-4 border-oxblood pb-4">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-oxblood mb-2">The Pedigree Ledger</h2>
            <p className="font-mono text-leather/70 uppercase tracking-widest">Inspection Required</p>
          </div>
          <div className="flex items-center gap-2 text-gold mt-4 md:mt-0">
            <Search className="w-5 h-5" />
            <span className="font-mono text-sm">Hover records to reveal handwritten notes</span>
          </div>
        </div>

        <div className="space-y-0 border-t-2 border-oxblood">
          {DOGS.map((dog) => (
            <div
              key={dog.id}
              className="group relative border-b border-oxblood/20 transition-all duration-300 hover:bg-white/40 cursor-crosshair"
              onMouseEnter={() => setHoveredDog(dog.id)}
              onMouseLeave={() => setHoveredDog(null)}
            >
              <div className="grid grid-cols-12 gap-4 py-6 px-4 items-center">
                {/* ID - Stencil Style */}
                <div className="col-span-2 md:col-span-1 font-mono text-leather/40 text-sm group-hover:text-oxblood transition-colors">
                  #{dog.id}
                </div>

                {/* Name & Title */}
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-serif text-2xl font-bold text-oxblood group-hover:scale-[1.02] origin-left transition-transform duration-300">
                    {dog.name}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-gold mt-1 group-hover:text-leather">
                    {dog.title}
                  </p>
                </div>

                {/* Reg Number */}
                <div className="col-span-6 md:col-span-2 font-mono text-sm text-leather/60">
                  {dog.regNumber}
                </div>

                 {/* Parents (Hidden on mobile, visible on desktop) */}
                 <div className="hidden md:block col-span-3 font-serif italic text-leather/60">
                  {dog.sire} x {dog.dam}
                </div>

                {/* Interaction Marker */}
                <div className="col-span-6 md:col-span-2 flex justify-end">
                   <span className="font-mono text-[10px] border border-oxblood/30 px-2 py-1 rounded-sm uppercase group-hover:bg-oxblood group-hover:text-parchment transition-colors">
                     View Record
                   </span>
                </div>
              </div>

              {/* The "Handwritten" Note Reveal */}
              <AnimatePresence>
                {hoveredDog === dog.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: "auto", scale: 1 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden bg-parchment border-l-4 border-gold ml-4 md:ml-12 mr-4 mb-4 shadow-inner"
                  >
                    <div className="p-6 font-handwriting text-xl md:text-2xl text-blue-900 rotate-1">
                      <span className="font-bold text-oxblood/50 font-mono text-xs uppercase block mb-2 tracking-widest not-italic -rotate-1">
                        Breeder's Annotation:
                      </span>
                      "{dog.notes}"
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PedigreeLedger;
