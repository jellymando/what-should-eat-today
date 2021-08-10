declare global {
    interface Window {
        kakao: any;
    }
}

export interface MemberType {
    _id?: string;
    profileImage: string;
    name: string;
    keywords: string[];
};

export interface PlaceType {
    _id: string;
    name: string;
    latlng: {
        x: number;
        y: number;
    };
    keywords: string[];
};

export interface KeywordType {
    _id: string;
    title: string;
};
