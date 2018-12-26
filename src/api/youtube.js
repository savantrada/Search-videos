import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBIG7n2N2_J4ADVuSI8yufgMauKURNRuls'
    }
});

