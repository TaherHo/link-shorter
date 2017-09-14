import {Mongo} from 'meteor/mongo';
import validateUrl from 'valid-url';

import {check , Match} from 'meteor/check';


Meteor.methods({
    'links.insert': function (url) {
        check(url, Match.Where(url => validateUrl.isUri(url)));
    }
});
export const Link = new Mongo.Collection('link');
