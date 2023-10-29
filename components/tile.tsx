import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Tile(props) {
  return (
    <div className="mx-2 h-full" >
        <div className="card card-side bg-base-100 shadow-xl h-full">
          <figure className="w-1/2 h-full">
            <img
              src={props.src}
              alt={props.alt}
              className="object-cover h-full"
            />
          </figure>
        <div className="card-body w-1/2 m-0">
          <div className="prose">
            <h2 className="text-white">{props.title}</h2>
            <h4 className="text-white">Location</h4>
            <h4>{props.location}</h4>
            <h4 className="text-white">Found</h4>
            <h4>{props.date}</h4>
            <h4 className="text-white">Phone</h4>
            <h4 className="align-bottom">{props.phone}</h4>
          </div>
        </div>
        </div>
    </div>
  );
}
