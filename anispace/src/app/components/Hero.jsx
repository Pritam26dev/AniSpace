export default function Hero(){
    return(
        <section className="px-8 py-20">
        <div className="max-w-3xl">
        <p className="text-blue-400 mb-4 font-medium">Welcome to Anispace</p>
        <h1 className="text-6xl font-bold leading-tight mb-6">Discover your 
            <span className="tex-blue-400"> Fav Anime</span>
        </h1>

        <p className="text-gray-400 text-lg mb-8">
            Explore trendin,top-rated,and upcoming anime here
        </p>

        <div className="flex items-center gap-4">


        <button className="bg-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition">Explore Now</button>
        <button className="border border-gray-700 px-6 py-3 rounded-lg hover:border-gray-500 transition">Browse Anime</button>
        </div>

        </div>
        </section>
    )
}