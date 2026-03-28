import React from 'react';
import { Nfc, Battery, CreditCard, Shield, ChevronRight } from 'lucide-react';

export default function Wristband() {
  return (
    <main className="pt-24 pb-32 px-6 flex flex-col items-center min-h-screen max-w-md mx-auto flex-1 w-full">
      {/* Instructional Header */}
      <section className="text-center mb-10 w-full">
        <h2 className="font-headline font-extrabold text-3xl text-on-surface mb-3 tracking-tight">Wristband Pairing</h2>
        <p className="text-on-surface-variant font-medium">Tap your wristband to pair</p>
      </section>

      {/* Pairing Interface (NFC/QR Area) */}
      <section className="relative w-full aspect-square flex items-center justify-center mb-12">
        {/* Animated Background Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border-2 border-primary-container/10 pulse-ring"></div>
          <div className="absolute w-80 h-80 rounded-full border border-primary-container/5 animate-ping"></div>
        </div>

        {/* Main Scanning Anchor */}
        <div className="relative w-56 h-56 rounded-3xl bg-surface-container-high flex flex-col items-center justify-center shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent"></div>
          <div className="z-10 bg-primary-container text-on-primary w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            <Nfc size={36} />
          </div>
          <span className="z-10 font-headline font-bold text-lg text-primary-fixed tracking-wide">READY TO SCAN</span>
          
          {/* Decorative QR Corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-primary-container rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-primary-container rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-primary-container rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-primary-container rounded-br-lg"></div>
        </div>
      </section>

      {/* Status & Bento Details */}
      <section className="w-full space-y-4">
        {/* Connection Status */}
        <div className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between border border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-tertiary shadow-[0_0_10px_rgba(0,241,255,0.5)]"></div>
            <span className="font-headline font-bold text-on-surface">Connected</span>
          </div>
          <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">PilotBand v2.4</span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Battery Info */}
          <div className="bg-surface-container p-5 rounded-2xl flex flex-col gap-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <Battery size={24} className="text-primary-fixed" />
              <span className="font-headline font-bold text-2xl text-on-surface">84%</span>
            </div>
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Battery Life</p>
              <p className="text-xs text-on-tertiary-container font-medium">Approx. 14 hrs left</p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-surface-container p-5 rounded-2xl flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <CreditCard size={24} className="text-primary-fixed" />
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-[#eb001b] border border-surface-container z-10"></div>
                <div className="w-6 h-6 rounded-full bg-[#f79e1b] border border-surface-container"></div>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Linked Payment</p>
              <p className="text-xs text-on-surface font-semibold">Mastercard •••• 8812</p>
            </div>
          </div>
        </div>

        {/* Full Width Action */}
        <div className="bg-gradient-to-r from-surface-container-highest to-surface-container p-5 rounded-3xl flex items-center gap-4 group cursor-pointer hover:bg-surface-bright transition-all">
          <div className="w-12 h-12 rounded-2xl bg-primary-container/10 flex items-center justify-center">
            <Shield size={24} className="text-primary-container" />
          </div>
          <div className="flex-1">
            <h4 className="font-headline font-bold text-on-surface">Secure Lock</h4>
            <p className="text-xs text-on-surface-variant">Lock band if lost or stolen</p>
          </div>
          <ChevronRight size={24} className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
        </div>
      </section>
    </main>
  );
}
