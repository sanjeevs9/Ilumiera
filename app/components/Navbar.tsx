"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    return(
        <>
            <div className="max-w-6xl mx-auto py-4 px-4">
        <div className="bg-white rounded-full shadow-sm py-3 px-4 flex items-center justify-between border border-theme-muted/20">
          <div className="flex items-center space-x-8">
            <div onClick={() => router.push('/')} className="cursor-pointer flex items-center">
              <Image src="/logo.png" alt="Ilumiera" width={30} height={30} />
              <span className="pl-2 font-bold text-theme-primary">Ilumiera</span>
            </div>
            <nav className="flex items-center space-x-6">
              <div className="flex items-center">
                <span className="text-sm text-theme-primary hover:text-theme-secondary transition-colors cursor-pointer">Features</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 w-4 h-4 text-theme-muted"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <span className="text-sm text-theme-primary hover:text-theme-secondary transition-colors cursor-pointer">About Us</span>
              <span className="text-sm text-theme-primary hover:text-theme-secondary transition-colors cursor-pointer">Pricing</span>
              <span className="text-sm text-theme-primary hover:text-theme-secondary transition-colors cursor-pointer">FAQ</span>
              <span className="text-sm text-theme-primary hover:text-theme-secondary transition-colors cursor-pointer">Contact</span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full hover:bg-theme-light transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-theme-muted hover:text-theme-secondary transition-colors"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            </button>
            <button className="bg-theme-primary text-theme-light border border-theme-primary rounded-full px-4 py-1.5 text-sm font-medium hover:bg-theme-secondary transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
        </>
    )
}