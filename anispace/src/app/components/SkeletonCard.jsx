export default function SkeletonCard() {
    return(
        <div className="w-[250px] bg-[14141c] rounded-xl overflow-hidden animate-pulse">
            <div className="w-full h-[350px] bg-gray-800" ></div>

            <div className="p-4">
                <div className="h-6 bg-gray-800 rounded mb-3"></div>
                <div className="h-4 w-16 bg-gray-800 rounded"></div>
                

            </div>
        </div>
    )

}