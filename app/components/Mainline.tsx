import Image from "next/image";

export default function Mainline() {
    return(
        <>
         <div className="bg-gray-50 w-full p-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <h1 className="text-5xl font-bold text-black">
            Mainline your resource
            <br />
            allocation and execution
          </h1>
        </div>
        {/* Upper Sections */}
        <div className="max-w-5xl mx-auto border-b border-dashed border-gray-300 pb-12 mb-12">
          <div className="flex">
            {/* Left Section - Reusable issue templates */}
            <div className="w-1/2 pr-8 border-r border-dashed border-gray-300">
              <h2 className="font-bold text-lg mb-2">
                Reusable issue templates.
              </h2>
              <p className="text-gray-600 mb-6">
                Draft lightning-fast documents with our Smart Instructions and
                Templates.
              </p>
              {/* Template Card */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-gray-200">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium">
                      Write a brief overview of the project, its purpose, and
                      its key features
                    </p>
                  </div>
                  <button className="text-gray-400">
                    <span className="text-lg">×</span>
                  </button>
                </div>
                <div className="flex gap-2 mb-5">
                  <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span className="w-4 h-4 bg-gray-300 rounded-full inline-block"></span>{' '}
                    Add source
                  </button>
                  <button className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span className="w-4 h-4 bg-gray-300 rounded-full inline-block"></span>{' '}
                    AI Writer
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-4 bg-blue-200 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full border border-blue-300 left-0"></div>
                    </div>
                    <span className="text-gray-500 text-sm">Create more</span>
                  </div>
                  <button className="bg-black text-white text-sm px-4 py-2 rounded-full flex items-center gap-1">
                    Add template <span className="ml-1">⌘</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Right Section - Simplify your stack */}
            <div className="w-1/2 pl-8">
              <h2 className="font-bold text-lg mb-2">Simplify your stack.</h2>
              <p className="text-gray-600 mb-6">
                No more Confluence, SharePoint, or Microsoft Word.
              </p>
              {/* App Icons Grid */}
              <div className="grid grid-cols-4 gap-6">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded">
                    <div className="w-6 h-6 text-white">X</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-black flex items-center justify-center rounded">
                    <div className="w-6 h-6 text-white">N</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded">
                    <div className="w-6 h-6 text-blue-500">W</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm">
                    <div className="w-6 h-6 flex">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm">
                    <div className="w-6 h-6">
                      <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm">
                    <div className="w-6 h-6 flex flex-wrap">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Lower Sections */}
        <div className="max-w-5xl mx-auto">
          <div className="flex">
            {/* Graveyard Section */}
            <div className="w-1/3 pr-6 border-r border-dashed border-gray-300">
              <h2 className="font-bold text-lg mb-2">Graveyard it.</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <span className="text-gray-600 text-sm">Graveyard</span>
                    <span className="text-gray-400 text-xs">1,032</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-gray-500">•••</button>
                    <button className="text-gray-500">+</button>
                  </div>
                </div>
                                  <div className="bg-white rounded-md p-3 mb-3">
                    <div className="flex justify-between mb-1">
                      <div className="text-xs text-gray-400">PW-100</div>
                      <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                        <Image
                          src="https://uploadthingy.s3.us-west-1.amazonaws.com/j1UJFaoLpDqXtB4EyhS8dr/image.png"
                          alt=""
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  <div className="mb-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      <span className="text-sm">Image optimisation</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-400 text-xs">•••</div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <span>▷</span> 3
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    [MMI AR Platform]
                  </div>
                </div>
                <div className="bg-white rounded-md p-3">
                  <div className="flex justify-between mb-1">
                    <div className="text-xs text-gray-400">PW-100</div>
                    <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                      <Image
                        src="https://uploadthingy.s3.us-west-1.amazonaws.com/j1UJFaoLpDqXtB4EyhS8dr/image.png"
                        alt=""
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      <span className="text-sm">Image optimisation</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-400 text-xs">•••</div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <span>▷</span> 3
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                    <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                    [MMI AR Platform]
                  </div>
                </div>
              </div>
            </div>
            {/* Task Discussions Section */}
            <div className="w-1/3 px-6 border-r border-dashed border-gray-300">
              <h2 className="font-bold text-lg mb-2">Task discussions.</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
                              <div className="bg-white rounded-lg p-5 shadow-sm">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                      <Image
                        src="https://uploadthingy.s3.us-west-1.amazonaws.com/j1UJFaoLpDqXtB4EyhS8dr/image.png"
                        alt=""
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">Meriza Kwan</span>
                      <span className="text-gray-400 text-xs">10:26AM</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Sed do eiusmod tempor incididunt ut labore et dolore!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Notifications Section */}
            <div className="w-1/3 pl-6">
              <h2 className="font-bold text-lg mb-2">Notifications.</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">Inbox</span>
                  <div className="flex gap-2">
                    <button className="text-gray-500">•••</button>
                    <button className="text-gray-500">
                      <span className="w-4 h-4 inline-block">≡</span>
                    </button>
                    <button className="text-gray-500">
                      <span className="w-4 h-4 inline-block">🗑</span>
                    </button>
                  </div>
                </div>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 mb-3 pb-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-6 h-6 bg-gray-300 rounded-full overflow-hidden">
                      <Image
                        src="https://uploadthingy.s3.us-west-1.amazonaws.com/j1UJFaoLpDqXtB4EyhS8dr/image.png"
                        alt=""
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-1">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-xs font-medium">
                          PW-100 image optimisation
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Neil replied: Is it done yet?
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-yellow-500 font-medium">
                        12 Mar
                      </div>
                      {index % 2 === 0 && (
                        <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-xs font-bold mt-1">
                          !
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}