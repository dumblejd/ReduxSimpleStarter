import React from 'react';
import VideoListItem from './video_list_item';


const VideoList=(props)=> {
    const videoItems = props.videos.map(
        (video)=>{
            return <VideoListItem key={video.etag} video={video} onSelectVideo={props.onSelectVideo}/>
        }
    );

    return ( //!!!!!! here use {videoitems}can get the value above because the react will try to match ??? //My fault it's not a problem i mistook the structure
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}
export default VideoList;