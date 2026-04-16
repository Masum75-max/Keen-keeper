'use client';
import React, { useContext } from 'react';
import { LengthOfTotal } from '../../layout';
import Image from 'next/image';
import { historyContext } from '../../Context/Contextpage';

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
    <div className="bg-slate-50 p-8 flex items-center justify-center min-h-screen font-sans text-slate-800">
      <div className="max-w-5xl w-full grid grid-cols-12 gap-6">
        
        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image 
                src={friend.picture} 
                alt={friend.name} 
                fill
                className="rounded-full object-cover border-4 border-white shadow-md" 
              />
            </div>

            <h2 className="text-xl font-bold mb-2">{friend.name}</h2>
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
            <button className="w-full bg-white border border-slate-100 py-3 rounded-lg text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition shadow-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Snooze 2 Weeks
            </button>
            <button className="w-full bg-white border border-slate-100 py-3 rounded-lg text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition shadow-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              Archive
            </button>
            <button className="w-full bg-white border border-slate-100 py-3 rounded-lg text-red-500 flex items-center justify-center gap-2 hover:bg-red-50 transition shadow-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              Delete
            </button>
          </div>
        </div>

        <div className="col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="text-3xl font-bold">{friend.days_since_contact}</div>
              <div className="text-slate-500 text-sm mt-1">Days Since Contact</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="text-3xl font-bold">{friend.goal}</div>
              <div className="text-slate-500 text-sm mt-1">Goal (Days)</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
              <div className="text-2xl font-bold text-emerald-900">{friend.next_due_date}</div>
              <div className="text-slate-500 text-sm mt-1">Next Due</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm relative">
            <button className="absolute right-6 top-6 text-xs font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded hover:bg-slate-50 uppercase">Edit</button>
            <h3 className="text-slate-700 font-bold mb-4">Relationship Goal</h3>
            <p className="text-slate-600">Connect every <span className="font-bold">{friend.goal} days</span></p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <h3 className="text-slate-700 font-bold mb-6">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => addToArr(friend,"call",new Date().toLocaleString()) } className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition group">
                <svg className="w-6 h-6 text-slate-700 mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="font-medium">Call</span>
              </button>
              <button onClick={() => addToArr(friend,"text",new Date().toLocaleString())} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition group">
                <svg className="w-6 h-6 text-slate-700 mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                <span className="font-medium">Text</span>
              </button>
              <button 
                onClick={() => addToArr(friend, "video",new Date().toLocaleString())}
                className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition group"
              >
                <svg className="w-6 h-6 text-slate-700 mb-2 group-hover:scale-110 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                <span className="font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GreatDetail;