/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_KLAYTN_NETWORKID: string;
    readonly VITE_APP_POLYGON_NETWORKID: string;
    readonly VITE_APP_ETHEREUM_NETWORKID: string;
    readonly VITE_APP_NODE_ENV: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}