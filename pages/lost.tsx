import React from "react";
import Tile from "../components/tile";
import data from "../data.json";
import NavBar from "../components/NavBar";

interface BoardProps {
  rows: number;
  cols: number;
}

const Board: React.FC<BoardProps> = ({ rows, cols }) => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-6">
        <div className="prose my-3">
          <h1 className="text-white">Lost Items</h1>
        </div>
        <div className="container mx-auto" style={{ marginTop: "50px" }}>
          <div className="board">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
              {data.images.map((tileData, j) => (
                <Tile
                  key={j}
                  src={tileData.src}
                  title={tileData.title}
                  location={tileData.location}
                  alt={tileData.alt}
                  date={tileData.date}
                  phone={tileData.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
