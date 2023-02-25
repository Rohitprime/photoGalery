import { configureStore,createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos:
  [
    {
      id: "9JNBZ-ZuDNQ",
      created_at: "2023-02-22T10:37:17Z",
      updated_at: "2023-02-24T20:08:01Z",
      promoted_at: "2023-02-24T20:08:01Z",
      width: 6240,
      height: 4160,
      color: "#f3f3f3",
      blur_hash: "L=KB%VxukDRP?wxat6WCWURiV@t7",
      description: null,
      alt_description: "a tall building sitting on top of a lush green hillside",
      urls: {
        raw: "https://images.unsplash.com/photo-1677061857179-ae7a916c3c25?ixid=Mnw0MTQ5Mjl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzI2OTYxNQ&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1677061857179-ae7a916c3c25?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MTQ5Mjl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzI2OTYxNQ&ixlib=rb-4.0.3&q=80",
        regular: "https://images.unsplash.com/photo-1677061857179-ae7a916c3c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTQ5Mjl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzI2OTYxNQ&ixlib=rb-4.0.3&q=80&w=1080",
        small: "https://images.unsplash.com/photo-1677061857179-ae7a916c3c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTQ5Mjl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzI2OTYxNQ&ixlib=rb-4.0.3&q=80&w=400",
        thumb: "https://images.unsplash.com/photo-1677061857179-ae7a916c3c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTQ5Mjl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzI2OTYxNQ&ixlib=rb-4.0.3&q=80&w=200",
        small_s3: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1677061857179-ae7a916c3c25"
      },
      links: {
        self: "https://api.unsplash.com/photos/9JNBZ-ZuDNQ",
        html: "https://unsplash.com/photos/9JNBZ-ZuDNQ",
        download: "https://unsplash.com/photos/9JNBZ-ZuDNQ/download?ixid=Mnw0MTQ5Mjl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzI2OTYxNQ",
        download_location: "https://api.unsplash.com/photos/9JNBZ-ZuDNQ/download?ixid=Mnw0MTQ5Mjl8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NzI2OTYxNQ"
      },
      likes: 3,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "XKkWyWBQi7o",
        updated_at: "2023-02-24T20:08:01Z",
        username: "ilvagabiondo",
        name: "Il Vagabiondo",
        first_name: "Il",
        last_name: "Vagabiondo",
        twitter_username: "IlVagabiondo",
        portfolio_url: "https://www.ilvagabiondo.com/",
        bio: "Instagram: @ilvagabiondo",
        location: "Italy",
        links: {
          self: "https://api.unsplash.com/users/ilvagabiondo",
          html: "https://unsplash.com/@ilvagabiondo",
          photos: "https://api.unsplash.com/users/ilvagabiondo/photos",
          likes: "https://api.unsplash.com/users/ilvagabiondo/likes",
          portfolio: "https://api.unsplash.com/users/ilvagabiondo/portfolio",
          following: "https://api.unsplash.com/users/ilvagabiondo/following",
          followers: "https://api.unsplash.com/users/ilvagabiondo/followers"
        },
        profile_image: {
          small: "https://images.unsplash.com/profile-1584959047844-3c9dfeda4f31image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium: "https://images.unsplash.com/profile-1584959047844-3c9dfeda4f31image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large: "https://images.unsplash.com/profile-1584959047844-3c9dfeda4f31image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        instagram_username: "ilvagabiondo",
        total_collections: 0,
        total_likes: 1,
        total_photos: 240,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "ilvagabiondo",
          portfolio_url: "https://www.ilvagabiondo.com/",
          twitter_username: "IlVagabiondo",
          paypal_email: null
        }
      }
    },
     
  ]
  ,
  loading:true,
}

const photosSlice = createSlice({
  name:"photos",
  initialState,
  reducers:{
    isLoading:(state,action)=>{state.loading = action.payload},
    setPhotos:(state,action)=>{state.photos = action.payload}
  }
})

export const store = configureStore({
  reducer: {
    galery:photosSlice.reducer
  },
});

export const photosAction = photosSlice.actions
