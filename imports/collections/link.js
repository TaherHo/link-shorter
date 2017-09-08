import {Mongo} from 'meteor/mongo';
import validateUrl from 'validate-url';


Meteor.methods({
    'links.insert': function (url) {
        validateUrl.isUri(url);
    }
});
export const Link = new Mongo.Collection('link');
