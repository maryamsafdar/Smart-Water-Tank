import Image from "next/image";

interface WeatherCardProps {
  temperature: number;
  humidity: number;
  raining: string;
}

export default function WeatherCard({
  temperature,
  humidity,
  raining,
}: WeatherCardProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-gray-800 overflow-hidden">

      {/* Background Waves */}
      <div className="absolute top-[-10%] left-[-20%] w-[160%] rotate-[10deg] z-0 filter blur-xl opacity-70 pointer-events-none">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#c7d2fe" fillOpacity="0.9" d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L0,320Z" />
        </svg>
      </div>

      <div className="absolute bottom-[-10%] right-[-20%] w-[160%] rotate-[-10deg] z-0 filter blur-xl opacity-70 pointer-events-none">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#bfdbfe" fillOpacity="0.9" d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,320L0,320Z" />
        </svg>
      </div>

      {/* Weather Info */}
      <div className="relative z-10 w-full max-w-3xl text-center font-semibold">
        <h2 className="text-2xl font-bold mb-6">Current Weather</h2>

        <div className="flex justify-start mb-6">
          <Image src="/Heat-wave.png" alt="Sun" width={200} height={200} />
        </div>

        <div className="space-y-4 text-xl text-gray-800">
          <p>
            Temperature: <span className="text-blue-600 font-bold">{temperature} ℃</span>
          </p>
          <p>
            Humidity: <span className="text-blue-600 font-bold">{humidity}%</span>
          </p>
          <p>
            Raining: <span className="text-blue-600 font-bold">{raining}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
