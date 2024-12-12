"use client"

import React from "react"
import Image from "next/image";
import { Countdown } from "./countdown";

export default function ComingSoonPage() {
    return (
        <div className="flex flex-col items-center text-center">
        <div className="flex items-center space-x-4 w-full">
          <div className="flex-col w-full items-center">
            <h1 className="font-alex-brush text-3xl text-blue-800 md:text-5xl lg:text-6xl flex justify-start">
              Khát vọng vươn mình
            </h1>
            <h1 className="font-alex-brush text-3xl text-blue-800 md:text-5xl lg:text-6xl flex justify-end">
              cùng đất nước
            </h1>
          </div>
          <Image
            src="/flyinglegend-logo.png"
            alt="Flying Legend Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-start">
          <Image
            src="/plane.png"
            alt="Airplane"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-bank-gothic text-2xl font-bold tracking-wider text-green-700 md:text-4xl lg:text-5xl">
            FLYING LEGEND VIETNAM
          </h2>
          <p className="text-xl font-semibold text-white md:text-2xl">
            Coming Soon
          </p>
          <Countdown targetDate="2024-12-19T00:00:00" />
        </div>
      </div>
    )
}