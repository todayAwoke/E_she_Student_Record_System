import React, { useState } from 'react';

const StudentData = () => {
  const students = [
    { university: 'University A', total: 1210, male: 500, female: 700, y1: 200, y2: 250, y3: 300, y4: 250, y5: 150, y6: 50, y7: 10, semester1: 700, semester2: 500, semester3: 0 },
    { university: 'University B', total: 900, male: 300, female: 500, y1: 150, y2: 200, y3: 250, y4: 150, y5: 100, y6: 50, y7: 100, semester1: 350, semester2: 450, semester3: 0 },
    { university: 'University C', total: 1000, male: 500, female: 500, y1: 180, y2: 220, y3: 240, y4: 200, y5: 100, y6: 60, y7: 0, semester1: 600, semester2: 400, semester3: 0 },
  ];

  const [studentsPerPage, setStudentsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(students.length / studentsPerPage);
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStudentsPerPageChange = (event) => {
    setStudentsPerPage(Number(event.target.value));
    setCurrentPage(1); 
  };

  const yearTooltips = {
    Y1: 'Year 1',
    Y2: 'Year 2',
    Y3: 'Year 3',
    Y4: 'Year 4',
    Y5: 'Year 5',
    Y6: 'Year 6',
    Y7: 'Year 7',
    S1: 'Semester 1',
    S2: 'Semester 2',
    S3: 'Semester 3',
  };

  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 shadow-md'>
      <div className='mb-3'>
        <strong className='text-lg'>Students Record</strong>
      </div>
      
      {/* Rows per page selector */}
      <div className='mb-4 flex justify-end'>
        <label htmlFor='rows-per-page' className='mr-2'>Show:</label>
        <select id='rows-per-page' value={studentsPerPage} onChange={handleStudentsPerPageChange} className='border border-gray-300 rounded-md p-1'>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className='mt-3 overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>University Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Total Students</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Male</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Female</th>
              {Object.keys(yearTooltips).map((year, index) => (
                <th key={index} className='relative group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {year}
                  <div className='absolute cursor-pointer left-1/2 transform -translate-x-1/2 -top-1 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    {yearTooltips[year]}
                  </div>
                </th>
              ))}
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Download</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {currentStudents.map((student, index) => (
              <tr key={index} className='hover:bg-gray-100'>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.university}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.total}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.male}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.female}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.y1}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.y2}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.y3}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.y4}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.y5}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.y6}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.y7}</td> {/* Added y7 here */}
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.semester1}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.semester2}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>{student.semester3}</td> {/* Added semester3 here */}
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                  <button className='text-blue-600 hover:text-blue-900'>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-between items-center mt-4'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='px-4 py-2 border rounded-lg bg-white text-blue-600 border-blue-600 hover:bg-gray-200'
        >
          &lt; Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='px-4 py-2 border rounded-lg bg-white text-blue-600 border-blue-600 hover:bg-gray-200'
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default StudentData;