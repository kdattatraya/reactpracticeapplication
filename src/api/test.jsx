import React,{Component} from 'react';



var Button= React.createClass({
    render:function(){
        return('<button>5<button/>');
    }
});

React.renderComponent(<Button/>,document.getElementById('app'));
