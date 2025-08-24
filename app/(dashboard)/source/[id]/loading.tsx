export default function Loading() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
            {/* Background blur elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Top left blur */}
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
                
                {/* Top right blur */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-400/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Bottom left blur */}
                <div className="absolute -bottom-40 -left-20 w-72 h-72 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Bottom right blur */}
                <div className="absolute -bottom-20 -right-40 w-64 h-64 bg-gradient-to-br from-orange-400/25 to-red-600/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Main loading content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-8 p-8">
                {/* Loading spinner */}
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-700 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                    <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                </div>

                {/* Loading text */}
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-200 dark:to-slate-100 bg-clip-text text-transparent">
                        Loading your content...
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Preparing something amazing for you
                    </p>
                </div>

                {/* Animated dots */}
                <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>

            {/* Floating cards effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-16 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-28 h-18 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
        </div>
    );
}