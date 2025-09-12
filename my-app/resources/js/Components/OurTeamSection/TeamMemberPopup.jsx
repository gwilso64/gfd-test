import React from 'react';

/*
* Component for TeamMemberPopup
* event: onclick 
*/

const TeamMemberPopup = ({ 
    isOpen, 
    member, 
    onClose, 
    onNavigate 
}) => {

    if (!isOpen || !member) return null;

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4">
            <div className="bg-white max-w-[327px] w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center text-black pr-6 pt-6 border-black border-b ml-6">
                    <h3 className="text-xl"><strong>Meet</strong>, {member.name}</h3>
                    <button 
                        onClick={onClose}
                        className="hover:text-gray-700 transition-colors"
                    >
                        <svg className="w-6 h-6 -top-2.5 -right-2.5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="pl-6 pt-4 pr-6 pb-6">
                    <div className="pb-4 flex justify-start gap-2">
                        <button 
                            onClick={() => onNavigate('prev')}
                            className="w-5 h-5 bg-black text-white rounded-full hover:bg-gray-800 flex items-center justify-center transition-colors duration-200"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={() => onNavigate('next')}
                            className="w-5 h-5 bg-black text-white rounded-full hover:bg-gray-800 flex items-center justify-center transition-colors duration-200"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="w-full">
                            <img 
                                src={member.selected}
                                alt={member.name}
                                className="m-auto object-center"
                            />
                        </div>

                        <div className="w-full">
                            {member.title && (
                                <div className="flex justify-between items-center text-black pr-6 mb-2 border-black border-b ml-1">
                                    <p className="text-lg"><strong>{member.title}</strong></p>
                                </div>
                            )}
                            {member.description && (
                                <p className="mb-4">{member.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberPopup;