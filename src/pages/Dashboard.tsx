import Home from "../components/Home";
import { Sidebar } from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import { cn } from "../lib/utils";
import TopRightMenu from "../components/TopRightMenu";

export const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-black text-green-400 font-mono">
      {/* sidebar */}
      <aside className={cn("w-16 sm:w-16")}>
        <Sidebar className="hidden sm:flex sm:flex-col" />
        <MobileSidebar className="sm:hidden" />
      </aside>

      <TopRightMenu />

      <main className="">
        {/* Dashboard */}
        <Home />
      </main>
      {/*  */}
    </div>
  );
};
export default Dashboard;
