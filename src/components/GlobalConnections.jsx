import chevronRight from '../assets/rightChevron.svg'
import universityImage from '../assets/universityImage.jpeg'

const GlobalConnections = () => {
  return (
    <div className='mx-3 md:mx-64'>
        <div className='bg-gray-200 mt-10 md:mt-28'>
            <div className='p-4 md:p-16 grid md:flex gap-8'>
                <div className='w-full md:w-1/3 font-sourceSans text-[18px] leading-6'>
                    <h1 className='font-sourceSans text-4xl font-bold'>Global Connections</h1>
                    <p className='text-[18px] leading-7 py-10'>
                    Freie Universität Berlin is one of Europe’s leading research universities. Our scope is global – people from more than 100 countries around the world work and study at Freie Universität. Our alumni actively help to shape the world today, and opportunities to study and work abroad are woven into our university culture. At Freie Universität Berlin, this international focus is reflected in our research, teaching, and day-to-day lives. It has been an integral part of our history since 1948.
                    </p>
                    <div className='md:w-full w-80 bg-[#004659] text-white h-16 font-sourceSans text-[21px] flex items-center gap-2 justify-center'>
                        <img src={chevronRight} alt="chevron right icon" />
                        <p>Discover our international network</p>
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <img src={universityImage} alt="university image" />
                    <div className='text-[#666] text-xs font-sourceSans py-2 w-2/3'>
                        <p>People from more than 100 countries around the world work and study at Freie Universität Berlin
                            Image Credit: Bernd Wannenmacher</p>
                    </div>
                    <div className='w-full h-[1px] bg-[#666]'></div>
                    
                </div>
                </div>
        </div>


    </div>
  )
}

export default GlobalConnections