import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Wristband from './components/Wristband';
import Deals from './components/Deals';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home mode="home" />;
      case 'map':
        return <Home mode="map" />;
      case 'wristband':
        return <Wristband />;
      case 'deals':
        return <Deals />;
      default:
        return <Home mode="home" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary">
      <TopBar />
      <div className="flex-1 flex flex-col relative">
        {renderScreen()}
      </div>
      <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />
    </div>
  );
}
