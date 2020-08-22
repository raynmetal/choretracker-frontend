import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css'

class Layout extends React.Component {
    constructor () {
        super();
        this.state = {
            showSideDrawer: false
        };
    }

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    }

    sideDrawerOpenedHandler = () => {
        this.setState({
            showSideDrawer: true
        });
    }

    sideDrawerToggledHandler = () => {
        this.setState((prevState, props) => {
            const newState = {
                showSideDrawer: !prevState.showSideDrawer
            }
            return newState;
        });
    }

    render() {
        return (<React.Fragment>
            <Toolbar opened={this.sideDrawerToggledHandler}/>
            <SideDrawer 
                open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </React.Fragment>);
    }
}

export default Layout;