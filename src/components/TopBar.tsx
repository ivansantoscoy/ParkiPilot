import React from 'react';
import { Menu } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#00132e] shadow-none">
      <div className="flex items-center justify-between px-6 py-4 w-full">
        <div className="flex items-center gap-4">
          <button className="text-primary-container hover:bg-surface-bright transition-colors active:scale-95 duration-200 p-2 rounded-full">
            <Menu size={24} />
          </button>
          <h1 className="font-headline font-black text-2xl tracking-tight text-primary-container italic">
            ParkPilot
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-primary-container/20 overflow-hidden">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACpN1m_9muB7FVZLCqdcWITNLsSS5UlRMjBsXMNW8f-PinSjwh-UpFWgHaDb3jFUQBO2YB8vVEFs7pd7OxRUI2sMLdFmtguP9CqxorNViLt1TavPVzRR-xuYS0HmNO3uu6mIzdDE8EazK2p6PoVgFv-GaLDETqFGC2E-pC7hJ4jntV4LT0md5gEj15neqR5ateXhO9DjFOoo0ZqIvi2gafTNzVV6EG6xD2z2zgRQmM0O0cfHO3L2ca9W9_xB3l5Np5nf2WCxSZmrFC" 
            alt="User profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-[#041f41] h-px w-full"></div>
    </header>
  );
}
