import React, { useRef, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

enum Parallax {
  slow = 0.7,
  fixed = 1,
  against = 1.5,
}

const App = () => {
  let ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log(1);
      ref.current.style.backgroundPositionY = `${
        window.pageYOffset * Parallax.slow
      }px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax">
      <div ref={ref}>
        <h2>Div 1</h2>
      </div>
      <div>
        <h2>Div 2</h2>
      </div>
      <div>
        <h2>Div 3</h2>
      </div>
      <div>
        <h2>Div 4</h2>
      </div>
      <div>
        <h2>Div 5</h2>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
