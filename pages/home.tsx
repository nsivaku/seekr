import next from "next";
import React, { use } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

const lostItems = ["Airpods", "Wallet", "Keys", "Phone", "Bottles"];
enum Phase {
  Typing,
  Pausing,
  Deleting,
}
const TYPING_DELAY = 300;
const PAUSING_DELAY = 500;
const DELETING_DELAY = 100;

export default function HomePage() {
  const [phase, setPhase] = useState(Phase.Typing);
  const [lostItem, setLostItem] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable scrolling when the component mounts
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      // Enable scrolling when component unmounts
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  });
  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextTypedItem = lostItems[selectedIndex].slice(
          0,
          lostItem.length + 1
        );
        if (lostItem === nextTypedItem) {
          setPhase(Phase.Pausing);
          return;
        }
        const timeout = setTimeout(() => {
          setLostItem(nextTypedItem);
        }, TYPING_DELAY);
        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!lostItem) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(lostItems[nextIndex] ? nextIndex : 0);
            setPhase(Phase.Typing);
          }, DELETING_DELAY);
          return () => clearTimeout(timeout);
        }
        const nextRemaining = lostItems[selectedIndex].slice(
          0,
          lostItem.length - 1
        );
        const timeout = setTimeout(() => {
          setLostItem(nextRemaining);
        }, DELETING_DELAY);
        return () => clearTimeout(timeout);
      }
      case Phase.Pausing:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, PAUSING_DELAY);
        return () => clearTimeout(timeout);
    }
  }, [phase, lostItem, selectedIndex]);
  return (
    <div
      className="bg-opacity-0 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <img
        className="backdrop-opacity-0 absolute"
        src="/compass-fade.svg"
        alt="compass"
        style={{ left: "40%" }}
      />
      <div className="h-10 bg-opacity-0"></div>
      
      <div className="prose">
        <h2 className="flex flex-col lg:block text-center text-6xl text-white font-bold bg-opacity-0">
          <span className="mb-2 lg:mb-0 bg-opacity-0 drop-shadow-2xl relative">Lost Your</span>{" "}
          <span className="blinking-cursor text-rose-600 italic bg-opacity-0 drop-shadow-2xl relative ">
            {lostItem}
          </span>
          <span className="mb-2 lg:mb-0 bg-opacity-0 relative">?</span>
        </h2>
        
        <div className="h-10 bg-opacity-0"></div>
        <center>
          <div className="text-5xl">
            <h1 className="m-0 text-white">20</h1>
            <h4 className="text-4xl mt-0 mb-20">items recovered</h4>
          </div>
          
        </center>
        <div className="h-10 bg-opacity-0"></div>
        <div className="flex items-center justify-center bg-opacity-0">
          <Link href="/lost" className="btn btn-primary glass w-1/4 h-1/3"> Start Seeking </Link>
        </div>
      </div>
    </div>
  );
}
