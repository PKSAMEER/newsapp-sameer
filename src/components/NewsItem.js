import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card">
                {imageUrl ? <img src={imageUrl} className="card-img-top" alt="..." /> : <img src="https://tailwindflex.com/storage/thumbnails/skeleton-loader/thumb_u.min.webp?v=1" className="card-img-top" />}
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    <p class="card-text"><small class="text-muted">By {!author ? "unknown" : author} on {date}</small></p>
                </div>
            </div>
        </div>

    )
}

export default NewsItem