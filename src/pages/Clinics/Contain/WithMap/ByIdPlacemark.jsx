import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from "./withMap.module.css";

const ByIdPlacemark = ({ filtered }) => {
  return (
    <div className={styles.rym}>
      {filtered?.map((item) => {
        return (
          <YMaps
            key={item._id}
            query={{
              ns: "use-load-option",
              load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
            }}
          >
            <div className={styles.map}>
              <Map
                width={"100%"}
                height={"467px"}
                defaultState={{
                  center: item.coordinates,
                  zoom: 17,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
              >
                <Placemark
                  className={styles.placemark}
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
                    iconColor: "green",
                  }}
                />
              </Map>
            </div>
          </YMaps>
        );
      })}
    </div>
  );
};

export default ByIdPlacemark;
