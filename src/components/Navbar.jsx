"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      callbackURL: "/signin",
    });
  };

  return (
    <div className="border-b bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto px-4">

        {/* Logo */}
         <Image
            src={"/logo.png"}   
            alt="logo"
            loading="eager"
            width={150}
            height={90} 
            className="object-cover h-auto w-auto"
          />
        {/*<h3 className="font-black text-lg">SunCart.</h3>*/}

        {/* Desktop Menu */} 
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li className="text-base"><Link href="/">Home</Link></li>
          <li className="text-base"><Link href="/all-product">All Product</Link></li>
          <li className="text-base"><Link href="/profile">Profile</Link></li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {!user ? (  
            <>
              <Link href="/register">
                <Button size="sm" variant="flat">Register</Button>
              </Link>
              <Link href="/login">
                <Button size="sm" className="bg-orange-500 text-white">Login</Button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  src={user?.image || ""}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name ? user.name.charAt(0) : "U"}
                </Avatar.Fallback>
              </Avatar>

              <Button size="sm" color="danger" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}

        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 border-t">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/all-product" onClick={() => setOpen(false)}>All Product</Link>
          <Link href="/profile" onClick={() => setOpen(false)}>Profile</Link>

          <div className="pt-3 border-t">
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link href="/signup">
                  <Button variant="flat" className="w-full">Sign Up</Button>
                </Link>
                <Link href="/signin">
                  <Button className="w-full bg-orange-500 text-white">Sign In</Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image src={user?.image || ""} />
                    <Avatar.Fallback>
                      {user?.name ? user.name.charAt(0) : "U"}
                    </Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm">{user?.name}</span>
                </div>

                <Button color="danger" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}; 

export default Navbar;   