import React, { Component } from 'react'
import { getByTitle } from '@testing-library/react'

const NewsItems=(props)=> {
   

 
       let  {title, description, imageUrl, url,author,date,source} = props;
        return (
            <div>               
               <div className="card" style={{color:'gray'}}>
                <img src={!imageUrl?"https://images.moneycontrol.com/static-mcnews/2017/07/airtel-770x433.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '87%!important',zIndex:'1'}}>
                        {source}
                    </span>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} | Posted On: {new Date(date).toLocaleDateString()}</small></p>
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
                </div>
            </div>
        )
   
}

export default NewsItems
