import Info from "./_components/info";
import Logolist from "./_components/logo-list";

function Dashboard() {
  return (
    <div className="flex flex-col items-center mt-32 gap-4 w-full px-10 h-full justify-center max-w-7xl mx-auto">
      <Info />
      <Logolist />
    </div>
  );
}
export default Dashboard;
