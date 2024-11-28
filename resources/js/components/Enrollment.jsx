import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const data = [
    { name: 'Extension', Male: 200, Female: 300 },
    { name: 'Regular', Male: 220, Female: 320 },
    { name: 'Distance', Male: 250, Female: 350 },
    { name: 'Weekend', Male: 180, Female: 400 },
    { name: 'Summer', Male: 300, Female: 450 },
    { name: 'Winter', Male: 100, Female: 200 },
    { name: 'Others', Male: 100, Female: 200 },

];

const TransactionChart = () => {
    return (
        <div className='   bg-white p-4 rounded-sm border border-gray-200 flex flex-col ' style={{ height: '350px', width: '100%', }}>
            <strong className='text-gray-700 text-lg'>Enrollment</strong>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Male" fill="#0ea5e9" />
                    <Bar dataKey="Female" fill="#ea580c" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TransactionChart;