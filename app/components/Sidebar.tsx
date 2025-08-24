"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Sidebar() {
    const router = useRouter();
    return(
        <>
        <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-theme-muted/20 p-6 shadow-lg">
        {/* Logo */}
        <div className=" flex items-center mb-8">
          <div className="cursor-pointer flex" onClick={() => router.push('/')}>
          <Image src="/logo.png" alt="Ilumiera" width={30} height={30} />
          <span className="font-bold text-xl ml-2 text-theme-primary">Ilumiera</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
    
          
          <button onClick={() => router.push('/new')} className="cursor-pointer w-full bg-theme-primary text-theme-light px-4 py-2 rounded-lg text-sm font-medium mb-4 flex items-center justify-between hover:bg-theme-secondary transition-colors">
            + New Course
            
          </button>

          {/* <div className="text-sm text-gray-600 mb-4">0 Actions Left Today</div> */}

          <div className="space-y-1">
            <button onClick={() => router.push('/dashboard')} className="cursor-pointer flex w-full items-center justify-between p-2 rounded-lg hover:bg-theme-light transition-colors text-theme-primary">
              <span className="text-sm font-medium">Dashboard</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-theme-light cursor-pointer text-theme-primary transition-colors">
              <span className="text-sm">Explore</span>
              <span className="text-xs bg-theme-secondary/20 text-theme-secondary px-2 py-1 rounded-full">New</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg hover:bg-theme-light cursor-pointer text-theme-primary transition-colors">
              <span className="text-sm">Plan & Settings</span>
              <span className="text-xs bg-theme-primary/20 text-theme-primary px-2 py-1 rounded-full">Upgrade</span>
            </div>
          </div>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center p-3 rounded-lg hover:bg-theme-light cursor-pointer transition-colors">
            <div className="w-8 h-8 bg-theme-muted rounded-full mr-3"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-theme-primary">Sanjeev Kr</div>
              <div className="text-xs text-theme-muted">sanjeev@mainline.com</div>
            </div>
            <svg className="w-4 h-4 text-theme-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
        </>
    )
}