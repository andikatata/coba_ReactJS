import React, {Component} from 'react';
import axios from 'axios';
export default class GetData extends Component{
   constructor(){
       super();
           this.state={
               data:[],
               message:'',
               isloading: true
           }
       }
   
    componentDidMount(){
        const self=this;
        axios({
            method:'get',
            url:'http://ec2-13-251-45-154.ap-southeast-1.compute.amazonaws.com:8080/api/v1/insert-order-management?page=2&size=10',
            headers: {
                'Authorization' : 'Basic dGVsa29tOmRhMWMyNWQ4LTM3YzgtNDFiMS1hZmUyLTQyZGQ0ODI1YmZlYQ==","description":"","enabled":true}]'

            }
        })
        .then(function(response){
            self.setState({data: response.data.data.result, message: response.message})
            })
            .catch(function(error){
            //self.setState({message:'data is not available'})
            console.log(error);
            });
        }
        render(){
            const {data} = this.state;
            console.log(data);
            return(
                <div>
                    <table border="1">
                    <th>Nama Depan</th>
                    <th>Email</th>
                    <th>Nama Project</th>
                    <th>Nama Unit</th>
                        <tbody>{this.state.data.map(function(data,index){
                            return(
                                <tr key={index}>
                                    <td> {data.first_name} </td>
                                    <td> {data.email} </td>
                                    <td> {data.project_name} </td>
                                    <td> {data.unit_name} </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }