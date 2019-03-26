  var Counter = React.createClass({
    getInitialState: function() {
      return {
        count: 0
      };
    },

    getDefaultProps: function() {
      return {
        path: '//www.gravatar.com/avatar/ae24e879c889ff28df65bcab597db72a?s=70&d=https%3A%2F%2Fs3.amazonaws.com%2Flaracasts%2Fimages%2Fdefault-avatar-2.png'
      };
    },


    increment: function() {
      var count = this.state.count + 1;
      this.setState({ count });
    },

    decrement: function() {
      var count = this.state.count - 1;
      if (count < 0) {
        count = 0;
      }
      this.setState({ count: count});
    },

    render: function() {
      return (
        <div>
          <h1>Counter: {this.state.count}</h1>
          <button onClick={this.decrement}>-1</button>
          <button onClick={this.increment}>+1</button>
          <img src={this.props.path} />
        </div>
      );
    }


  });

  React.render(<Counter path="//www.gravatar.com/avatar/ae24e879c889ff28df65bcab597db72a?s=70&d=https%3A%2F%2Fs3.amazonaws.com%2Flaracasts%2Fimages%2Fdefault-avatar-2.png"/>, document.body);