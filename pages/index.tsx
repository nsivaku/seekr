import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import HomePage from "./home";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}
