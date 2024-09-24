import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './component/TableComponent';
import { User } from './interfaces/User';



function App() {

  const users: User[] = [
    {
      id: 1,
      name: "Jayadev Satapathy",
      email: "jayadev@gmail.com",
      phone: "8260744974"
    },
    {
      id: 1,
      name: "Anurag Pattaniak",
      email: "anurag@gmail.com",
      phone: "8978654578"
    },
    {
      id: 1,
      name: "Santosh Chaudoury",
      email: "santosh@gmail.com",
      phone: "9937765465"
    },
    {
      id: 1,
      name: "Sohel Khan",
      email: "sohel@gmail.com",
      phone: "9987546576"
    },
    {
      id: 1,
      name: "Suryakanta Sahani",
      email: "suryakanta@gmail.com",
      phone: "9965475667"
    },
  ]



  return (

    <div className="App">
      <h1><u>Employee List</u></h1>
      <TableComponent users={users} />
    </div>
  );
}
export default App;