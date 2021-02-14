import React, { Component } from 'react';
import axios from 'axios';

export default class hospitals extends Component {
    state = {
        hospitals:[]
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
        .then(res =>{
            console.log(res);
            this.setState({
                hospitals: res.data.data.regional
            })
        })
    }
    render() {
        const {hospitals} = this.state;
        const hospitalList = hospitals.length ? 
        <div>
            <table className = "table table-bordered table-hover">
        <thead className = "thead-dark">
            <tr>
                <th scope="col" >State Name</th>
                <th scope="col" >Rural Hospitals</th>
                <th scope="col" >Rural Beds</th>
                <th scope="col" >Urban Hospitals</th>
                <th scope="col" >Urban Beds</th>
                <th scope="col" >Total Hospitals</th>
                <th scope="col" >Total Beds(State-wise)</th>
            </tr>
        </thead>
      
              {hospitals.map(hospital =>{
            return(
           <tbody key={hospital.id}>
               <tr>
               <td> {hospital.state}</td>
                <td>{hospital.ruralHospitals}</td>
                <td>{hospital.ruralBeds}</td>
                <td>{hospital.urbanHospitals}</td>
                <td>{hospital.urbanBeds}</td>
                <td>{hospital.totalHospitals}</td>
                <td>{hospital.totalBeds}</td>
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
               
                {hospitalList}
               
            </div>
        )
    }
}
