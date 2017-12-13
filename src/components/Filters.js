import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Filters extends Component {
    constructor(props){
        super(props);

        this.state = {
            dropdownOpen: false,
        }
    }

    toggleDropdown = () =>{
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        })
    }

    render() {
        const changeFilter = this.props.changeFilter;
        const typeData = this.props.typeData;
        let filter = this.props.filter;
        let header = '';
        if(filter === 'popular')
            header = "Популярные";
        else if (filter === 'top_rated')
            header = "С наивысшым рейтингом";
            else header = "Сейчас в прокате";
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                    <DropdownToggle caret>
                        {header}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => changeFilter(typeData, 'popular')} 
                            active={filter === 'popular'}>Популярные</DropdownItem>
                        <DropdownItem onClick={() => changeFilter(typeData, 'top_rated')} 
                            active={filter === 'top_rated'}>С наивысшим рейтингом</DropdownItem>
                        <DropdownItem onClick={() => changeFilter(typeData, typeData === 'movie' ? 'now_playing' : 'on_the_air')}
                            active={filter === 'now_playing' || filter === 'on_the_air'}>Сейчас в прокате</DropdownItem>
                    </DropdownMenu>
                </Dropdown>    
            </div>
        )
    }
}