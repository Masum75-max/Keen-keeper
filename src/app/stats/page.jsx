'use client'
import { useContext } from "react";
import { historyContext } from '../../app/Context/Contextpage'; 
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Contactpage = () => {
    const { arr } = useContext(historyContext);

    const COLORS = ['#10b981', '#3b82f6', '#8b5cf6'];

    let callCount = 0;
    let textCount = 0;
    let videoCount = 0;

    arr.forEach(item => {
        if (item.type === "call") {
            callCount++;
        } else if (item.type === "text") {
            textCount++;
        } else if (item.type === "video") {
            videoCount++;
        }
    });

    const data = [
        { name: 'Call', value: callCount },
        { name: 'Text', value: textCount },
        { name: 'Video', value: videoCount },
    ];

    const hasData = callCount > 0 || textCount > 0 || videoCount > 0;

    return (
        <div className="w-4/5 mx-auto min-h-screen">
            <h1 className="font-bold text-4xl my-10 text-slate-800">Friendship Analytics</h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-slate-500 mb-6 font-medium">By Interaction Type</p>

                <div className="w-full h-80">
                    {hasData ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="40%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                    ))}
                                </Pie>
                                <Tooltip 
                                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-400 italic">
                            No interaction data available yet.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contactpage;