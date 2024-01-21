import React from 'react';

function Edit() {
  return (
    <div className="relative w-96 h-96 bg-cyan-950">
      <div className="absolute w-6 h-6 left-5 top-8" />
      <div className="absolute w-full h-px left-5 top-19 border border-white border-opacity-30" />
      <div className="absolute w-full h-px left-[5.75rem] top-58 border border-white border-opacity-30" />
      <div className="absolute w-48 h-9 left-[29.75rem] top-7.5 text-center text-white text-2xl font-bold">Edit Contact</div>
      <img className="absolute w-28 h-24 left-[40rem] top-22 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      <div className="absolute w-full h-56 left-5 top-60.5 bg-cyan-800 shadow">
        <div className="absolute left-4 top-5 text-white text-xs font-bold">
            First Name
            </div>
        <div className="absolute left-4 top-14 text-white text-xs font-bold">
            Last Name
            </div>
        <div className="absolute left-4 top-23 text-white text-xs font-bold">
            Contact No.
            </div>
        <div className="absolute left-4 top-30.5 text-white text-xs font-bold">
            Email
            </div>
        <div className="absolute left-4 top-41 text-white text-xs font-bold">
            Description
            </div>
        <div className="absolute w-48 h-5 left-19.5 top-3.75 bg-cyan-950 rounded" />
        <div className="absolute w-48 h-5 left-19.5 top-12.75 bg-cyan-950 rounded" />
        <div className="absolute w-48 h-5 left-19.5 top-21.75 bg-cyan-950 rounded" />
        <div className="absolute w-48 h-5 left-19.5 top-30.75 bg-cyan-950 rounded" />
        <div className="absolute w-48 h-5 left-19.5 top-39.75 bg-cyan-950 rounded" />
      </div>
      <div className="absolute w-24 h-5 left-[41.25rem] top-[121rem] bg-cyan-800 rounded" />
      <div className="absolute w-14 h-2.5 left-[5.75rem] top-9.5 text-white text-sm font-bold">
        Cancel
        </div>
      <div className="absolute w-16 h-2.5 left-[45.75rem] top-49.5 text-center text-sky-500 text-xs font-thin">
        Add Photo
        </div>
      <div className="absolute w-9 h-3.5 left-5 top-54.5 text-white text-xs font-semibold">
        Details
        </div>
      <div className="absolute w-16 h-4 left-[45rem] top-[122.25rem] text-center text-white text-xs font-bold">
        Create Contact
        </div>
      <div className="absolute w-16 h-16 left-[46rem] top-27.25" />
    </div>
  );
}

export default Edit;