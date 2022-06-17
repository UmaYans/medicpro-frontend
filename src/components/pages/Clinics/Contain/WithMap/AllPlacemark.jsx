import { Map, YMaps, Placemark } from "react-yandex-maps";
import React from "react";

import styles from "./withMap.module.css";

const AllPlacemark = ({clinics}) => {
  return (
    <div className={styles.rym}>
      <YMaps
        query={{
          ns: "use-load-option",
          load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
        }}
      >
        <div className={styles.map}>
          <Map
            width={"100%"}
            height={"450px"}
            defaultState={{
              center: [43.318365, 45.692423],
              zoom: 14,
              controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
          >
            {clinics?.map((item) => {
              return (
                <Placemark
                  key={item._id}
                  geometry={item.coordinates}
                  properties={{
                    balloonContentBody: item.name,
                  }}
                />
              );
            })}
          </Map>
        </div>
      </YMaps>{" "}
    </div>
  );
};

export default AllPlacemark;
