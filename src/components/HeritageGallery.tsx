import { ArrowRight } from "lucide-react";

export const HeritageGallery = () => {
  return (
    <section className="bg-leather py-24 text-parchment overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-6xl text-gold">
              Stockyard & Salon
            </h2>
            <p className="font-mono text-lg text-parchment/80 leading-relaxed max-w-md">
              From the dust of the pen to the velvet of the parlor. 
              Our lineage carries the weight of history in every heavy step.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="group flex items-center gap-4 border border-gold px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-gold hover:text-oxblood transition-colors duration-300">
              View Full Gallery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Brutalist Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {/* Item 1 - Tall */}
          <div className="md:row-span-2 relative group overflow-hidden border border-gold/20">
            <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/gentry-spur/main/public/images/dog-sire.jpg" 
              alt="Sire Portrait" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[.3]" 
            />
            <div className="absolute inset-0 bg-oxblood/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-6 bg-oxblood/90 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="font-mono text-gold text-xs uppercase block mb-1">Stud</span>
              <span className="font-serif text-xl">The Duke</span>
            </div>
          </div>

          {/* Item 2 - Wide */}
          <div className="md:col-span-2 relative group overflow-hidden border border-gold/20">
             <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/gentry-spur/main/public/images/texture-parchment.jpg" 
              alt="Detail Texture" 
              className="h-full w-full object-cover opacity-50" 
            />
             <div className="absolute inset-0 flex items-center justify-center">
                 <h3 className="font-serif text-5xl md:text-7xl text-gold/20 uppercase font-black tracking-tighter">
                     Bloodline
                 </h3>
             </div>
             <div className="absolute inset-0 p-8 flex items-end">
                 <p className="font-mono text-sm max-w-xs bg-leather/80 p-4 border-l-2 border-gold">
                     "Character is not made in a crisis — it is only exhibited."
                 </p>
             </div>
          </div>

          {/* Item 3 */}
          <div className="relative group overflow-hidden border border-gold/20">
            <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/gentry-spur/main/public/images/dog-dam.jpg" 
              alt="Dam Portrait" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale" 
            />
             <div className="absolute bottom-0 left-0 p-4 w-full">
               <div className="bg-parchment text-oxblood px-4 py-2 inline-block font-mono text-xs font-bold uppercase">
                 Champion Line
               </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative group overflow-hidden border border-gold/20 bg-oxblood flex flex-col justify-center items-center p-8 text-center">
             <div className="border-4 border-gold p-8 w-full h-full flex flex-col justify-center items-center gap-4 hover:bg-gold hover:text-oxblood transition-colors duration-300 cursor-pointer">
                <span className="font-serif text-4xl font-bold">Inquire</span>
                <span className="font-mono text-xs uppercase tracking-widest">Reserve a Puppy</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageGallery;
