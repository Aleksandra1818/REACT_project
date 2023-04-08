import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/Congrats.css'

function Congrats(props){
    return (
        <div class="congrats-box ">
            <div>
                <h5>Congrats {props.name}!🎉</h5> 
                <p>You made this front by yourself!</p>
            </div>
            <div class="unicorn">
            <Icon icon="emojione:unicorn-face" width="100" height="100" />
            </div>
        </div>
    )
}

export default Congrats;