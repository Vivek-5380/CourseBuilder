import {
    CaretDownIcon,
    Link2Icon,
    PlusIcon,
    UploadIcon,
    ViewHorizontalIcon
} from "@radix-ui/react-icons";
import React from 'react';


const Header = ({ dropdownMenu, setCreateModuleOverlay, setDropdownMenu, setActiveResourceId, setEditDropdownMenu, setActiveResourceType, setAddLinkOverlay, handleUploadFile }) => {
    return (
        <div className="header flex items-center justify-between border border-slate-200 shadow-md p-4 rounded-lg">
            <div className="brand font-bold text-xl">Course builder</div>
            <div className="add-button relative">
                <button
                    onClick={() => {
                        setEditDropdownMenu(false);
                        setActiveResourceId(null);
                        setActiveResourceType(undefined);
                        setDropdownMenu(!dropdownMenu);
                    }}
                    className="bg-[#d33852] add-button text-white flex gap-x-2 text-sm items-center p-2 rounded-md"
                >
                    <PlusIcon className="size-5" />
                    Add
                    <CaretDownIcon className="font-bold size-5" />
                </button>

                <div
                    className={`${dropdownMenu
                            ? "opacity-100 visible transform translate-x-0 translate-y-0 scale-100"
                            : "opacity-0 invisible"
                        }  z-30 absolute w-[262px] bg-white p-2 rounded-md top-12 shadow-lg border-2 border-slate-100 right-0 transition-all duration-300 transform origin-top-right -translate-y-2 scale-95`}
                >
                    <button
                        onClick={() => {
                            setCreateModuleOverlay(true);
                            setDropdownMenu(false);
                            setEditDropdownMenu(false);
                        }}
                        className="flex text-sm items-center gap-x-2 p-2 text-[#717171] hover:text-[#222222] hover:bg-gray-100 rounded-md w-full"
                    >
                        <ViewHorizontalIcon className="size-4" />
                        Create module
                    </button>
                    <button
                        onClick={() => {
                            setAddLinkOverlay(true);
                            setDropdownMenu(false);
                            setEditDropdownMenu(false);
                        }}
                        className="flex text-sm items-center gap-x-2 p-2 text-[#717171] hover:text-[#222222] hover:bg-gray-100 rounded-md w-full"
                    >
                        <Link2Icon className="size-4" />
                        Add a link
                    </button>
                    <button
                        onClick={() => {
                            document.getElementById("file-upload")?.click();
                            setDropdownMenu(false);
                            setEditDropdownMenu(false);
                        }}
                        className="flex text-sm items-center gap-x-2 p-2 text-[#717171] hover:text-[#222222] hover:bg-gray-100 rounded-md w-full"
                    >
                        <input
                            type="file"
                            id="file-upload"
                            accept=".pdf,.png,.jpg,.jpeg"
                            onChange={(e) => handleUploadFile(e)}
                            className="hidden text-sm items-center gap-x-2 p-2 text-[#717171] hover:text-[#222222] hover:bg-gray-100 rounded-md w-full"
                        />
                        <UploadIcon className="size-4" />
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header