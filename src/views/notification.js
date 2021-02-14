import React, { Component } from 'react';
import axios from 'axios';

export default class notification extends Component {
    state = {
        notifications:[]
    }
    componentDidMount(){
        axios.get('https://api.rootnet.in/covid19-in/notifications')
        .then(res =>{
            console.log(res);
            this.setState({
                notifications: res.data.data.notifications
            })
        })
    }
    render() {
        const {notifications} = this.state;
        const notificationList = notifications.length ? 
        <div>
            <table className = "table table-bordered table-hover">
        <thead className="thead-dark">
            <tr>
                <th scope="col" >Title</th>
                <th scope="col" >Link</th>
            </tr>
        </thead>
        {notifications.map(notification=>{
            return(<tbody key={notification.id}>
                <tr>
                <td>{notification.title}</td> 
                <td>{notification.link}</td>
                </tr>

            </tbody>)
        })}
        </table>
        </div>:(
            <div>Loading..</div>
        )
        return (
            <div>
                {notificationList}
            </div>
        )
    }
}
