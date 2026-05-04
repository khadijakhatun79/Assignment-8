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
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={130}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          <li>
            <Link href="/" className="hover:text-orange-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/all-product" className="hover:text-orange-500 transition">
              Products
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-orange-500 transition">
              Profile
            </Link>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">

          {!user ? (
            <>
              <Link href="/register">
                <Button size="sm" variant="flat">
                  Register
                </Button>
              </Link>
              <Link href="/login">
                <Button size="sm" className="bg-orange-500 text-white">
                  Login
                </Button>
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
                  {user?.name?.charAt(0) || "U"}
                </Avatar.Fallback>
              </Avatar>

              <Button size="sm" color="danger" onClick={handleSignOut}>
                Logout
              </Button>
            </div>
          )}

        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-4 bg-white border-t">

          {/* Links */}
          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link href="/all-product" onClick={() => setOpen(false)} className="block">
            Products
          </Link>
          <Link href="/profile" onClick={() => setOpen(false)} className="block">
            Profile
          </Link>

          {/* Auth */}
          <div className="pt-4 border-t">

            {!user ? (
              <div className="flex flex-col gap-3">
                <Link href="/register">
                  <Button className="w-full" variant="flat">
                    Register
                  </Button>
                </Link>
                <Link href="/login">
                  <Button className="w-full bg-orange-500 text-white">
                    Login
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">

                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image src={user?.image || ""} />
                    <Avatar.Fallback>
                      {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm">{user?.name}</span>
                </div>

                <Button color="danger" onClick={handleSignOut}>
                  Logout
                </Button>

              </div>
            )}

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;