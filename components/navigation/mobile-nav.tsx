"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="p-4 flex sm:hidden justify-between items-center shadow-sm bg-[#1A1D23] text-[#F5F7FA]">
      <h1 className="text-xl font-semibold">My App</h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="p-0 w-64 bg-white shadow-xl overflow-hidden"
        >
          {/* Animated container */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="p-6 space-y-6"
          >
            <SheetHeader className="mt-4! p-0!">
              <SheetTitle className="text-xl">Sandip</SheetTitle>
              {/* <SheetDescription>
                Browse the main sections of the app.
              </SheetDescription> */}
            </SheetHeader>

            <nav className="flex flex-col space-y-2 text-[16px] font-semibold">
              <SheetClose asChild>
                <Link
                  href="#home"
                  className="uppercase hover:text-gray-600 transition"
                >
                  Home
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="#about"
                  className="uppercase hover:text-gray-600 transition"
                >
                  About
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="#service"
                  className="uppercase hover:text-gray-600 transition"
                >
                  Services
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="#contact"
                  className="uppercase hover:text-gray-600 transition"
                >
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
