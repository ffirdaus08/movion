import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Menubar.css';
import home from '../../images/icon/home.svg';
import film from '../../images/icon/film.svg';
import people from '../../images/icon/people.svg';
import search from '../../images/icon/search.svg';


class Menubar extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentMenu: 'home'
        }

        this.indicatorStyle = {borderRight: '5px solid #FFE170'};
    }

    componentDidMount() {
        const route = this.props.location.pathname;
        if(route === '/'){
            this.setState({currentMenu: 'home'});
        }
        else if(route === '/movie'){
            this.setState({currentMenu: 'movie'});
        }
        else if(route === '/person'){
            this.setState({currentMenu: 'person'});
        }
        else if(route === '/search'){
            this.setState({currentMenu: 'search'});
        }
    }


    renderMenu(url, icon, menu){
        return(
            <a href={url} class="menu" style={(this.state.currentMenu === menu) ? this.indicatorStyle : null}>
                <img src={icon} alt="Menu"/>
            </a>
        );
    }
    
    handleSearch() {
        this.props.onSearchPress();
    }

    render() {
        return(
            <div class="menubar">
                {this.renderMenu('/', home, 'home')}
                {this.renderMenu('/movie', film, 'movie')}
                {this.renderMenu('/person', people, 'person')}
                <div class="menu" style={(this.state.currentMenu === 'search') ? this.indicatorStyle : null}
                    role="button" onClick={() => this.handleSearch()}>
                    <img src={search} alt="Search"/>
                </div>
            </div>
        );
    }
}
Menubar.defaultProps = {
    onSearchPress: () => {}
}
export default withRouter(Menubar);