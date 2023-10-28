import React from "react";
import Tile from "../components/tile";
import data from "../data.json";
import Home from "../components/NavBar"
interface BoardProps {
  rows: number;
  cols: number;
}

const Board: React.FC<BoardProps> = ({ rows, cols }) => {
  return (
    <div>
      <Home />
      <div className="board">
      <div className="grid grid-cols-3 gap-4 ">
        {data.images.map((tileData, j) => (
          <Tile
            key={j}
            src={tileData.src}
            title={tileData.title}
            alt={tileData.alt}
            description={tileData.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Board;
