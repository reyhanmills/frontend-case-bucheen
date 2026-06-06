import { defineConfig } from 'vite' //vite kendi yardımcı fonk
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins:[
    react(),
    tailwindcss(),

  ]
}
)