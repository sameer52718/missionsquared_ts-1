import React, { useState } from "react";


interface CustomTickProps {
    y?: number;
    payload?:{
        value: string;
    };
    onClick:(value:string) => void;
  }
  
  
  const CustomTick:React.FC<CustomTickProps> = ({y, payload, onClick, }) => {
  const [isHovered, setIsHovered] = useState(false);

    if (!payload) {
        return null;
      }


      const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    
      const textStyle = {
        fontSize: 12,
        color: isHovered ? '#331d4a' : '#555555', // Change text color on hover
      }


    const splitText = (text: string, maxWidth: number) => {
      const words = text.split(' ');
      const lines = [];
      let currentLine = words[0];
        for (let i = 1; i < words.length; i++) {
          const word = words[i];
          
          if ((currentLine + ' ' + word).length * 6 < maxWidth) { // Assume each character is approx. 6px wide
              currentLine += ' ' + word;
          } else {
              lines.push(currentLine);
              currentLine = word;
          }
      }
        
        lines.push(currentLine);
        return lines;
      };

    
      const maxWidth = 130; // Set the max width for text
      const lines = splitText(payload.value, maxWidth);
      return (
        <g
          transform={`translate(${0},${y})`}
          onClick={() => onClick(payload.value)}
          style={{ cursor: 'pointer' }}
        >
          
          {lines.map((line, index) => (
            <>
            <text
              key={index}
              x={10} // Align text to the left
              y={index * 20} // Adjust line spacing
              textAnchor="start"
              fontSize={14}
              fill={textStyle.color}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={()=> onClick(payload.value)}
              fontWeight={600}
            >
              {line}
            </text>
            </>
          ))}
        </g>
      );
  };

  export default CustomTick;
  