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

export function WobbleCardDemo({handleMindmapClick,id}: {handleMindmapClick?: () => void,id?: string}) {
  const router = useRouter()
  const [mindmapLoading, setMindmapLoading] = useState(false);

  async function MindmapClick() {
    setMindmapLoading(true);
    const sources=JSON.parse(localStorage.getItem("sources") || "[]");
    const source=sources.find((source: Source) => source._id === id);
    if(source.mindmapId){
      router.push(`/source/${id}/mindmap/${source.mindmapId}`);
      return;
    }
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

  if(mindmapLoading){
    return (
      <div className="flex justify-center items-center min-h-screen min-w-screen pl-64 bg-gray-50">
        <MindmapLoading />
    </div>
    )
  }



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto w-full h-full">
      <WobbleCard
        containerClassName="cursor-pointer col-span-1 h-full bg-pink-800 min-h-[300px] relative"
      onClick={handleMindmapClick ? handleMindmapClick : MindmapClick}
      >
        <div className="max-w-full">
          <h2 className="text-left text-balance text-lg md:text-xl lg:text-2xl font-bold tracking-tight drop-shadow-lg bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
          Transform your content into mindmaps 
          </h2>
          <p className="mt-4 text-left text-sm md:text-base text-pink-50 font-medium leading-relaxed drop-shadow-sm">
          Turn YouTube videos, PDFs, and images into clear visual maps.
          </p>
        </div>
        <Image
          src="/mindmap.jpg"
          width={200}
          height={200}
          alt="mindmap demo image"
          className="absolute bottom-4 right-4 filter object-contain rounded-2xl w-[120px] md:w-[150px]"
        />
      </WobbleCard>
      
      <WobbleCard containerClassName="cursor-pointer col-span-1 min-h-[300px] bg-purple-800">
        <div className="max-w-full">
          <h2 className="text-left text-balance text-lg md:text-xl lg:text-2xl font-bold tracking-tight drop-shadow-lg bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Turn your content into a Quiz
          </h2>
          <p className="mt-4 text-left text-sm md:text-base text-purple-50 font-medium leading-relaxed drop-shadow-sm">
          Create interactive quizzes to test your knowledge and reinforce learning.
          </p>
        </div>
      </WobbleCard>
      
      <WobbleCard containerClassName="cursor-pointer col-span-1 bg-blue-900 min-h-[300px] relative">
        <div className="max-w-full"> 
          <h2 className="text-left text-balance text-lg md:text-xl lg:text-2xl font-bold tracking-tight drop-shadow-lg bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Create your own flashcards
          </h2>
          <p className="mt-4 text-left text-sm md:text-base text-blue-50 font-medium leading-relaxed drop-shadow-sm">
          Turn your content into a deck of study cards with flip and review tools for effective learning.
          </p>
        </div>
        <div className="absolute bottom-4 right-4">
          {/* <CardStackDemo /> */}
        </div>
      </WobbleCard>
    </div>
  );
}
