
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Root;