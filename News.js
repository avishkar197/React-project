import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {
    constructor(){  
    super();
    console.log("Hello I am a constructor from News component")
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e05b2b1280e04737b46c753712e51e9f";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
}

  render() {
    return (
      <div className="container my-3">
        <h2>NewsViews - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitems title={element.title?element.title.slice(0, 45):""}
            description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage}
            newsUrl={element.url} />
        </div>
    })}
        </div>
      </div>
    )
  }
}


