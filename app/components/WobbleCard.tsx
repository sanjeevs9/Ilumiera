"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { CardStackDemo } from "./CardStack";
import { useRouter } from "next/navigation";
import axios from "axios";
import { network } from "../../network";
import MindmapLoading from "../(dashboard)/source/[id]/mindmap/[mindid]/loading";

interface Source {
  _id: string;
  mindmapId?: string;
}

export function WobbleCardDemo({id}: {id: string}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  async function handleMindmapClick() {
    const sources=JSON.parse(localStorage.getItem("sources") || "[]");
    const source=sources.find((source: Source) => source._id === id);
    if(source.mindmapId){
      router.push(`/source/${id}/mindmap/${source.mindmapId}`);
      return;
    }
    setIsLoading(true);
   const response= await axios.post(`${network}/source/generatemindmap/${id}`,{
      "userId": "user-123"    
   },{
    headers: {
      "Content-Type": "application/json",
      "api-key": "e4f47f73-b838-4944-82a7-93a5f9077aa2"
    }
   });
   console.log({response});
   source.mindmapId=response.data.mindmap.mindmap_id;
   localStorage.setItem("sources", JSON.stringify(sources));
   router.push(`/source/${id}/mindmap/${response.data.mindmap.mindmap_id}`);
  }
  if(isLoading){
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen pl-64 bg-gray-50">
        <MindmapLoading />
    </div>
    )
  }




  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-full">
      <WobbleCard
        containerClassName="cursor-pointer col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative"
        onClick={handleMindmapClick}
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Transform your content into mindmaps 
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Turn YouTube videos, PDFs, and images into clear visual maps.
          </p>
        </div>
        <Image
          src="/mindmap.jpg"
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute top-1/2 right-0 transform -translate-x-10 -translate-y-1/2 filter object-contain rounded-2xl w-[300px]  2xl:w-[400px] "
        />
      </WobbleCard>
      <WobbleCard containerClassName="cursor-pointer col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Turn your content into a Quiz
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Create interactive quizzes to test your knowledge and reinforce learning.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="cursor-pointer col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="flex  justify-between h-[200px]"> 
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Create a deck of study cards with flip and review tools for effective learning.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Turn your content into a deck of study cards with flip and review tools for effective learning.
         
          </p>
        </div>
          <div className="flex justify-center items-center  p-8" >
            <CardStackDemo />
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
