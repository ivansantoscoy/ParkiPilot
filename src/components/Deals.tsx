import React from 'react';
import { Zap, QrCode, Users, ChevronRight, ArrowRight } from 'lucide-react';

export default function Deals() {
  return (
    <main className="pt-24 px-6 space-y-10 pb-32 flex-1 w-full max-w-md mx-auto">
      {/* Hero Section */}
      <section className="space-y-2">
        <p className="font-label text-primary-fixed-dim uppercase tracking-[0.2em] text-[10px] font-bold">Member Specials</p>
        <h2 className="font-headline text-4xl font-extrabold text-on-surface leading-tight">
          Your Daily<br/>
          <span className="text-primary-container">Park Perks</span>
        </h2>
      </section>

      {/* Featured Promo (Bento Large) */}
      <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-2xl group">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCqiOXSQ775A69EN9JvNmddHf_F8DNce_BNF0ufuYAIDzAGsYqaNf3HjjIEmgmNAUFb6PuGA3Xc8SdztK7AQJn7JLwxQln6CoO8LCM5idcL2RO4jHFDUv3Wafgrhf0LlUYEelgz4AtTTYWVBqpRYFmAmt2wdIKx8QmvnP7R_ci_Q5SusYm4xUvUH4EI_s19VS41wgZWfVCV78W9o7GqznPo5Lqn84bOcsQWjjbXklFYOhArrjGsgeH70L07buadvmbosJZZRE93j_m" 
          alt="20% off FastPass" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full space-y-4">
          <div className="inline-flex items-center gap-2 bg-tertiary-container/20 text-tertiary-fixed px-3 py-1 rounded-full backdrop-blur-md">
            <Zap size={16} className="fill-current" />
            <span className="text-[11px] font-bold uppercase tracking-wider">Most Popular</span>
          </div>
          
          <div>
            <h3 className="font-headline text-2xl font-bold text-white">20% off FastPass</h3>
            <p className="text-on-surface-variant text-sm mt-1">Skip the lines at all major thrill rides today.</p>
          </div>
          
          <button className="w-full bg-solar-gradient text-on-primary font-bold py-4 rounded-xl active:scale-95 duration-200 flex items-center justify-center gap-2">
            Claim Now
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Grid of Offers */}
      <div className="grid grid-cols-1 gap-6">
        {/* Deal Card 1 */}
        <div className="bg-surface-container rounded-xl overflow-hidden flex h-36">
          <div className="w-1/3 h-full">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRAR7LIKxrzBtLSgWo0LahJBvADI9IxYWoo1bKa7VQsiDEUiTjbqbpEmV1WGoY_C2svsrlBBtlQn9R03Jv2Y9ZsmKXS-gg2oq0wWogo6MF6kzlxPNZFM_09gCzT-XA-Nk2zvaiTDh5ve6CoZjQeTVnUFUYi2qAQJFvct6UqUVlZBtx0C6IZY52z-ahvqyx3Um3UsR27tbX6scTwEl3YVaw77T5KnyWZ5COtLjHLC6iTn_PKeSZYqeERj88OLtAvMYUg19iz2ya2CCs" 
              alt="Family Meal Deal" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h4 className="font-headline font-bold text-on-surface">Family Meal Deal</h4>
              <p className="text-on-surface-variant text-xs line-clamp-1">Buy 4, get 1 free at Pilot's Galley.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-primary-fixed-dim font-bold font-headline">$49.99</span>
              <button className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full text-xs font-bold active:scale-90 duration-150">Buy</button>
            </div>
          </div>
        </div>

        {/* Deal Card 2 */}
        <div className="bg-surface-container rounded-xl overflow-hidden flex h-36">
          <div className="w-1/3 h-full">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNHsscA3uElJh5yZIEJMJFGupHAOK5BmAZ-oJbPDDq7ePbiZpLcTw5yrjWKKbE9wE7TwYFlAw96U17XcWdPD8_zLpnokRiIEQjotnbbN3wvJC1aqhasWv1cQGIhT5uJPFR9KdtQg4ER8gnhKF9Ynnq6Ince1izz_a7Nkl6j63ibx_u86FwHZblmY8muH69S2kvIjmOPq7ideZMnfNUwl9UrVhUGR8CcdD8O4XqOHexviJquOBsljmBiHWUg2H1r5w2rSSLir7X0zC0" 
              alt="Merchandise Discount" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h4 className="font-headline font-bold text-on-surface">15% Off Gear</h4>
              <p className="text-on-surface-variant text-xs line-clamp-1">Applicable at all Pilot Outposts stores.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <QrCode size={14} className="text-tertiary" />
                <span className="text-on-surface-variant text-[10px]">PILOT15</span>
              </div>
              <button className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full text-xs font-bold active:scale-90 duration-150">Claim</button>
            </div>
          </div>
        </div>

        {/* Deal Card 3 */}
        <div className="bg-surface-container rounded-xl overflow-hidden flex h-36">
          <div className="w-1/3 h-full">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO-TZqLdUEPo1apLQPYdXSABDjYDrcL1q2VIQjMWDn1RqfbDAe_MIHlOrcsrKcxah4UZcmmFcS7eO-42ahuZg4JwzYB0JxgqCbsczMS-p1zKiO6gjrIKVm6xJOcpPyPw1bCcIiBgKu_L4Vx0e2OhNKE7N6fJinfYQzrAHMDsoWAdpyvLw1pd_Cs-R6p9J95yIj5JrK9OnEU6dR8EZE2QDhBhU-h9zlBPOOW3pxGjD_NbjaieyBItkHsFuTn88T7tA99-hv5q5huSgT" 
              alt="Splash Pass" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h4 className="font-headline font-bold text-on-surface">Splash Pass</h4>
              <p className="text-on-surface-variant text-xs line-clamp-1">Unlimited access to Water World for $15.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-primary-fixed-dim font-bold font-headline">$15.00</span>
              <button className="bg-primary-container text-on-primary px-4 py-1.5 rounded-full text-xs font-bold active:scale-90 duration-150">Buy</button>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Section (Editorial Style) */}
      <section className="bg-surface-container-high rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 space-y-4">
          <Users size={32} className="text-primary-container" />
          <h3 className="font-headline text-xl font-bold">Invite Your Crew</h3>
          <p className="text-on-surface-variant text-sm">
            Send an invite to a friend and get a <span className="text-on-surface font-bold">FREE</span> snack voucher when they purchase their first ticket.
          </p>
          <button className="text-primary-fixed font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
            Share referral link
            <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
