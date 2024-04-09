// links
import Link from 'next/link';
import {

// icons
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <a href='https://www.linkedin.com/in/michael-ursuliak-647175128' target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </a>
      <a href='https://www.github.com/luckierbread' target="_blank" className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </a>
    </div>
  );
};

export default Socials;
