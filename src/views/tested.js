import React, { Component } from 'react';
import axios from 'axios';

export default class tested extends Component {
    state = {
        tests:[]
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/stats/testing/history')
        .then(res =>{
            console.log(res);
            this.setState({
                tests: res.data.data
            })
        })
    }
    render() {
        const {tests} = this.state;
        const testList = tests.length ? 
        <div>
            <table class = "table table-bordered table-hover">
        <thead class="thead-dark">
            <tr>
                <th scope="col" >Day</th>
                <th scope="col" >Source</th>
                <th scope="col" >Total Individuals Tested</th>
                <th scope="col" >Total Positive Cases</th>
                <th scope="col" >Total Samples Tested</th>
            </tr>
        </thead>
      
              {tests.map(test =>{
            return(
           <tbody key={test.id}>
               <tr>
               <td> {test.day}</td>
                <td>{test.source}</td>
                <td>{test.totalIndividualsTested}</td>
                <td>{test.totalPositiveCases}</td>
                <td>{test.totalSamplesTested}</td>

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
               
                {testList}
               
            </div>
        )
    }
}
