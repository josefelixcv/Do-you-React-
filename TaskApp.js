var TaskApp = React.createClass({

   getInitialState: function() {
      return {
        items: [],
        task: ''
      };
    },
    
    onChange: function(e) {
      this.setState({ task: e.target.value });

    },

    addTask: function(e) {
      this.setState({
        items: this.state.items.concat([this.state.task]),
        task: ''
      });

      e.preventDefault();
    },

    deleteTask: function(t) {
      this.setState({
        items: this.state.items.filter((item) => item !== t)
     });
    },

    render: function() {
      return (
        <div>
          <h1>My Task</h1>
          <TaskList items={this.state.items} deleteTask={this.deleteTask}/>

          <form onSubmit={this.addTask}>
            <input onChange={this.onChange} value={this.state.task} />
            <button>Add Task</button>
          </form>

        </div>
      );
    }


});

React.render(<TaskApp />, document.body);
