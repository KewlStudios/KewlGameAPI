declare const assets: {
    images: ({
        bg: string;
        arrow?: undefined;
        chick?: undefined;
        logo?: undefined;
    } | {
        arrow: string;
        bg?: undefined;
        chick?: undefined;
        logo?: undefined;
    } | {
        chick: string;
        bg?: undefined;
        arrow?: undefined;
        logo?: undefined;
    } | {
        logo: string;
        bg?: undefined;
        arrow?: undefined;
        chick?: undefined;
    })[];
    animaitons: ({
        A: string[];
        B?: undefined;
        C?: undefined;
        D?: undefined;
    } | {
        B: string[];
        A?: undefined;
        C?: undefined;
        D?: undefined;
    } | {
        C: string[];
        A?: undefined;
        B?: undefined;
        D?: undefined;
    } | {
        D: string[];
        A?: undefined;
        B?: undefined;
        C?: undefined;
    })[];
};
export default assets;
