import React from "react";


interface CustomTickProps {
    x?: number;
    y?: number;
    payload?:{
        value: string;
    };
    onClick:(value:string) => void;
    onMouseEnter: (value: string) => void;
    onMouseLeave: () => void;
}


const CustomTick:React.FC<CustomTickProps> = ({ x, y, payload, onClick, onMouseEnter, onMouseLeave }) => {

    if (!payload) {
        return null;
      }


    const splitText = (text: string, maxWidth: number) => {
        const words = text.split(/\s+/);
        const lines = [];
        let currentLine = words[0];
    
        // for (let i = 1; i < words.length; i++) {
        //   const word = words[i];
        //   const width = getTextWidth(currentLine + " " + word, "14px Arial"); // Replace with your font
        //   if (width < maxWidth) {
        //     currentLine += " " + word;
        //   } else {
        //     lines.push(currentLine);
        //     currentLine = word;
        //   }
        // }
        lines.push(currentLine);
        return lines;
      };
    
    //   const getTextWidth = (text: string) => {
    //     return text.length * 10;
    //   };
    
      const maxWidth = 130; // Set the max width for text
      const lines = splitText(payload.value, maxWidth);
    
      return (
        <g
          transform={`translate(${0},${y})`}
          onMouseEnter={() => onMouseEnter(payload.value)}
          onMouseLeave={() => onMouseLeave()}
          onClick={() => onClick(payload.value)}
          style={{ cursor: 'pointer' }}
        >
          {lines.map((line, index) => (
            <text
              key={index}
              x={0} // Align text to the left
              y={index * 16} // Adjust line spacing
              textAnchor="start"
              fontSize={14}
              fill="#6A37A6"
              fontWeight={600}
            >
              {line}
            </text>
          ))}
        </g>
      );
  };

  export default CustomTick;
  