import { Outlet } from 'react-router-dom';

const ReceptyLayout = () => {
    return (
        <div>
            <h2>Recepty</h2>
            <Outlet />
        </div>
    )
}

export default ReceptyLayout