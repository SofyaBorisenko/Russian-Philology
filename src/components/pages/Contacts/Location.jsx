import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Location() {
  return (
    <YMaps>
      <Map
        width={'100%'}
        height={'60vh'}
        defaultState={{
          center: [55.753630, 37.610255],
          zoom: 16,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={[55.753630, 37.610255]}
        />
      </Map>
    </YMaps>
  );
}

export default Location;