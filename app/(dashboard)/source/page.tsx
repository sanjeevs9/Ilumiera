
import { redirect } from "next/navigation";

export default function Source() {
    redirect('/dashboard');
    
    return(
        <div>
            <h1>Source</h1>
        </div>
    )
}