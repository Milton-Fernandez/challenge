import axios from 'axios'
import React, {useState, useEffect} from 'react'


const Book = () =>{
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.react_app_book_key}`);
            setArticles(res.data.results.books);

            setLoading(false);
        };
        getArticles();

    }, []);

    console.log(articles);
   

    return(
        <>
        <div>
            <ul>
            {articles.map((book)=>{
                return(
                <>
                
                <li>{book.author}</li>
                </>)
            })}
            </ul>
        </div>
        </>
    )
}


export default Book;