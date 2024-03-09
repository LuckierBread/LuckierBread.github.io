// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full flex items-center justify-center'>
      {/* text */}
      <div className='w-full h-full bg-color black/10 absolute flex items-center justify-center z-10'>
        <div className='xl:absolute xl:left-[10%] z-20 flex flex-col justify-center items-center
          xl:text-left backdrop-blur-md bg-opacity-50 bg-black rounded-lg px-8 py-8'>
          {/* title */}
          <motion.h1
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1'
          >
            Transforming Ideas <br /> Into{' '}
            <span className='text-accent'>Reality</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            My passion is to use technology to create a better world.
            4 years of machine learning and 7 years of mechatronics.
            I thrive in a fast paced and agile environment where creativity and innocation are king.
            From robotics to AI, I can make it happen.
          </motion.p>
          {/* btn */}
          <div className='xl:hidden'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1500px] z-4 h-full absolute right-[-0%] bottom-0 '>
        {/* bg img */}
        {/* <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute left-[45%] 
        mix-blend-color-dodge translate-z-0'></div> */}
        <div className='bg-gradient-to-t xl:bg-explosion xl:bg-cover xl:bg-center xl:bg-no-repeat w-full h-full absolute 
        mix-blend-color-dodge'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[800px] max-h-[700px] absolute lg:bottom-[0%] lg:right-[24%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;