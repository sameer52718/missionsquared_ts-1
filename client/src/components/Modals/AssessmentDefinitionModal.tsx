
import './modal.css';
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    LabelList,
    ResponsiveContainer,
    YAxis
  } from "recharts";
import useWidth from "../../hooks/useWidth";
import { renderCustomizedLabel } from '../Charts/ScoreChart';

interface popupModal{
    showModal:boolean;
    modalText: Array<{ name: string; pv: number; }>;
    onClose:()=> void;
}



const AssessmentDefinitionModal = ( { showModal, modalText, onClose}: popupModal) => {
    const {width, breakpoints:{md}} = useWidth();
    if(!showModal) return null;

  return (
    <div className={`wrapper fixed top-0 left-0 w-screen h-screen block`}>
        <div className="container absolute top-1/2 max-w-2xl left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto p-4 rounded-md bg-purple-100">
            <h2 className='text-center font-meeriweather mb-5 md:text-2xl text-xl font-semibold text-orange-100'>{modalText[0].name}</h2>
            <button className='absolute top-0 right-0 p-1 rounded-md bg-purple-50 text-white' onClick={onClose}>
                <svg viewBox="0 0 24 24" width="36px" height="36px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#ffffff"></path> </g></svg>
            </button>

            <div className="w-full bg-white rounded-sm">
            <ResponsiveContainer width="100%" height={40}>
          <BarChart
            barGap={1}
            layout="vertical"
            data={modalText}
            margin={{
              top:20,
              right: 10,
              left: 10,
              bottom: 0
            }}
          
          >
            <CartesianGrid strokeDasharray="1 2" horizontalFill={["white"]} fillOpacity={0.1} />
            <XAxis 
            xAxisId="topAxis"
            display="none"
             type="number"
             domain={[-50, 50]} 
             />
             <YAxis 
            type="category" 
            dataKey="name" 
            width={0}
            color="#6A37A6"
            />
            <Bar  dataKey="pv" fill="#6A37A6" stroke="#6A37A6" maxBarSize={width < parseInt(md)?2 : 3} xAxisId="topAxis" >
              <LabelList  dataKey="pv" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
            </div>
        </div>
    </div>
  )
}

export default AssessmentDefinitionModal