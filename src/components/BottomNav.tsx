import React from 'react';
import { Home, Compass, Watch, Tag } from 'lucide-react';

interface BottomNavProps {
  currentScreen: string;
  setScreen: (screen: string) => void;
}

export default function BottomNav({ currentScreen, setScreen }: BottomNavProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'map', label: 'Map', icon: Compass },
    { id: 'wristband', label: 'Wristband', icon: Watch },
    { id: 'deals', label: 'Deals', icon: Tag },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe rounded-t-[2rem] bg-[#00132e]/80 backdrop-blur-xl shadow-[0_-8px_24px_rgba(0,19,46,0.08)] border-t border-[#4d4732]/15">
      <div className="flex justify-around items-center h-20 px-4 w-full">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setScreen(item.id)}
              className={`flex flex-col items-center justify-center px-5 py-2 active:scale-90 duration-150 transition-all ${
                isActive 
                  ? 'bg-primary-container text-on-primary rounded-full' 
                  : 'text-on-surface-variant hover:text-white'
              }`}
            >
              <Icon size={24} className={isActive ? 'fill-current' : ''} />
              <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
