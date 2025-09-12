import React from 'react';

/*
* Component for TeamMemberOverlay
* event: onHover 
*/

const TeamMemberOverlay = ({ member, onMemberClick }) => {
    return (
        <div 
            key={member.id}
            className={`overflow-hidden relative md:block cursor-pointer group ${
                !member.clickable ? 'hidden sm:hidden' : ''
            }`}
            onClick={() => onMemberClick(member)}
            onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (member.hover && img) {
                    img.src = member.hover;
                }
            }}
            onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                    img.src = member.image;
                }
            }}
        >
            <img 
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover filter"
            />
            
            {/* Hover Overlay Content - Only visible on hover */}
            {member.clickable && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                    {/* Role Name at Top */}
                    <div className="absolute top-0 left-0 right-0 bg-black text-white p-2 text-left text-sm">
                        {member.title || 'Team Member'}
                    </div>
                    <div 
                        className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 flex items-right justify-right gap-2 text-sm pointer-events-auto"
                        onClick={(e) => {
                            e.stopPropagation();
                            onMemberClick(member);
                        }}
                    >
                        <span className="ml-auto -top-[2px] relative">View Profile</span>
                        <img 
                            src="images/team/profile-icon.png" 
                            alt="Profile icon"
                            className="w-4 h-4"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamMemberOverlay;