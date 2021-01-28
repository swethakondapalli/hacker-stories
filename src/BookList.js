import React from "react";
import "./index.css";

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://redux.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

/*
const menu = [
  {
    menu: 'pizza',
    category: 'lunch'
  },
  {
     menu: 'grilled cheese',
    category: 'breakfast'
  },
  {
     menu: 'greek salad',
    category: 'lunch'
  },
  {
     menu: 'oatmeal',
    category: 'breakfast'
  },
  {
     menu: 'noodles',
    category: 'dinner'
  }
  ,
  { menu: 'burger',
    category: 'dinner'}
]


const category = [...new Set(menu.map((item)=> item.category))];
/* const categorylist = category.join(' '); 

const dinner = menu.filter((item)=> item.category=='dinner');
const ispasta = menu.find(item=> item==='pasta');

*/

//statelss  function componenet that always return JSX

function BookList() {
  return (
        <Book item={list}>
          <p> My best friend </p>
        </Book>
   )
}

function Book(props) 
 {
   const {item, children} = props;
   return(    
         item.map((item)=>{
             return (<article className="book">                         
                     <h1> {item.title}</h1>
                     <h3>{item.author}</h3>
                     <h4> {item.url} </h4>    
                      </article>)
                      })
          )
  }

  

export default BookList;
