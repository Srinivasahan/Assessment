 import axios from 'axios';
 import { useState } from 'react';
const Fetching = () => {
  const [data, setData] = useState([])
  axios.get('https://jsonplaceholder.typicode.com/users').then(json => setData(json.data))
  const renderTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td>
          <td>{user.company.name}</td> 
        </tr>
      )
    })
  }
  return (
    <center>
      <h1>Details of User</h1><br></br>
      <table border={"5px"} cellPadding={"20px"} id="users"> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      <br></br>
      <hr></hr>
    </center>
  )
}
export default Fetching