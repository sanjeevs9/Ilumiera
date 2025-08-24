"use client"
import { useState, useRef } from "react";
import axios from "axios";
import { network } from "../../../network";
import { useRouter } from "next/navigation";

export default function New() {
    const router = useRouter();
    const [inputText, setInputText] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [detectedUrls, setDetectedUrls] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            // Handle YouTube URLs
            if (detectedUrls.length > 0) {
                
                    if (detectedUrls[0].includes('youtube.com') || detectedUrls[0].includes('youtu.be')) {
                        const sourceData = {
                            sourceType: "youtube",
                            userId: "user-123", // This should come from your auth system
                            url: detectedUrls[0],
                            metadata: {
                                topic: String(detectedUrls[0].split("_channel")[1].slice(1))
                            }
                        };

                    const response = await axios.post(`${network}/source/ingestsource`, {
                            source: JSON.stringify(sourceData)
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                                "api-key": "e4f47f73-b838-4944-82a7-93a5f9077aa2"
                            }
                        });
                        console.log({response});
                        setDetectedUrls([]);
                        setInputText("");
                        setUploadedFiles([]);
                        const sources=localStorage.getItem("sources");
                        if(sources){
                            const sourceArray=JSON.parse(sources);
                            sourceArray.push(response.data);
                            localStorage.setItem("sources", JSON.stringify(sourceArray));
                        }else{
                            localStorage.setItem("sources", JSON.stringify([response.data]));
                        }
                        router.push(`/source/${response.data._id}`);
                    }
                    else{
                        console.log("Not a YouTube URL");
                    }
                
            }

            // Clear inputs after successful submission
            setInputText("");
            setDetectedUrls([]);
            setUploadedFiles([]);
            
        } catch (error) {
            console.error('Error submitting source:', error);
            // Handle error appropriately
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newFiles = Array.from(files);
            setUploadedFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const removeUrl = (url: string) => {
        setDetectedUrls(prev => prev.filter(u => u !== url));
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        // Detect URLs starting with https://
        const urlRegex = /https:\/\/[^\s]+/g;
        const urls = text.match(urlRegex) || [];
        if(urls.length > 0){
            setDetectedUrls(urls);
        }else{
            setInputText(text);
        }
        
        
        
    };
    

    const handleFileButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className=" min-h-screen flex items-center justify-center px-4">
            <div className="max-w-3xl w-full">
                {/* Main Question */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-black mb-3">
                        What do you want to learn?
                    </h1>
                    <p className="text-gray-500 text-base">
                        Support: PDF, Images (PNG/JPG), YouTube links, and text.
                    </p>
                </div>

                {/* Input Area */}
                <div className="relative border border-gray-200 rounded-lg bg-white">
                    <textarea
                        value={inputText}
                        onChange={handleTextChange}
                        placeholder="Paste text, Youtube links or websites here..."
                        className="w-full h-32 p-6 text-gray-700 placeholder-gray-400 resize-none border-0 focus:outline-none bg-transparent rounded-t-lg"
                    />
                   
                    
                    {/* Bottom Section */}
                    <div className="p-2 pl-4 pr-4 flex items-center justify-between">
                        <div className="flex flex-col space-y-2 w-full">
                            {/* Upload File Button */}
                            <div className="flex items-center justify-between w-full">
                            <button 
                                onClick={handleFileButtonClick}
                                className="flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7,10 12,15 17,10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                <span>Upload File</span>
                            </button>

                            <button
                            onClick={handleSubmit}
                            disabled={isLoading || (inputText.length === 0 && detectedUrls.length === 0 && uploadedFiles.length === 0)}
                            className="cursor-pointer w-10 h-10 bg-purple-400 hover:bg-purple-500 disabled:bg-purple-300 rounded-full flex items-center justify-center transition-colors"
                        >
                            {isLoading ? (
                                <svg
                                    className="animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            )}
                        </button>
                                </div>                            
                            {/* Hidden File Input */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept=".pdf,.jpg,.jpeg,.png"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                           
                            {/* Separator Line - Only show when there are URLs */}
                            {(detectedUrls.length || uploadedFiles.length) > 0 && (
                                <div className="border-t border-gray-200 w-full"></div>
                            )}
                            <div className="flex flex-row space-x-2 w-full">
                            {/* Display Detected URLs */}
                            {detectedUrls.length > 0 && (
                                <div className="space-y-2">
                                    {detectedUrls.map((url, index) => (
                                        <div key={index} className="flex items-center justify-between bg-gray-100 rounded-full px-3 py-1.5 max-w-[10rem]">
                                            <span className="text-sm text-gray-700 truncate">{url}</span>
                                            <button
                                                onClick={() => removeUrl(url)}
                                                className="text-gray-400 hover:text-gray-600 ml-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18" />
                                                    <line x1="6" y1="6" x2="18" y2="18" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {uploadedFiles.length > 0 && (
                                <div className="space-y-2">
                                    {uploadedFiles.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between bg-gray-100 rounded-full px-3 py-1.5 max-w-[10rem]">
                                            <span className="text-sm text-gray-700 truncate">{file.name}</span>
                                            <button
                                                onClick={() => removeFile(index)}
                                                className="text-gray-400 hover:text-gray-600 ml-2"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line x1="18" y1="6" x2="6" y2="18" />
                                                    <line x1="6" y1="6" x2="18" y2="18" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            </div>
                        </div>

                        {/* Submit Button */}
                       
                    </div>
                </div>
            </div>
        </div>
    );
}