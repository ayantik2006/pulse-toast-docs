"use client";

import { Erica_One } from "next/font/google";
import { Knewave } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Toaster, toast } from "pulse-toast";
import { X } from "lucide-react";

const ericaOne = Erica_One({
  subsets: ["latin"],
  weight: "400",
});

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const position = {
    1: "top-left",
    2: "top-center",
    3: "top-right",
    4: "bottom-left",
    5: "bottom-center",
    6: "bottom-right",
  } as const;
  const [selectedPosition, setSelectedPosition] =
    useState<keyof typeof position>(1);

  return (
    <div className="min-h-screen bg-[#f5ddb9] flex flex-col items-center text-white px-20 h-full [@media(max-width:620px)]:p-5">
      <Toaster position={position[selectedPosition]} />
      <div
        className={`flex flex-wrap items-center justify-center gap-3 px-20 pt-20 pb-20 ${ericaOne.className} `}
      >
        <div className="font text-4xl bg-orange-600 p-4 rounded-lg shadow-[4px_4px_0px_4px_black]">
          PULSE
        </div>
        <div className="font text-4xl bg-red-700 p-4 rounded-lg shadow-[4px_4px_0px_4px_black]">
          TOAST
        </div>
      </div>
      <div>
        <p
          className={`text-2xl font-semiold text-amber-800 text-center ${knewave.className}`}
        >
          One of the best and lightweight React notifications in the world🌎!
        </p>
      </div>
      <div className="py-10 flex flex-col gap-3 items-center">
        <Link
          href={"https://github.com/ayantik2006/pulse-toast"}
          target="_blank"
          className="bg-white text-amber-900 px-10 py-3 text-lg font-semibold rounded-md shadow-[0_0_5px] flex gap-3 items-center justify-center hover:scale-[1.1] duration-300 [@media(max-width:413px)]:px-5 [@media(max-width:413px)]:text-[0.9rem] "
        >
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            height={24}
            width={24}
            alt="github-logo"
          />

          <p>Give a Star ⭐</p>
        </Link>
        <p className="text-neutral-600 underline">version 1.0.0</p>
      </div>
      <div className="flex flex-col items-center gap-10 w-full">
        <h1 className="text-2xl font-semibold bg-amber-950 px-3 py-2 rounded-md w-fit">
          Examples
        </h1>
        <div className="border-dotted border-4 border-amber-950 p-7 rounded-md w-full items-center flex-wrap mb-10 flex gap-10 h-full [@media(max-width:620px)]:p-5">
          <div className="flex-1 h-full flex flex-col gap-5">
            {/* <h2 className="text-black font-semibold text-xl">Position</h2> */}
            <div className="flex flex-col flex-wrap gap-5">
              <div
                className={`px-5 font-semibold rounded-full py-2 cursor-pointer ${selectedPosition == 1 ? "bg-amber-950" : "text-amber-950 border-3"}`}
                onClick={() => {
                  setSelectedPosition(1);
                  toast({ message: "Hello developer!", icon: "👋" });
                }}
              >
                top-left
              </div>
              <div
                className={`px-5 font-semibold rounded-full py-2 cursor-pointer ${selectedPosition == 2 ? "bg-amber-950 shadow-[0_0_4px_black]" : "text-amber-950 border-3"}`}
                onClick={() => {
                  setSelectedPosition(2);
                  toast({ message: "Hello developer!", icon: "👋" });
                }}
              >
                top-center
              </div>
              <div
                className={`px-5 font-semibold rounded-full py-2 cursor-pointer ${selectedPosition == 3 ? "bg-amber-950 shadow-[0_0_4px_black]" : "text-amber-950 border-3"}`}
                onClick={() => {
                  setSelectedPosition(3);
                  toast({ message: "Hello developer!", icon: "👋" });
                }}
              >
                top-right
              </div>
            </div>
            <div className="flex flex-col flex-wrap gap-5">
              <div
                className={`px-5 font-semibold rounded-full py-2 cursor-pointer ${selectedPosition == 4 ? "bg-amber-950 shadow-[0_0_4px_black]" : "text-amber-950 border-3"}`}
                onClick={() => {
                  setSelectedPosition(4);
                  toast({ message: "Hello developer!", icon: "👋" });
                }}
              >
                bottom-left
              </div>
              <div
                className={`px-5 font-semibold rounded-full py-2 cursor-pointer ${selectedPosition == 5 ? "bg-amber-950 shadow-[0_0_4px_black]" : "text-amber-950 border-3"}`}
                onClick={() => {
                  setSelectedPosition(5);
                  toast({ message: "Hello developer!", icon: "👋" });
                }}
              >
                bottom-center
              </div>
              <div
                className={`px-5 font-semibold rounded-full py-2 cursor-pointer ${selectedPosition == 6 ? "bg-amber-950 shadow-[0_0_4px_black]" : "text-amber-950 border-3"}`}
                onClick={() => {
                  setSelectedPosition(6);
                  toast({ message: "Hello developer!", icon: "👋" });
                }}
              >
                bottom-right
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center p-4 h-full flex-col gap-5">
            <button
              className="bg-green-700 px-4 py-2 rounded-full hover:opacity-90 cursor-pointer duration-300 w-full"
              onClick={() => {
                toast({
                  message: "This is a success message!",
                  type: "success",
                  duration: 3000,
                });
              }}
            >
              Success
            </button>
            <button
              className="bg-red-700 px-4 py-2 rounded-full hover:opacity-90 cursor-pointer duration-300 w-full"
              onClick={() => {
                toast({
                  message: "This is a failure message!",
                  type: "failure",
                  duration: 3000,
                });
              }}
            >
              Failure
            </button>
            <button
              className="bg-orange-600 px-4 py-2 rounded-full hover:opacity-90 cursor-pointer duration-300 w-full"
              onClick={() => {
                toast({
                  message: "This is a happy icon message!",
                  duration: 3000,
                  icon: "😁",
                });
              }}
            >
              Custom Icon
            </button>
            <button
              className="bg-neutral-200 px-4 py-2 rounded-full hover:opacity-90 cursor-pointer duration-300 w-full text-black border"
              onClick={() => {
                toast({
                  message: "This is a default message!",
                  duration: 3000,
                });
              }}
            >
              Default Message
            </button>
            <button
              className="bg-pink-400 px-4 py-2 rounded-full hover:opacity-90 cursor-pointer duration-300 w-full text-black border"
              onClick={() => {
                toast({
                  message: "This has a close button!",
                  duration: 3000,
                  closeButton:true,
                  icon:"😮"
                });
              }}
            >
              With close button
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 mb-10">
        <h1 className="text-2xl font-semibold bg-amber-950 px-3 py-2 rounded-md w-fit">
          How to Use
        </h1>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-black font-semibold">Install using npm</h1>
            <div className="bg-[#efb867] w-fit px-3 py-1 rounded text-amber-950 font-serif">
              <pre>npm i pulse-toast</pre>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-black font-semibold">Use The Toaster</h1>
            <div className="bg-[#efb867] w-fit px-3 py-1 rounded text-amber-950 font-serif">
              <pre>{"<div><Toaster/></div>"}</pre>
            </div>
            <p className="text-black bg-amber-100 p-2 px-5 rounded-md">
              Add the Toaster component at the top of the div. It has position
              prop of string type which has 4 values - top-left, top-center,
              top-right, bottom-left, bottom-center, bottom-right.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-black font-semibold">Use The toast function</h1>
            <div className="bg-[#efb867] w-fit px-3 py-1 rounded text-amber-950 font-serif">
              <pre>{`toast({message:"Hello developer"})`}</pre>
            </div>
            <p className="text-black">
              The toast function is passed with an object with the following
              properties -
            </p>
            <div className="flex flex-col gap-2 items-center text-black">
              <div className="bg-amber-100 p-2 px-5 rounded-md">
                message(the toast message): type - string, compulsory - true
              </div>
              <div className="bg-amber-100 p-2 px-5 rounded-md">
                duration(the time after which toast disappears): type - number,
                compulsory - false, default: 3s(3000ms)
              </div>
              <div className="bg-amber-100 p-2 px-5 rounded-md">
                type: type - string, compulsory - false, values: success,
                failure
              </div>
              <div className="bg-amber-100 p-2 px-5 rounded-md">
                icon(you can add custom icon): type - string(emoji) |
                ReactNode(eg:lucide-react icon), compulsory - false
              </div>
              <div className="bg-amber-100 p-2 px-5 rounded-md">
                closeButton(clicking on it immediately closes the toast): type - boolean, compulsory - false, values: true, false
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 items-center justify-center text-amber-950 mt-10">
            <Link href={"https://www.linkedin.com/in/ayantiksarkar"} className="underline" target="_blank">LinkedIn</Link>
            <Link href={"https://github.com/ayantik2006/pulse-toast"} className="underline" target="_blank">GitHub</Link>
          </div>
          <div className="w-full flex gap-4 items-center justify-center text-amber-950">
            &copy; 2026 pulse-toast · Built by Ayantik Sarkar
          </div>
        </div>
      </div>
    </div>
  );
}
