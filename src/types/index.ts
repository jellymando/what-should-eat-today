declare global {
    interface Window {
        kakao: any;
    }
}

export type MemberType = {
    _id?: string;
    profileImage: string;
    name: string;
    keywords: string[];
};

export type PlaceType = {
    _id: string;
    name: string;
    latlng: {
        x: number;
        y: number;
    };
    keywords: string[];
};

export type KeywordType = {
    _id: string;
    title: string;
};
