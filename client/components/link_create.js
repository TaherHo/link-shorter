import React, {Component} from 'react';

class LinkCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {error: ''};
    }

    handleSubmit(event) {
        event.preventDefault();
        Meteor.call('links.insert', this.refs.input.value.trim(), (error) => {
            if (error)
                if (error.error == '111')
                    this.setState({error: "It's repetitive! You had it before."});
                else
                    this.setState({error: 'Enter a valid URL!'});
            else {
                this.setState({error: ''});
                this.refs.input.value = '';
            }
        });
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <lable>Link to shorten</lable>
                    <input ref="input" className="form-control"/>
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        )
    }
}


export default LinkCreate;