import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer
} from "recharts";
import useWidth from "../../hooks/useWidth";
import CustomTick from './CustomTick'

const data = [
  {
    name: "Emotional Self-Awareness",
    pv: 26,
  },
  {
    name: "Resilience",
    pv: 23,
  },
  {
    name: "Self-Blame",
    pv: -5,
  },
  {
    name: "Self-Confidence",
    pv: 33,
  },
  {
    name: "Achievement",
    pv: 16,
  },
  {
    name: "Change",
    pv: -45,
  },
  {
    name: "Independence",
    pv: 23,
  },
  {
    name: "Order",
    pv: -35,
  },
  {
    name: "Empathy",
    pv: -41,
  },
  {
    name: "Relationship",
    pv: 11,
  },
  {
    name: "Supportiveness",
    pv: 43,
  }
];




// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomizedLabel = (props: any) => {
  const { x, y, width, value } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {width:window,breakpoints:{md}} = useWidth()
  const radius = window < parseInt(md) ? 10 :  10;
 
  const cx = x + width;      // x-coordinate of the circle
  const cy = y      // y-coordinate of the circle, slightly above the bar
  
  return (
    <g>
      
      <circle cx={cx} cy={cy} r={radius} fill="#ffffff"  stroke="#6A37A6" strokeWidth={4}/>
      <text
        x={window < parseInt(md) ? cx  :  value> 0 ?  cx + 25 : cx -25 }
        y={cy +1}
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
      >
        {value}
      </text>
    </g>
  );
};
const ScoreChart = () => {
  const {width, breakpoints:{md}} = useWidth();


  const handleTickClick = (value: string) => {
    console.log("Clicked on tick:", value);
    // Your click handling logic
  };
  
  const handleTickMouseEnter = (value: string) => {
    console.log("Hovered on tick:", value);
  };
  
  const handleTickMouseLeave = () => {
    
  };
  



  return (
    <div className="w-full md:w-[80vw] h-max mx-auto bg-white p-4 rounded-md">
      <div style={{ position: "relative" }}>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            barGap={1}
            layout="vertical"
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5
            }}
          
          >
            <CartesianGrid strokeDasharray="1 2" horizontalFill={["white"]} fillOpacity={0.1} />
            <XAxis 
            xAxisId="topAxis"
             type="number"
             domain={[-50, 50]}
             color="#6A37A6" 
             interval={0} 
             tick={{ dy: -5 }}  
             orientation="top" 
             fontSize={14} 
             />
            <XAxis 
            xAxisId="bottomAxis" 
            type="number" 
            color="#6A37A6" 
            interval={0} 
            tick={{ dy: 5 }} 
            orientation="bottom" 
            fontSize={14} 
            />
            <YAxis 
            type="category" 
            dataKey="name" 
            width={width < parseInt(md) ? 60 : 110} 
            fontSize={width < parseInt(md) ? 9 : 12} 
            color="#6A37A6"
            tick={<CustomTick onClick={handleTickClick} onMouseEnter={handleTickMouseEnter} onMouseLeave={handleTickMouseLeave} />}
            />
            <Tooltip />
            <Bar  dataKey="pv" fill="#6A37A6" stroke="#6A37A6" maxBarSize={width < parseInt(md)?2 : 3} xAxisId="bottomAxis" >
              <LabelList  dataKey="pv" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScoreChart