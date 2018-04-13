import React, { Component } from 'react';
import { Button, Input, Icon,Dropdown,Card,Image} from 'semantic-ui-react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './Home.scss';
import axios from 'axios';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'hello',
            currentJamie: '50A',
            current: '10A'
        };
        this.getUserCurrent = this.getUserCurrent.bind(this);
        this.getJamieCurrent = this.getJamieCurrent.bind(this);
    }

    getUserCurrent(){
        var username="Jee Haeng";
        axios.get('/api/current/user?username='+username).then((res) => {
            // console.log(res.data);
            console.log(username);
            if(this.state.current!=res.data.current){
                this.setState({
                    current: res.data.current,
                    name: username
                });
            }
        }).catch((err) => {
            console.log("frontend GET error: ",err);
        });
    }
    getJamieCurrent(){
        axios.get('/api/current').then((res) => {
            console.log("Jamie");
            // console.log("frontend GET res:",res);
            if(this.state.currentJamie!=res.data.current){
                this.setState({
                    currentJamie: res.data.current
                });
            }
        }).catch((err) => {
            console.log("frontend GET error",err);
        });
    }
    componentDidMount(){
        console.log("componentDidMount");
        this.getJamieCurrent();
        this.getUserCurrent();
    }

    
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldcomponentupdate");
        return (nextState!=this.state);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentdidupdate");
        // this.getJamieCurrent();
        // this.getUserCurrent();
        
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
            <h1>Jamie {this.state.currentJamie}</h1>
            <h1>{this.state.name} {this.state.current}</h1>
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