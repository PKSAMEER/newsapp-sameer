import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API_KEY)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const newsUpdate = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let jsonData = await data.json()
        setArticles(jsonData.articles)
        setTotalResults(jsonData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    console.log(loading, "loading")

    useEffect(() => {
        newsUpdate();
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let jsonData = await data.json()
        setArticles(articles.concat(jsonData.articles))
        setTotalResults(jsonData.totalResults)
        setLoading(false)

    };

    return (
        <div className="container my-3" >

            <h1 style={{ marginTop: '75px' }}>Today's top {capitalizeFirstLetter(props.category)} headlines.</h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <Spinner />}
            >
                <div className="container">

                    < div className="row" >
                        {articles?.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element?.title?.slice(0, 45)} description={element?.description?.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        ))}
                    </div>

                </div>

            </InfiniteScroll>
        </div >

    )
}


News.defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'sport',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News