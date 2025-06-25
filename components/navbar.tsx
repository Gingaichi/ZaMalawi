"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { createClient } from "@/utils/supabase/client"; // ✅

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false); // ✅ Track auth state
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserLoggedIn(!!session?.user);
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUserLoggedIn(false);
    window.location.href = "/"; // redirect to homepage
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-black shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div
          className="text-4xl font-extrabold 
            text-transparent bg-clip-text bg-gradient-to-r
            from-red-600 via-yellow-400 to-red-700 
            drop-shadow-[2px_4px_2px_rgba(0,0,0,0.3)] hover:scale-105 
            hover:drop-shadow-[4px_6px_4px_rgba(0,0,0,0.5)] transition-transform duration-300"
        >
          <Link href="/" className="hover:text-blue-600">
            Za Malawi
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-4 text-white ">
          {userLoggedIn ? (
            <button
              onClick={handleSignOut}
              className="hover:text-blue-600 text-sm text-red-500"
            >
              Sign out
            </button>
          ) : (
            <Link href="/login" className="text-green-600 text-sm">
              Login
            </Link>
          )}

          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
