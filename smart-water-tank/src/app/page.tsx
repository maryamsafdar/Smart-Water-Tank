'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-white bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">

      {/* Diagonal Top-Left Waves */}
      <div className="absolute -top-32 -left-48 w-[150%] -rotate-12 z-0">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#2563eb" fillOpacity="0.3" d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,0L0,0Z" />
        </svg>
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#3b82f6" fillOpacity="0.4" d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L0,0Z" />
        </svg>
      </div>

      {/* Diagonal Bottom-Right Waves */}
      <div className="absolute -bottom-32 -right-48 w-[150%] rotate-12 z-0">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#2563eb" fillOpacity="0.3" d="M0,160L60,165.3C120,171,240,181,360,181.3C480,181,600,171,720,181.3C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,0L0,0Z" />
        </svg>
        <svg className="w-full" viewBox="0 0 1440 320">
          <path fill="#3b82f6" fillOpacity="0.4" d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,165.3C1200,149,1320,139,1380,133.3L1440,128L1440,0L0,0Z" />
        </svg>
      </div>

      {/* Twinkling Stars */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Logo with glow */}
      <div className="relative z-10 animate-float-light mb-6">
        <div className="absolute inset-0 scale-110 blur-2xl bg-white opacity-10 rounded-full" />
        <div className="relative z-10">
          <Image src="/logo.png" alt="Smart Water Tank Logo" width={300} height={300} />
        </div>
      </div>

      {/* Heading */}
      <h1 className="z-10 text-3xl md:text-5xl font-bold tracking-wider text-white drop-shadow-lg animate-pulse">
        Smart Water Tank
      </h1>
    </div>
  );
}
