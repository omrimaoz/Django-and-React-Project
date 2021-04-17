import React, { Component } from "react"
import { render } from "react-dom"
import HomePage from './HomePage'
import RoomJoinPage from "./RoomJoinPage";
import CreateNewRoomPage from "./CreateNewRoomPage";
import {BrowserRouter as Router, Switch, Route, Link, Redirect,} from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (<Router>
            <Switch>
                <Route exact path='/'>
                    <p>This is the hope page</p>
                </Route>
                <Route path='/join' component={RoomJoinPage}></Route>
                <Route path='/create' component={CreateNewRoomPage}></Route>
            </Switch>
        </Router>)
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
