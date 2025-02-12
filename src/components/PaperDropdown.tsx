import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import React, { useEffect, useRef, useState } from 'react';
import { useTextColors } from "./ColorContext";

const PaperDropdown: React.FC<{ arxivUrl: string; pdfUrl: string }> = ({ arxivUrl, pdfUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Reference to the dropdown

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const { linkColor } = useTextColors();

    return (
        <div className="relative inline-block text-left mr-6" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className={`flex text-base items-center pl-5 pr-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300`}
                style={{color: linkColor}}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                Paper
                {isOpen ? (
                    <IoIosArrowUp className="ml-2" />
                ) : (
                    <IoIosArrowDown className="ml-2" />
                )}
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg"
                    role="menu"
                    aria-orientation="vertical"
                    tabIndex={0}
                >
                    <a href={arxivUrl}
                       className={`text-sm whitespace-nowrap no-underline-effect flex items-center rounded-t-xl pl-3 pr-1.5 py-2 hover:bg-gray-100 transition-colors duration-200`}
                       target="_blank"
                       style={{color: linkColor}}
                       role={"menuitem"}
                       tabIndex={0}
                       onClick={closeDropdown}
                    >
                        <span className="mr-0.5">View on</span>
                        <svg className="w-12 h-5 ml-0.5 pt-0.5 me-2 fill-current" aria-hidden="true" data-name="primary logo"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246.978 111.119">
                            <path
                                d="M427.571,255.154c1.859,0,3.1,1.24,3.985,3.453,1.062-2.213,2.568-3.453,4.694-3.453h14.878a4.062,4.062,0,0,1,4.074,4.074v7.828c0,2.656-1.327,4.074-4.074,4.074-2.656,0-4.074-1.418-4.074-4.074V263.3H436.515a2.411,2.411,0,0,0-2.656,2.745v27.188h10.007c2.658,0,4.074,1.329,4.074,4.074s-1.416,4.074-4.074,4.074h-26.39c-2.659,0-3.986-1.328-3.986-4.074s1.327-4.074,3.986-4.074h8.236V263.3h-7.263c-2.656,0-3.985-1.329-3.985-4.074,0-2.658,1.329-4.074,3.985-4.074Z"
                                transform="translate(-358.165 -222.27)" fill="currentColor"/>
                            <path
                                d="M539.233,255.154c2.656,0,4.074,1.416,4.074,4.074v34.007h10.1c2.746,0,4.074,1.329,4.074,4.074s-1.328,4.074-4.074,4.074H524.8c-2.656,0-4.074-1.328-4.074-4.074s1.418-4.074,4.074-4.074h10.362V263.3h-8.533c-2.744,0-4.073-1.329-4.073-4.074,0-2.658,1.329-4.074,4.073-4.074Zm4.22-17.615a5.859,5.859,0,1,1-5.819-5.819A5.9,5.9,0,0,1,543.453,237.539Z"
                                transform="translate(-358.165 -222.27)" fill="currentColor"/>
                            <path
                                d="M605.143,259.228a4.589,4.589,0,0,1-.267,1.594L590,298.9a3.722,3.722,0,0,1-3.721,2.48h-5.933a3.689,3.689,0,0,1-3.808-2.48l-15.055-38.081a3.23,3.23,0,0,1-.355-1.594,4.084,4.084,0,0,1,4.164-4.074,3.8,3.8,0,0,1,3.718,2.656l14.348,36.134,13.9-36.134a3.8,3.8,0,0,1,3.72-2.656A4.084,4.084,0,0,1,605.143,259.228Z"
                                transform="translate(-358.165 -222.27)" fill="currentColor"/>
                            <path
                                d="M486.149,277.877l-32.741,38.852c-1.286,1.372-2.084,3.777-1.365,5.5a4.705,4.705,0,0,0,4.4,2.914,4.191,4.191,0,0,0,3.16-1.563l40.191-42.714a4.417,4.417,0,0,0,.042-6.042Z"
                                transform="translate(-358.165 -222.27)" fill="#aa142d"/>
                            <path
                                d="M486.149,277.877l31.187-38.268c1.492-1.989,2.2-3.03,1.492-4.723a5.142,5.142,0,0,0-4.481-3.161h0a4.024,4.024,0,0,0-3.008,1.108L472.711,274.6a4.769,4.769,0,0,0,.015,6.53L520.512,332.2a3.913,3.913,0,0,0,3.137,1.192,4.394,4.394,0,0,0,4.027-2.818c.719-1.727-.076-3.438-1.4-5.23l-40.124-47.464"
                                transform="translate(-358.165 -222.27)" fill="currentColor"/>
                            <path
                                d="M499.833,274.828,453.169,224.4s-1.713-2.08-3.524-2.124a4.607,4.607,0,0,0-4.338,2.788c-.705,1.692-.2,2.88,1.349,5.1l40.093,48.422"
                                transform="translate(-358.165 -222.27)" fill="#aa142d"/>
                            <path
                                d="M390.61,255.154c5.018,0,8.206,3.312,8.206,8.4v37.831H363.308a4.813,4.813,0,0,1-5.143-4.929V283.427a8.256,8.256,0,0,1,7-8.148l25.507-3.572v-8.4H362.306a4.014,4.014,0,0,1-4.141-4.074c0-2.87,2.143-4.074,4.355-4.074Zm.059,38.081V279.942l-24.354,3.4v9.9Z"
                                transform="translate(-358.165 -222.27)" fill="currentColor"/>
                        </svg>
                    </a>
                    <a
                        href={pdfUrl}
                        target="_blank"
                        className={`text-sm no-underline-effect rounded-b-xl block px-3 py-2 hover:bg-gray-100 transition-colors duration-200`}
                        style={{color: linkColor}}
                        role="menuitem"
                        tabIndex={0}
                        onClick={closeDropdown}
                    >
                        View PDF
                    </a>
                </div>
            )}
        </div>
    );
};

export default PaperDropdown;
