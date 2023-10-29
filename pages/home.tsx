import next from "next";
import React from "react";
import { useState, useEffect } from "react";

const lostItems = ["Airpods", "Wallet", "Keys", "Phone", "Water Bottles"];
enum Phase {
  Typing,
  Pausing,
  Deleting,
}
const TYPING_DELAY = 100;
const PAUSING_DELAY = 300;
const DELETING_DELAY = 50;

export default function HomePage() {
  const [phase, setPhase] = useState(Phase.Typing);
  const [lostItem, setLostItem] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <div>
      <h2 className="flex flex-col lg:block text-center text-4xl font-bold text-primary">
        <span className="mb-2 lg:mb-0">Lost Your</span>{" "}
        <span className="text-blue-600 blinking-cursor text-secondary">
          {lostItem}
        </span>
        ?
      </h2>
    </div>
  );
}
