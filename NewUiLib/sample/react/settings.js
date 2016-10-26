var React = require('react');
var template = require('./settings.rt');

var app = React.createClass({
    getInitialState: function () {
        return {
            dock: 'TOP',
            radioButtonsValue: 1
        };
    },
    learnMore: function () {
        console.log('learn more');
    },

    render: template
});

React.render(React.createElement(app), document.getElementById('app'));