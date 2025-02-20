import Navbar from "@/components/navbar";

function HomeLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar className={false} />
      {children}
    </div>
  );
}
export default HomeLayout;
