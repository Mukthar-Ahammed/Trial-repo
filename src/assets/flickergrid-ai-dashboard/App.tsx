
import React from 'react';
import { FlickeringGrid } from './components/FlickeringGrid';
import { LOGO_BASE64, GRID_CONFIG } from './constants';

const App: React.FC = () => {
  const maskStyle = {
    WebkitMaskImage: `url('${LOGO_BASE64}')`,
    WebkitMaskSize: '80%',
    WebkitMaskPosition: 'center',
    WebkitMaskRepeat: 'no-repeat',
    maskImage: `url('${LOGO_BASE64}')`,
    maskSize: '80%',
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
  } as const;

  return (
    <main className="relative flex w-full h-screen justify-center items-center bg-black overflow-hidden">
      {/* Subtle Background Flickering Grid */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]"
          {...GRID_CONFIG.background}
        />
      </div>

      {/* Main Logo Masked Grid Layer */}
      <div 
        className="relative z-10 w-[90vw] h-[90vh] max-w-[1000px] max-h-[1000px] animate-logo-pulse" 
        style={maskStyle}
      >
        <FlickeringGrid {...GRID_CONFIG.logo} />
      </div>

      {/* Center ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_60%)] pointer-events-none" />
    </main>
  );
};

export default App;
