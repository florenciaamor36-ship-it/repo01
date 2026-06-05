# Mi Agente Gemini

Este es un agente inteligente construido con Node.js, Express y la API de Google Gemini (modelo gemini-1.5-flash).

## Estructura del Proyecto

```
mi-agente-gemini/
├── config/             # Configuración de servicios externos (Gemini)
├── public/             # Archivos estáticos (HTML, CSS, JS)
├── routes/             # Definición de rutas de la API
├── services/           # Lógica de negocio y servicios (Gemini API)
├── utils/              # Funciones de ayuda y utilidades
├── .env                # Variables de entorno (No incluido en git)
├── .env.example        # Plantilla de variables de entorno
├── .gitignore          # Archivos ignorados por git
├── package.json        # Dependencias del proyecto
└── server.js           # Punto de entrada de la aplicación
```

## Requisitos

- Node.js (v18 o superior recomendado)
- Una API Key de Google Gemini

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura tus variables de entorno:
   - Copia `.env.example` a `.env`.
   - Agrega tu `GEMINI_API_KEY`.

## Uso

Para iniciar el servidor en modo producción:
```bash
npm start
```

Para iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.
