"use client";
import Image from "next/image";
import { useState } from "react";

export default function TankLevel() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  return (
    <div className="min-h-screen w-full flex justify-center items-start pt-1 text-gray-800">
      <div className="p-4 w-full max-w-md backdrop-blur-md">
        <div className="flex flex-col items-center space-y-6">

          {/* Logo */}
          <Image
            src="/logo1.png"
            alt="Water Tank"
            width={300}
            height={300}
            className="rounded-full"
          />

          {/* Title */}
          <h1 className="text-xl font-bold">Tank Water Level</h1>

          {/* Subtitle */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-800 mb-1">Settings</h2>
            <h3 className="text-lg text-gray-700">Tank Dimensions</h3>
          </div>

          {/* Inputs */}
          <div className="space-y-4 w-full">
            <div className="flex items-center justify-between">
              <label htmlFor="height" className="text-gray-700 font-medium">
                Tank Height:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-20 h-10 rounded-lg border border-gray-300 text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="text-gray-600">cm</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="width" className="text-gray-700 font-medium">
                Tank Width:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="width"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-20 h-10 rounded-lg border border-gray-300 text-center text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="text-gray-600">cm</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
