var React = require('react');

var rotation = {};
rotation[1] = '';
rotation[8] = 'minus-ninety';

var Picture = React.createClass({
  render: function() {
    return (
      <a className="picture">
        <img
          src={this.props.photo.thumb} 
          width="250px" 
          className={rotation[this.props.photo.orientation]} />
      </a>
    );
  }
});

module.exports = Picture;
