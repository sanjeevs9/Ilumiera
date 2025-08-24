"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatCard from "@/app/components/chatCard";

interface Source {
  _id: string;
  metadata: {
    topic: string;
  };
  sourceType: string;
}


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [source, setSource] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    const sources = JSON.parse(localStorage.getItem("sources") || "[]");
    setSource(sources);
  }, []);
  return (
    <div className="min-h-screen  bg-accent-foregroundimage.png">
      <div className="p-8 min-h-screen bg-accent-foreground">
        <div className="mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold mb-3" style={{color: '#302758'}}>
              Hey Sanjeev Kr! 👋
            </h1>
            <p className="mb-8 text-lg" style={{color: '#9798A5'}}>Let&apos;s get studying! Choose your path to learning and growth.</p>
            
            <div onClick={() => router.push('/new')} className="cursor-pointer ">
              <div className="p-6 rounded-2xl hover:shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] text-white" style={{background: 'linear-gradient(to right, #302758, #876283)'}}>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-white/20 rounded-xl mr-6 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">Start a Lesson</h3>
                    <p className="text-white/90 text-base">Learn something new today!</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="flex justify-center items-center transform -translate-x-14">
              {/* <Image src="/tech.png" alt="hero" width={300} height={300} className="object-fill" /> */}
            </div>
          </div>

        </div>

        {/* Content Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
          {/* Tabs */}
          <div className="border-b border-gray-300 mb-6">
            <div className="flex space-x-8">
              {[
                { id: "all", label: "All", icon: "grid" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-3 px-1 border-b-2 transition-all duration-200 font-medium ${
                    activeTab === tab.id
                      ? "border-[#302758]"
                      : "border-transparent hover:border-[#876283]"
                  }`}
                  style={{
                    color: activeTab === tab.id ? '#302758' : '#9798A5'
                  }}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {tab.icon === "grid" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                    {tab.icon === "book" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                    {tab.icon === "folder" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-2-2H5a2 2 0 00-2 2z" />
                    )}
                    {tab.icon === "lightbulb" && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    )}
                  </svg>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content List */}
          <div className="space-y-3 flex flex-row gap-4 flex-wrap items-start">
            {source.length > 0 ? source.map((item: Source, index: number) => (
              <ChatCard key={index} title={item.metadata.topic} item={item} index={index} id={item._id} icon={item.sourceType} />
            )) : (
              <div className="text-center py-12 w-full justify-center items-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background: 'linear-gradient(to right, #F6EFF7, rgba(135, 98, 131, 0.2))'}}>
                  <svg className="w-10 h-10" style={{color: '#876283'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#302758'}}>No sources found</h3>
                <p className="mb-6" style={{color: '#9798A5'}}>Start by creating your first lesson to see it here</p>
                <button 
                  onClick={() => router.push('/new')}
                  className="cursor-pointer text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
                  style={{background: 'linear-gradient(to right, #302758, #876283)'}}
                >
                  Create Your First Lesson
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 