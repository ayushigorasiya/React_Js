import { useEffect, useState } from 'react';
import Accounts from './Component/Accounts';
import Category from './Component/Category';
import Transactions from './Component/Transactions';
const App = () => {

  let [mock , setMock] = useState([]);
  let [category , setCategory] = useState([]);
  let [tran , setTran] = useState([])

  let getMockApi = () => {
    fetch('http://localhost:8000/accounts')
            .then(res => res.json())
            .then((data) => {
              setMock(data); // Access Account directly from accountdata
            }).catch((err) => {
              console.log(err);
              return false;
            })
  }

  let getCategory = () => {
    fetch('http://localhost:8000/categories')
            .then(res => res.json())
            .then((data) => {
              setCategory(data); // Access Account category from categorydata
            }).catch((err) => {
              console.log(err);
              return false;
            })
  }

  let getTransaction = () => {
    fetch(`http://localhost:8000/transactions`)
    .then(res => res.json())
    .then((data) => {
      setTran(data); // Access transaction category from transactiondata
    }).catch((err) => {
      console.log(err);
      return false;
    })  
  }
        useEffect(() => {
          getMockApi();
          getCategory();
          getTransaction();
        } , [])

  return (
    <>
      <div className="app-container">
      <header className="header">
      
      
        <h1 align="center"  style={{padding:35, marginTop:0  }}> <span>💰</span> Finance Tracker <span>📈</span></h1>

        
      </header>

      
    </div>
      <Accounts
       account={mock}
      />

      <Category
        cate = {category}
      />

      <Transactions
        trans ={tran}
      />
    </>
  );
};

export default App;
