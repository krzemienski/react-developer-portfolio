import { DoubleLeftOutlined, DoubleRightOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedButton = ({ href, className }) => {
  return (
    <div className={`absolute xs:bottom-12 bottom-5 w-full flex justify-center items-center ${className}`}>
      <a href={href}>
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>
  );
};

const MoreButton = ({ href, className }) => {
  return (
    <motion.div
      className={`inline-flex items-center ${className}`}
      animate={{ x: [0, 5, 0] }} // 水平方向动画
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    >
      <Button type="link" icon={<FileSearchOutlined />} size="large" href={href} target="_blank" className="text-white">
        <p>Read More.</p>
      </Button>
    </motion.div>
  );
};

const ScrollArrowButton = ({ direction, scroll, className }) => {
  // 根据方向设置动画的初始和终止值
  const animateX = direction === 'left' ? [-10, 10, -10] : [10, -10, 10];
  // 根据方向设置按钮的图标
  const icon = direction === 'left' ? <DoubleLeftOutlined /> : <DoubleRightOutlined />;

  return (
    <motion.div
      animate={{ x: animateX }} // 水平方向动画
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className={`scroll-arrow ${direction} ${className}`}
      onClick={() => scroll(direction)}
    >
      <Button type="text" className="text-white" icon={icon} />
    </motion.div>
  );
};

export { AnimatedButton, MoreButton, ScrollArrowButton };
