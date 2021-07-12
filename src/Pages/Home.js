import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'


import {
    Row,
    Container,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    Button
} from 'reactstrap'

import UserCard from '../Components/UserCard'
import Repos from '../Components/Repos'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { toast } from 'react-toastify'
import { conditionalExpression } from '@babel/types'


const Home = () => {

     const context = useContext(UserContext)

     const [query,setQuery] = useState('')

     const [user,setUser] = useState(null)

     const fetchDetails = async () => {
         try{
             const {data} = await axios.get(`https://api.github.com/users/${query}`)
             setUser(data)
             console.log({data})
         }
         catch(error){
             toast("Not able to locate user", {
                 type:"error"
             })
         }
     }

     //put anything behind login
     if(!context.user?.uid){
         return <Redirect to="/Signin" />
     }


    return (
        <Container>
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup>
                    <Input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Username"
                    
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="primary" onClick={fetchDetails}>Fetch User</Button>
                    </InputGroupAddon>
                    </InputGroup>
                    {user ? <UserCard user={user}/>:null}
                </Col>
            <Col md="7">{user ? <Repos repos_url={user.repos_url}/> : null}</Col>
            </Row>
        </Container>
    )
}

export default Home
