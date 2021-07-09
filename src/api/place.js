import axios from "axios";

export const addPlace = async (selectedPlace) => {
    try {
        const {
            data: { success, err },
        } = await axios.post("/places", {
            name: selectedPlace.name,
            latlng: {
                x: selectedPlace.x,
                y: selectedPlace.y,
            },
        });
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert("이미 등록된 음식점입니다.");
                    break;
            }
        }
        return;
    } catch (e) {
        console.log(e);
    }
};
