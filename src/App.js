import React  from 'react'
import UserList from "./Components/UserList"
import './App.css'
import axios from 'axios';
import UserProfil from './Components/UserProfil';
import {BrowserRouter,Route} from 'react-router-dom'
import UserCom from './Components/UserCom';


 class App extends React.Component {
   state={
      userList:[]

   }

   componentDidMount(){
     this.getUsers();
   }

   getUsers=()=> axios.get('https://jsonplaceholder.typicode.com/users')
   .then(Users=>this.setState({
     userList:Users.data
   })
   ).catch(err=> console.log(err))

  


  render() {
    console.log(this.state.userList)
    return (
      <BrowserRouter>
      <div>
        
        <Route exact path='/' render={()=><>
        <UserList userList={this.state.userList}/>
        </>
        }
        />
        
        <Route exact path='/profile/:id' render={(props)=><>
        <UserProfil {...props}/>
        </>
        }
        />

        <Route exact path='/Comment/:id' render={(props)=>
        <UserCom {...props}/>}/>

      </div>
      </BrowserRouter>
    )
  }
}

export default App
