import React from 'react';
import '../App.css';
import Form from './Form'

class App extends React.Component {
  render() {
    return (
      <div className="name-list">
        <h2>Add your tasks</h2>
        <Form />
      </div>
    );
  }
}

export default App;
