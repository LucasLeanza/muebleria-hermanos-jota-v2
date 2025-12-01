# Mueblería Hermanos Jota v2

![GitHub repo size](https://img.shields.io/github/repo-size/LucasLeanza/muebleria-hermanos-jota-v2)
![GitHub language count](https://img.shields.io/github/languages/count/LucasLeanza/muebleria-hermanos-jota-v2)
![GitHub last commit](https://img.shields.io/github/last-commit/LucasLeanza/muebleria-hermanos-jota-v2)

## 👥 Integrantes

* **Lucas Leanza** - Sistema de Autenticación (Backend)
* **Matias Banega** - Rutas Protegidas y Pedidos (Backend)
* **Alan Prado** - Context API y Estado Global (Frontend)
* **Karen Gerez** - Páginas de Autenticación y UI (Frontend)
* **Lautaro Appelhans** - Carrito, Pedidos y Despliegue (Frontend)

---

## 📋 Descripción del Proyecto

Proyecto **Full Stack MERN** desarrollado como **Proyecto Final** del curso de Desarrollo Web Full Stack (ITBA).

Plataforma de **e-commerce completa y funcional** con sistema de autenticación seguro, gestión de carrito de compras y proceso completo de pedidos. Los usuarios pueden registrarse, iniciar sesión, navegar productos, gestionar su carrito y realizar pedidos asociados a su cuenta.

**Características principales:**
- 🔐 Sistema de autenticación con JWT y bcrypt
- 🛒 Carrito de compras persistente con Context API
- 📦 Gestión completa de pedidos
- 🔒 Rutas protegidas (Backend y Frontend)
- 👤 Perfiles de usuario
- 🌐 Despliegue completo en producción

---

## 🚀 Tecnologías Utilizadas

### Frontend
* ⚛️ **React** + Vite
* 🧭 **React Router DOM** (con rutas protegidas)
* 🎯 **Context API** (AuthContext + CartContext)
* 🎨 CSS Modules
* 🌐 Fetch API

### Backend
* 🟢 **Node.js** + Express
* 🍃 **MongoDB Atlas** + Mongoose
* 🔐 **bcrypt** (hashing de contraseñas)
* 🎫 **JSON Web Tokens (JWT)** (autenticación)
* 🔒 Middleware de autorización
* 🔄 CORS
* 🌱 Dotenv

---

## 🧩 Estructura del Proyecto

```
muebleria-hermanos-jota-v2/
├── client/                    → Frontend con React + Vite
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Coleccion.jsx
│   │   │   ├── Esencia.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Principal.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── hooks/
│   │   │   └── useProducts.js
│   │   ├── pages/
│   │   │   ├── Carrito.jsx
│   │   │   ├── Catalogo.jsx
│   │   │   ├── Contacto.jsx
│   │   │   ├── CrearProducto.jsx
│   │   │   ├── DetalleProducto.jsx
│   │   │   ├── Inicio.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── MisPedidos.jsx
│   │   │   ├── Perfil.jsx
│   │   │   └── Register.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   → API REST con Express
│   ├── data/
│   ├── images/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── productos.controller.js
│   │   ├── middlewares/
│   │   │   ├── error-handler.js
│   │   │   ├── mongoose-error-handler.js
│   │   │   ├── mongoose-valid-id-handler.js
│   │   │   ├── not-found.js
│   │   │   └── verificarToken.js
│   │   ├── models/
│   │   │   ├── producto.model.js
│   │   │   ├── Usuario.js
│   │   │   └── Pedido.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   └── productos.routes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── db.js
│   ├── .env (no se sube al repo)
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
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
PORT=3000
MONGODB_URI=mongodb+srv://lucasagustinleanza_db_user:123@hermanosjotadb.soeatow.mongodb.net/muebleria_jota
JWT_SECRET=tu_super_secreto_aqui_cambialo_en_produccion
```

> ⚠️ **IMPORTANTE:** El `JWT_SECRET` debe ser una cadena aleatoria y segura. Para generar una:
> ```bash
> node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
> ```

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
# Backend (desde carpeta backend)
npm run dev

# Frontend (desde carpeta client)
npm run dev
```

**URLs locales:**
- 🔙 Backend: `http://localhost:3000`
- 💻 Frontend: `http://localhost:5173`

---

## 🗄️ API Backend - Documentación de Endpoints

### 🔓 Autenticación (Públicos)

| Método   | Endpoint              | Descripción                          | Body                                      |
| :------- | :-------------------- | :----------------------------------- | :---------------------------------------- |
| **POST** | `/api/auth/registro`  | Registrar nuevo usuario              | `{ nombre, email, password }`             |
| **POST** | `/api/auth/login`     | Iniciar sesión (devuelve JWT)        | `{ email, password }`                     |

**Respuesta exitosa (registro/login):**
```json
{
  "mensaje": "Usuario registrado exitosamente",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": "507f1f77bcf86cd799439011",
    "nombre": "Juan Pérez",
    "email": "juan@ejemplo.com"
  }
}
```

---

### 📦 Productos (Públicos)

| Método     | Endpoint             | Descripción                     |
| :--------- | :------------------- | :------------------------------ |
| **GET**    | `/api/productos`     | Obtener todos los productos     |
| **GET**    | `/api/productos/:id` | Obtener un producto por ID      |
| **POST**   | `/api/productos`     | Crear un nuevo producto         |
| **PUT**    | `/api/productos/:id` | Actualizar un producto          |
| **DELETE** | `/api/productos/:id` | Eliminar un producto            |

---

### 🔒 Rutas Protegidas (Requieren JWT)

| Método   | Endpoint              | Descripción                          | Headers                                  |
| :------- | :-------------------- | :----------------------------------- | :--------------------------------------- |
| **POST** | `/api/pedidos`        | Crear un pedido (usuario autenticado)| `Authorization: Bearer <token>`          |
| **GET**  | `/api/pedidos/mis-pedidos` | Ver pedidos del usuario         | `Authorization: Bearer <token>`          |
| **GET**  | `/api/perfil`         | Ver perfil del usuario               | `Authorization: Bearer <token>`          |

**Ejemplo de petición protegida:**
```bash
POST /api/pedidos
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "items": [
    {
      "producto": "507f1f77bcf86cd799439011",
      "cantidad": 2,
      "precio": 15000
    }
  ],
  "total": 30000
}
```

---

## 🗃️ Modelos de Datos

### Usuario
```javascript
{
  nombre: String,
  email: String (unique),
  password: String (hasheado con bcrypt),
  createdAt: Date,
  updatedAt: Date
}
```

### Producto
```javascript
{
  nombre: String (required),
  descripcion: String,
  precio: Number (required),
  imageURL: String
}
```

### Pedido
```javascript
{
  usuario: ObjectId (ref: 'Usuario'),
  items: [{
    producto: ObjectId (ref: 'Product'),
    nombre: String,
    cantidad: Number,
    precio: Number
  }],
  total: Number,
  estado: String (enum: ['pendiente', 'procesando', 'enviado', 'entregado']),
  fecha: Date
}
```

---

## 💻 Frontend - Características Principales

### 🔐 Sistema de Autenticación

**AuthContext** gestiona:
- Estado del usuario (`user`, `token`, `isAuthenticated`)
- Funciones: `login()`, `logout()`, `register()`
- Persistencia del token en `localStorage`
- Recuperación de sesión al recargar página

**Rutas Públicas:**
- `/` - Home
- `/productos` - Catálogo
- `/productos/:id` - Detalle de producto
- `/registro` - Formulario de registro
- `/login` - Formulario de login
- `/contacto` - Contacto

**Rutas Protegidas (requieren autenticación):**
- `/perfil` - Perfil del usuario
- `/mis-pedidos` - Historial de pedidos
- `/carrito` - Carrito de compras (botón finalizar solo si está autenticado)

### 🛒 Gestión del Carrito

**CartContext** gestiona:
- Estado del carrito (items, cantidades, total)
- Funciones: `addToCart()`, `removeFromCart()`, `updateQuantity()`, `clearCart()`
- Se limpia automáticamente después de crear un pedido

### 🎨 UI Condicional

El **Navbar** muestra opciones diferentes según el estado de autenticación:

**Usuario NO autenticado:**
- Login
- Registro

**Usuario autenticado:**
- Mi Perfil
- Mis Pedidos
- Carrito (con badge de cantidad)
- Logout

---

## 🔒 Seguridad Implementada

✅ **Contraseñas hasheadas** con bcrypt (salt rounds: 10)  
✅ **JWT con expiración** (7 días)  
✅ **Middleware de verificación** en rutas protegidas  
✅ **Validación de datos** en backend y frontend  
✅ **Variables sensibles** en `.env` (no subidas al repo)  
✅ **CORS configurado** con origins permitidos  
✅ **Nunca se devuelve el password** en respuestas de API  

---

## 🌐 Despliegue en Producción

| Servicio              | URL                                                                                                |
| :-------------------- | :------------------------------------------------------------------------------------------------- |
| **Frontend (Vercel)** | [https://muebleria-hermanos-jota-v2-iota.vercel.app/](https://muebleria-hermanos-jota-v2-iota.vercel.app/)     |
| **Backend (Render)**  | [https://muebleria-hermanos-jota-v2.onrender.com](https://muebleria-hermanos-jota-v2.onrender.com) |
| **Base de Datos**     | MongoDB Atlas (cluster en la nube)                                                                 |

### Configuración de Variables de Entorno en Producción

**Render (Backend):**
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=<secreto_generado>
PORT=3000
```

**Vercel (Frontend):**
```
VITE_API_URL=https://muebleria-hermanos-jota-v2.onrender.com
```

---

## 🧪 Pruebas con Thunder Client / Postman

### 1. Registrar un usuario
```http
POST http://localhost:3000/api/auth/registro
Content-Type: application/json

{
  "nombre": "Test User",
  "email": "test@test.com",
  "password": "123456"
}
```

### 2. Iniciar sesión
```http
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "test@test.com",
  "password": "123456"
}
```

### 3. Crear un pedido (con token)
```http
POST http://localhost:3000/api/pedidos
Authorization: Bearer <tu_token_aqui>
Content-Type: application/json

{
  "items": [...],
  "total": 50000
}
```
---

## 🎯 Objetivos Cumplidos

✅ Sistema de autenticación completo (registro + login)  
✅ Hashing seguro de contraseñas con bcrypt  
✅ Tokens JWT con expiración configurada  
✅ Middleware de autorización para rutas protegidas  
✅ Context API para estado global (Auth + Cart)  
✅ Rutas protegidas en frontend con `<ProtectedRoute>`  
✅ UI condicional según estado de autenticación  
✅ Gestión completa del carrito de compras  
✅ Sistema de pedidos asociados a usuarios  
✅ Despliegue completo (Frontend + Backend + DB)  
✅ Variables de entorno configuradas en producción  

---

## 📝 Notas del Desarrollo

### Sprint Final - División de Tareas

El proyecto se dividió en 5 áreas principales:

1. **Backend - Autenticación:** Sistema completo de JWT y bcrypt
2. **Backend - Rutas Protegidas:** Pedidos y endpoints seguros
3. **Frontend - Estado Global:** Context API (Auth + Cart)
4. **Frontend - UI de Auth:** Páginas de login/registro y navbar
5. **Frontend - Carrito y Deploy:** Proceso de compra y despliegue

---

## 🐛 Solución de Problemas Comunes

**Error: "No autorizado - Token no proporcionado"**
- Verificar que el header `Authorization` tenga el formato: `Bearer <token>`

**Error: "Token inválido o expirado"**
- Hacer login nuevamente para obtener un token válido

**Error de CORS**
- Verificar que la URL del frontend esté en la lista de `ACCEPTED_ORIGINS` del backend

**Base de datos no conecta**
- Verificar que `MONGODB_URI` en `.env` sea correcta
- Verificar IP whitelist en MongoDB Atlas (permitir conexiones desde cualquier IP: `0.0.0.0/0`)

---

## 📄 Licencia

Este proyecto es de carácter educativo, desarrollado para el curso de Desarrollo Web Full Stack del ITBA.

---

## 🙏 Agradecimientos

Agradecemos al equipo docente del ITBA por la guía durante todo el curso y por brindarnos las herramientas para desarrollar este proyecto Full Stack completo.
