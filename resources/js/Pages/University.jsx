import React from 'react'

const University = ({university}) => {
    console.log(university)
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="px-4 py-2">
                                <label htmlFor="SelectAll" className="sr-only">Select All</label>

                                <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Universitiy Name</th>
            
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Detail</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {university.map((uni) => {
                             return (  // Add return here
                                <tr key={uni.id}> 
                            
                                <td className="px-4 py-2">
                                    <label className="sr-only" htmlFor="Row1">Row 1</label>

                                    <input className="size-5 rounded border-gray-300" type="checkbox" id="Row1" />
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{uni.UniversityName}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{uni.UniversityName}</td>
                            </tr>
                             )
                        })}





                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default University