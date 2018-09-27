import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';
import reducers from './reducers';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyApSf9o_R3Fwnh5ZqlvsikAHUnJjkUaKLQ';
import VideoDetail from './components/video_detail';

class App extends Component{
    constructor(props)
    {
        super();
        this.state={videos:[],
        selectedVideo: null};

       this.videoSearch('Shiba')
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term:{term}},(videos)=>{  //get the video function

            this.setState({videos:videos,selectedVideo:videos[0]});
            console.log(this.state.videos);
        });
    }


    render() {
        return (<div>
            <SearchBar onSearchTermChange={(term)=>this.videoSearch(term)}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList videos={this.state.videos}
            onSelectVideo={(props)=>{this.setState({selectedVideo:props})}} />
        </div>);
    }

}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
