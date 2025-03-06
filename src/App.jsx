import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { herobgPreview } from './assets';
// eslint-disable-next-line import/no-unresolved
import {
  About,
  AnimatedButton,
  Blogs,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  PageFloatButtons,
  StarsCanvas,
  Tech,
  Works,
  Talks,
  // eslint-disable-next-line import/no-unresolved
} from './components';

const App = () => {
  const BackgroundVideo = () => {
    const [videoInfo, setVideoInfo] = useState(getBackgroundInfo());

    useEffect(() => {
      function handleResize() {
        setVideoInfo(getBackgroundInfo());
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    // Determine video source and poster based on screen width
    function getBackgroundInfo() {
      const aspectRatio = window.innerWidth / window.innerHeight;

      if (aspectRatio > 1.2) {
        return (
          <div style={{ position: 'relative', width: '100%', minHeight: '500px', backgroundColor: '#000000' }}>
            <video autoPlay loop muted playsInline poster={herobgPreview}>
              <source src="https://wy-portfolio.oss-cn-chengdu.aliyuncs.com/herobg.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      } else {
        return (
          <div style={{ backgroundColor: '#000000', width: '100%', minHeight: '500px' }}>
            <img
              src="https://wy-portfolio.oss-cn-chengdu.aliyuncs.com/herobg-mb.gif"
              alt="Background"
              style={{ width: '100%', minHeight: '500px' }}
            />
          </div>
        );
      }
    }

    return videoInfo;
  };

  return (
    <BrowserRouter>
      <div className="relative z-0">
        {/* Global floating buttons */}
        <PageFloatButtons
          shape="circle"
          style={{
            right: 94,
          }}
        />

        {/* Background video, hero section and navigation */}
        <div className="relative">
          <BackgroundVideo />
          <div className="absolute inset-0">
            <Navbar />
            <Hero />
            <div className="hidden sm:block">
              <AnimatedButton href="#about" />
            </div>
          </div>
        </div>

        <div
          className="relative z-0"
          style={{
            backgroundColor: '#000000',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <About />
          <Experience />
          <Tech />
          <Works />
          <Talks />
          <StarsCanvas />
          <Blogs />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
