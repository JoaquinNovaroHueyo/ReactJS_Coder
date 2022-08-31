import logo from '../../logo.svg';
import './styles.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
        
    return (
        <div className='navbar-container'>
            <div>
                <CartWidget />
                <img width={'100px'} src={logo} alt="logo" />
                
            </div>
            <div>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Combos</a>
                    </li>
                    <li>
                        <a href='#'>Cervezas</a>
                    </li>
                    <li>
                        <a href='#'>Whiskies</a>
                    </li>
                    <li>
                        <a href='#'>Gin's</a>
                    </li>
                    <li>
                        <a href='#'>Contacto</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>LOGIN</button>

            </div>

        </div>
    )
}

export default NavBar;