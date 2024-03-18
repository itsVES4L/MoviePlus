import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({ trailerKey }) => {
  return (
    <div className="video-responsive relative pb-[56.25%] overflow-hidden h-0 rounded-2xl select-none">
      <iframe
        className="absolute left-0 right-0 w-full h-full"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        loading="lazy" // Lazy load the iframe content
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  trailerKey: PropTypes.string.isRequired,
};

export default memo(VideoPlayer);
