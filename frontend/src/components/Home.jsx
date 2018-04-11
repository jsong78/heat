import React, { Component } from 'react';
import { Button, Input, Icon,Dropdown,Card,Image} from 'semantic-ui-react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './Home.scss'


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'World'
        };
        this.updateName = this.updateName.bind(this);
    }
    updateName(){
        this.setState({
            name: 'Jamie'
        });
    //     fetch('http://localhost:3000/api')
    //         .then((res)=>{return res.json()})
    //         .then((data)=>{this.setState({name:'Jamie'})})
    }
render(){
    return(
    
        <div className="home">
            <div className="homebar">
                <div className="ui fixed inverted menu">
                    <div className="ui container">  
                        <Link to="/">
                            <Button className="ui inverted yellow button">Home
                            </Button>
                        </Link>
                        <div className="menu item right" />
                        <div className="menu item"></div>
                        <Button className="ui yellow button">
                            Log In
                        </Button>
                        <Button className="ui yellow button">
                            Register
                        </Button>   
                    </div>
                </div>
            </div>
            <h1>Welcome to H.E.A.T!</h1>
            <div className="content">
                <div className="leftdiv">
                    <h2>Connect your appliances with our device to monitor how much electricity you use daily and control the power</h2>
                </div>
                <div className="rightdiv">
                    <a href="http://s347.photobucket.com/user/thdwoals17/media/ECE445_physical_diagram_zps7jwz0uvm.png.html" target="_blank">
                    <img id="physicalphoto" src="http://i347.photobucket.com/albums/p463/thdwoals17/ECE445_physical_diagram_zps7jwz0uvm.png" border="0" alt=" photo ECE445_physical_diagram_zps7jwz0uvm.png"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}}

export default Home;