import startImage from '../assets/startseite-text-en.png'
import rightArrow from '../assets/rightArrow.svg'

const Landing = () => {
  return (
    <div className='mx-3 md:mx-72 font-sourceSans text-[21px] leading-7 py-12'>
        <div className='grid md:flex gap-10 md:gap-8'>
            <div className='md:w-2/3'>
                <img src={startImage} alt="start image" />
                <div className='flex py-3 bg-gray-300'>
                    <p className='px-3'>Measures Taken against Antisemitism, Racism, and Discrimination: Counseling and Advice Services, Events, University Communication Regarding the Conflict in the Middle East</p>
                    <img className='bg-[#004659] w-10 h-10 mt-40 md:mt-10' src={rightArrow} alt="right arrow"/>
                </div>
            </div>
            <div className='w-full md:w-1/3'>
                <p>40,000 people from over 150 countries –  and from many different origins as well as cultural and religious backgrounds – study, teach, and work at Freie Universität Berlin.</p>
                    <p className='py-4'>Diversity is a cornerstone of our university. </p>
                    <p className='py-4'>And compassion, respect, and tolerance are the pillars that reinforce our community. Antisemitism, racism, and discrimination have no place at Freie Universität</p>
                    <p >As a university, we welcome debate on our campus and strive to foster the kind of open and democratic culture required to discuss a wide range of topics, including controversial and difficult ones. </p>
            </div>
        </div>
        
    </div>
  )
}

export default Landing