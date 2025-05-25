import Image from "next/image";

interface WeatherCardProps {
  temperature: number;
  humidity: number;
  raining: string;
}

export default function WeatherCard({ temperature, humidity, raining }: WeatherCardProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start pt-10 text-gray-800 overflow-hidden relative">

      {/* Background Waves - moved further up */}
      <div className="absolute top-[-20%] left-[-20%] w-[160%] rotate-[10deg] z-0 filter blur-xl opacity-70 pointer-events-none">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#c7d2fe" fillOpacity="0.9" d="..." />
        </svg>
      </div>

      <div className="absolute bottom-[-10%] right-[-20%] w-[160%] rotate-[-10deg] z-0 filter blur-xl opacity-70 pointer-events-none">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#bfdbfe" fillOpacity="0.9" d="..." />
        </svg>
      </div>

      {/* Weather Info */}
      <div className="relative z-10 w-full max-w-3xl text-center font-semibold">
        <h2 className="text-2xl font-bold mb-6">Current Weather</h2>

        <div className="flex justify-start mb-2">
          <Image src="/Heat-wave.png" alt="Sun" width={300} height={300} />
        </div>

        <div className="space-y-4 text-xl text-gray-800 text-left">
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
