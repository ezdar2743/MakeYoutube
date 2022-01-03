import { useEffect, useState } from 'react';
import Search_header from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import styles from './app.module.css';
import VideoSelect from './components/video_select/video_select';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);
  
  const selectedVideo = (video)=>{
    setSelectVideo(video);
  }

  const search = query =>{
    youtube.search(query)
    .then(videos => setVideos(videos))
  };
  useEffect(()=>{
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  },[]);
  return <div className={styles.app}>
  <Search_header onSearch={search}></Search_header> 
  <section className={styles.content}>
  {selectVideo&& <div className={styles.detail}>
    <VideoSelect video = {selectVideo}></VideoSelect>
    </div>}
    <div className={styles.list}>
  <VideoList videos ={videos} onVideoClick={selectedVideo}display={selectVideo?'list':'grid'}></VideoList>
  </div>
  </section>
  </div>
}

export default App;
