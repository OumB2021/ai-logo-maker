"use client";

import { usePathname } from "next/navigation";
import Navbar from "./index";

function NavRender() {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/" ? (
        <Navbar className={false} />
      ) : (
        <Navbar className={true} />
      )}
    </div>
  );
}
export default NavRender;
