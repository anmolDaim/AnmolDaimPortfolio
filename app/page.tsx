import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { MySkills } from "@/components/MySkills";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-white flex flex-col mx-auto overflow-hidden">
      <div >
        <FloatingNav navItems={navItems} />
        <div className=" flex justify-center items-center flex-col mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
        <div className="w-full bg-black-100">
        <Grid />
        </div>
        <RecentProject />
        <MySkills/>
        {/* Full width and black background for Clients */}
        <div className="w-full bg-black-100">
          <Clients />
        </div>
        {/* Full width and black background for Experience */}
        <div className="w-full bg-black-100">
          <Experience />
        </div>
        <div className="flex justify-center items-center flex-col mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <Approach />
        </div>
        <div className="w-full bg-black-100">
        <Footer />
        </div>
      </div>
    </main>
  );
}
