import React from 'react'

const Users = ({ users }) => {
    // console.log(users)
    return (
        <div>

            <div className="overflow-x-auto p-10">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date of Birth</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Role</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Salary</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.created_at}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">student</td>
                                <td className="whitespace-nowrap px-4 py-2">
                                    <a
                                        href="#"
                                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                    >
                                        View
                                    </a>
                                </td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users