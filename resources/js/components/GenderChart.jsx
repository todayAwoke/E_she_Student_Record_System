import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Male', value: 400 },
    { name: 'Female', value: 300 },
    { name: 'Undefined', value: 200 },
];

// Calculate total for percentage calculation
const total = data.reduce((sum, entry) => sum + entry.value, 0);

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const GenderChart = () => {
    return (
        <div className='h-[22rem] w-[23rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col'>
            <strong>Gender Distributions</strong>
            <div className='flex-1 mt-4'>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie 
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ value }) => `${((value / total) * 100).toFixed(1)}%`}
                            outerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip 
                            formatter={(value) => [`${value} (${((value / total) * 100).toFixed(1)}%)`]} 
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default GenderChart;