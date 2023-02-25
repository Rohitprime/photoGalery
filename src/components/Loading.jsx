import ripple from '../utils/images/Ripple.gif'

const Loading = ()=>{
    return(
        <div className="w-screen h-screen flex flex-col items-center gap-2 mt-12">
            <img src={ripple}/>
            <h1 className='text-4xl font-bold font-serif text-gray-400'>Loading Some Awesome Images...</h1>
        </div>
    )
}

export default Loading