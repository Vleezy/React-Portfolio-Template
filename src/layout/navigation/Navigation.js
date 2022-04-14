import { NavLink } from "react-router-dom";
import classes from '../navigation/Navigation.module.css';

const Navigation = () => {
return <header className={classes.header}>

    <nav>
        <ul>
            <li>
                <h3>Index</h3>
                <NavLink className={(navData) =>  navData.isActive  ? classes.active : ''} to="/index">Index</NavLink>
            </li>
            <li>
                <h3>Other</h3>
                <NavLink className={(navData) =>  navData.isActive  ? classes.active : ''} to="/other">Other</NavLink>
            </li>
        </ul>
    </nav>
</header>
};
export default Navigation; 