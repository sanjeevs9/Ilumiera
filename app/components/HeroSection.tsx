"use client"
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();
    return(
        <>
        <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex">
          <div className="w-1/2 pr-16">
            <h1 className="text-4xl font-bold mb-6 text-theme-primary">Transform your content into knowledge.</h1>
            <p className="text-lg text-theme-muted mb-10">
              Ilumiera turns YouTube links, PDFs, and images into powerful
              mindmaps, quizzes, notes, and flashcards — all in seconds.
            </p>
            <div className="flex items-center space-x-4">
              <button onClick={() => router.push('/new')} className="cursor-pointer bg-theme-primary text-theme-light px-6 py-3 rounded-md font-medium hover:bg-theme-secondary transition-colors">
                Get started
              </button>
              <button className="flex items-center text-theme-primary font-medium hover:text-theme-secondary transition-colors">
                See how Ilumiera works
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
          <div className="w-1/2 border-l border-theme-muted/30 border-dashed pl-16">
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-theme-muted/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-theme-primary rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-theme-primary">Mindmaps</h3>
                  <p className="text-theme-muted text-sm">
                    Visualize complex ideas from any content with clarity.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-theme-muted/50 flex items-center justify-center">
                    <svg
                      width="12"
                      height="2"
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H11"
                        stroke="#302758"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-theme-primary">Quizzes</h3>
                  <p className="text-theme-muted text-sm">
                    Instantly generate practice questions to test your knowledge.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-theme-muted/50 flex items-center justify-center">
                    <div className="w-3 h-3 rotate-45 border border-theme-primary"></div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-theme-primary">Notes</h3>
                  <p className="text-theme-muted text-sm">
                    Turn long documents into concise, organized notes.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 mt-1">
                  <div className="w-6 h-6 rounded-full border border-theme-muted/50 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 9L4 6L6 8L11 3"
                        stroke="#302758"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-theme-primary">Flashcards</h3>
                  <p className="text-theme-muted text-sm">
                    Create bite-sized flashcards for quick recall and revision.
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
