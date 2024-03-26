import globeImage from '../assets/globe.jpeg'
import mendelStage from '../assets/mendel-cheema-stage.jpeg'
import rightArrowIcon from '../assets/rightArrowIcon.svg'
import rightArrow from '../assets/rightArrow.svg'
import leftArrow from '../assets/leftArrow.svg'
import hamburgerMenu from '../assets/hamburgerMenu.svg'

const Events = () => {
  return (
    <div className='mx-3 md:mx-72 font-sourceSans text-[21px] leading-7 py-12'>
        <div className='grid md:flex gap-8 '>
            <div className='w-[380px] md:w-1/2'>
                <img src={globeImage} alt="start image" />
                <div className='flex py-3 bg-gray-300'>
                    <div className='px-'>
                        <p>Bacteria beyond Earth? Signs of life detectable in single ice grains emitted from moons orbiting Saturn and JupiterPress release</p>
                        <span className='text-base'>press release</span>
                    </div>
                    <img className='bg-[#004659] w-10 h-10 mt-40 md:mt-10' src={rightArrow} alt="right arrow"/>
                </div>
            </div>
            <div className='grid md:flex gap-8 md:w-1/2'>
                <div className='w-[380px] md:w-1/2 bg-gray-200'>
                    <img className='w-full' src={mendelStage} alt="mendel cheema stage" />
                    <p className='py-2 px-3'>Lecture by Saba-Nur Cheema and Meron Mendel: Responses to the Middle East Conflict. Freie Universität Berlin hosts lecture series against antisemitism, racism, and anti-Islamic radicalism</p>
                    <div className='flex justify-between px-2'>
                        <span>featured stories</span>
                        <div className='bg-[#004659] w-10 mt-10'><img src={rightArrow} alt="right arrow"/></div> 
                    </div>
                    
                </div>
                <div className='w-1/2'>
                    <h1>EVENTS</h1>
                    <div>
                        <div className='grid md:flex gap-3 md:gap-8 py-6 md:py-2'>
                            <p className='text-gray-400 w-96  md:w-20 text-sm'>Mar 26 | 2:00 PM</p>
                            <p className='underline text-[16px] '>Service | Introductory Course to Citavi</p>
                        </div>
                        <div className='w-[380px] md:w-72 h-[1px] bg-gray-400'></div>
                        <div className='grid md:flex gap-3 md:gap-8 py-6 md:py-2'>
                            <p className='text-gray-400 w-96 md:w-20 text-sm'>Mar 27 | 5:00 PM</p>
                            <p className='underline text-[16px] '>Service | Offene Schreibsprechstunde</p>
                        </div>
                        <div className='w-[380px] md:w-72 h-[1px] bg-gray-400'></div>
                        <div className='grid md:flex gap-3 md:gap-8 py-2'>
                            <p className='text-gray-400 w-96 md:w-40 text-sm'>Mar 26 | 2:00 PM</p>
                            <p className='underline text-[16px] '>Service | Zentrale Einführungsveranstaltung für nationale und internationale Studierende</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full flex items-center justify-center w-10 h-10 border border-black'>
                                <img className='w-6' src={hamburgerMenu} alt="hamburger menu" />
                            </div>
                            <div className='rounded-full flex items-center justify-center w-10 h-10 border border-black'>
                                <img className='w-6' src={leftArrow} alt="right arrow icon" />
                            </div>
                            <div className='w-14'>1 / 18</div>
                            <div className='rounded-full flex items-center justify-center w-10 h-10 border border-black'>
                                    <img className='w-6' src={rightArrowIcon} alt="right arrow icon" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Events