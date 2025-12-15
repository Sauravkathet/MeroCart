"use client"
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-slate-200 text-slate-600 bg-white">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        {/* Updated hover effects to slate-900 for high contrast on interaction */}
        <Link href="/" className="hover:text-slate-900 transition font-medium">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-slate-900 transition font-medium">
          Shop
        </Link>
        <Link href="/" className="hover:text-slate-900 transition font-medium">
          About Us
        </Link>
        <Link href="/cart" className="hover:text-slate-800 transition font-medium">
          My Cart
        </Link>
        <Link href="/" className="hover:text-slate-900 transition font-medium">
          Contact
        </Link>

        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-xs border border-slate-200 px-4 py-1.5 rounded-full hover:bg-slate-50 hover:border-slate-400 transition"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4 opacity-60 hover:opacity-100 transition" src={assets.search_icon} alt="search icon" />
        
        {user ? (
          <UserButton />
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-slate-900 transition font-medium">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button 
            onClick={() => router.push('/seller')} 
            className="text-xs border border-slate-200 px-4 py-1.5 rounded-full hover:bg-slate-50 transition"
          >
            Admin/Seller Dashboard
          </button>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-slate-900 transition font-medium">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;