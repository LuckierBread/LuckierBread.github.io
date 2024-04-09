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
      <Link href={'www.linkedin.com/in/michael-ursuliak-647175128'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinBoxFill />
      </Link>
      <Link href={'www.github.com/luckierbread'} className='hover:text-accent transition-all duration-300'>
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
