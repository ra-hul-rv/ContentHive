import { lazy, Suspense, useRef } from "react";
import PropTypes from "prop-types";
import "./home.scss";
import ImageSkeleton from "../Common/ImageSkeloton";
import NoDataIcon from "../../assets/Icons/noDataIcon";

const ImageCard = lazy(() => import("../Common/ImageCard"));

const Home = ({ items, searchTerm, setPage, page, error, isLoading }) => {
  const observer = useRef();

  const lastItemRef = (element) => {
    if (isLoading) return; // Return if api call is in progress
    if (observer.current) observer.current.disconnect(); // Clearing any previous intersection observers if set
    //Creating a new observer which observe the change in intersection and incrementing the page no for api call
    observer.current = new IntersectionObserver((properties) => {
      if (properties[0].isIntersecting && page < 3) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    // Attaching the observer to the target element to observe its state
    if (element) observer.current.observe(element);
  };

  // Searching locally from the list of items
  const filteredItems =
    items.length > 0
      ? items?.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : Array.from({ length: 20 }, (_, i) => i + 1);

  // early return if their is an error or if the list is empty
  if (error || filteredItems.length === 0) {
    return (
      <div className="error-message">
        <NoDataIcon />
        {error ? error : "No Data"}
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="image-grid">
        <Suspense fallback={<ImageSkeleton />}>
          {filteredItems?.map((item, index) => {
            if (index === filteredItems.length - 1) {
              return (
                <div ref={lastItemRef} key={index}>
                  <ImageCard name={item.name} imgURL={item["poster-image"]} />
                </div>
              );
            }
            return (
              <ImageCard
                key={index}
                name={item.name}
                imgURL={item["poster-image"]}
              />
            );
          })}
        </Suspense>
      </div>
    </div>
  );
};

Home.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      "poster-image": PropTypes.string.isRequired,
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default Home;
