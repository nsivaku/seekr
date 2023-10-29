import next from "next";
import React from "react";
import { useState, useEffect } from "react";

const lostItems = ["Airpods", "Wallet", "Keys", "Phone", "Water Bottles"];
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    // Check if the user has a dark mode preference
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Disable scrolling when the component mounts
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
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
    <div className="bg-opacity-0 overflow-hidden">
      <img
        className="backdrop-opacity-0 absolute"
        src="/compass-white.svg"
        alt="compass"
        style={{ left: "40%" }}
      />
      <div className="h-10 bg-opacity-0"></div>
      <div className="flex items-center justify-center bg-opacity-0">
        <button className="btn glass w-1/4 h-1/3 bg-opacity-0"> Seek </button>
      </div>
      <div className="h-10 bg-opacity-0"></div>
      <h2 className="flex flex-col lg:block text-center text-4xl font-bold new-primary bg-opacity-0">
        <span className="mb-2 lg:mb-0 bg-opacity-0 relative">Lost Your</span>{" "}
        <span className="text-blue-600 blinking-cursor new-secondary italic bg-opacity-0 relative">
          {lostItem}
        </span>
        <span className="mb-2 lg:mb-0 bg-opacity-0 relative">?</span>
      </h2>
    </div>
  );
}
