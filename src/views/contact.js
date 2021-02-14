import React, { Component } from 'react';
import axios from 'axios';

export default class contact extends Component {
    state = {
        contacts:[]
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/contacts')
        .then(res =>{
            console.log(res);
            this.setState({
                contacts: res.data.data.contacts.regional
            })
        })
    }
    render() {
        const {contacts} = this.state;
        const contactList = contacts.length ? 
        <div>
            <table class = "table table-bordered table-hover">
        <thead class="thead-dark">
            <tr>
                <th scope="col" >Location</th>
                <th scope="col" >Contact Number</th>
            </tr>
        </thead>
      
              {contacts.map(contact =>{
            return(
           <tbody key={contact.id}>
               <tr>
               <td> {contact.loc}</td>
                <td>{contact.number}</td>
                </tr>
                </tbody>  
                
        )
        })} 
                </table>
                </div>
                :(
            <div>Loading..</div>
        )
        return (
            <div>
               
                {contactList}
               
            </div>
        )
    }
}
