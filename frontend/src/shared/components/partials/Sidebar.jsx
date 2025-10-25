import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <header className="bg-[rgb(31,41,55)] h-screen w-48 text-white pt-10">
      <h1 className="text-center text-xl pb-10 font-bold">Boarding House</h1>
      <hr />
      <nav className="grid place-content-center gap-5 mt-5 font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-500  hover:bg-blue-600 rounded-md py-2 px-10'
              : 'text-white text-center'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/boarderlist"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-12'
              : 'text-white text-center'
          }
        >
          Rooms
        </NavLink>
        <NavLink
          to="/boarderlist"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-12'
              : 'text-white text-center'
          }
        >
          Boarders
        </NavLink>
        <NavLink
          to="/boarderlist"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-12'
              : 'text-white text-center'
          }
        >
          Payments
        </NavLink>
        <NavLink
          to="/boarderlist"
          className={({ isActive }) =>
            isActive
              ? 'bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-12'
              : 'text-white text-center'
          }
        >
          Reports
        </NavLink>
      </nav>
    </header>
  );
};
export default Sidebar;
