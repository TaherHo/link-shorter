import React, {Component} from 'react';
import {Link} from '../../imports/collections/links';
import {createContainer} from 'react-meteor-data';
import {Meteor} from 'meteor/meteor';


class LinkList extends Component {

    deleteHandler() {
        console.log(this.token);
        Meteor.call('links.delete', this.token, (error) => {
                if (error)
                    console.log(error.message);
            }
        )
    }

    renderRows() {

        return this.props.links.map(link => {
            const {url, token, clicks} = link;
            const shortAddress = `http://localhost:3000/${token}`;

            return (<tr key={token}>
                    <th><a href="#"><img onClick={this.deleteHandler.bind(link)} src="images/delete-512.png" height="20"
                                         width="20"/></a></th>
                    <th>{url}</th>
                    <th>
                        <a href={shortAddress}>{shortAddress}</a>
                    </th>
                    <th>{clicks}</th>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Delete</th>
                        <th>URL</th>
                        <th>Address</th>
                        <th>Clicks</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links');

    return {links: Link.find({}).fetch()};
}, LinkList);