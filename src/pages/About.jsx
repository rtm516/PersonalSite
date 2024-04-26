import SocialButton from '../components/SocialButton'
import { faGithub, faLinkedin, faMastodon, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBriefcase, faLayerGroup, faLock, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import ServiceSection from '../components/ServiceSection'

function About () {
  return (
    <>
      <div className='px-8 pb-12 flex items-center flex-col gap-5'>
        <div className='bg-white p-6 rounded max-w-6xl'>
          <p>
            My name is Ryan Milner and I&apos;m a developer and penetration tester from the UK. I contribute to a number of open source projects in my time outside work. I have great experience in a variety of programming languages, these being: C#, Java, PHP, JavaScript, LUA, C, Python and many more.
          </p>
        </div>
        <div className='bg-white p-6 rounded max-w-6xl'>
          <h3 className='text-3xl text-center pb-4'>Services</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            <ServiceSection icon={faLock} title='Penetration Testing' message='I have experience working with and for various organisations.' />
            <ServiceSection icon={faNetworkWired} title='Networking' message='Large or small, I&apos;m able to cater to your needs.' />
            <ServiceSection icon={faLayerGroup} title='Full Stack Development' message='From complex front-ends all the way through to the back-end API and database.' />
            <ServiceSection icon={faBriefcase} title='Software Development' message='API parser, organiser, stock control and anything inbetween.' />
          </div>
        </div>
        <div className='max-w-6xl'>
          <div className='flex flex-wrap gap-5 justify-center'>
            <SocialButton icon={faLinkedin} link='https://www.linkedin.com/in/ryan-m-31246b12b/' />
            <SocialButton icon={faTwitter} link='https://twitter.com/rtm516' />
            <SocialButton icon={faMastodon} link='https://infosec.exchange/@rtm516' />
            <SocialButton icon={faGithub} link='https://github.com/rtm516/' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
