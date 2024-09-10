'use client'
import React from 'react';
import Footer from '../aside/Footer';
import MenuList from '../aside/MenuList';
import PersonCircle from '../aside/PersonCircle';

const AsideBar = () => {

    return (
        <aside className="fixed w-[29rem] h-screen overflow-x-hidden overflow-y-scroll top-0 left-0 z-40 border-r border-primary-90 bg-primary-100 translate-x-0 transition-all ease-in-out hidden xl:block">

            <div className="h-full flex flex-col justify-between gap-space24 p-space32">
                <div className="space-y-space32 ">
                    <PersonCircle />
                    <MenuList />
                </div>

                <Footer />
            </div>
        </aside>
    )
}

export default AsideBar