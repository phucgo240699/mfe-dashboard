import { NavLink } from 'react-router';

const Table = () => {
  return (
    <div>
      <div className="w-60 h-32 bg-red-300">Welcome to Table</div>
      <NavLink to="/">Go to Dashboard</NavLink>
    </div>
  );
};

export default Table;
