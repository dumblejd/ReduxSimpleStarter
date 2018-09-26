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
        this.state={videos:[]};

        YTSearch({key: API_KEY, term:'asmr'},(videos)=>{  //get the video function

            this.setState({videos});
            console.log(this.state.videos);
        });
    }

    render() {
        return (<div>
            <SearchBar/>
            <VideoDetail video={this.state.videos[0]}/>
            <VideoList videos={this.state.videos} />
        </div>);
    }

}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
