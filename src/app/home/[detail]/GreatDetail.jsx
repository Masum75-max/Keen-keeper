'use client';
import React, { useContext } from 'react';
import { LengthOfTotal } from '../../layout';
import Image from 'next/image';
import { historyContext } from '../../Context/Contextpage';
import { ToastContainer, toast } from 'react-toastify';

const GreatDetail = ({ id }) => {
  const { addToArr } = useContext(historyContext);
  const { friends } = useContext(LengthOfTotal);

  const friend = friends?.find(f => parseInt(f.id) === parseInt(id));

  if (!friend) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-500 animate-pulse">Loading friend details...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 p-4 sm:p-8 flex items-center justify-center min-h-screen font-sans text-slate-800">
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6">
        
        <div className="col-span-1 sm:col-span-4 space-y-4">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-100 shadow-sm text-center">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
              <Image 
                src={friend.picture} 
                alt={friend.name} 
                fill
                className="rounded-full object-cover border-4 border-white shadow-md" 
              />
            </div>

            <h2 className="text-lg sm:text-xl font-bold mb-2">{friend.name}</h2>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                {friend.status}
              </span>
              {friend.tags?.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-teal-50 text-teal-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-slate-500 italic text-sm mb-2">{friend.bio}</p>
            <p className="text-slate-400 text-xs truncate">Preferred: {friend.email}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-white border border-slate-100 py-3 rounded-lg text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition shadow-sm font-medium text-sm sm:text-base">
              Snooze 2 Weeks
            </button>
            <button className="w-full bg-white border border-slate-100 py-3 rounded-lg text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition shadow-sm font-medium text-sm sm:text-base">
              Archive
            </button>
            <button className="w-full bg-white border border-slate-100 py-3 rounded-lg text-red-500 flex items-center justify-center gap-2 hover:bg-red-50 transition shadow-sm font-medium text-sm sm:text-base">
              Delete
            </button>
          </div>
        </div>

        <div className="col-span-1 sm:col-span-8 space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-bold">{friend.days_since_contact}</div>
              <div className="text-slate-500 text-sm mt-1">Days Since Contact</div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="text-2xl sm:text-3xl font-bold">{friend.goal}</div>
              <div className="text-slate-500 text-sm mt-1">Goal (Days)</div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="text-lg sm:text-2xl font-bold text-emerald-900">{friend.next_due_date}</div>
              <div className="text-slate-500 text-sm mt-1">Next Due</div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm relative">
            <h3 className="text-slate-700 font-bold mb-4">Relationship Goal</h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Connect every <span className="font-bold">{friend.goal} days</span>
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-slate-700 font-bold mb-6">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <button onClick={() => { addToArr(friend,"call",new Date().toLocaleString()); toast.success(`call interaction with ${friend.name}!`); }} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition group">
                <span className="font-medium">Call</span>
              </button>

              <button onClick={() => {
                addToArr(friend,"text",new Date().toLocaleString() );
                toast.success(`text interaction with ${friend.name}!`);
              }} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition group">
                <span className="font-medium">Text</span>
              </button>

              <button onClick={() => {
                addToArr(friend, "video", new Date().toLocaleString());
                toast.success(`video interaction with ${friend.name}!`);
              }} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition group">
                <span className="font-medium">Video</span>
              </button>

              <ToastContainer />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GreatDetail;