import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full lg:w-[65%] md:w-[80%] flex-grow">
            </div>
            <footer className="rounded-md w-full lg:w-[65%] md:w-[80%] bg-slate-200 text-slate-500 text-center py-4">
                <p>&copy; 2024 Course Builder. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;
