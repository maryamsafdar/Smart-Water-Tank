"use client";
import { useState } from "react";

export default function PumpControl() {
  const [auto, setAuto] = useState(false);
  const [manual, setManual] = useState(false);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-3">Pump Control</h3>
      <div className="flex justify-between items-center mb-2">
        <span>Control Pump Auto</span>
        <input type="checkbox" checked={auto} onChange={() => setAuto(!auto)} />
      </div>
      <div className="flex justify-between items-center">
        <span>Water Pump (Manual)</span>
        <input type="checkbox" checked={manual} onChange={() => setManual(!manual)} />
      </div>
    </div>
  );
}
