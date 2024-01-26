

import React, { FunctionComponent } from "react";
import { LineChart, Line, Tooltip } from "recharts";
import useWidth from "../../hooks/useWidth";





interface LabeledLineProps {
  
} 

const CustomizedDot: FunctionComponent<any> = (props: any) => {
  const { cx, cy, payload:{color,name} } = props;
    return (
      <g>
        <circle cx={cx} cy={cy} r={10} fill={color}  stroke={color} strokeWidth={1}/>
        <text x={cx} y={cy +4} textAnchor="middle" fill="#fff">
        {name[1].toUpperCase()}
      </text>
      </g>
    );
};

export const data = [
  {
    name: "Influence",
    uv: -28,
    color:"#331D4A"
  },
  {
    name: "Socialibilty",
    uv: 18,
    color:"#F1833A"
  },
  {
    name: "Consistency",
    uv: -13,
    color:"#458FA3"
  },
  {
    name: "Precision",
    uv: 21,
    color:"#363847"
  },
];


const LabeledLine:React.FC<LabeledLineProps> = () => {
  

  const {width, breakpoints:{md, sm}} = useWidth()
  




  return (
    <LineChart
    layout="horizontal"
      width={width < parseInt(sm) ? 280 : width < parseInt(md) ? 400 : 600}
      height={width < parseInt(sm) ? 110 : 210}
      data={data}
      margin={{
        top:10,
        bottom:40,
        left:35,
        right:35
      }}
      style={{backgroundImage:'url("/public/iscp-full-background.svg")', backgroundSize:'cover', backgroundPosition:'center center'}}
    >
      <Tooltip />

      <Line
        type="monotoneY"
        dataKey="uv"
        stroke="#554266"
        fill="#554266"
        dot={<CustomizedDot/>}
        max={50}
        min={-50}
      />
    </LineChart>
  );
}

export default LabeledLine