"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import PumpControl from "@/components/PumpControl";
import TankDisplay from "@/components/TankDisplay";

export default function Dashboard() {
  const router = useRouter();
  const router1 = useRouter();

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-white via-gray-100 to-white text-gray-800 flex justify-center items-start pt-4 pb-6 px-6 overflow-hidden">
      
      {/* Top Diagonal Blurred Waves — reduced height and opacity */}
      <div className="absolute top-0 left-[-20%] w-[160%] rotate-[10deg] z-0 filter blur-lg opacity-40">
        <svg className="w-full h-[150px]" viewBox="0 0 1440 320">
          <path fill="#c7d2fe" fillOpacity="0.8" d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,0L0,0Z" />
        </svg>
      </div>

      {/* Bottom Diagonal Blurred Waves */}
      <div className="absolute bottom-[-10%] right-[-20%] w-[160%] rotate-[-10deg] z-0 filter blur-xl opacity-70">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#c7d2fe" fillOpacity="0.9" d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L0,320Z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center z-10 w-full max-w-5xl mt-2">
        <div className="w-full text-center mb-6">
          <Header title="Tank Water Level" />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <div className="w-full md:w-1/2 border-2 border-black rounded-2xl p-4 bg-white shadow-xl">
            <TankDisplay level={0} />
          </div>
          <div className="w-full md:w-1/2 border-2 border-black rounded-2xl p-4 bg-white shadow-xl">
            <PumpControl />
          </div>
        </div>

        <div className="mt-6 w-full md:w-1/2 space-y-4">
          <button
            onClick={() => router.push("/Weather")}
            className="w-full border-2 border-black bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            aria-label="Check Local Weather"
          >
            CHECK LOCAL WEATHER
          </button>
          <button
            onClick={() => router1.push("/WaterLevel")}
            className="w-full border-2 border-black bg-blue-500 hover:bg-blue-400 text-white rounded-xl py-4 text-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            aria-label="Settings"
          >
            SETTINGS
          </button>
        </div>
      </div>
    </div>
  );
}
