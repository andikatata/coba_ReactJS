import React, {Component} from 'react';
import axios from 'axios';
import './style.css';

// silahkan di copy  punya mamat:v
export default class PostData extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            message: '',
            isloading:true
             }
        }
        
        componentDidMount(){
            const self=this;
            axios({
                method:'post',
                url:'http://private-anon-c885589ea7-crmindigo.apiary-mock.com/login',
                parameters :{
                    'email':'mhmmdnzr@helio.id',
                    'password':'sadsaeda'
                },
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(function(response){
                self.setState({data: response.data.data, message: response.message})
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
                    <div className='login-wrap'>
                        <h2>
                            {data.nama}
                        </h2>
                    <div className='form'>
                        <h3>Email</h3>
                        <p>{data.email} </p>
                        <h3>Gender</h3>
                        <p>{data.gender}</p>
                        <h3>Tanggal Lahir</h3>
                        <p>{data.tanggal_lahir} </p>
                        <h3>Kota Domisili</h3>
                        <p>{data.kota_domisili} </p>
                        <h3>Nomor Telepon</h3>
                        <p>{data.nomor_telepon} </p>
                        <h3>Profesi</h3>
                        <p>{data.profesi} </p>
                    </div>
                    </div>
                )
            }
}