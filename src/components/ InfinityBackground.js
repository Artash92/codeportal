import React, { useEffect, useRef } from 'react';


const InfiniteCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = container.getElementsByClassName('carousel-wrapper')[0];
    const items = wrapper.getElementsByClassName('carousel-item');
    const containerWidth = container.offsetWidth;
    const itemsWidth = Array.from(items).reduce(
      (totalWidth, item) => totalWidth + item.offsetWidth,
      0
    );
    let currentPosition = containerWidth;
    let animationFrame;

    container.style.width = `${containerWidth}px`;
    wrapper.style.width = `${itemsWidth}px`;
    wrapper.style.transform = `translateX(${currentPosition}px)`;

    const moveItems = () => {
      currentPosition -= 0.5;
      if (currentPosition <= -itemsWidth) {
        currentPosition = containerWidth;
        wrapper.style.transform = `translateX(${currentPosition}px)`;
      } else {
        wrapper.style.transform = `translateX(${currentPosition}px)`;
      }
      animationFrame = requestAnimationFrame(moveItems);
    };

    const stopAnimation = () => {
      cancelAnimationFrame(animationFrame);
    };

    const startAnimation = () => {
      animationFrame = requestAnimationFrame(moveItems);
    };

    startAnimation();

    // Остановить анимацию при уходе со страницы
    return () => {
      stopAnimation();
    };
  }, []);

  return (
    <div ref={containerRef} className="infinite-scroll">
      <div className="carousel-wrapper">
        <div className="carousel-item">JavaScript</div>
        <div className="carousel-item">jQuery</div>
        <div className="carousel-item">ReactJS</div>
        <div className="carousel-item">Redux</div>
        <div className="carousel-item">ReduxThunk</div>
        <div className="carousel-item">ReduxSaga</div>
        <div className="carousel-item">HTML</div>
        <div className="carousel-item">CSS</div>
        <div className="carousel-item">Weather</div>
        <div className="carousel-item">Keyboard</div>
        <div className="carousel-item">ProgrammingTips</div>
        <div className="carousel-item">OnlineQuiz</div>
        <div className="carousel-item">OnlineCodeEditor</div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
