import { useEffect, useState } from "react";
import Quote from "./Component/Quote";
import Recipe from "./Component/Recipe";
import Product from "./Component/Product";
import Users from "./Component/Users";
// import Object from "./Component/Object";

function App() {
  let [quotes, setQuote] = useState([]); // Quote State
  let [recipe, setRecipe] = useState([]); // Recipe State
  let [userproducts, setUserProducts] = useState([]);//Product State
  let [users, setUSers] = useState([]);// Users State
  // let[object,setObj] =useState([]);
  // //object state


  //Quote API Start
  let getQuotes = () => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then((quotedata) => {
        setQuote(quotedata.quotes); // Access quotes directly from quotedata
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }
  //Quote API End

  //Recipe API Start
  let getRecipe = () => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((recipedata) => {
        setRecipe(recipedata.recipes);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }
  //Recipe API End

  // Product API Start
  const getProduct = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((productdata) => {
        setUserProducts(productdata.products)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  //Product API End

  //Users API Start
  const getUsers = () => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((usersdata) => {
        setUSers(usersdata.users)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  //Users API End

  //Object API Start
  // const getObj =() => {
  //   fetch(`https://api.restful-api.dev/objects`)
  //   .then(res => res.json())
  //   .then((objdata) => {
  //     setObj(objdata);
  //     console.log(objdata);
  //   }).catch((err) => {
  //     console.log(err);
  //     return false;
  //   })
  // }
  //Object API End

  useEffect(() => {
    getQuotes();
    getRecipe();
    getProduct();
    getUsers();
    // getObj();
  }, [])

  return (
    <>
     {/* <Object obj={object}/> */}
      <Users usersdata={users} />
      <Recipe recipe={recipe} />
      <Quote quote={quotes} />
      <Product userproducts={userproducts} />
     
    </>
  );
}

export default App;
