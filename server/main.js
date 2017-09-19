import { Meteor } from 'meteor/meteor';

import {Link} from '../imports/collections/links';
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';


Meteor.startup(() => {
    Meteor.publish('links', function () {
        return Link.find({});
    })
});
const middleware = ConnectRoute(function (router) {
   router.get('/:token', (req,res,next) => {
       const link = Link.findOne({token:req.params.token});
       if(link){
           Link.update(link, {$inc: {clicks: 1 }});
           res.writeHead(307,{'Location': link.url});
           res.end();
       } else
           next();
   })
});
WebApp.connectHandlers.use(middleware);
