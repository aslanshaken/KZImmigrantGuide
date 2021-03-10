import { useState, useEffect } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Cities from '../components/Cities/Cities';
import Events from '../components/Events/Events';


export default function MainContainer(props) {
    return (
        <div>
            <Cities />
            <Events />
        </div>
    )
}