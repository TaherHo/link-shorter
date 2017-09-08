import React from 'react';
import ReactDOM from 'react-dom';

import HeaderComp from './components/header';

const App = () =>{
    return(
        <div>
            <HeaderComp/>
        </div>
    );
};


Meteor.startup(() =>{
    ReactDOM.render( <App/> , document.querySelector('.top-container'));
});
