import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <header className="bg-black h-screen w-32 text-white pt-10">
      <h1 className="text-center pb-10">Boarding House</h1>
      <hr />
      <nav className="flex justify-center mt-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-red-500' : 'text-black'
          }
        >
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
};
export default Sidebar;
