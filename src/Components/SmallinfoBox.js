import React from 'react';
import { Icon } from '@iconify/react';
import '../styles/SmallBox.css'

function SmallInfoBox(props){
    return (
        <div class="small-box ">
            <div>
             <Icon icon={props.icon} width="70" height="70"/>
             </div>
             <div>
               <h5>{props.name}:{props.desc}</h5>
            </div>
        </div>
    )
}

export default SmallInfoBox;