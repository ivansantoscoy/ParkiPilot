import React from 'react';
import { Search, Layers, LocateFixed, Plus, Star, Utensils, Coffee, Watch, MapPin } from 'lucide-react';

interface HomeProps {
  mode?: 'home' | 'map';
}

export default function Home({ mode = 'home' }: HomeProps) {
  return (
    <main className="relative w-full h-full pt-20 pb-24 flex-1 overflow-hidden bg-[#00132e]">
      {/* Map Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://wsrv.nl/?url=https://i.pinimg.com/736x/f8/fb/29/f8fb29066ab2ec5c19bc090e2fe880ad.jpg&output=webp"
          alt="Amusement Park Aerial View"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        {/* Dark Overlay to make UI readable */}
        <div className="absolute inset-0 bg-[#00132e]/40"></div>
        {/* Subtle grid line overlay for that "Map/Radar" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Floating Search Bar */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] z-40">
        <div className="bg-surface-container-highest/80 backdrop-blur-xl rounded-full p-1 shadow-2xl flex items-center gap-3 pr-4 border border-outline-variant/20">
          <div className="bg-primary-container text-on-primary w-10 h-10 rounded-full flex items-center justify-center">
            <Search size={20} />
          </div>
          <input 
            type="text" 
            placeholder={mode === 'home' ? "Find rides, dining, or restrooms..." : "Locate family members..."}
            className="bg-transparent border-none focus:ring-0 text-on-surface placeholder-on-surface-variant w-full font-medium outline-none"
          />
        </div>
      </div>

      {/* RIDES (Faded in map mode to focus on wristbands) */}
      <div className={`transition-opacity duration-500 ${mode === 'map' ? 'opacity-40' : 'opacity-100'}`}>
        {/* Neon Racer */}
        <div className="absolute top-[20%] left-[15%] z-10 flex flex-col items-center">
          <div className="bg-primary-container text-on-primary px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border-2 border-surface animate-pulse">
            <span className="font-bold text-sm">45 min</span>
          </div>
          <div className="mt-1 bg-surface-container-high/90 backdrop-blur-md px-3 py-1 rounded-lg border border-outline-variant/30 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">Neon Racer</span>
          </div>
        </div>

        {/* Kraken's Revenge */}
        <div className="absolute top-[25%] right-[15%] z-10 flex flex-col items-center">
          <div className="bg-error-container text-on-error-container px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border-2 border-surface">
            <span className="font-bold text-sm">110 min</span>
          </div>
          <div className="mt-1 bg-surface-container-high/90 backdrop-blur-md px-3 py-1 rounded-lg border border-outline-variant/30 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">Kraken's Revenge</span>
          </div>
        </div>

        {/* Galactic Drop */}
        <div className="absolute bottom-[25%] right-[20%] z-10 flex flex-col items-center">
          <div className="bg-primary-container text-on-primary px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border-2 border-surface">
            <span className="font-bold text-sm">15 min</span>
          </div>
          <div className="mt-1 bg-surface-container-high/90 backdrop-blur-md px-3 py-1 rounded-lg border border-outline-variant/30 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">Galactic Drop</span>
          </div>
        </div>

        {/* Splash Mountain 2.0 */}
        <div className="absolute bottom-[20%] left-[20%] z-10 flex flex-col items-center">
          <div className="bg-primary-container text-on-primary px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border-2 border-surface">
            <span className="font-bold text-sm">30 min</span>
          </div>
          <div className="mt-1 bg-surface-container-high/90 backdrop-blur-md px-3 py-1 rounded-lg border border-outline-variant/30 shadow-xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">Splash Mtn 2.0</span>
          </div>
        </div>
      </div>

      {/* HOME MODE: Food & Restrooms */}
      {mode === 'home' && (
        <div className="animate-in fade-in duration-500">
          {/* Food 1 */}
          <div className="absolute top-[40%] left-[40%] z-20 flex flex-col items-center">
            <div className="bg-orange-500 text-white p-2 rounded-full shadow-lg border-2 border-surface">
              <Utensils size={16} />
            </div>
            <div className="mt-1 bg-surface-container-highest/90 backdrop-blur-md px-2 py-1 rounded-lg border border-outline-variant/30 shadow-xl">
              <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface">Cosmic Burgers</span>
            </div>
          </div>

          {/* Food 2 */}
          <div className="absolute bottom-[40%] right-[40%] z-20 flex flex-col items-center">
            <div className="bg-orange-500 text-white p-2 rounded-full shadow-lg border-2 border-surface">
              <Coffee size={16} />
            </div>
            <div className="mt-1 bg-surface-container-highest/90 backdrop-blur-md px-2 py-1 rounded-lg border border-outline-variant/30 shadow-xl">
              <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface">Churro Stand</span>
            </div>
          </div>

          {/* Restroom 1 */}
          <div className="absolute top-[45%] left-[10%] z-20 flex flex-col items-center">
            <div className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg border-2 border-surface">
              <span className="font-bold text-xs">WC</span>
            </div>
          </div>

          {/* Restroom 2 */}
          <div className="absolute bottom-[45%] right-[10%] z-20 flex flex-col items-center">
            <div className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg border-2 border-surface">
              <span className="font-bold text-xs">WC</span>
            </div>
          </div>
        </div>
      )}

      {/* MAP MODE: Registered Wristbands */}
      {mode === 'map' && (
        <div className="animate-in fade-in zoom-in-95 duration-500">
          {/* Wristband 1 */}
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-tertiary-container animate-ping opacity-75"></div>
              <div className="bg-tertiary-container text-on-tertiary-container p-2.5 rounded-full shadow-[0_0_20px_rgba(0,241,255,0.6)] border-2 border-surface relative z-10">
                <Watch size={20} />
              </div>
            </div>
            <div className="mt-2 bg-surface-container-highest/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-tertiary-container/50 shadow-2xl">
              <span className="text-xs font-bold tracking-wider text-tertiary">Leo (Son)</span>
            </div>
          </div>

          {/* Wristband 2 */}
          <div className="absolute bottom-[30%] left-[60%] z-30 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-tertiary-container animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
              <div className="bg-tertiary-container text-on-tertiary-container p-2.5 rounded-full shadow-[0_0_20px_rgba(0,241,255,0.6)] border-2 border-surface relative z-10">
                <Watch size={20} />
              </div>
            </div>
            <div className="mt-2 bg-surface-container-highest/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-tertiary-container/50 shadow-2xl">
              <span className="text-xs font-bold tracking-wider text-tertiary">Emma (Daughter)</span>
            </div>
          </div>
        </div>
      )}

      {/* Map Layer Controls */}
      <div className="absolute right-6 bottom-32 flex flex-col gap-3 z-40">
        <button className="w-12 h-12 bg-surface-bright/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center text-primary-fixed border border-outline-variant/15 active:scale-90 transition-all">
          <Layers size={24} />
        </button>
        <button className="w-12 h-12 bg-surface-bright/90 backdrop-blur-xl rounded-xl shadow-xl flex items-center justify-center text-primary-fixed border border-outline-variant/15 active:scale-90 transition-all">
          <LocateFixed size={24} />
        </button>
        <button className="w-12 h-12 bg-primary-container text-on-primary rounded-xl shadow-xl flex items-center justify-center active:scale-90 transition-all">
          <Plus size={24} />
        </button>
      </div>

      {/* Live Status Card (Bento Style) */}
      <div className="absolute bottom-28 left-6 right-6 z-40 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {mode === 'home' ? (
          <>
            <div className="flex-shrink-0 w-48 bg-surface-container/90 backdrop-blur-2xl rounded-2xl p-4 border border-outline-variant/20 shadow-2xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">Live Alert</span>
                <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              </div>
              <h3 className="text-on-surface font-headline font-bold text-sm leading-tight">Parade starting in 12 mins at Main St.</h3>
            </div>

            <div className="flex-shrink-0 w-48 bg-primary-container text-on-primary rounded-2xl p-4 shadow-2xl">
              <div className="flex justify-between items-start mb-2">
                <span className="text-on-primary/60 text-[10px] font-bold uppercase tracking-widest">Recommended</span>
                <Star size={16} className="fill-current" />
              </div>
              <h3 className="font-headline font-bold text-sm leading-tight">Star Cruiser has lowest wait time today!</h3>
            </div>
          </>
        ) : (
          <div className="flex-shrink-0 w-full bg-surface-container/95 backdrop-blur-2xl rounded-2xl p-4 border border-tertiary-container/30 shadow-[0_0_25px_rgba(0,241,255,0.15)]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-tertiary text-[10px] font-bold uppercase tracking-widest">Family Tracking Active</span>
              <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse shadow-[0_0_8px_rgba(0,241,255,0.8)]"></span>
            </div>
            <div className="flex items-center gap-3 mt-1">
              <div className="bg-surface-container-highest p-2 rounded-lg">
                <MapPin size={20} className="text-tertiary-container" />
              </div>
              <div>
                <h3 className="text-on-surface font-headline font-bold text-sm leading-tight">All members located</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">Updated just now • Within park bounds</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
