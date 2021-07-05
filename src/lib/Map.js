/* eslint-disable no-undef */
import { MAP } from "../constants/constant";

export default class Map {
  constructor({ ref }) {
    this.options = {
      center: new kakao.maps.LatLng(MAP.CENTER.Y, MAP.CENTER.X),
      level: 4,
    };
    this.$map = new kakao.maps.Map(ref, this.options);
    this.infowindow = new kakao.maps.InfoWindow(MAP.INFO_WINDOW_STYLE);
    this.markerImg = MAP.MARKER_IMG;
    this.markerSize = new kakao.maps.Size(...MAP.MARKER_SIZE);
    this.markerImage = new kakao.maps.MarkerImage(
      this.markerImg,
      this.markerSize
    );
  }

  displayInfoWindow({ placeName, marker }) {
    this.infowindow.setContent(
      '<div style="padding:5px;font-size:12px;">' + placeName + "</div>"
    );
    this.infowindow.open(this.$map, marker);
  }

  displayMarker({ placeName, position, handleClickTarget }) {
    const marker = new kakao.maps.Marker({
      map: this.$map,
      position: position,
      title: placeName,
      image: this.markerImage,
    });

    kakao.maps.event.addListener(marker, "click", () => {
      this.displayInfoWindow({ placeName, marker });

      if (handleClickTarget) {
        handleClickTarget({ placeName, position });
      }
    });
  }
}
