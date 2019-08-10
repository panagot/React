import React from 'react';
//import StaticList from "./StaticList"; No longer needed for this exercise.
import DynamicList from "./DynamicList";

class App extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <h1>Static List</h1>
        <StaticList />
        <h1>Dynamic List</h1>
        <DynamicList />
      </div>
    );
  }
}




export default App;
