import React from 'react';
import ReactDom from 'react-dom';
import Slides from './components/Slides.react'

ReactDom.render(
    <Slides/>,
    document.querySelector('#page-wrap')
);