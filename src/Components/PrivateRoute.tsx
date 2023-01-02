import { Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute(props : {
  auth : boolean,
  children : JSX.Element
}) {
    
    if (localStorage.getItem('user') && props.auth ){        
      return props.children
    } else {
      return <Navigate to="/admin/login" />}
    }