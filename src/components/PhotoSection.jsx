import { useSelector,useDispatch} from "react-redux"
import PhotoCard from "./PhotoCard"

const PhotoSection = ()=>{

    const photos = useSelector(state=> state.galery.photos)
    console.log(photos)
    return(
        <div className="w-screen flex flex-wrap p-10 gap-7 justify-center">
            {
                photos.map(photo =>
                    <PhotoCard key={photo?.id} photo={photo}/>
                )
            }
        </div>
    )
}

export default PhotoSection