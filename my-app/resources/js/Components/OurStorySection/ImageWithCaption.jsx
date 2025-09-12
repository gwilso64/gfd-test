import React from 'react';

const ImageWithCaption = ({ src, caption, x1, y1, x2, y2, cx, cy }) => (
  <div className="relative float-left z-[2] inline-block w-[auto]">
    <img src={src} alt={caption} className="w-auto h-auto md:z-[1]" />
    
    {/* line and circle */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {/* caption line*/}
      <line 
        x1={x1} y1={y1} x2={x2} y2={y2} 
        stroke="black" strokeWidth="1" 
      />
      {/* small pin circle */}
      <circle 
        cx={cx} cy={cy} r="2" 
        fill="black" stroke="black" strokeWidth="1" 
      />
    </svg>
    
    {/* caption text */}
    <div className="absolute top-[19%] right-[-100px] w-[100px]">
      <div className="p-2 text-left">
        <span className="text-xs">
          {caption}
        </span>
      </div>
    </div>
  </div>
);

export default ImageWithCaption;
