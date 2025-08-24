import Image from "next/image";

export default function Navbar() {
    return(
        <>
            <div className="max-w-6xl mx-auto py-4 px-4">
        <div className="bg-white rounded-full shadow-sm py-3 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Image src="/logo.webp" alt="Ilumiera" width={30} height={30} />
              <span className="font-bold">Ilumiera</span>
            </div>
            <nav className="flex items-center space-x-6">
              <div className="flex items-center">
                <span className="text-sm">Features</span>
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
                  className="ml-1 w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <span className="text-sm">About Us</span>
              <span className="text-sm">Pricing</span>
              <span className="text-sm">FAQ</span>
              <span className="text-sm">Contact</span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full">
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
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
            </button>
            <button className="bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </div>
        </>
    )
}