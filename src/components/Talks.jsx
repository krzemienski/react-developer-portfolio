import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { talks, podcasts } from '../constants';

const TalkCard = ({ index, title, description, url, pdf, image }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className="bg-black-100 p-6 sm:p-10 rounded-3xl w-full"
  >
    <div className="mt-1">
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="text-secondary text-[14px] mt-2 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-4 mt-4">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          Watch Talk
        </a>
        
        {pdf && (
          <a 
            href={pdf} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            View Slides
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const PodcastCard = ({ index, title, description, url, image }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    className="bg-black-100 p-6 sm:p-10 rounded-3xl w-full"
  >
    <div className="mt-1">
      <h3 className="text-white font-bold text-[24px]">{title}</h3>
      <p className="text-secondary text-[14px] mt-2 mb-4">{description}</p>
      
      <div className="mt-4">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          Listen to Podcast
        </a>
      </div>
    </div>
  </motion.div>
);

const Talks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY PRESENTATIONS</p>
        <h2 className={styles.sectionHeadText}>Talks & Podcasts.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Sharing knowledge about video streaming technologies through talks, presentations, and podcast appearances.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col gap-7">
        <div className="mb-10">
          <h3 className="text-white font-bold text-[20px] mb-5">Talks & Presentations</h3>
          {talks.map((talk, index) => (
            <TalkCard key={`talk-${index}`} index={index} {...talk} />
          ))}
        </div>

        <div>
          <h3 className="text-white font-bold text-[20px] mb-5">Podcast Appearances</h3>
          {podcasts.map((podcast, index) => (
            <PodcastCard key={`podcast-${index}`} index={index} {...podcast} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Talks, 'talks');
