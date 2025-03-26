import React from 'react';

const Images = ({ data }) => {
  return (
    <div className="row image-gallery">
      {data.map((image) => (
        <div key={image.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            className="img-fluid gallery-img"
            alt={image.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
