import { Outlet } from 'react-router-dom';
import Sidebar from '../partials/Sidebar';

const RootLayout = () => {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
  