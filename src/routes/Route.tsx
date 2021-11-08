import React from 'react'

import {useAuth} from '../context/AuthContext'

import {RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect} from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps{
 isPrivate?: boolean;
 component: React.ComponentType
}

/*
true/true = ok
true/false = Redirecionar ele pro login
false/true = Redirecionar para o dashboard
false/false = ok
*/
const Route:React.FC<RouteProps> = ({isPrivate = false,component: Component ,...rest}) => {
    const {user} = useAuth()
    return (
        <>

        <ReactDOMRoute
         {...rest}
          render={({location}) =>{
              return isPrivate === !!user ? (
                  <Component />
              ) : (
                <Redirect
                 to={{
                     pathname: isPrivate ? '/' : '/dashboard',
                     state: {from:location},

                    }}/>
              )
          }} />
        </>
    )
}

export default Route
