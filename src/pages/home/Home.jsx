import "./home.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"

import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Home() {
    const [posts, setPosts] = useState([])
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts" + search);
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])
    return (
        <>
            <div className="home">
                <Posts posts={posts}></Posts>
                <Sidebar></Sidebar>
            </div>

        </>
    )
}