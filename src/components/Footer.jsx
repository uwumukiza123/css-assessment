import chevronBlack from '../assets/chevronBlack.svg'
import facebookIcon from '../assets/facebookIcon.svg'
import twitterIcon from '../assets/twitterIcon.svg'
import instagramIcon from '../assets/instagramIcon.svg'
import youtubeIcon from '../assets/youtubeIcon.svg'
import googlePlusIcon from '../assets/googlePlus.icon.svg'
import linkedInIcon from '../assets/linkedInIcon.svg'
import fuSeagel from '../assets/fu-siegel-web-schwarz-684a4d11be3c3400d8906a344a77c9a4 (1).png'

const Footer = () => {
  return (
    <div className='mx-72'>
        <div className='font-sourceSans flex justify-between px-12'>
            <div>
                <h1 className='text-xl py-3'>Information for</h1>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Employees</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Prospective Students</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Refugees</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Students and Doctorate</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Researchers</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Teachers</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Alumni and Supporters</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Journalists</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Continuing Education</span>
                </div>
            </div>
            <div>
                <h1 className='text-xl py-3'>Service Navigation</h1>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Homepage</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Contact</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Legal Notice</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Data Protection Policy</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Emergencies</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Accessibility Statement</span>
                </div>
            </div>

            <div>
                <h1 className='text-xl py-3 items-center'>Social Media</h1>
                <div className='flex gap-2 pt-2'>
                    <img src={facebookIcon} alt="chevron black" />
                    <span>Facebook</span>
                </div>
                <div className='flex pt-2 gap-2 items-center'>
                    <img src={twitterIcon} alt="chevron black" />
                    <span>Twitter</span>
                </div>
                <div className='flex pt-2 gap-2 items-center'>
                    <img src={instagramIcon} alt="chevron black" />
                    <span>Instagram</span>
                </div>
                <div className='flex pt-2 gap-2 items-center'>
                    <img src={youtubeIcon} alt="chevron black" />
                    <span>Youtube</span>
                </div>
                <div className='flex pt-2 gap-2 items-center'>
                    <img src={googlePlusIcon} alt="chevron black" />
                    <span>Google Plus</span>
                </div>
                <div className='flex pt-2 gap-2 items-center'>
                    <img src={linkedInIcon} alt="chevron black" />
                    <span>LinkedIn</span>
                </div>
                <p className='text-[#666] text-xs font-sourceSans py-4'>Information about Using Social Media</p>
            </div>

            <div>
                <h1 className='text-xl py-3'>This Page</h1>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Print</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Subscribe RSS-Feed</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Feedback</span>
                </div>
                <div className='flex pt-2'>
                    <img src={chevronBlack} alt="chevron black" />
                    <span>Deutsch</span>
                </div>
            </div>
        </div>
        <div className='h-[1px] bg-black mt-20'></div>

        <div className='flex gap-16 py-20 px-12 items-center'>
            <img className='w-40' src={fuSeagel} alt="fu seagel image" />
            <p className='font-sourceSans text-sm leading-5 w-[500px]'>The Latin words veritas, justitia, and libertas, which frame the seal of Freie Universität Berlin, stand for the values that have defined the academic ethos of Freie Universität since its founding in December 1948.</p>
        </div>
    </div>
  )
}

export default Footer