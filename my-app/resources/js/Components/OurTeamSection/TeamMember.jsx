import React from 'react';


/*
* NOT IN USE (alterative to using TeamMemberOverlay. TeamMemberOverlay provids dyamic detailS)
* Component for TeamMemberOverlay
* event: onHover 
*/

const TeamMember = ({ member, onMemberClick }) => {
    return (
        <div 
            key={member.id}
            className={`overflow-hidden relative md:block cursor-pointer hover:shadow-lg transition-shadow duration-200 group ${
                !member.clickable ? 'hidden sm:hidden' : ''
            }`}
            onClick={() => onMemberClick(member)}
        >
            <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            
            {/* Show hover image on group hover */}
            {member.hover && (
                <img 
                    src={member.hover}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
            )}
            
            {/* Hover Overlay Content - Only visible on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {/* Role Name at Top */}
                <div className="absolute top-0 left-0 right-0 bg-black text-white p-2 text-center text-sm">
                    {member.role || 'Team Member'}
                </div>
                
                {/* Profile Icon above View Profile */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <img 
                        src="/images/team/profile/profile-1.png" 
                        alt="Profile icon"
                        className="w-8 h-8"
                    />
                </div>
                
                {/* View Profile at Bottom */}
                <div 
                    className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 text-center text-sm pointer-events-auto hover:bg-gray-800 transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        onMemberClick(member);
                    }}
                >
                    View Profile
                </div>
            </div>
        </div>
    );
};

export default TeamMember;