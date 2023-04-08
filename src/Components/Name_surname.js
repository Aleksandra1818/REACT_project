import React from 'react';
import { Icon } from '@iconify/react';

function NameAndSurname(props) {
    return <span id="surname-comp">
        <Icon icon="mdi:cat" />
        {props.surname}</span>;
}

export default NameAndSurname;