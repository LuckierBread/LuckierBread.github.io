// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  FaComments,
  FaRobot,
  FaToolbox,
  FaLightbulb,
  FaRocket,
  FaMagnifyingGlass,
} from 'react-icons/fa6';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <FaComments />,
    title: 'AI Chatbots',
    description: 'Engage your customers with AI-powered chatbots that provide personalized experiences and drive sales.',
  },
  {
    icon: <FaRobot />,
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline workflows to boost productivity and reduce operational costs.',
  },
  {
    icon: <FaToolbox />,
    title: 'Custom AI Tools',
    description: 'Leverage custom AI tools to gain insights, make data-driven decisions, and drive business growth.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Generative AI',
    description: 'Create unique and original content with generative AI models that learn and adapt to your brand.',
  },
  {
    icon: <RxRocket />,
    title: 'Predictive Analytics',
    description: 'Leverage predictive analytics to forecast trends, identify opportunities, and mitigate risks.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
