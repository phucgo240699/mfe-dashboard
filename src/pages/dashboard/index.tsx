import React from 'react';
import { NavLink } from 'react-router';

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around p-4 gap-x-1 gap-y-28">
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Bar Chart</h2>
        <div className="bar-chart">
          <div className="bg-blue-500 h-8 w-1/4 mb-1"></div>
          <div className="bg-blue-500 h-8 w-1/2 mb-1"></div>
          <div className="bg-blue-500 h-8 w-3/4 mb-1"></div>
          <div className="bg-blue-500 h-8 w-full mb-1"></div>
        </div>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Pie Chart</h2>
        <div className="pie-chart relative w-32 h-32 rounded-full bg-gray-200">
          <div className="absolute top-0 left-0 w-16 h-32 bg-blue-500 rounded-tl-full"></div>
          <div className="absolute top-0 right-0 w-16 h-32 bg-green-500 rounded-tr-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-32 bg-red-500 rounded-bl-full"></div>
          <div className="absolute bottom-0 right-0 w-16 h-32 bg-yellow-500 rounded-br-full"></div>
        </div>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Line Chart</h2>
        <svg className="line-chart w-full h-32">
          <polyline
            fill="none"
            stroke="blue"
            strokeWidth="2"
            points="0,30 20,20 40,25 60,15 80,20 100,10 120,15 140,5 160,10 180,0"
          />
        </svg>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Donut Chart</h2>
        <div className="donut-chart relative w-32 h-32 rounded-full bg-gray-200">
          <div className="absolute top-0 left-0 w-16 h-32 bg-blue-500 rounded-tl-full"></div>
          <div className="absolute top-0 right-0 w-16 h-32 bg-green-500 rounded-tr-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-32 bg-red-500 rounded-bl-full"></div>
          <div className="absolute bottom-0 right-0 w-16 h-32 bg-yellow-500 rounded-br-full"></div>
          <div className="absolute inset-0 m-auto w-16 h-16 bg-gray-200 rounded-full"></div>
        </div>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Area Chart</h2>
        <svg className="area-chart w-full h-32">
          <polygon
            fill="blue"
            stroke="blue"
            strokeWidth="1"
            points="0,30 20,20 40,25 60,15 80,20 100,10 120,15 140,5 160,10 180,0 180,32 0,32"
          />
        </svg>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Circle Chart</h2>
        <div className="circle-chart relative w-32 h-32 rounded-full bg-blue-500"></div>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Scatter Plot</h2>
        <svg className="scatter-plot w-full h-32">
          <circle cx="10" cy="20" r="3" fill="blue" />
          <circle cx="30" cy="10" r="3" fill="blue" />
          <circle cx="50" cy="30" r="3" fill="blue" />
          <circle cx="70" cy="15" r="3" fill="blue" />
          <circle cx="90" cy="25" r="3" fill="blue" />
        </svg>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Waterfall Chart</h2>
        <div className="waterfall-chart">
          <div className="bg-blue-500 h-8 w-1/4 mb-1"></div>
          <div className="bg-green-500 h-8 w-1/2 mb-1"></div>
          <div className="bg-red-500 h-8 w-1/3 mb-1"></div>
          <div className="bg-yellow-500 h-8 w-3/4 mb-1"></div>
          <div className="bg-blue-500 h-8 w-1/4 mb-1"></div>
        </div>
      </NavLink>
      <NavLink to={'/table'} className="sm:w-1/2 md:w-1/3 lg:w-1/4">
        <h2 className="text-xl mb-2">Bubble Chart</h2>
        <svg className="bubble-chart w-full h-32">
          <circle cx="20" cy="20" r="10" fill="blue" />
          <circle cx="50" cy="50" r="15" fill="green" />
          <circle cx="80" cy="30" r="20" fill="red" />
          <circle cx="110" cy="70" r="25" fill="yellow" />
        </svg>
      </NavLink>
    </div>
  );
};

export default DashboardPage;
