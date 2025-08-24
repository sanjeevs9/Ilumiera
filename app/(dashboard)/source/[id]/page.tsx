
import { WobbleCardDemo } from "@/app/components/WobbleCard";

export default async function Source({params}: {params: {id: string}}) {
    const {id} = await params;

    

    return(
        <div className="flex justify-center items-center h-screen p-8 w-full" >
            <WobbleCardDemo id={id} />
        </div>
    )
}