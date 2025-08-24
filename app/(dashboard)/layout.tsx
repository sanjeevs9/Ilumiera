import Sidebar from "../components/Sidebar";

export default function Layout({children}: {children: React.ReactNode}) {
    console.log("hello")
    return(
        <>
        <div className="flex h-screen">
            <div className="w-64">  
            <Sidebar />
            </div>
            <div className="flex-1">
            {children}
            </div>
        </div>
        
        
        </>
    )
}