export default function CompanySection() {
    return(
        <>
        <div className=" bg-[#f9f5eb]  w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">
              Powering the world&apos;s best product teams.
            </h2>
            <p className="text-2xl text-gray-500">
              From next-gen startups to established enterprises.
            </p>
          </div>
          {/* Company Logos - First Row */}
          <div className="flex justify-center items-center gap-16 mb-10">
            <div className="text-gray-500 font-medium flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <circle cx="12" cy="12" r="10" fill="#D1D5DB" />
              </svg>
              MERCURY
            </div>
            <div className="text-gray-500 font-medium flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <circle cx="12" cy="12" r="10" stroke="#6B7280" fill="none" />
              </svg>
              Watershed
            </div>
            <div className="text-gray-500 font-medium flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  stroke="#6B7280"
                  fill="none"
                />
              </svg>
              Retool
            </div>
            <div className="text-gray-500 font-medium flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  stroke="#6B7280"
                  fill="none"
                />
              </svg>
              descript
            </div>
          </div>
          {/* Company Logos - Second Row */}
          <div className="flex justify-center items-center gap-16 mb-20">
            <div className="text-gray-500 font-medium flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  stroke="#6B7280"
                  fill="none"
                />
              </svg>
              perplexity
            </div>
            <div className="text-gray-500 font-medium">monzo</div>
            <div className="text-gray-500 font-medium flex items-center">
              ramp <span className="ml-1">↗</span>
            </div>
            <div className="text-gray-500 font-medium flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  stroke="#6B7280"
                  fill="none"
                />
              </svg>
              Raycast
            </div>
            <div className="text-gray-500 font-medium flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  stroke="#6B7280"
                  fill="none"
                />
              </svg>
              ARC
            </div>
          </div>
          {/* Dotted Divider */}
          <div className="relative mb-20">
            <div className="border-t border-gray-300 border-dashed w-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f9f5eb] px-8 text-xs text-gray-500 tracking-widest">
              MEASURE TWICE. CUT ONCE.
            </div>
          </div>
          {/* Made for Modern Product Teams Section */}
          <div className="flex mb-16">
            <div className="w-1/2 pr-16">
              <h2 className="text-5xl font-bold leading-tight">
                Made for modern product teams
              </h2>
            </div>
            <div className="w-1/2">
              <p className="text-gray-600">
                Mainline is built on the habits that make the best product teams
                successful: staying focused, moving quickly, and always aiming
                for high-quality work.
              </p>
            </div>
          </div>
          {/* Dashboard Showcase */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="flex">
              {/* Triage Section */}
              <div className="w-1/3 p-6 border-r border-gray-200 border-dashed">
                <h3 className="font-bold text-lg mb-6">Triage</h3>
                <div className="border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-3">
                    Can&apos;t recreate off-by-one TypeError
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
                      R
                    </div>
                    <span className="text-sm">Roba</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-gray-400 text-sm mb-3">
                    Inconsistent form submission path
                  </p>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-400">Capture</span>
                  </div>
                </div>
                <div className="mt-8 pt-4">
                  <h4 className="font-bold mb-2">
                    Purpose-built for product development
                  </h4>
                  <div className="flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Project Overview Section */}
              <div className="w-1/3 p-6 border-r border-gray-200 border-dashed">
                <h3 className="font-bold text-lg mb-6">Project Overview</h3>
                <div className="mb-6">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-gray-500">Properties</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-1.5"></div>
                      <span className="text-sm">In Progress</span>
                      <div className="ml-2 text-gray-400 text-sm">ENG</div>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-gray-500">Docs & links</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-1.5"></div>
                      <span className="text-sm">Sketches</span>
                      <div className="ml-2 text-gray-400 text-sm">User res</div>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-gray-500">Milestones</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></div>
                      <span className="text-sm">Design Review 100%</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-gray-500"></span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1.5"></div>
                      <span className="text-sm">Internal Alpha 100% of</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-gray-500"></span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-1.5"></div>
                      <span className="text-sm">QA 33% of 3</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4">
                  <h4 className="font-bold mb-2">Manage projects end-to-end</h4>
                  <div className="flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Cycle 37 Section */}
              <div className="w-1/3 p-6">
                <h3 className="font-bold text-lg mb-6">Cycle 37</h3>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                    <span className="text-sm mr-3">Scope</span>
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
                    <span className="text-sm mr-3">Started</span>
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">Completed</span>
                  </div>
                  <div className="h-40 mt-4 relative">
                    {/* Chart with smooth curves */}
                    <div className="absolute bottom-0 left-0 w-full h-full">
                      <svg
                        viewBox="0 0 300 120"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        {/* Gray line */}
                        <path
                          d="M0,80 C30,70 60,60 100,60 C140,60 180,80 220,70 C260,60 280,40 300,30"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="2"
                        />
                        {/* Blue line */}
                        <path
                          d="M0,90 C40,85 80,70 120,40 C160,10 200,20 240,10 C280,0 290,10 300,5"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="2"
                        />
                        {/* Orange line */}
                        <path
                          d="M0,100 C40,95 80,90 120,70 C160,50 200,60 240,50 C280,40 290,45 300,40"
                          fill="none"
                          stroke="#F97316"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-4">
                  <h4 className="font-bold mb-2">
                    Build momentum and healthy habits
                  </h4>
                  <div className="flex justify-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}