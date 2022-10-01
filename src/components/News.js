import React, {useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




const News =(props)=>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


  
  const updateNews=async ()=>{
    props.setProgress(10);
      let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9b6c6123c5424ddfb36b322c30e5902c&page=${page}&pageSize=${props.pageSize}`;
      props.setProgress(30);
  
      setLoading(true);
      let data= await fetch(url);
       let parsedData = await data.json();
       setArticles(parsedData.articles);
       setLoading(false);
      
      props.setProgress(100);
    //    console.log(parsedData);
   
    }

    useEffect(() => {
      updateNews();
      document.title = `${(props.category)}`;
    }, []);
    

    // const onClickLeft=async ()=>{
    //    console.log('previcouis');
    //    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9b6c6123c5424ddfb36b322c30e5902c&page=${page - 1}&pageSize=${props.pageSize}`;
    //    setLoading({loading:true});
    //    let data= await fetch(url);
    //    let parsedData = await data.json();
    //    setArticles(parsedData.articles);
    //    setTotalResults(parsedData.totalResults);
    //    setPage(page - 1);
    //    setLoading(false);
      
    // } 


  //   const onClickRight=async()=>{
  //     console.log('nex');

  //      if(page + 1 > Math.ceil(totalResults/props.pageSize)){

  //      }
  //      else{
  //        let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9b6c6123c5424ddfb36b322c30e5902c&page=${page + 1}&pageSize=${props.pageSize}`;
  //        setLoading({loading:true});
  //        let data= await fetch(url);
  //        let parsedData = await data.json();
  //        setPage( page + 1);
  //        setArticles(parsedData.articles);
  //        setLoading(false);
       
  //      }
     
  //  } 


   const fetchMoreData = async() => {
     
      
      let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9b6c6123c5424ddfb36b322c30e5902c&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page +1);
      setLoading(true);
      let data= await fetch(url);
       let parsedData = await data.json();
       setArticles(articles.concat(parsedData.articles));
       setTotalResults(parsedData.totalResults);
       setLoading(false);
     

    };
    
        return (
            

           
                <>
                 <h1 style={{marginTop: '61px',textAlign: 'center'}}>News</h1>
            {/* {this.state.loading &&   <Spinner/>} */}

               {/* <div className="d-flex justify-content-between" >
               <button className="btn btn-danger" disabled={this.state.page<=1} onClick={this.onClickLeft}>previous</button>
               <button className="btn btn-danger"  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} onClick={this.onClickRight}>Next</button>

               </div> */}
               
               <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.lenght !== totalResults}
          loader={<Spinner/>}
                >
                  <div className="container my-2">
                    <div className="row">
                    {articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                             <NewsItems  title={element.title.slice(0, 15)}
                             imageUrl={element.urlToImage} url={element.url} description={element.description} date={element.publishedAt} source={element.source.name} author={element.author} />
                         </div> 

                    })}              
                    </div></div>
                  </InfiniteScroll>
                    
                </>
            
        )
    
}

export default News


News.defaultProps = {
  country: 'us',
  pageSize: 20,
  category:'science'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category:PropTypes.string
}