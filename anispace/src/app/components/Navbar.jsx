export default function Navbar(){
    return(
        <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 ">
            <h1 className="text-2xl font-bold">Anispace</h1>
            <div className="flex items-center gap-4">
                <button className="text-sm hover:text-gray-400 transition">Login</button>
                <button className=" text-blue-400 font-medium hover:text-blue-600 transition">Sign up</button>

            </div>

        </nav>
    )
}