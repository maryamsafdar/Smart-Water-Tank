import Image from "next/image";

interface TankDisplayProps {
    level: number;
  }
  
  export default function TankDisplay({ level }: TankDisplayProps) {
    return (
      <div className="flex flex-col items-center">
        <Image src="/logo1.png" alt="Tank" width={300} height={300} />
        <p className="mt-4 text-xl font-medium">Level: {level}%</p>
      </div>
    );
  }