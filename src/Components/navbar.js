import React, {useState} from 'react'
import './landingPage.css'
import  CustomPopup from './LogIn'
function Navbar(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const titleChangeHandler = (event) =>  {
      setEnteredTitle(event.target.value);
     
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title:enteredTitle, 
      
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    
}
  
  return (
    <div className="navbar">
    <ul>

        <li><a href="/home">Home</a></li>
        <li><a href="new">New Games</a></li>
        <li><a href="/library">Library</a></li>
    </ul>
    
    <div className="search-bar">
        <img alt = '' src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png' />
        <form>
        <label>Title</label>
         <input type = 'text'
          onChange={titleChangeHandler}
          value = {enteredTitle} />
          </form>
        
    </div>
</div>
  )
}

export default Navbar