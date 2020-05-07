import React from 'react';
import ListItem from './ListItem'
import '../Form.css'

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      currentItem : {
        name: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  
handleInput= (event) => {
    this.setState({
      currentItem: {
        name: event.target.value,
        key: Date.now()
      }
    });
  }
    
  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {
          name: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key!==key);
    this.setState({
      items: filteredItems
    })  
  }

  render(){
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value= {this.state.currentItem.name} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
            <ListItem items={this.state.items} 
            deleteItem={this.deleteItem}/>
        </header>
      </div>
    );
  }

}

export default Form;
