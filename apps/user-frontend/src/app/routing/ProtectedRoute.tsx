
import  React from "react";
import { Navigate} from 'react-router-dom';

type BoxProps = {
    children: React.ReactNode; // 👈️ define children prop
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProtectedRoute: React.FC<BoxProps> = ({ children }) => {
    const user = false 

    if (!user) {
        return <Navigate to="/" />
    }
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return  <>
        {children}
    </>
  };
  export default ProtectedRoute;
  