import React, {Component} from 'react';

class LinkCreate extends Component {

    handleSubmit (event){
        event.preventDefault();
        Meteor.call('links.insert', this.refs.input.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <lable>Link to shorten</lable>
                    <input ref="input" className="form-control"/>
                </div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        )
    }
}


export default LinkCreate;