import './Curtains.css';
import { useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from '../pages/AppRoutes';

const Curtains = () => {
  const [closeCurtain, setCloseCurtain] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    setCloseCurtain(true);

    const timer = setTimeout(() => {
      setCloseCurtain(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="curtain">

        <div className={`curtain__panel curtain__panel--left ${closeCurtain ? 'slide-in' : ''}`}></div>
        {!closeCurtain && (
          <div className="curtain__content">
            <AppRoutes />
          </div>
        )}
        <div className={`curtain__panel curtain__panel--right ${closeCurtain ? 'slide-in' : ''}`}></div>

    </div>
  );
};

export default Curtains;
