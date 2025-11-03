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

Proyecto **Full Stack MERN** desarrollado para el **Sprint 5 y 6** del curso de Desarrollo Web Full Stack (ITBA).

El objetivo es implementar un **catálogo de productos dinámico** con base de datos en **MongoDB Atlas** y una **API REST Express** desplegada en **Render**, consumida por un **frontend React** desplegado en **Vercel**.

---

## 🚀 Tecnologías Utilizadas

**Frontend**

* ⚛️ React + Vite
* 🧭 React Router DOM
* 🎨 CSS Modules
* 🌐 Fetch API

**Backend**

* 🟢 Node.js + Express
* 🍃 MongoDB Atlas + Mongoose
* 🔐 Dotenv
* 🔄 CORS

---

## 🧩 Estructura del Proyecto

```
muebleria-hermanos-jota-v2/
├── client/        → Frontend con React + Vite
│   ├── src/
│   │   ├── pages/ → Home, Productos, DetalleProducto, Contacto, CrearProducto
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
│
├── backend/       → API REST con Express y Mongoose
│   ├── models/Product.js
│   ├── routes/productRoutes.js
│   ├── controllers/productController.js
│   ├── db.js
│   ├── server.js
│   └── .env (no se sube al repo)
│
└── README.md
```

---

## ⚙️ Configuración Local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/LucasLeanza/muebleria-hermanos-jota-v2.git
cd muebleria-hermanos-jota-v2
```

### 2️⃣ Configurar variables de entorno

Crear un archivo `.env` dentro de la carpeta **/backend** con el siguiente contenido:

```env
PORT=4000
MONGO_URI=mongodb+srv://lucasagustinleanza_db_user:123@hermanosjotadb.soeatow.mongodb.net/muebleria_jota
```

### 3️⃣ Instalar dependencias

```bash
# Backend
cd backend
npm install

# Frontend
cd ../client
npm install
```

### 4️⃣ Ejecutar en modo desarrollo

```bash
# Backend
npm run dev

# Frontend
npm run dev
```

Por defecto el servidor corre en
👉 `http://localhost:4000`
y el cliente en
👉 `http://localhost:5173`

---

## 🗄️ Requisitos del Backend (API)

### 🔌 Conexión a Base de Datos

* Conexión a **MongoDB Atlas** mediante variable de entorno (`MONGO_URI`) guardada en `.env`.

### 📦 Modelo de Datos (Product)

```js
const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  stock: Number,
  imagenUrl: String
});
```

### 🧠 CRUD Completo de Productos

| Método     | Endpoint             | Descripción                     |
| :--------- | :------------------- | :------------------------------ |
| **GET**    | `/api/productos`     | Devuelve todos los productos    |
| **GET**    | `/api/productos/:id` | Devuelve un producto por su ID  |
| **POST**   | `/api/productos`     | Crea un nuevo producto          |
| **PUT**    | `/api/productos/:id` | Actualiza un producto existente |
| **DELETE** | `/api/productos/:id` | Elimina un producto por ID      |

---

## 💻 Requisitos del Frontend (React)

### 🧭 Enrutamiento con React Router

Rutas principales:

* `/` → Página principal
* `/productos` → Catálogo (fetch a la API `/api/productos`)
* `/productos/:id` → Detalle dinámico (usa `useParams` + fetch)
* `/contacto` → Formulario de contacto
* `/admin/crear-producto` → Formulario de creación de productos

### 🔁 Consumo de la API Real

* Manejo de **estado de carga y error**.
* Peticiones con `fetch` hacia el backend desplegado en Render.

### 🧾 Página de Detalle Dinámica

* Usa `useParams()` para obtener el ID desde la URL.
* Realiza `GET /api/productos/:id` y muestra los detalles del producto.

### 🧩 Formulario de Creación

* Controlado con React.
* Envía un `POST` a `/api/productos`.
* Tras crear un producto, usa `useNavigate()` para redirigir al catálogo o detalle.

### 🗑️ Funcionalidad de Borrado

* En la página de detalle hay un botón **"Eliminar"**.
* Al hacer clic, pide confirmación (`window.confirm()`) y realiza un `DELETE /api/productos/:id`.
* Tras borrarlo, redirige al catálogo.

---

## 🌐 Deploys

| Servicio              | URL                                                                                                |
| :-------------------- | :------------------------------------------------------------------------------------------------- |
| **Frontend (Vercel)** | [https://muebleria-hermanos-jota-v2-iota.vercel.app/](https://muebleria-hermanos-jota-v2-iota.vercel.app/)     |
| **Backend (Render)**  | [https://muebleria-hermanos-jota-v2.onrender.com](https://muebleria-hermanos-jota-v2.onrender.com) |

**Ejemplo de endpoint activo:**

```
GET https://muebleria-hermanos-jota-v2.onrender.com/api/productos
```

---