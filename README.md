# Mi Agente Gemini

Este es un agente inteligente construido con Node.js, Express y la API de Google Gemini. Soporta tanto ejecución en servidor (Backend) como ejecución directa en el navegador (Client-Side).

## Estructura del Proyecto

```
mi-agente-gemini/
├── config/             # Configuración de servicios externos (Gemini)
├── public/             # Archivos estáticos (CSS, JS cliente)
├── routes/             # Definición de rutas de la API
├── services/           # Lógica de negocio (Gemini API Server)
├── utils/              # Funciones de ayuda y utilidades
├── .env.example        # Plantilla de variables de entorno
├── .gitignore          # Archivos ignorados por git
├── index.html          # Punto de entrada (Frontend)
├── package.json        # Dependencias del proyecto (Backend)
└── server.js           # Servidor Express (Backend)
```

## Modos de Uso

### 1. Modo Servidor (Full-Stack)
Ideal para despliegues en servidores donde Node.js está disponible.
- Instala dependencias: `npm install`
- Configura `.env` con tu `GEMINI_API_KEY`.
- Inicia el servidor: `npm start`.

### 2. Modo Cliente (Estático / GitHub Pages)
Ideal para despliegues en GitHub Pages o si el servidor no está disponible.
- Abre `index.html` en tu navegador.
- Haz clic en el icono de engranaje (⚙️).
- Ingresa tu Gemini API Key. Esta se guardará de forma segura en tu navegador (`localStorage`).

## Requisitos
- Una API Key de Google Gemini. Puedes obtenerla en [Google AI Studio](https://aistudio.google.com/).

## Solución de Problemas

### Error de conexión con el servidor
Si ves este mensaje, es probable que la aplicación esté corriendo como un sitio estático. Simplemente configura tu API Key en los ajustes (⚙️) para habilitar el **Modo Cliente**.
