import React, { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999); // Đặt thời gian tới cuối ngày

      const difference = endOfDay.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Tính toán ngay lập tức khi component mount
    calculateTimeLeft();

    // Thiết lập interval mỗi giây
    const timer = setInterval(calculateTimeLeft, 1000);

    // Dọn dẹp interval khi component bị huỷ
    return () => clearInterval(timer);
  }, []);

  // Hàm để render từng chữ số trong một thẻ span riêng
  const renderTime = (time: number) => {
    return String(time).padStart(2, '0').split('').map((digit, index) => (
      <span key={index} style={{ margin: '0 5px' }}>
        {digit}
      </span>
    ));
  };

  return (
    <div className='main3-flashsale-right'>
        {renderTime(timeLeft.hours)}:
        {renderTime(timeLeft.minutes)}:
        {renderTime(timeLeft.seconds)}
    </div>
  );
}

export default Countdown;
