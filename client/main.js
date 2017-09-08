import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComp from './components/header';
import LinkCreate from './components/link_create';

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
