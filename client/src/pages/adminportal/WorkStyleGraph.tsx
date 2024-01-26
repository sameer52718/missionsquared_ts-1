import { useParams } from "react-router-dom"
import { useAdminContext } from "../../context/AdminContext";
import AssessmentProfile from "../../components/AssessmentProfile";
import ScoresChart from "../../components/Charts/ScoreChart";
import LabeledLine ,{data} from "../../components/Charts/LabeledLine";

const WorkStyleGraph = () => {
  const adminTableData = useAdminContext()
  const { id } = useParams();

  const tableRow = adminTableData.find((dt) => dt.id === parseInt(id!, 10));

  return (
    <main className='h-full overflow-scroll flex-1 bg-gray-100'>
      <section className='w-full'>
        <AssessmentProfile profile={tableRow!} />
      </section>
      <section className="py-5">
        <div className="container mx-auto px-5">
          <h4 className="font-semibold text-xl mb-4">Work Style Chart</h4>
          <div className="icsp_chart border w-max rounded-md mb-20">
            <LabeledLine />
          </div>
          <ul className="space-y-4 my-4">
            {data.map((item,index) => (
              <li className="flex items-center" key={index}>
              <span className={`w-6 h-6 rounded-full flex justify-center items-center text-white flex-none `} style={{backgroundColor: item.color }}>{item.name[0]}</span>
              <span className="ml-4 font-bold flex-none ">{item.name} :</span>
              <span className="truncate ">&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, reiciendis.</span>
            </li>
            ))}
            
          </ul>

        </div>
      </section>

      <section className="py-20">
        <div className="containermx-auto px-5">
          <ScoresChart />
        </div>
      </section>
    </main>
  )
}

export default WorkStyleGraph