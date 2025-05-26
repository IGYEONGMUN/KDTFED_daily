/// <reference types="vite/client" />

// 환경변수 타입정의
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
}

interface importMeta {
  readonly env: ImportMetaEnv;
}
