import { Map, YMaps, Placemark } from "react-yandex-maps";
import React from "react";

import styles from "./withMap.module.css";

const AllPlacemark = ({ clinics }) => {
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
            height={"465px"}
            defaultState={{
              center: [43.318365, 45.692423],
              zoom: 13,
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
                    balloonContentHeader: item.name,
                    balloonContentBody: `<img src=${item.photo} width="400px"/>`,
                    balloonContentFooter: item.place,
                    iconLayout: "default#image",
                    iconImageHref: item.photo,
                    iconImageSize: [120, 120],
                    iconImageOffset: [-20, -20],
                  }}
                  options={{
                    preset: "islands#circleDotIcon",
                    iconColor: "red",
                  }}
                />
              );
            })}
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default AllPlacemark;
