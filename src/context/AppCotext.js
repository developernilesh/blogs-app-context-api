import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useSearchParams } from "react-router-dom";

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    async function fetchBlogs(page = 1, tag = null, category = null) {
        setLoading(true);
        let url = `${baseUrl}get-blogs?page=${page}`;

        if(tag){
            url += `&tag=${tag}`
        }
        
        if(category){
            url += `&category=${category}`
        }

        try {
            // console.log(url)
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data)

            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        } 
        catch (error) {
            alert("Errror in fetching data");
            setPage(1)
            setPosts([]);
            setTotalPages('')
        }
        setLoading(false); 
    }

    function handlePageChange(page) {
        setSearchParams({page:`${page}`})
        setPage(page);
    }

    const value = {
        posts,setPosts,
        loading,setLoading,
        page,setPage,
        totalPages,setTotalPages,
        handlePageChange, fetchBlogs,
        searchParams
    }    

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}