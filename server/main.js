import { Meteor } from 'meteor/meteor';

import {Link} from '../imports/collections/links';

Meteor.startup(() => {
    Meteor.publish('links', function () {
        return Link.find({});
    })
});
