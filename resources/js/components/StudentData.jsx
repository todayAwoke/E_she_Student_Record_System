import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentData = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend
    axios.get('http://localhost:8000/api/student-data')
      .then(response => {
        setStudentsData(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  // Function to handle CSV download
  const handleDownload = (universityName) => {
    const data = studentsData.find(university => university.university === universityName);

    if (!data) return;

    // Convert the data to CSV format
    const csvRows = [];
    const headers = ['University', 'Male', 'Female', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Semester 1', 'Semester 2', 'Total'];
    csvRows.push(headers.join(','));

    const row = [
      data.university,
      data.male,
      data.female,
      data.y1,
      data.y2,
      data.y3,
      data.y4,
      data.y5,
      data.y6,
      data.semester1,
      data.semester2,
      data.total
    ];
    csvRows.push(row.join(','));

    // Create a Blob and trigger a download
    const csvBlob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const downloadUrl = URL.createObjectURL(csvBlob);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `${data.university}-students-data.csv`;
    a.click();
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 shadow-md">
      <div className="mb-3">
        <strong className="text-lg">Students Record</strong>
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">University</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Male</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Female</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year 1</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year 2</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year 3</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year 4</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year 5</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year 6</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester 1</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester 2</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {studentsData.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.university}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.male}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.female}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.y1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.y2}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.y3}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.y4}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.y5}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.y6}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.semester1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.semester2}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button onClick={() => handleDownload(student.university)} className="text-blue-600 hover:text-blue-900">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentData;
