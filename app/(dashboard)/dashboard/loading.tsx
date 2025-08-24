import { ClipLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="flex h-screen">
            {/* Sidebar skeleton */}
            <div className="w-64 bg-white border-r border-gray-200">
                <div className="p-6">
                    {/* Logo skeleton */}
                    <div className="h-8 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
                    
                    {/* Navigation items skeleton */}
                    <div className="space-y-4">
                        <div className="h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                        <div className="h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                        <div className="h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                        <div className="h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            </div>
            
            {/* Main content area */}
            <div className="flex-1 bg-gray-50">
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="text-center">
                        {/* Loading spinner */}
                        <div className="mb-8">
                            <ClipLoader
                                color="#3B82F6"
                                size={80}
                                speedMultiplier={0.8}
                            />
                        </div>
                        
                        {/* Loading text */}
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold text-gray-900">Loading Dashboard</h2>
                            <p className="text-lg text-gray-600">Setting up your learning environment...</p>
                            
                            {/* Progress dots */}
                            <div className="flex justify-center space-x-2 mt-6">
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 