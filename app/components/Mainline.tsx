import Image from "next/image";

export default function Mainline() {
    return(
        <>
         <div className=" w-full p-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-12 text-center">
          <h1 className="text-5xl font-bold text-theme-primary">
            Transform your content into
            <br />
            powerful learning tools
          </h1>
        </div>
        {/* Upper Sections */}
        <div className="max-w-5xl mx-auto border-b border-dashed border-theme-muted/30 pb-12 mb-12">
          <div className="flex">
            {/* Left Section - Reusable issue templates */}
            <div className="w-1/2 pr-8 border-r border-dashed border-theme-muted/30">
              <h2 className="font-bold text-lg mb-2 text-theme-primary">
                Smart content processing.
              </h2>
              <p className="text-theme-muted mb-6">
                Upload PDFs, images, or YouTube links and instantly generate
                mindmaps, quizzes, notes, and flashcards.
              </p>
              {/* Template Card */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-theme-muted/20">
                <div className="flex justify-between mb-6">
                  <div>
                    <p className="text-sm font-medium text-theme-primary">
                      Transform your YouTube video into comprehensive study materials
                      with AI-powered content analysis
                    </p>
                  </div>
                  <button className="text-theme-muted hover:text-theme-secondary transition-colors">
                    <span className="text-lg">×</span>
                  </button>
                </div>
                <div className="flex gap-2 mb-5">
                  <button className="bg-theme-light text-theme-muted text-xs px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-theme-secondary hover:text-theme-light transition-colors">
                    <span className="w-4 h-4 bg-theme-muted rounded-full inline-block"></span>{' '}
                    Add content
                  </button>
                  <button className="bg-theme-light text-theme-muted text-xs px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-theme-secondary hover:text-theme-light transition-colors">
                    <span className="w-4 h-4 bg-theme-muted rounded-full inline-block"></span>{' '}
                    AI Generator
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-4 bg-theme-secondary/30 rounded-full relative">
                      <div className="absolute w-4 h-4 bg-white rounded-full border border-theme-secondary left-0"></div>
                    </div>
                    <span className="text-theme-muted text-sm">Generate more</span>
                  </div>
                  <button className="bg-theme-primary text-theme-light text-sm px-4 py-2 rounded-full flex items-center gap-1 hover:bg-theme-secondary transition-colors">
                    Create study set <span className="ml-1">⌘</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Right Section - Simplify your stack */}
            <div className="w-1/2 pl-8">
              <h2 className="font-bold text-lg mb-2 text-theme-primary">Simplify your learning.</h2>
              <p className="text-theme-muted mb-6">
                No more scattered notes, complex study tools, or manual flashcard creation.
              </p>
              {/* App Icons Grid */}
              <div className="grid grid-cols-4 gap-6">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-theme-secondary flex items-center justify-center rounded">
                    <div className="w-6 h-6 bg-white"></div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-theme-primary flex items-center justify-center rounded">
                    <div className="w-6 h-6 text-white">X</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-theme-primary flex items-center justify-center rounded">
                    <div className="w-6 h-6 text-white">N</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-theme-light flex items-center justify-center rounded border border-theme-muted/20">
                    <div className="w-6 h-6 text-theme-secondary">W</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm border border-theme-muted/20">
                    <div className="w-6 h-6 flex">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm border border-theme-muted/20">
                    <div className="w-6 h-6">
                      <div className="w-6 h-6 bg-gradient-to-r from-theme-secondary via-theme-primary to-theme-muted rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm border border-theme-muted/20">
                    <div className="w-6 h-6 bg-theme-secondary rounded"></div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm border border-theme-muted/20">
                    <div className="w-6 h-6 flex flex-wrap">
                      <div className="w-3 h-3 bg-theme-secondary rounded-full"></div>
                      <div className="w-3 h-3 bg-theme-secondary rounded-full"></div>
                      <div className="w-3 h-3 bg-theme-secondary rounded-full"></div>
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
            <div className="w-1/3 pr-6 border-r border-dashed border-theme-muted/30">
              <h2 className="font-bold text-lg mb-2 text-theme-primary">Archive it.</h2>
              <p className="text-theme-muted mb-6">
                Keep your completed study materials organized and easily accessible for future reference.
              </p>
              <div className="bg-theme-light rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-theme-muted rounded"></div>
                    <span className="text-theme-primary text-sm">Study Archive</span>
                    <span className="text-theme-muted text-xs">1,032</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-theme-muted hover:text-theme-secondary transition-colors">•••</button>
                    <button className="text-theme-muted hover:text-theme-secondary transition-colors">+</button>
                  </div>
                </div>
                                  <div className="bg-white rounded-md p-3 mb-3 border border-theme-muted/10">
                    <div className="flex justify-between mb-1">
                      <div className="text-xs text-theme-muted">ST-100</div>
                      <div className="w-6 h-6 bg-theme-muted rounded-full overflow-hidden">
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
                      <div className="w-4 h-4 bg-theme-secondary rounded-full"></div>
                      <span className="text-sm text-theme-primary">Machine Learning Basics</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-theme-muted text-xs">•••</div>
                    <div className="flex items-center gap-1 text-xs text-theme-muted">
                      <span>▷</span> 3
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-theme-muted flex items-center gap-1">
                    <div className="w-4 h-4 bg-theme-secondary rounded-full"></div>
                    [CS Course Materials]
                  </div>
                </div>
                <div className="bg-white rounded-md p-3 border border-theme-muted/10">
                  <div className="flex justify-between mb-1">
                    <div className="text-xs text-theme-muted">ST-101</div>
                    <div className="w-6 h-6 bg-theme-muted rounded-full overflow-hidden">
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
                      <div className="w-4 h-4 bg-theme-secondary rounded-full"></div>
                      <span className="text-sm text-theme-primary">Physics Formulas</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-theme-muted text-xs">•••</div>
                    <div className="flex items-center gap-1 text-xs text-theme-muted">
                      <span>▷</span> 5
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-theme-muted flex items-center gap-1">
                    <div className="w-4 h-4 bg-theme-secondary rounded-full"></div>
                    [Science Study Set]
                  </div>
                </div>
              </div>
            </div>
            {/* Task Discussions Section */}
            <div className="w-1/3 px-6 border-r border-dashed border-theme-muted/30">
              <h2 className="font-bold text-lg mb-2 text-theme-primary">Study collaboration.</h2>
              <p className="text-theme-muted mb-6">
                Share study materials and collaborate with classmates on
                generated content and learning progress.
              </p>
                              <div className="bg-white rounded-lg p-5 shadow-sm border border-theme-muted/20">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-theme-muted rounded-full overflow-hidden">
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
                      <span className="font-medium text-sm text-theme-primary">Sarah Chen</span>
                      <span className="text-theme-muted text-xs">10:26AM</span>
                    </div>
                    <p className="text-sm text-theme-muted">
                      Great mindmap! Can you share the flashcards too?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Notifications Section */}
            <div className="w-1/3 pl-6">
              <h2 className="font-bold text-lg mb-2 text-theme-primary">Study updates.</h2>
              <p className="text-theme-muted mb-6">
                Stay updated on your learning progress and new content
                generated from your materials.
              </p>
              <div className="bg-white rounded-lg p-3 shadow-sm border border-theme-muted/20">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-theme-primary">Learning Hub</span>
                  <div className="flex gap-2">
                    <button className="text-theme-muted hover:text-theme-secondary transition-colors">•••</button>
                    <button className="text-theme-muted hover:text-theme-secondary transition-colors">
                      <span className="w-4 h-4 inline-block">≡</span>
                    </button>
                    <button className="text-theme-muted hover:text-theme-secondary transition-colors">
                      <span className="w-4 h-4 inline-block">🗑</span>
                    </button>
                  </div>
                </div>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 mb-3 pb-3 border-b border-theme-muted/20 last:border-0"
                  >
                    <div className="w-6 h-6 bg-theme-muted rounded-full overflow-hidden">
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
                        <span className="w-2 h-2 bg-theme-secondary rounded-full"></span>
                        <span className="text-xs font-medium text-theme-primary">
                          {index % 3 === 0 ? 'New mindmap generated' : index % 3 === 1 ? 'Quiz completed' : 'Flashcards ready'}
                        </span>
                      </div>
                      <div className="text-xs text-theme-muted">
                        {index % 3 === 0 ? 'Your YouTube video has been processed' : index % 3 === 1 ? 'You scored 85% on Biology quiz' : 'Study set from PDF is ready for review'}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-theme-secondary font-medium">
                        12 Mar
                      </div>
                      {index % 2 === 0 && (
                        <div className="w-5 h-5 bg-theme-light rounded-full flex items-center justify-center text-theme-secondary text-xs font-bold mt-1 border border-theme-secondary">
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