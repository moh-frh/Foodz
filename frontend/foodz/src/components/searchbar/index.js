import React from 'react';

import logo from '../../assets/images/logo.svg';
import './searchbar.css'

// helper
import IpStack from '../../utilities/getCityipstack/index';
import addJs from '../../utilities/addStatic/addJs.js'

class SearchBar extends React.Component {

    state = {
        city : ""
    }


    componentDidMount(){
        // add search bar javascript file to the bottom of the body element
        addJs('/searchbar.js')

        // get citys from ip stack api
        fetch('http://api.ipstack.com/134.201.250.155'+
        '?access_key=1917221ad7bec92860fd22128b77eca0')
        .then(res=> res.json())
        .then((data)=>{
            this.setState({city : data.city})
        })
    }

    render(){
        return (
            <>

                <form  id="search-form" className="form-inline my-lg-0">
                <div className="input-group mb-3 w-70 mt-5 border p-3">
                    <div className="input-group-prepend ">
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search..." 
                        aria-describedby="basic-addon2" 
                        value={this.state.city}
                    />
                    <div >
                        <button className="btn btn-primary">search</button>
                    </div>
                </div>
                </form>
            </>
        );
    }
  
}



export default SearchBar;
