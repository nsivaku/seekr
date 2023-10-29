import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { storage } from "../firebase-config";
import Image from "next/image";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

export default function Leaderboard() {
  const [lost, setLost] = useState(true);
  const [activeTab, setActiveTab] = useState("lost");
  const [lostClass, setLostClass] = useState("btn btn-active");
  const [foundClass, setFoundClass] = useState("btn");

  const [image, setImage] = useState<File | null>();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const handleUpload = () => {
    const file = (document.getElementById("file") as HTMLInputElement).files![0];
    setImage(file);
  }

  const submitForm = async () => {
    if (image == null) {
      return;
    }
    const col = lost ? 'lost' : 'found';
    const storageRef = ref(storage, image.name);
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });

    const docRef = addDoc(collection(db, 'lost'), {
      name: name,
      location: location,
      phone: phone,
      image: image.name,
    });
  }

  return (
    <div>
      <NavBar />
      <div
        className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2"
        style={{ marginTop: "15px", minHeight: "100vh" }}
      >
        <div className="ml-8 prose">
          <h2 className="mb-4">Submit an Item</h2>
          <h4>Type</h4>
          <div className="btn btn-group" style={{ padding: "0", margin: "0" }}>
            <a
              className={lostClass}
              onClick={() => {
                setLost(true);
                setLostClass("btn btn-active");
                setFoundClass("btn");
              }}
            >
              Lost
            </a>
            <a
              className={foundClass}
              onClick={() => {
                setLost(false);
                setLostClass("btn");
                setFoundClass("btn btn-active");
              }}
            >
              Found
            </a>
          </div>
          <h4>Name of Item</h4>
          <input
            type="text"
            onChange={(e) => {e.preventDefault(); setName(e.target.value)}}
            placeholder="Airpods, wallet, keys, etc."
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <h4>Location</h4>
          <input
            type="text"
            onChange={(e) => {e.preventDefault(); setLocation(e.target.value)}}
            placeholder="Fetzer Gym 105, Hamilton 101, etc."
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <h4>Phone Number</h4>
          <input
            type="phone"
            onChange={(e) => {e.preventDefault(); setPhone(e.target.value)}}
            placeholder="123-456-7890"
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <h4>Image Upload</h4>
          <input
            onChange={(e) => handleUpload()}
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <br />
          <br />
          <button className="btn btn-secondary" type="submit" onClick={() => submitForm()}>Submit</button>
        </div>
        <Image
          src="/compass-white.svg"
          className="w-4/5 h-4/5 mx-auto brightness-75"
          alt=""
          width={450}
          height={450}
          style={{ marginLeft: "-20px" }}
        ></Image>
      </div>
    </div>
  );
}
