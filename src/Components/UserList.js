import React from 'react'
import {Card,Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
 function UserList({userList}) {
   
    return (
        
        <div className="CardUser">
            {
                userList.map((el,key)=>(
            
          <Card  style={{ width: '18rem' }} key={key} >
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKI4gXXwScQSN-8UJsYNxz9LaS_QwMw40jNL8zf7qfSTzgSDee&usqp=CAU" className='ImageUser' />
  <Card.Body>
                <Card.Title>{el.name}</Card.Title>
    <Card.Text>
                {el.username}
    </Card.Text>
    <Link to={`/profile/${el.id}`}>
    <Button variant="success">Profil</Button>
    </Link>
  </Card.Body>
</Card>
))}
        </div>
    
    )              
}


export default UserList