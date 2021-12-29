class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
    }

    async mostPopular(){
          const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.requestOptions);
        const result = await response.json();
        return result.items;
            
    }
    async search(query){
         
            const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&&key=${this.key}`,
            this.requestOptions);
        const result_1 = await response.json();
        const items = result_1.items.map(item => ({ ...item, id: item.id.videoId }));
        return items;
                
    }
}

export default Youtube