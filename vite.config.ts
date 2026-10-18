import { defineConfig } from 'vite';
export default defineConfig({build:{emptyOutDir:false,rolldownOptions:{input:{main:'index.html',local:'local.html'}}}});
