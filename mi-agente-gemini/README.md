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

## Solución de Problemas

### Error: API has not been used in project before or it is disabled
Si recibes un error indicando que la API está desactivada, debes habilitarla en la consola de Google Cloud:
1. Ve a [Google Cloud Console](https://console.developers.google.com/apis/api/generativelanguage.googleapis.com/overview).
2. Asegúrate de tener seleccionado el proyecto correcto.
3. Haz clic en el botón **Habilitar**.
4. Espera unos minutos y vuelve a intentar.
