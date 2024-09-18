import PropTypes from 'prop-types';
import { useRef, lazy, Suspense } from 'react';
import './home.scss';
import noDataIconLight from '../../assets/Icons/noDataIconLight.svg'
const ImageCard = lazy(() => import('../Common/ImageCard'));

const Home = ({ items, searchTerm, setPage, page, error, isLoading }) => {
  const observer = useRef();

  const lastItemRef = (element) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((properties) => {
      if (properties[0].isIntersecting && page < 3) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (element) observer.current.observe(element);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='main-container'>
      <div className='image-grid'>
        {error ? (
          <div className="error-message">
            <img src={noDataIconLight} alt="no data" />
            {error}</div>
        ) : (
          <Suspense fallback={<div>Loading...</div>}>
            {filteredItems.map((item, index) => {
              if (index === filteredItems.length - 1) {
                return (
                  <div ref={lastItemRef} key={index}>
                    <ImageCard name={item.name} imgURL={item['poster-image']} />
                  </div>
                );
              }
              return <ImageCard key={index} name={item.name} imgURL={item['poster-image']} />;
            })}
          </Suspense>
        )}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      'poster-image': PropTypes.string.isRequired,
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;