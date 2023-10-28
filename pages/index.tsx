import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
