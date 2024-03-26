import bluechevronRight from '../assets/blueChevronRight.svg'
import bannerLogo from '../assets/berlinUniversityLogo.png'
import berlinUniversityAlliance from '../assets/bua-logo-banner-sw.png'
import germanU5 from '../assets/german-u15-logo-rd-sw.png'
import systemLogo from '../assets/systemakkreditierung-siegel-rd-sw.png'
import europaLogo from '../assets/una-europa-logo-banner.png'

const Services = () => {
  return (
    <div className='sm:mx-3 mx-0 md:mx-64 py-20'>
        <div className='grid md:flex px-5 gap-10 md:gap-8'>
            <div className='border border-[#004659] w-full md:w-1/3  text-[#004659] h-16 cursor-pointer hover:bg-[#004659] hover:text-white font-sourceSans text-[21px] flex items-center gap-2 pl-8'>
                <img src={bluechevronRight} alt="chevron right icon" />
                <p>Jobs & Careers</p>
            </div>
            <div className='border border-[#004659] w-full md:w-1/3 text-[#004659] h-16 font-sourceSans cursor-pointer hover:bg-[#004659] hover:text-white text-[21px] flex items-center gap-2 pl-8'>
                <img src={bluechevronRight} alt="chevron right icon" />
                <p>
                    Energy & Sustainability</p>
            </div>
            <div className='border border-[#004659] w-full md:w-1/3 cursor-pointer hover:bg-[#004659] hover:text-white text-[#004659] h-16 font-sourceSans text-[21px] flex items-center gap-2 pl-8'>
                <img src={bluechevronRight} alt="chevron right icon" />
                <p>
                    Diversity, Equality & Family</p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 md:gap-0 gap-12 md:flex justify-center md:justify-between items-center py-20'>
            <img className='w-52' src={bannerLogo} alt="banner logo" />
            <img className='w-52' src={berlinUniversityAlliance} alt="bannerlogo" />
            <img className='w-36 ml-8 md:ml-0' src={germanU5} alt="german u5"/>
            <img className='w-52' src={systemLogo} alt="system logo" />
            <img className='w-52' src={europaLogo} alt="europa logo" />
        </div>
        <div className='pt-4'>
            <div className='h-1 bg-black'></div>
        </div>
    </div>
  )
}

export default Services