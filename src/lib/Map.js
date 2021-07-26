/* eslint-disable no-undef */
import { MAP } from "constants/map";

export default class Map {
    constructor({ ref }) {
        this.center = new kakao.maps.LatLng(MAP.CENTER.Y, MAP.CENTER.X);
        this.options = {
            center: this.center,
            level: 6,
        };
        this.$map = new kakao.maps.Map(ref, this.options);
        this.zoomControl = new kakao.maps.ZoomControl();
        this.bounds = this.$map.getBounds();
        this.infowindow = new kakao.maps.InfoWindow(MAP.INFO_WINDOW_STYLE);
        this.markers = [];
        this.markerImg = MAP.MARKER_IMG;
        this.markerSize = new kakao.maps.Size(...MAP.MARKER_SIZE);
        this.markerImage = new kakao.maps.MarkerImage(this.markerImg, this.markerSize);
        this.$map.addControl(this.zoomControl, kakao.maps.ControlPosition.TOPLEFT);
    }

    displayInfoWindow({ placeName, marker }) {
        this.infowindow.setContent('<div style="padding:5px;font-size:12px;">' + placeName + "</div>");
        this.infowindow.open(this.$map, marker);
    }

    displayMarker({ placeName, position, handleClickTarget, isDisplay }) {
        const marker = new kakao.maps.Marker({
            map: this.$map,
            position: position,
            title: placeName,
            image: this.markerImage,
        });

        kakao.maps.event.addListener(marker, "click", () => {
            this.displayInfoWindow({ placeName, marker });
            if (handleClickTarget) handleClickTarget({ placeName, position });
        });

        if (isDisplay) {
            if (handleClickTarget) handleClickTarget({ placeName, position });
            this.displayInfoWindow({ placeName, marker });
        }

        this.markers.push(marker);
    }

    closeInfoWindow() {
        for (const marker of this.markers) {
            marker.setMap(null);
        }
        this.markers = [];
    }
}
