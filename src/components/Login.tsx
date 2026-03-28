import React, { useState } from 'react';
import { Compass, Mail, Lock, ArrowRight, Aperture, Apple, Timer, Bot, Ticket } from 'lucide-react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-mesh relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary-container/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-surface-bright/20 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-sm z-10 flex flex-col space-y-12">
        <header className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-surface-container flex items-center justify-center rounded-xl rotate-12 shadow-2xl">
              <Compass size={36} className="text-primary-container fill-current" />
            </div>
          </div>
          <h1 className="text-4xl font-headline font-black italic tracking-tighter text-primary-container">
            ParkPilot
          </h1>
          <p className="text-on-surface-variant font-medium tracking-wide uppercase text-[10px] bg-surface-container-high px-3 py-1 rounded-full inline-block">
            Navigational Intelligence
          </p>
        </header>

        <section className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-on-surface ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail size={20} className="text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
                </div>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="explorer@parkpilot.com"
                  className="w-full bg-surface-container-highest border-none text-on-surface placeholder:text-outline/50 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-container transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-on-surface ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={20} className="text-on-surface-variant group-focus-within:text-primary-container transition-colors" />
                </div>
                <input 
                  type="password" 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-highest border-none text-on-surface placeholder:text-outline/50 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-container transition-all outline-none"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" className="text-xs font-semibold text-primary-fixed-dim hover:text-primary-container transition-colors">
                  Forgot Password?
                </button>
              </div>
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-gradient-to-br from-primary-fixed to-primary-container text-on-primary font-headline font-extrabold text-lg py-4 rounded-xl shadow-[0_8px_24px_rgba(255,215,0,0.2)] active:scale-[0.98] transition-all hover:brightness-110 flex items-center justify-center gap-2"
              >
                Login
                <ArrowRight size={20} />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4 py-2">
            <div className="h-px flex-1 bg-surface-container-highest"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-outline">Social Entry</span>
            <div className="h-px flex-1 bg-surface-container-highest"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center py-3 px-4 bg-surface-container hover:bg-surface-bright transition-colors rounded-xl gap-2 text-on-surface text-sm font-semibold">
              <Aperture size={18} />
              Google
            </button>
            <button className="flex items-center justify-center py-3 px-4 bg-surface-container hover:bg-surface-bright transition-colors rounded-xl gap-2 text-on-surface text-sm font-semibold">
              <Apple size={18} />
              Apple
            </button>
          </div>
        </section>

        <footer className="text-center">
          <p className="text-on-surface text-sm font-medium">
            Don't have an account? 
            <a href="#" className="text-primary-container font-extrabold ml-1 hover:underline underline-offset-4 decoration-2">Sign up</a>
          </p>
        </footer>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex flex-wrap justify-center gap-6 px-6 opacity-30">
        <div className="flex items-center gap-2">
          <Timer size={12} />
          <span className="text-[10px] font-bold tracking-tighter uppercase">Live Wait Times</span>
        </div>
        <div className="flex items-center gap-2">
          <Bot size={12} />
          <span className="text-[10px] font-bold tracking-tighter uppercase">AI Route Sync</span>
        </div>
        <div className="flex items-center gap-2">
          <Ticket size={12} />
          <span className="text-[10px] font-bold tracking-tighter uppercase">FastPass+ Integrated</span>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYxYf-7HTMgzWBpJye82qIO5Aq9IzmHAatpLvq9Ad3yqSnVFQtObskNQ7D6SGoT8rUiiQcPTlI9V_PLVAseHZTN5BOGzbKp7hAwpHu_PvKIdsRxOaq1U3Tb37Dzw8SPTOwmAUk1h6jaOBuec2-UewQH_CLznNf-PXx0ly-ZVXgaIyunnvhJU5b_Xj2bFJwkpWbMutrcZSYaclzKuonriSP71Oq9mOZrQVhV441lWVYWcB1VllOHYm4iA3xThEWDVpV3KtX59vKaW4C')" }}
        ></div>
      </div>
    </main>
  );
}
