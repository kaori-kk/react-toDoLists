import React from 'react';
import '../ListItem.css'

function ListItem(props){
  const items = props.items;
  console.log(items)
  const listItems = items.map(item => {
    return <div className="list" key={item.key}>
          <h2>{item.name}</h2>
          <button onClick={() => props.deleteItem(item.key)}>Delete</button>
          </div>})
  return (
    <div>
      {listItems}
    </div>

  )
}

export default ListItem;