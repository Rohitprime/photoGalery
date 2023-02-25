import Header from "./components/Header"
import PhotoSection from "./components/PhotoSection"
import { useDispatch,useSelector } from "react-redux"
import { photosAction } from "./redux/store"
import { useEffect } from "react"
import { getFromUnsplash } from "./utils/fetchFunction"
import Loading from "./components/Loading"


const App = ()=>{

  const loading = useSelector(state => state.galery.loading)
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(photosAction.isLoading(true))  
     getFromUnsplash().then(data => (
      dispatch(photosAction.setPhotos(data)),
      dispatch(photosAction.isLoading(false))
     ))
     

  },[])

  return(
    <div className="w-screen h-screen overflow-y-scroll hide-scrollbar">
      <Header/>
      {loading && <Loading/>}
      {!loading && <PhotoSection/>}
    </div>
   
  )
}

export default App