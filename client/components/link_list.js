import React, {Component} from 'react';
import {Link} from '../../imports/collections/links';
import {createContainer} from 'react-meteor-data';
import {Meteor} from 'meteor/meteor';


class LinkList extends Component {



    renderRows() {
        return this.props.links.map(link => {
            const {url, token, clicks} = link;
            const shortAddress =`http://localhost:3000/${token}`;

            return (<tr key={token}>
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