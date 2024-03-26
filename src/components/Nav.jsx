import favicon from '../assets/freieIcon.webp'
import searchIcon from '../assets/search.svg'
import dots from '../assets/dots.svg'
import menuIcon from '../assets/menuIcon.svg'

const Nav = () => {
  return (
    <div>
        <div className='flex justify-between md:justify-around text-[15px] font-sourceSans mt-1 md:mt-5 text-gray-900'>
            <div>
                <img src={favicon} alt="favicon" className='w-72'/>
            </div>
            <div>
                <ul className='hidden sm:hidden md:flex gap-4 py-4'>
                    <a href="/" ><li className='hover:border hover:border-b-black'>Homepage</li></a>
                    <a href="/"><li>Contact</li></a>
                    <a href="/"><li>Legal Notice</li></a>
                    <a href="/"><li>Data Protection Policy</li></a>
                    <a href="/"><li>Emergencies</li></a>
                    <a href="/"><li>Accessibility Statement</li></a>
                </ul>
                
                <div className='flex gap-5 pl-24'>
                    <select className='border border-gray-300 w-16 text-xs h-8 px-2 md:block hidden'>
                        <option value="">EN</option>
                    </select>
                    
                    <select className='border px-2 border-gray-300 w-28 text-xs h-8 md:block hidden' >
                        <option value="">QuickLinks</option>
                    </select>
                    <select className='border px-2 border-gray-300 w-36 text-xs h-8 md:block hidden'>
                        <option value="">Information for</option>
                    </select>
                    <div className='border items-center p-0 md:px-2 border-none md:border-gray-300 w-16 md:w-52 text-xs h-8 flex'>
                    <input type="text" placeholder='search with google...'className='md:block hidden'/>
                        <img src={searchIcon} alt="search icon" /> 
                        <img className='md:hidden block' src={dots} alt="dots" /> 
                    </div>
                    
                </div>
            </div>
        </div>

        <div className=' bg-gray-100 h-8 text-lg mx-1 md:mx-72 mt-6'>
            <h1 className='mx-3'>FREIE UNIVERSITÄT BERLIN</h1>
        </div>

        <div className='mx-1 md:mx-72'>
            <ul className='hidden md:flex gap-4 pt-4 h-10 items-center font-medium text-xl mx-3'>
                <a href="/" ><li className='hover:bg-[#CCFF00] hover:w-40 hover:h-8'>ABOUT</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00] hover:w-40 hover:h-8'>EDUCATION</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00] hover:w-40 hover:h-8'>RESEARCH</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00] hover:w-40 hover:h-8'>DEPARTMENTS</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00] hover:w-40 hover:h-8'>INTERNATIONAL</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00] hover:w-40 hover:h-8'>EXCELLENCE STRATEGY</li></a>
            </ul>
            <div className='pt-2'>
                <div className='md:hidden flex justify-between py-2'>
                    <span>MENU</span>
                    <img src={menuIcon} alt=" menu icon" />
                </div>
                <div className='h-1 bg-black'></div>
            </div>
        </div>
    </div>
  )
}

export default Nav