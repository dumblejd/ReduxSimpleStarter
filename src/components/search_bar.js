import React from 'react'


// const SearchBar = ()=>{
//     return <input/>;
// };

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term:''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onKeyPress=this.onKeyPress.bind(this);
    }
    render(){
        return (
            <div className="search-bar">
            <input
                value={this.state.term}
                onChange={(event)=>this.onInputChange(event.target.value)}
                onKeyPress={this.onKeyPress}
            />

            </div>);
    }
    onInputChange(term){
        this.setState({term:term});

    }
    onKeyPress(e){                         //???? why use this with parameter will fail??????????
       // console.log("no");
          if(e.which == 13)
          {
              //console.log("yes");
              this.props.onSearchTermChange(this.state.term);
          }
          
    }
}
export default SearchBar;