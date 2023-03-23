import React from "react";
import YouTube from "react-youtube";

const Check = () => {
  const videoId = "WA4w83IMna0";

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <YouTube
          className="w-full"
          videoId={videoId}
          opts={{
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Check;