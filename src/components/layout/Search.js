import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component{

    state = {
        text : ''
    };

    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        showClear : PropTypes.func.isRequired,
    };

    // Form submit
    getQuery = e => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Field is Empty', 'light');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text : ''});
        }
    }

    updateValue =(e)=>{
        this.setState({[e.target.name] : e.target.value})
    };

    clearUser = (e) => {
        this.props.clearUsers();
    }

    render(){        
        return(
            <div>
                <form className="form" onSubmit={this.getQuery} >

                    <input 
                        className="input is-large" 
                        onChange={this.updateValue} 
                        name="text"
                        type="text"
                        value={this.state.text} 
                        placeholder="Search . . ." />

                    <input className="button is-dark is-fullwidth" type="submit"  />
                </form>

                {this.props.showClear &&  
                    <button 
                        className="button is-danger is-outlined"
                        onClick={this.clearUser} > 
                    Clear Users </button> }

            </div>
        );
    }
}
export default Search;