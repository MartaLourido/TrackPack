//Npm packages
import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

// Project files
// import SearchBar from "../components/SearchBar.jsx";
import Filter from "../components/Filter";

export default function Parcels({ status, information }) {
  return (
 
      <div>
   
        {status === 1 ? (
          <Filter information={information} />
        ) : (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
           
          </Segment>
        )}
         {/* <p>We don't have any parcel with this ID</p> */}
      </div>
   
  );
}
