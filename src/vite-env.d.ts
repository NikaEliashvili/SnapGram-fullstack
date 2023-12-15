/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APPWRITE_PROJECT_ID: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  env: ImportMetaEnv;
}
