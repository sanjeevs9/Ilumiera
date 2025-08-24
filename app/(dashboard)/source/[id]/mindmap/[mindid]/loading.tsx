

export default function Loading() {
    return (
        <div className="relative h-screen w-full bg-gray-50 overflow-hidden">

            {/* Blur background with skeleton mindmap */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10">
                {/* Main central node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-20 bg-gray-200/60 border border-gray-300 rounded-lg animate-pulse">
                    <div className="p-3 h-full flex items-center">
                        <div className="space-y-2 flex-1">
                            <div className="h-3 bg-gray-300/60 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-300/40 rounded w-1/2"></div>
                        </div>
                        <div className="ml-2 w-4 h-4 bg-gray-300/40 rounded"></div>
                    </div>
                </div>
                
                {/* Left branch nodes */}
                <div className="absolute left-32 top-44 w-44 h-14 bg-green-100/80 border border-green-200 rounded-lg animate-pulse">
                    <div className="p-2 h-full flex items-center">
                        <div className="space-y-1 flex-1">
                            <div className="h-2 bg-gray-300/60 rounded w-2/3"></div>
                        </div>
                        <div className="ml-2 w-3 h-3 bg-gray-300/40 rounded"></div>
                    </div>
                </div>
                
                <div className="absolute left-32 top-1/2 transform -translate-y-1/2 w-44 h-14 bg-green-100/80 border border-green-200 rounded-lg animate-pulse">
                    <div className="p-2 h-full flex items-center">
                        <div className="space-y-1 flex-1">
                            <div className="h-2 bg-gray-300/60 rounded w-2/3"></div>
                        </div>
                        <div className="ml-2 w-3 h-3 bg-gray-300/40 rounded"></div>
                    </div>
                </div>
                
                <div className="absolute left-32 bottom-44 w-44 h-14 bg-green-100/80 border border-green-200 rounded-lg animate-pulse">
                    <div className="p-2 h-full flex items-center">
                        <div className="space-y-1 flex-1">
                            <div className="h-2 bg-gray-300/60 rounded w-2/3"></div>
                        </div>
                        <div className="ml-2 w-3 h-3 bg-gray-300/40 rounded"></div>
                    </div>
                </div>
                
                {/* Right branch nodes */}
                <div className="absolute right-32 top-44 w-44 h-14 bg-green-100/80 border border-green-200 rounded-lg animate-pulse">
                    <div className="p-2 h-full flex items-center">
                        <div className="space-y-1 flex-1">
                            <div className="h-2 bg-gray-300/60 rounded w-2/3"></div>
                        </div>
                        <div className="ml-2 w-3 h-3 bg-gray-300/40 rounded"></div>
                    </div>
                </div>
                
                <div className="absolute right-32 bottom-44 w-44 h-14 bg-green-100/80 border border-green-200 rounded-lg animate-pulse">
                    <div className="p-2 h-full flex items-center">
                        <div className="space-y-1 flex-1">
                            <div className="h-2 bg-gray-300/60 rounded w-2/3"></div>
                        </div>
                        <div className="ml-2 w-3 h-3 bg-gray-300/40 rounded"></div>
                    </div>
                </div>
                
                {/* Skeleton edges connecting nodes */}
                <svg className="absolute inset-0 w-full h-full opacity-40">
                    {/* Main node to left nodes */}
                    <path d="M 50% 50% Q 40% 35% 25% 35%" stroke="#9ca3af" strokeWidth="2" fill="none" />
                    <path d="M 50% 50% Q 40% 50% 25% 50%" stroke="#9ca3af" strokeWidth="2" fill="none" />
                    <path d="M 50% 50% Q 40% 65% 25% 65%" stroke="#9ca3af" strokeWidth="2" fill="none" />
                    
                    {/* Main node to right nodes */}
                    <path d="M 50% 50% Q 60% 35% 75% 35%" stroke="#9ca3af" strokeWidth="2" fill="none" />
                    <path d="M 50% 50% Q 60% 65% 75% 65%" stroke="#9ca3af" strokeWidth="2" fill="none" />
                </svg>

                {/* Back button skeleton */}
                <div className="absolute top-4 left-72">
                    <div className="w-20 h-10 bg-gray-200/60 border border-gray-300 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}