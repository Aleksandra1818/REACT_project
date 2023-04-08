import React from 'react';
import { Icon } from '@iconify/react';
import NameAndSurname from './Name_surname';
import '../styles/navBar.css'

function NavBar(){
    return (<aside class="nav-box col-12 col-xl-2">
            <NameAndSurname surname="Pogońska"/>
                <ul class="nav-menu">
                    <li class="menu-item">
                        <Icon icon="material-symbols:home-outline" />&nbsp;&nbsp;Dashboard
                    </li>
                    <li class="menu-item">
                        <Icon icon="ri:layout-4-line" />&nbsp;&nbsp;Layouts
                    </li>
                    <li class="menu-separator">-- Pages</li>
                    <li class="menu-item">
                        <Icon icon="ri:layout-top-line" /> &nbsp;&nbsp;Account Settings
                    </li>
                    <li class="menu-item">
                        <Icon icon="ps:open-padlock" />&nbsp;&nbsp;Authentications
                    </li>
                    <li class="menu-separator">-- Components</li>
                    <li class="menu-item">
                        <Icon icon="material-symbols:card-membership-outline-rounded" />&nbsp;&nbsp;Cards
                    </li>
                    <li class="menu-item">
                        <Icon icon="uil:rss-interface" />&nbsp;&nbsp;User Interface
                    </li>

                </ul>
            </aside>)
}

export default NavBar;