
import { useDispatch } from "react-redux"
import { photosAction } from "../redux/store"
import { searchFromUnsplash } from "../utils/fetchFunction"

const SearchBar = ()=>{

    const dispatch = useDispatch()

    const changeHandler = (e)=>{
       dispatch(photosAction.isLoading(true))
      
       searchFromUnsplash(e.target.value?e.target.value:'home')
       .then(data => (
          dispatch(photosAction.setPhotos(data.results)),
          dispatch(photosAction.isLoading(false))
       ))
      console.log(e.target.value)
    }

    return(
        <div className="w-full h-full flex items-center justify-start">
            <input  type='text' className='w-8/12 h-[35px] rounded-lg bg-gray-200 text-center'
            placeholder="search images here"
            onChange={changeHandler}/>
        </div>
    )
}

export default SearchBar