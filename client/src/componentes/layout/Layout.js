import { Fragment } from 'react';
//import MainNavigation from './MainNavigation';
import NavbarMenu from './NavbarMenu';

const Layout=(props)=>{
    return(
        <Fragment>
            <NavbarMenu></NavbarMenu>
            <main>{props.children}</main>
        </Fragment>
    );
}

export default Layout;