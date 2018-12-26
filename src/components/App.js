import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/youtube';



class App extends React.Component{
   
state ={videos: []};
    onTermSubmit =async term => {
      const response= await Youtube.get('/search/',{
        params:{q: term}
        
        });
        this.setState({videos: response.data.items})
    };
   
   
    render(){
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSearch={this.onTermSubmit} />
        found {this.state.videos.length} videos
    </div>
    );
}
}
export default App;