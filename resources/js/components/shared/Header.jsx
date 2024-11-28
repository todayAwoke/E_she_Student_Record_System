import React from 'react';
import { HiOutlineBell, HiOutlineChat, HiOutlineSearch } from 'react-icons/hi';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white h-16 px-4 flex justify-between items-center'>
            <div className='relative flex'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-2' />
                <input
                    type='text'
                    placeholder='Search...'
                    className='text-sm pl-10 focus:outline-none h-10 w-[20rem] border border-gray-300 rounded-lg px-4'
                />
            </div>
            <div className='flex gap-2 items-center mr-2'>
                {/* <HiOutlineChat fontSize={24} className='text-cyan-700 cursor-pointer' />
                <HiOutlineBell fontSize={24} className='text-red-800 cursor-pointer mr-5' /> */}
                <div className='text-right relative mr-1'>
                    <Menu>
                        <MenuButton className="absolute  p-3 inline-flex items-center  bg-gray-800 py-2 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none rounded-full hover:bg-gray-700 -inset-5">
                            Profile
                        </MenuButton>
                        <MenuItems
                            transition
                            anchor="bottom end  "
                            className="w-24 origin-top-right rounded-xl  bg-white mt-2    transition duration-100 ease-out"
                        >
                            <div className="flex flex-col items-center">
                                <MenuItem>
                                    <button onClick={() => navigate('/profile')} className="rounded-lg py-1.5 text-black hover:bg-gray-100 w-full ">
                                        Your Profile
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button onClick={() => navigate('/setting')} className="rounded-lg py-1.5 text-black hover:bg-gray-100 w-full ">
                                        Setting
                                    </button>
                                </MenuItem>
                                <MenuItem>
                                    <button onClick={() => navigate('/logout')} className="rounded-lg py-1.5 text-black hover:bg-gray-100 w-full ">
                                        LogOut
                                    </button>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;