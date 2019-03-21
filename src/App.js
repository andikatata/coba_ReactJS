import React, { Component } from 'react';
import './App.css';
import FormLogin from './form';

class App extends Component {
      
        constructor(props) {
          super(props);
          this.state = {
            color: "ROSYBROWN"
          };
        } 

        HandleChange(e) {
          this.setState({
            text: e.target.value
          })
        }
 
        HandleClick(e) {
          const {text} = this.state;
          this.setState({color : text})
      }
      
        render() {
          // console.log(this.state);
          // const stylesObj = {
          //   background: this.state.color
          // };
          // const stylesCol = {
          //   color: this.state.color
          // };
          // const stylesInp = {
          //   color : this.state.color
          // };
      
          return (
            // <div id="hello-world" style={stylesObj} className="container">
            //   <div className="box">
            //     <h1 style={stylesCol}>GANTI WARNAMU</h1>
            //     <br />
            //     <input value={this.state.text} style={stylesInp} onChange={this.HandleChange.bind(this)} />
            //     <br />
            //     <br />
            //     <br />
            //     <button onClick={this.HandleClick.bind(this)}> <b>CHANGE</b></button>
            //     </div>
            // </div>

            <div> 
            <FormLogin username="Tata" style={{color:'red'}} />
            </div>
            
          );
        }
      }
      
      export default App;