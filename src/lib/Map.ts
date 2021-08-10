/* eslint-disable no-undef */
import { MAP } from "constants/map";

export default class Map {
    private center: { LatLng: number; longitude: number };
    private options: { center: { LatLng: number; longitude: number }; level: number };
    private $map: Window["kakao"];
    private zoomControl: any;
    private infowindow: any;
    private markers: any[];
    private markerImg: string;
    private markerSize: any;
    private markerImage: any;

    constructor() {
        this.center = new window.kakao.maps.LatLng(MAP.CENTER.Y, MAP.CENTER.X);
        this.options = {
            center: this.center,
            level: 6,
        };
        this.$map = {};
        this.zoomControl = new window.kakao.maps.ZoomControl();
        this.infowindow = new window.kakao.maps.InfoWindow(MAP.INFO_WINDOW_STYLE);
        this.markers = [];
        this.markerImg = MAP.MARKER_IMG;
        this.markerSize = new window.kakao.maps.Size(...MAP.MARKER_SIZE);
        this.markerImage = new window.kakao.maps.MarkerImage(this.markerImg, this.markerSize);
    }

    get bounds() {
        return this.$map.getBounds();
    }

    setRef(ref: HTMLElement) {
        this.$map = new window.kakao.maps.Map(ref, this.options);
        this.$map.addControl(this.zoomControl, window.kakao.maps.ControlPosition.TOPLEFT);
    }

    setBounds(bounds: any) {
        this.$map.setBounds(bounds);
    }

    displayInfoWindow({ placeName, marker }: { placeName: string; marker: any }) {
        this.infowindow.setContent('<div style="padding:5px;font-size:12px;">' + placeName + "</div>");
        this.infowindow.open(this.$map, marker);
    }

    displayMarker({
        _id,
        placeName,
        position,
        handleClickTarget,
        isDisplay,
    }: {
        _id: string;
        placeName: string;
        position: any;
        handleClickTarget?: ({ _id, placeName, position }: { _id: string; placeName: string; position: any }) => void;
        isDisplay?: boolean;
    }) {
        const marker = new window.kakao.maps.Marker({
            map: this.$map,
            position: position,
            title: placeName,
            image: this.markerImage,
        });

        window.kakao.maps.event.addListener(marker, "click", () => {
            this.displayInfoWindow({ placeName, marker });
            if (handleClickTarget) handleClickTarget({ _id, placeName, position });
        });

        if (isDisplay) {
            if (handleClickTarget) handleClickTarget({ _id, placeName, position });
            this.displayInfoWindow({ placeName, marker });
        }

        this.markers.push(marker);
    }

    clear() {
        for (const marker of this.markers) {
            marker.setMap(null);
        }
        this.markers = [];
    }
}
