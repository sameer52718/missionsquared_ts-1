import work_style from '/work-style-eagle.png';
import { personalityStyles } from '../../data/stylesList';
import Strength from '../../components/Strength';
import UnlockReportBtn from '../../components/UnlockReportBtn';

const AssessmentReport = () => {
    return (
        <>
            <section className='md:pt-44 pt-36 md:pb-20 pb-10 bg-purple-100'>
                <div className="container mx-auto md:px-10 px-5">
                    <h2 className='text-center md:text-5xl text-3xl font-light font-meeriweather text-white mb-10'>Jason's <span className='text-orange-100'>EQ² Report</span></h2>

                    <div className="bg-gray-100 py-10 md:px-24 px-5 w-full lg:w-4/5  mx-auto rounded-xl mb-10">
                        <h3 className='text-black font-meeriweather font-extralight mb-5 md:text-4xl text-2xl text-center'>Your Work Style is <span className="text-purple-100 font-semibold">Eagle</span></h3>

                        <div className="flex w-full gap-5 items-center flex-wrap mb-5">
                            <img src={work_style} alt="work style eagle" className='md:w-1/3 w-full md:max-w-[250px]' />
                            <div className="bg-purple-100 text-white font-montserrat flex-1 md:p-10 p-5 rounded-lg">
                                <p>Eagles, with their keen vision and high-flying habits, symbolize freedom, strength, and foresight.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <ul>
                                {
                                    personalityStyles.map((style, index) => {
                                        return (
                                            <li key={index} className='flex items-center sm:flex-row flex-col gap-2 mb-3'>
                                                <img src={style.img} className='max-w-12' alt={style.head} />
                                                <p className='font-montserrat'><strong className='whitespace-nowrap sm:text-xl'>{style.head}</strong>:
                                                    <span>{style.desc}</span></p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <UnlockReportBtn />
                </div>
            </section>

            <Strength />
        </>
    )
}

export default AssessmentReport