import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Tile(props) {
  return (
    <div className="mx-2 h-full" >
        <div className="card card-side bg-gradient-to-r from-gray-600 to-gray-800 bg-opacity-50 shadow-xl h-full">
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
            <h4 className="font-extrabold text-white">Location</h4>
            <h4 className="text-gray-300">{props.location}</h4>
            <h4 className="font-extrabold text-white">Found</h4>
            <h4 className="text-gray-300">{props.date}</h4>
            <h4 className="font-extrabold text-white">Phone</h4>
            <h4 className="text-gray-300">{props.phone}</h4>
          </div>
        </div>
        </div>
    </div>
  );
}
