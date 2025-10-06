# Mueblería Hermanos Jota v2

![GitHub repo size](https://img.shields.io/github/repo-size/LucasLeanza/muebleria-hermanos-jota-v2)
![GitHub language count](https://img.shields.io/github/languages/count/LucasLeanza/muebleria-hermanos-jota-v2)
![GitHub last commit](https://img.shields.io/github/last-commit/LucasLeanza/muebleria-hermanos-jota-v2)

## Integrantes

* Lucas Leanza
* Alan Prado
* Lautaro Appelhans
* Karen Gerez
* Matias Banega

## Descripción del Proyecto

**Mueblería Hermanos Jota v2** es una aplicación web para gestionar un catálogo de muebles, permitiendo a los usuarios visualizar productos, agregar al carrito y realizar compras en línea.
La aplicación está dividida en dos partes principales:

* **Frontend (Cliente)**: Interfaz construida con React.
* **Backend (Servidor)**: API RESTful que maneja productos y lógica del carrito.

La separación frontend/backend facilita mantenimiento, escalabilidad y pruebas independientes.

---

## Arquitectura y Decisiones Técnicas

* **Frontend**: React, gestión de estado con contextos, comunicación con la API mediante `fetch`.
* **Backend**: Node.js + Express, con endpoints REST para productos y carrito.
* **Estructura de carpetas clara**: `client/` y `backend/`.
* **Decisión de diseño**: Mantener lógica de negocio en el backend y dejar la UI y filtrado en frontend.

---

## Estructura del Proyecto

```
muebleria-hermanos-jota-v2/
├── backend/                 # Servidor Express
│   ├── src/                 # Código fuente
│   │   ├── controllers/     # Controladores de rutas
│   │   ├── models/          # Modelos de datos
│   │   ├── routes/          # Rutas API
│   │   └── server.js        # Configuración del servidor
├── client/                  # Aplicación React
│   ├── public/              # Archivos públicos
│   └── src/                 # Código fuente
│       ├── components/      # Componentes reutilizables
│       ├── context/          # Contextos de React
│       ├── pages/           # Páginas de la aplicación
│       ├── App.js           # Componente principal
│       └── index.js         # Punto de entrada
├── .gitignore
└── README.md


---

## Instalación Rápida

### Clonar el repositorio

```bash
git clone https://github.com/LucasLeanza/muebleria-hermanos-jota-v2.git
cd muebleria-hermanos-jota-v2
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Servidor corriendo en `http://localhost:3000`.

### Frontend

```bash
cd ../client
npm install
npm run dev
```

App corriendo en `http://localhost:3001`.

---


## Contribuciones

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature/nueva-caracteristica`.
3. Haz tus cambios y commit: `git commit -am 'Añadir nueva característica'`.
4. Push a tu rama: `git push origin feature/nueva-caracteristica`.
5. Abre un Pull Request con tus cambios.

---

## Licencia

Este proyecto está bajo licencia MIT.
