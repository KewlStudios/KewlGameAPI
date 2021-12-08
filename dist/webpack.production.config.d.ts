export const cache: boolean;
export const entry: string;
export const mode: string;
export namespace output {
    const filename: string;
    const path: string;
    const sourceMapFilename: string;
    const publicPath: string;
}
export const devtool: string;
export namespace module {
    const rules: ({
        test: RegExp;
        loader: string;
        options: {
            name: string;
        };
        use?: undefined;
        exclude?: undefined;
    } | {
        test: RegExp;
        use: string;
        exclude: RegExp;
        loader?: undefined;
        options?: undefined;
    })[];
}
export namespace resolve {
    const roots: string[];
    const extensions: string[];
}
export namespace devServer {
    export namespace watchOptions {
        const poll: boolean;
        const ignored: string;
    }
    export const contentBase: string;
    export const compress: boolean;
    export const port: number;
    const publicPath_1: string;
    export { publicPath_1 as publicPath };
    export const hot: boolean;
}
export const plugins: any[];
