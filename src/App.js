import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/spinner/Loading';
import UserList from './components/userlist/UserList';

function App() {
  const [listOfUsers, setListOfUsers] = useState(null);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((user) => {
        setListOfUsers(user.data);
        setTimeout(() => {
          setShowSpinner(false);
        }, 2000)
        
      })
      .catch((err) => {
        console.log('error:', err);
      })
  }, []);

  return (
    <div className="App">

      {showSpinner ?  <Loading /> :  <UserList listOfUsers={listOfUsers} />}
      
    </div>
  );
}

export default App;
