import "./image-card.scss";
const ImageSkeleton = () => {
  const skeletonItems = Array.from({ length: 20 }, (_, i) => i + 1);

  return skeletonItems.map((i) => (
    <div key={i} className="image-card">
      <div className="skeleton-loader"></div>
    </div>
  ));
};

export default ImageSkeleton;
