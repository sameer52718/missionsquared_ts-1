

import React, { FunctionComponent } from "react";
import { LineChart, Line, Tooltip } from "recharts";



const CustomizedDot: FunctionComponent<any> = (props: any) => {
  const { cx, cy, payload:{color} } = props;
    return (
      <circle cx={cx} cy={cy} r={3} fill={color}  stroke={color} strokeWidth={1}/>
    );
};



interface UnlabeledLineProps {
  data:number[]
} 


const UnlabeledLine:React.FC<UnlabeledLineProps> = ({data}) => {
  const prevdata = [
    {
      name: "Page A",
      uv: -28,
      color:"#331D4A"
    },
    {
      name: "Page B",
      uv: 18,
      color:"#F1833A"
    },
    {
      name: "Page C",
      uv: -13,
      color:"#458FA3"
    },
    {
      name: "Page D",
      uv: 21,
      color:"#363847"
    },
  ];
  


  data.map((item, index) => prevdata[index % 4].uv = item )

  


  return (
    <LineChart
    width={150}
    height={50}
    data={prevdata}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <Tooltip />

    <Line
      type="monotoneY"
      dataKey="uv"
      stroke="#554266"
      fill="#554266"
      dot={<CustomizedDot/>}
    />
  </LineChart>
  );
}

export default UnlabeledLine