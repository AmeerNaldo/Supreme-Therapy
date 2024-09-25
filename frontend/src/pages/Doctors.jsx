import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const {doctors} = useContext(AppContext);
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-center text-2xl font-medium text-zinc-600 mb-6'>Book an Appointment Today</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-20 pt-6 gap-y-6 px-2 sm:px-0">
        {doctors.slice(0, 2).map((item, index) => (
          <div
          onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            className="border border-red-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors
