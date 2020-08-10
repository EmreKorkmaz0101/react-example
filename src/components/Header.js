import React from 'react'
import { Link } from 'react-router'


class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            isNavOpen : false
        }
    }

    buttonClicked(){
        this.setState({
            isNavOpen : !this.state.isNavOpen //isnavOpen'ın tersini al ata
        }) 
    }
    render(){
        return (
            <header>
            <nav className="navbar navbar-expand-lg navbar-light  justify-content-between">
                <a className="navbar-brand" href="#">Emre</a>
                <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse" style={{display: this.state.isNavOpen ? "block" : "none"}}>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className='nav-link' to='/' href="" activeClassName='active'>AnaSayfa</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/hakkimizda' href="">İletişim</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/iletisim' href="">Hakkımızda</Link>
                    </li>

                </ul>
                </div>  
                </nav>
        </header>
        )
    }
}



export default Header;