import { useEffect, useState} from "react"
import "./mystyle.css"



const UserList = () => {
    const[data,setData]=useState([])
    useEffect(() => {
        loadData();

},[])

    const loadData = async () => {
         fetch("https://jsonplaceholder.org/users")
           .then((response) => response.json())
           .then((receivedData) => setData(receivedData))
           .catch(error=>console.log("error, something is missing"))
    }
    //console.log(data)
    return (
      <div className="wrap">
        <h1>List Of Users</h1>
        {data.map((item) => (
          <div key={item.id}>
            <ul>
              <li>{item.firstname}</li>
            </ul>
          </div>
        ))}
      </div>
    );
}

export default UserList