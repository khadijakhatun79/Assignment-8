"use client";

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-lg">SunCart.</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>

        {/* Right Side (Avatar / Login) */}
        <div className="hidden md:flex items-center gap-3">
          <Avatar size="sm" />
          <Button size="sm" onClick={handleSignOut}>
            Logout
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>

          <div className="flex items-center gap-3 mt-2">
            <Avatar size="sm"  />
            <Button size="sm" onClick={handleSignOut}>
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;