import React from 'react'

const Newsitem = (props)=> {
    let {title , description,imageurl, newsurl,author , date , source} = props;
    return (
      <div className='my-3'>
        <div className="card mx-3" >
          <img src={!imageurl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <span className="badge bg-danger">{source}</span>
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
