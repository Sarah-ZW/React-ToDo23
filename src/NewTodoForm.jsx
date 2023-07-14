import { useState } from "react"


export function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState ("")

    function handleSubmit(e) {
        e.preventDefault()
    if(newItem === '') return
        
    onSubmit(newItem)
    
      setNewItem("")
      }

      return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <label htmlFor="item">New Item</label>
        <input value={newItem} type="text" id="item" onChange={e => setNewItem(e.target.value)}></input>
        <button className='btn'>Add</button>
        </form>
      )
    
}