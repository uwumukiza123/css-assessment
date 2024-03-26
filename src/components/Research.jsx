import chevronRight from '../assets/rightChevron.svg'
import supraFabImage from '../assets/supra-fab.jpeg'

const Research = () => {
  return (
    <div className='mx-3 md:mx-72'>
        <div className='mt-10 md:mt-28'>
            <div className='p-4 md:p-16 grid md:flex gap-8'>
                <div className='w-full md:w-1/3 font-sourceSans text-[18px] leading-6'>
                    <h1 className='font-sourceSans text-4xl font-bold'>Research</h1>
                    <p className='text-[18px] leading-7 py-10'>
                    Researchers at Freie Universität Berlin benefit from access to a wide range of academic networks around the world. They produce groundbreaking results and set tomorrow’s research trends through interdisciplinary work with an international focus. Freie Universität Berlin is among the select few German institutions of higher education supported by the German federal and state governments’ Excellence Strategy.
                    </p>
                    <div className='bg-[#004659] text-white h-16 font-sourceSans w-72 text-[21px] flex items-center gap-2 justify-center'>
                        <img src={chevronRight} alt="chevron right icon" />
                        <p>
                            Our research profile</p>
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <img src={supraFabImage} alt="supra fab image" />
                    <div className='text-[#666] text-xs font-sourceSans py-2'>
                        <p className=''>Nanoscale study of cell boundaries: The new SupraFAB Building on the Freie Universität Berlin campus houses research on the properties and </p>
                        <p className='w-1/2'>functional mechanisms of supramolecular structures at biointerfaces.
                            Image Credit: Bernd Wannenmacher</p>
                    </div>
                    <div className='w-full h-[1px] bg-[#666]'></div>
                    
                </div>
                </div>
        </div>


    </div>
  )
}

export default Research