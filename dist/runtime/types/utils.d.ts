interface Utils {
    alpha: (text: string) => string,
    numeric: (text: string) => string,
    alphanumeric: (text: string) => string,
    ucwords: (text: string, normalize?: boolean, strict?: boolean) => string,
    ucfirst: (text: string, normalize?: boolean) => string,
    currency: (text: string, separator?: string) => string,
    cleanMap: (self: any, key: any) => void,
    randInt: (min: number, max: number) => number,
    randString: (length?: number, withSpecialChar?: boolean) => string,
    formatBytes: (bytes: number, decimals?: number) => string,
    on: (condition: boolean, then: any, or?: any) => any,
    copy: (value: any, message?: string) => void,
    downloadFile: (url: string, filename?: string) => Promise<void>,
    dateFormat: (date: string | Date, format: string) => string,
}

declare module '#app' {
    interface NuxtApp {
        $utils: Utils;
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $utils: Utils;
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $utils: Utils;
    }
}

export default Utils