import { useEffect, useState } from 'react';
import Search_header from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyChm1YXsoOBSx9vR3Bz64aZZ2oCXNPXIZQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);
  return <div className={styles.app}>
  <Search_header></Search_header> 
  <VideoList videos ={videos}></VideoList>
  </div>
}

export default App;
