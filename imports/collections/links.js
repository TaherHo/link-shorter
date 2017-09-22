import {Mongo} from 'meteor/mongo';
import validateUrl from 'valid-url';
import {Meteor} from 'meteor/meteor';


import {check, Match} from 'meteor/check';


Meteor.methods({
    'links.insert': function (url) {
        if (!url)
            return;
        else {
            check(url, Match.Where(url => validateUrl.isUri(url)));
            if (Link.findOne({url: url})) {
                throw new Meteor.Error('111', 'Its repetitive! You had it before.');
                return;
            }
            const token = Math.random().toString(36).slice(-5);
            Link.insert({url, token, clicks: 0});
        }
    },
    'links.delete': function (token) {
        const deleteCandidate = Link.findOne({token: token});
        if (deleteCandidate) {
            if (confirm(deleteCandidate.url + 'will be deleted. are you sure?'))
                Link.remove({token: token});
            else
                throw new Meteor.Error('112', 'The user canceled deleting.');
        }
    }
});

export const Link = new Mongo.Collection('link');
