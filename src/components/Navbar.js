
import "../css/nav.css"

const Nav = ({ className, extra }) => {
    return (
        <nav className={className}>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Recipes
                </li>
                <li>
                    Menu
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                Order
                </li>
            </ul>
            <div>{extra}</div>
        </nav>
    );
}

export default Nav;