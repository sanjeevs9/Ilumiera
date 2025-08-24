import ReactPlayer from "react-player";

export default function Video() {
    return (
        <div className="max-w-5xl mx-auto p-8 h-[40rem]">
            <div className="bg-white rounded-lg shadow-sm border border-theme-muted/20 overflow-hidden h-full">
                <ReactPlayer
                    className="h-full w-full"
                    src='./video1.mp4'
                    playing={true}
                    loop={true}
                    controls={false}
                    muted={true}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    )
}