import {Mongo} from 'meteor/mongo';
import validateUrl from 'valid-url';

import {check, Match} from 'meteor/check';


Meteor.methods({
    'links.insert': function (url) {
        if (!url)
            return;
        else {
            check(url, Match.Where(url => validateUrl.isUri(url)));

            const token = Math.random().toString(36).slice(-5);
            Link.insert({url , token , clicks : 0});
        }
    }
});
export const Link = new Mongo.Collection('link');
