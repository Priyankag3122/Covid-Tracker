import React, { Component } from 'react';
import axios from 'axios';

export default class colleges extends Component {
  state = {
    colleges:[]
}
componentDidMount(){
    axios.get('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
    .then(res =>{
        console.log(res);
        this.setState({
            colleges: res.data.data.medicalColleges
        })
    })
}
render() {
    const {colleges} = this.state;
    const collegeList = colleges.length ? 
    <div>
        <table class = "table table-bordered table-hover">
    <thead class="thead-dark">
        <tr>
            <th scope="col" >Sate Name</th>
            <th scope="col" >Institue Name</th>
            <th scope="col" >City</th>
            <th scope="col" >Type</th>
            <th scope="col" >Admission Capacity</th>
            <th scope="col" >Hospital Beds</th>
        </tr>
    </thead>
  
          {colleges.map(college =>{
        return(
       <tbody key={college.id}>
           <tr>
           <td> {college.state}</td>
            <td>{college.name}</td>
            <td>{college.city}</td>
            <td>{college.ownership}</td>
            <td>{college.admissionCapacity}</td>
            <td>{college.hospitalBeds}</td>
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
           
            {collegeList}
           
        </div>
    )
}
}

