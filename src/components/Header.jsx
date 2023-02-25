import SearchBar from "./SearchBar"

const Header = ()=>{
    return(
        <div className="w-screen h-[100px] flex flex-col sm:flex-row sticky top-0 bg-white/70 backdrop-blur-lg z-[1]
        className='shadow-2xl'
        ">
            <div className="w-screen sm:w-4/12 h-[80px] flex items-center justify-center">
            <h1 className="font-bold text-4xl font-serif"> Image Galery</h1>
            </div>
           <div className="w-8/12 h-full">
             <SearchBar/>
           </div>
        </div>
    )
}

export default Header