import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton} from "@clerk/nextjs";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  const imgSrc =
    "https://www.pxpng.com/public/uploads/preview/-11621687998ytrgnduxoh.png";

  return (
    <header className="w-full h-12 text-black font-semibold mx-4 flex justify-between items-center ">
      <SignedIn>
        <div className="hidden md:flex justify-between items-center space-x-4">
          {/* Use Image component for rendering images */}
          <div className="hidden md:flex space-x-6 w-6/12 justify-between">
            {navItems.map((item, index) => (
              <a href={item.link} key={index}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex md:hidden">Ansh</div>
      </SignedIn>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Button asChild className="rounded-full " size={"lg"}>
          <Link href={"/sign-in"}>Login</Link>
        </Button>
      </SignedOut>
    </header>
  );
};

export default NavBar;
