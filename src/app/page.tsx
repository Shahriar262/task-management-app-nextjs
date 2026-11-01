import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar></Sidebar>
      <main className="flex-1 mt-6 pl-16 md:pl-6">
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}
