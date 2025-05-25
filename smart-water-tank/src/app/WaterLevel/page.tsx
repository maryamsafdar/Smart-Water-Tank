"use client";

import TankLevel from "@/components/TankLevel";

export default function TankLevelPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-white via-blue-100 to-white text-gray-800 flex justify-center items-center p-6 overflow-hidden">

      {/* Top Diagonal Blurred Waves */}
      <div className="absolute top-[-10%] left-[-20%] w-[160%] rotate-[10deg] z-0 filter blur-xl opacity-70">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#c7d2fe" fillOpacity="0.9" d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#bfdbfe" fillOpacity="0.9" d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

      {/* Bottom Diagonal Blurred Waves */}
      <div className="absolute bottom-[-10%] right-[-20%] w-[160%] rotate-[-10deg] z-0 filter blur-xl opacity-70">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#c7d2fe" fillOpacity="0.9" d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#bfdbfe" fillOpacity="0.9" d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

      {/* Main TankLevel Component */}
      <div className="z-10">
        <TankLevel />
      </div>
    </div>
  );
}
