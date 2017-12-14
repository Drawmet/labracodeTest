import React, {Component} from 'react';
import {Button, Navbar, Nav, NavItem, NavLink} from 'reactstrap';
//navigation bar for change type of data(movie and serials)
export default class NavbarCli extends Component{
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const changeType = this.props.changeType;
        return (
            <Navbar color="faded" light expand="md">
                <Nav>
                    <NavItem>
                        <NavLink>
                            <Button color="secondary" onClick={() => changeType('movie')}>Фильмы</Button>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            <Button color="secondary" onClick={() => changeType('tv')}>Сериалы</Button>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
