import React from 'react';
import Iframe from 'react-iframe';

function Bandcamp () {
  return ( 
    <div className="info">
      
      <Iframe url="https://bandcamp.com/EmbeddedPlayer/album=2725786074/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              width="350px"
              height="470px"
        />
    </div>
   )
}

export default Bandcamp;