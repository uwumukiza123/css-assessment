import favicon from '../assets/favicon.png'
import searchIcon from '../assets/search.svg'

const Nav = () => {
  return (
    <div>
        <div className='flex justify-around text-[15px] font-sourceSans mt-5 text-gray-900'>
            <div>
                <img src={favicon} alt="favicon" />
            </div>
            <div>
                <ul className='flex gap-4 py-4'>
                    <a href="/" ><li className='hover:border hover:border-b-black'>Homepage</li></a>
                    <a href="/"><li>Contact</li></a>
                    <a href="/"><li>Legal Notice</li></a>
                    <a href="/"><li>Data Protection Policy</li></a>
                    <a href="/"><li>Emergencies</li></a>
                    <a href="/"><li>Accessibility Statement</li></a>
                </ul>
                
                <div className='flex gap-5 pl-24'>
                    <select className='border border-gray-300 w-16 text-xs h-8 px-2'>
                        <option value="">EN</option>
                    </select>
                    
                    <select className='border px-2 border-gray-300 w-28 text-xs h-8' >
                        <option value="">QuickLinks</option>
                    </select>
                    <select className='border px-2 border-gray-300 w-36 text-xs h-8'>
                        <option value="">Information for</option>
                    </select>
                    <div className='border flex items-center px-2 border-gray-300 w-52 text-xs h-8'>
                    <input type="text" placeholder='search with google...'/>
                    <img src={searchIcon} alt="search icon" />  
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='bg-gray-100 h-8 text-lg mx-72 mt-6'>
            <h1 className='mx-3'>FREIE UNIVERSITÄT BERLIN</h1>
        </div>

        <div className='mx-72'>
            <ul className='flex gap-4 pt-4 pb-2 font-medium text-xl mx-3'>
                <a href="/" ><li className='hover:bg-[#CCFF00]'>ABOUT</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00]'>EDUCATION</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00]'>RESEARCH</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00]'>DEPARTMENTS</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00]'>INTERNATIONAL</li></a>
                <a href="/"><li className='hover:bg-[#CCFF00]'>EXCELLENCE STRATEGY</li></a>
            </ul>
            <div className='h-1 bg-black'></div>
        </div>
    </div>
  )
}

export default Nav