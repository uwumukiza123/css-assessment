import chevronRight from '../assets/rightChevron.svg'
import studierImage from '../assets/studier.jpeg'

const Research = () => {
  return (
    <div className='mx-72'>
        <div className='bg-[#004659] text-white h-16 font-sourceSans text-[21px] flex items-center gap-2 justify-center w-1/2 ml-8'>
            <img src={chevronRight} alt="chevron right icon" />
            <p>Newsroom: The latest news from Freie Universität Berlin</p>
        </div>
        <div className='bg-gray-200 mt-28'>
            <div className='p-16 flex gap-8'>
                <div className='w-1/3 font-sourceSans text-[18px] leading-6'>
                    <h1 className='font-sourceSans text-4xl font-bold'>Studying</h1>
                    <p className='text-[18px] leading-7 py-10'>
                        Freie Universität Berlin offers over 150 degree programs in all areas of study. Whether you are looking to do a bachelor’s, master’s, or even a doctoral degree, we have the program for you. Freie Universität students benefit from our partnerships with hundreds of universities around the world. The Student Service Center is happy to help answer any questions you have about applying, enrolling, and planning your studies.
                    </p>
                    <div className='bg-[#004659] text-white h-16 font-sourceSans w-72 text-[21px] flex items-center gap-2 justify-center'>
                        <img src={chevronRight} alt="chevron right icon" />
                        <p>To our degree programs</p>
                    </div>
                </div>
                <div className='w-2/3'>
                    <img src={studierImage} alt="studier image" />
                    <div>
                        <p className='text-[#666] text-xs font-sourceSans w-2/5 py-2'>Students on the campus of Freie UniversitätImage Credit: Bernd Wannenmacher</p>
                        <div className='w-full h-[1px] bg-[#666]'></div>
                    </div>
                </div>
                </div>
        </div>


    </div>
  )
}

export default Research