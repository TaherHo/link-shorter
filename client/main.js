import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComp from './components/header';
import LinkCreate from './components/link_create';

import {Link} from '../imports/collections/link';

const App = () =>{
    return(
        <div>
            <HeaderComp />
            <LinkCreate />
        </div>
    );
};


Meteor.startup(() =>{
    ReactDOM.render( <App/> , document.querySelector('.top-container'));
});
