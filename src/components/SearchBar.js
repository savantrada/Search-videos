import React from 'react';

class SearchBar extends React.Component{

    state={term: ''};

    onInputChange =event =>{
        this.setState({term: event.target.value});
    }

    onFormSubmit =(event) =>{
        event.preventDefault();

        this.props.onSearch(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label className="label">Video Search</label>
                        <input type='text' placeholder='Video Search' value={this.state.term} onChange={(e) => this.setState({term: e.target.value}) }/>
                    </div>
                </form>
            </div>
        );
        
       
    }
}

export default SearchBar;