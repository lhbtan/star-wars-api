import { Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

export const PublicRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props)=> (
        isAuthenticated ? (
            <div>
             <Redirect to="/dashboard"/>
            </div>
        ) : (
            <Component {...props}/>
        )
        )}/>
);



const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute)