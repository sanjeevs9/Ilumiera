"use client"
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();
    return(
        <>
        <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex">
          <div className="w-1/2 pr-16">
            <h1 className="text-5xl font-bold mb-6">Mainline your product.</h1>
            <p className="text-xl text-gray-600 mb-10">
              Mainline is the fit-for-purpose tool for planning and building
              modern software products.
            </p>
            <div className="flex items-center space-x-4">
              <button onClick={() => router.push('/dashboard')} className="cursor-pointer bg-black text-white px-6 py-3 rounded-md font-medium">
                Get started
              </button>
              <button className="flex items-center text-black font-medium">
                Mainline raises $12M from Roba Ventures
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
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-1/2 border-l border-gray-300 border-dashed pl-16">
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Tailored workflows</h3>
                  <p className="text-gray-600 text-sm">
                    Track progress across custom issue flows for your team.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H11"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Cross-team projects</h3>
                  <p className="text-gray-600 text-sm">
                    Collaborate across teams and departments.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    <div className="w-3 h-3 rotate-45 border border-black"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Milestones</h3>
                  <p className="text-gray-600 text-sm">
                    Break projects down into concrete phases.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L4 6L6 8L11 3"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Progress insights</h3>
                  <p className="text-gray-600 text-sm">
                    Track scope, velocity, and progress over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
