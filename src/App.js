import React, {useState} from "react";
import "./index.css";
import {booklist} from "./Data/BookList.js";

//statelss  function componenet that always return JSX

const App = ()=> {
 
  const [searchKey,setSearchKey] = useState(' ');
  //const [isShow , setisShow] = useState(false);

  const handleChange  = (event) =>  {
    console.log(event);
  }

  const handletextChange =(event) =>
  {
    setSearchKey(event.target.value);
   // setisShow((prevState)=> (!prevState.isShow));
  }

  const filterBooks = booklist.filter((book) => book.title.includes(searchKey));
 
  return (
    <div>
      <h1> My Hacker Stories </h1>
      <Search keywords={searchKey} updateKeys={handletextChange} toogleButton={handleChange}/>
      <hr />
      <p id="searchMsg" className="searchMsg">  Your Search Results for <span className="searchRs"> {searchKey.toUpperCase()} </span> returned the following books </p>
      <div className="booklist"> 
       <List  books={filterBooks} />
     </div>   
     </div>
   )
}

function List({books})
{
  const list=books;
   return(
 list.map((item) => {
            return (
              <article className="book" key={item.objectId}>
              <h1> {item.title} </h1>
              <h3>{item.author} by <span> {item.publisher}</span></h3> 
              <span> <a href="#"> {item.website}  </a></span>
              <h6> Total No. of Pages {item.pages} </h6>
              </article>
            )
          })

  )
        

}

  const Search = ({keywords, updateKeys, toogleButton}) => {
     return(<div>
           <label htmlFor ="search"> Search </label>
          <input id="search" type="text" placeholder="searchbooks" onChange={(event)=>updateKeys(event)}/>
          <button type="button"  onClick={(event)=>toogleButton(event)}> Search Book List </button>
       </div>);
  }


export default App;
