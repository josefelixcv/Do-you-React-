var TaskList = React.createClass({

    removeTask: function(e) {
      var t = e.target.value;
      this.props.deleteTask(t);
    },

    render: function() {

      var displayTask = (task) => <li><button value={task} onClick={ this.removeTask }>x</button>{task}</li>;

      return (
        <ul>
          { this.props.items.map(displayTask) }
        </ul>
      );
    }

});
