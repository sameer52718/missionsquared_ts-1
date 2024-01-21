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
    <main className='bg-beige-100'>
      <section className='w-full md:pt-36'>
        <AssessmentProfile profile={tableRow!} />
        <div className="flex container gap-10 flex-wrap mx-auto md:px-10 px-5">
          <div className="border border-gray-400 p-1 min-w-36 flex flex-col rounded-md">
            <small className='mb-1 text-gray-700 font-semibold'>Filter By Category</small>
            <select name="filter" id="" className='bg-transparent focus:outline-none'>
              <option value="View All" selected>View All</option>
              <option value="Self-Management">Self-Management</option>
              <option value="Motivational Factors">Motivational Factors</option>
              <option value="Interpersonal Dynamics">Interpersonal Dynamics</option>
            </select>
          </div>

          <div className="border border-gray-400 p-1 min-w-36 flex flex-col rounded-md">
            <small className='mb-1 text-gray-700 font-semibold'>Sort By</small>
            <select name="filter" id="" className='bg-transparent focus:outline-none'>
              <option value="category" defaultValue="category">Category</option>
              <option value="name">Name</option>
              <option value="score">Score</option>
            </select>
          </div>
        </div>
      </section>
      <section className="pt-20">
        <div className="container bg-beige-100 mx-auto lg:px-24 md:px-10 px-5">
          <h4 className="font-semibold text-xl mb-4">Work Style Chart</h4>
          <div className="icsp_chart p-4 w-max rounded-md">
            <img src="/iscp-full-background.svg" alt="" />
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
        <div className="container bg-beige-100 mx-auto md:px-10 px-5">
          <ScoresChart />
        </div>
      </section>
    </main>
  )
}

export default WorkStyleGraph