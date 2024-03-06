// links
import Link from 'next/link';

// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <>
      <div className='flex items-center gap-x-5 text-lg'>
        <a href={'https://www.linkedin.com/in/michael-ursuliak-647175128'} className='hover:text-accent transition-all duration-300'>
          <RiLinkedinBoxFill />
        </a>
      </div>

      <div className='flex items-center gap-x-5 text-lg'>
        <a href='https://github.com/LuckierBread' className='hover:text-accent transition-all duration-300'>
          <RiGithubFill />
        </a>
      </div>
    </>
  );
}

export default Socials;