import axios from "axios"

export const getFromUnsplash = async()=>{

    const res = await axios.
    get(`https://api.unsplash.com/photos?client_id=VMmuvAOyKybt5TCbsXpO3wnP8_6_KKM1XrqoWo3SdjA&`)
    return res.data
}

export const searchFromUnsplash = async(q)=>{
    const res = await axios.
    get(`https://api.unsplash.com/search/photos?page=1&query=${q}&client_id=VMmuvAOyKybt5TCbsXpO3wnP8_6_KKM1XrqoWo3SdjA&`)
    return res.data
}