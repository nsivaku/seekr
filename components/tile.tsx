import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Tile(props) {
  return (
    <Link href="/messenger">
      <button>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={props.src}
              alt={props.alt}
              className="object-contain w-full h-full"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </button>
    </Link>
  );
}
