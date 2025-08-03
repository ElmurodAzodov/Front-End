
**Modul 1: React Router'ga Kirish va Asosiy Tushunchalar**

Bu modulda siz **React Router**'ning nima ekanligi, qanday ishlashi va uni loyihaga qanday qilib zamonaviy usulda qo‘shishni o‘rganasiz.

---

## 📌 1.1 React Router nima?

**React Router** — bu **SPA (Single Page Application)** dasturlar uchun marshrutlash (routing) kutubxonasi. U foydalanuvchini sahifalar orasida sahifani qayta yuklamasdan olib o‘tadi.

Misol: `facebook.com/messages` sahifasi — bu boshqa komponent, lekin sayt yangilanmaydi, faqat kontent almashadi.

---

## 🌍 1.2 SPA (Single Page Application) tushunchasi

SPA — foydalanuvchi sahifalar orasida o'tganida butun saytni emas, faqat kerakli qismini yangilaydi.

👉 Foyda:

* Tez ishlaydi
* Server yukini kamaytiradi
* Yaxshi UX (user experience)

---

## ⚙️ 1.3 React Router versiyasi (2025)

Bugungi kunda **React Router v7.1** yoki undan yuqorisi ishlatilmoqda. Bu versiyada:

* `Routes` va `Route` – **yangi sintaksis**
* `loader`, `action`, `useNavigation` kabi hooklar qo‘shilgan
* `<Outlet>` va `<Navigate>` ishlatiladi
* SSR va code splitting to‘liq qo‘llab-quvvatlanadi

---

## 📦 1.4 O‘rnatish

```bash
npm install react-router-dom
# yoki
yarn add react-router-dom
```

✅ Bu bilan sizga kerakli komponentlar (`Routes`, `Route`, `BrowserRouter`, `Link` va hokazo) foydalanishga tayyor bo‘ladi.

---

## 🧱 1.5 Loyihani sozlash

Misol uchun oddiy loyiha tuzaylik:

```jsx
// index.js yoki main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

```jsx
// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

---

## 🧠 Yodingizda bo‘lsin:

| Komponent         | Vazifasi                                                 |
| ----------------- | -------------------------------------------------------- |
| `<BrowserRouter>` | Bosh marshrut konteyneri, URL'ni boshqaradi              |
| `<Routes>`        | Routing ichidagi barcha `<Route>` larni o'z ichiga oladi |
| `<Route>`         | Har bir sahifani aniqlovchi komponent                    |
| `element={}`      | Ko‘rsatiladigan sahifani aniqlaydi                       |

---

## ✅ Modul yakuni uchun mashq:

1. React loyihasini yaratib, `react-router-dom` o‘rnating.
2. `Home` va `About` komponentlarini yaratib, marshrut tuzing.
3. Brauzerda `/` va `/about` sahifalarga o‘tib ko‘ring.

---
---

# 🔁 **Modul 2: `<Routes>` va `<Route>` Komponentlari (2025 uslubi bilan)**

Bu modulda siz `react-router-dom`ning **asosiy tarkibiy qismlari bo‘lgan `<Routes>` va `<Route>`** komponentlari bilan chuqur tanishasiz.

---

## 📦 2.1 `<Routes>` va `<Route>` nima?

* `<Routes>` — routing’lar to‘plami (faqat bitta o‘zgaruvchi element chiqaradi)
* `<Route>` — har bir sahifaga mos keladigan marshrut

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

## 📌 2.2 `element` props — yangi yondashuv (v6+)

### Eski yondashuv (v5):

```jsx
<Route path="/" component={Home} />
```

### Yangi yondashuv (v6+):

```jsx
<Route path="/" element={<Home />} />
```

➡️ `element={<Component />}` — bu **JSX** bo‘lishi kerak. `component={}` eskirgan va ishlamaydi.

---

## 🧩 2.3 Nested (Ichki) Routing

React Router’da sahifalar ichida sahifalar bo‘lishi mumkin. Misol uchun:

```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="products" element={<Products />} />
  </Route>
</Routes>
```

Bu yerda:

* `MainLayout` doimo ko‘rinadi (masalan, Navbar, Footer)
* `<Outlet />` joylashtirilgan komponentlar ichida turli sahifalar almashtiriladi

---

## 📥 2.4 Index Route nima?

`index` — bu `path="/"` o‘rnini bosadi ichki route’larda.

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />  // bu "/"
  <Route path="about" element={<About />} /> // bu "/about"
</Route>
```

---

## ❌ 2.5 Fallback Route: `*`

Agar foydalanuvchi mavjud bo‘lmagan manzilga o‘tsa, 404 sahifa ko‘rsatish kerak:

```jsx
<Route path="*" element={<NotFound />} />
```

Bu `catch-all` route hisoblanadi.

---

## ✅ To‘liq misol:

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
```

```jsx
// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>
);
```

---

## 🧠 Yodingizda bo‘lsin:

| Yozuv                     | Ma’no                                 |
| ------------------------- | ------------------------------------- |
| `element={<Component />}` | JSX tarzida komponent ko‘rsatadi      |
| `index`                   | Default sahifa                        |
| `*`                       | 404 yoki fallback sahifa              |
| `<Outlet />`              | Ichki sahifalarni joylashtirish uchun |

---

## 📝 Amaliy Mashqlar:

1. `Layout` yaratib, Navbar joylashtiring.
2. Ichki sahifalar bilan `Outlet` orqali ishlang.
3. `/`, `/about`, va notanish manzillar uchun `<NotFound />` qo‘shing.

---
---

# 📁 **Modul 3: Foydalanuvchi Interfeysi va Navigatsiya (UI Routing)**

Bu modulda siz foydalanuvchini sahifalar orasida olib o‘tish uchun ishlatiladigan **Link, NavLink, useNavigate, useLocation** kabi komponent va hook’lar bilan tanishasiz.

---

## 🔗 3.1 `<Link>` — Oddiy yo‘naluvchi tugma

`<a href="">` elementidan farqli ravishda, sahifani **yangilamaydi**. Bu SPA uchun to‘g‘ri yondashuv.

```jsx
import { Link } from "react-router-dom";

<Link to="/">Bosh sahifa</Link>
<Link to="/about">Biz haqimizda</Link>
```

---

## 🧭 3.2 `<NavLink>` — Aktiv sahifani aniqlovchi link

Foydalanuvchi ayni sahifada turganini vizual ko‘rsatish uchun ishlatiladi.

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
  Bosh sahifa
</NavLink>
```

✅ `isActive` orqali hozirgi sahifaga mos stil beriladi.

---

## 🔄 3.3 `useNavigate()` — Dasturiy navigatsiya

Komponent ichida kod orqali boshqa sahifaga yo‘naltirish uchun ishlatiladi.

```jsx
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Auth muvaffaqiyatli bo‘lsa:
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
};
```

---

## 📍 3.4 `useLocation()` — Joriy URL haqida ma’lumot

```jsx
import { useLocation } from "react-router-dom";

const CurrentRoute = () => {
  const location = useLocation();

  return <p>Hozirgi URL: {location.pathname}</p>;
};
```

✅ `location.pathname`, `location.search`, `location.state` va boshqa qiymatlarni beradi.

---

## 📘 3.5 Misol: Navbar komponenti

```jsx
// components/Navbar.jsx
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
```

```css
/* style.css */
.active {
  color: blue;
  font-weight: bold;
  border-bottom: 2px solid blue;
}
```

---

## 🧠 Yodingizda bo‘lsin:

| API             | Vazifasi                         |
| --------------- | -------------------------------- |
| `<Link to="">`  | Sahifalar orasida o‘tish         |
| `<NavLink>`     | Faol sahifaga stil berish        |
| `useNavigate()` | Kod orqali sahifani almashtirish |
| `useLocation()` | URL haqida ma’lumot olish        |

---

## 🛠️ Amaliy mashq:

1. Navbar yarating va sahifalar orasida `<Link>` yoki `<NavLink>` bilan yurib ko‘ring.
2. Login sahifasi yarating va `useNavigate` orqali boshqa sahifaga yo‘naltiring.
3. `useLocation` orqali joriy sahifa nomini chiqaruvchi komponent yozing.

---
---

# 🔒 **Modul 4: Auth Router – Login, Logout, va Protected Routes (Himoyalangan sahifalar)**

Ushbu modulda siz foydalanuvchining **kirgan yoki kirmagan holati**ga qarab sahifalarni ko‘rsatish, marshrutlarni himoyalash va foydalanuvchini yo‘naltirish texnikalarini o‘rganasiz.

---

## 🧠 4.1 Muammo: Har kim `/dashboard` sahifaga kira olmasligi kerak!

Shuning uchun biz:

* **Public routes**: Barchaga ochiq sahifalar (`/`, `/login`)
* **Private routes**: Faqat kirgan foydalanuvchiga (`/dashboard`, `/admin`)

---

## 🧱 4.2 Avval: Auth holatini saqlash

**Minimal auth context/state yaratamiz:**

```jsx
// authContext.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```

```jsx
// index.js
import { AuthProvider } from "./authContext";

root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
```

---

## 🔐 4.3 ProtectedRoute komponenti

```jsx
// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
```

---

## 🧪 4.4 Route’larda qo‘llash

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />
</Routes>
```

---

## ✅ 4.5 Login/Logout amaliyoti

```jsx
// pages/Login.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login("Elmurod");
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
};
```

```jsx
// components/Dashboard.jsx
import { useAuth } from "../authContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <h2>Salom, {user.name}</h2>
      <button onClick={logout}>Chiqish</button>
    </div>
  );
};
```

---

## 🎯 Bonus: PublicRoute komponenti

Agar foydalanuvchi login bo‘lsa, uni `/dashboard`ga avtomatik yo‘naltirish:

```jsx
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? <Navigate to="/dashboard" /> : children;
};
```

---

## 🧠 Yodingizda bo‘lsin:

| Komponent        | Vazifasi                                     |
| ---------------- | -------------------------------------------- |
| `ProtectedRoute` | Faqat login qilingan foydalanuvchilar kiradi |
| `PublicRoute`    | Faqat login qilmaganlar ko‘radi              |
| `useAuth()`      | Login/logout va foydalanuvchini tekshiradi   |
| `Navigate`       | URL’ga avtomatik yo‘naltiradi                |

---

## 📝 Amaliy mashq:

1. AuthContext yozing va butun app’ga joylashtiring.
2. `ProtectedRoute` va `PublicRoute` komponentlarini yozing.
3. Login va Dashboard sahifalari yaratib, marshrutlarni boshqaring.

---
---

# ⚙️ **Modul 5: Dynamic Routing va URL Params (2025)**

Bu modul sizga **dinamik sahifalar**, **URL parametrlari**, va **query string** lar bilan ishlashni o‘rgatadi. Bu texnikalar mahsulot sahifalari, foydalanuvchi profillari va qidiruv tizimlarida keng qo‘llaniladi.

---

## 🔢 5.1 Dynamic Route (`:param`) nima?

Siz URL’ga o‘zgaruvchan qiymat berishingiz mumkin:

```jsx
<Route path="/users/:id" element={<UserProfile />} />
```

✅ `/users/23` — bu yerda `23` bu `id` bo‘ladi.

---

## 🧠 5.2 `useParams()` hook

Dinamik URL’dan qiymatni olish uchun ishlatiladi:

```jsx
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  return <h2>Foydalanuvchi ID: {id}</h2>;
};
```

📌 `useParams()` natijasi — **object**: `{ id: "23" }`

---

## 🧭 5.3 Nested params

```jsx
<Route path="/users/:userId/posts/:postId" element={<Post />} />
```

```jsx
const { userId, postId } = useParams();
```

---

## ❓ 5.4 Optional param?

React Router’da `:id?` degan optional param yo‘q — buning o‘rniga `index` route yoki `if` bilan shart ishlatiladi.

Misol:

```jsx
<Route path="/search" element={<SearchPage />} />
```

---

## 🔍 5.5 Query string bilan ishlash – `useSearchParams()`

URL: `https://site.uz/search?q=react&page=2`

```jsx
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q");       // "react"
  const page = searchParams.get("page"); // "2"

  return (
    <>
      <p>Qidiruv: {q}</p>
      <p>Sahifa: {page}</p>
    </>
  );
};
```

---

## 🔄 5.6 Query string’ni o‘zgartirish

```jsx
const updateSearch = () => {
  setSearchParams({ q: "router", page: "1" });
};
```

✅ Sahifa yangilanmaydi, lekin URL o‘zgaradi.

---

## 💡 5.7 Real loyiha misoli

```jsx
// Route
<Route path="/products/:slug" element={<ProductDetail />} />
```

```jsx
// ProductDetail.jsx
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { slug } = useParams(); // "iphone-14-pro"
  return <h1>Mahsulot: {slug.replace("-", " ")}</h1>;
};
```

---

## 🧠 Yodingizda bo‘lsin:

| Hook                | Maqsadi                                     |
| ------------------- | ------------------------------------------- |
| `useParams()`       | URL parametrlarini olish (`:id`, `:slug`)   |
| `useSearchParams()` | Query string lar bilan ishlash (`?q=react`) |

---

## 🛠️ Amaliy mashq:

1. `:id` bilan profil sahifasi yarating (`/users/:id`)
2. `useSearchParams` yordamida `/search?q=...` sahifasida natijalarni chiqaradigan komponent yozing.
3. Nested route bilan `/users/:userId/posts/:postId` sahifa yaratib ko‘ring.

---
---

# 📐 **Modul 6: Layouts, `<Outlet>` va Reuse (2025 zamonaviy uslubda)**

Bu modul sizga murakkab loyihalarda **umumiy dizayn (layout)** va **nested sahifalar**ni boshqarish uchun kerak bo‘ladigan barcha texnikalarni o‘rgatadi.

---

## 🧱 6.1 Layout (tashqi tuzilma) nima?

Layout — barcha sahifalarda **umumiy** ko‘rinadigan qismlar:

* Navbar
* Sidebar
* Footer
* Foydalanuvchi paneli

Masalan: `/`, `/about`, `/products` barchasi bitta `<MainLayout />` da ishlashi mumkin.

---

## 🧪 6.2 `<Outlet />` — Nested sahifani joylashtirish

`<Outlet />` bu joyda **ichki sahifa** joylashtiriladi.

```jsx
// MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
```

---

## 🔁 6.3 Nested routing bilan ishlatish

```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="products" element={<Products />} />
  </Route>
</Routes>
```

✅ `MainLayout` doim ko‘rinadi, `Home`, `About`, `Products` esa `<Outlet />` joyida chiqadi.

---

## 🔄 6.4 Multiple Layouts

Ba'zida sizda **bir nechta layout** bo‘ladi:

* `MainLayout` → umumiy sayt
* `AdminLayout` → admin panel
* `AuthLayout` → login/ro‘yxatdan o‘tish sahifalari

```jsx
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>

  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<AdminDashboard />} />
    <Route path="users" element={<AdminUsers />} />
  </Route>
</Routes>
```

---

## 📤 6.5 `useOutletContext()` — Layout → Page kontekst uzatish

Agar layout’dan sahifalarga qiymat uzatmoqchi bo‘lsangiz:

```jsx
// Layout
<Outlet context={{ user }} />
```

```jsx
// Sahifa
const { user } = useOutletContext();
```

---

## 💡 Real Hayot Misoli: Blog loyihasi

```jsx
<Route path="/" element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path="blog" element={<BlogLayout />}>
    <Route index element={<AllPosts />} />
    <Route path=":slug" element={<PostDetail />} />
  </Route>
</Route>
```

---

## 🧠 Yodingizda bo‘lsin:

| Texnika              | Maqsadi                                                       |
| -------------------- | ------------------------------------------------------------- |
| `<Outlet />`         | Ichki sahifani chiqarish                                      |
| Layout               | Navbar, footer kabi umumiy qismlar uchun                      |
| `useOutletContext()` | Layout → sahifa kontekst uzatadi                              |
| Nested Layout        | Har bir yo‘nalish uchun alohida strukturasi bo‘lgan layoutlar |

---

## 🛠️ Amaliy mashq:

1. `MainLayout` komponentini yarating va barcha asosiy sahifalarni `<Outlet />` bilan joylashtiring.
2. `AdminLayout` va `AuthLayout` qo‘shib, strukturalangan routing qiling.
3. `useOutletContext()` orqali foydalanuvchi yoki sozlamalarni sahifaga uzating.

---
---

# 🧾 **Modul 7: Data Loading, Form Actions va Error Handling (v7+)**

Ushbu modul sizga **React Router v7.1+** da kiritilgan **`loader`**, **`action`**, va **`errorElement`** imkoniyatlari bilan tanishtiradi.

---

## 📦 7.1 `loader` funksiyasi — marshrutga ma’lumot yuklash

Har bir `<Route>` uchun siz serverdan yoki API’dan **ma’lumot oldindan yuklashingiz** mumkin.

```jsx
<Route
  path="/users"
  element={<Users />}
  loader={async () => {
    const res = await fetch("/api/users");
    return res.json();
  }}
/>
```

---

## 🧠 7.2 `useLoaderData()` — Yuklangan ma’lumotni olish

```jsx
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData(); // loader'dan kelgan data
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
};
```

✅ Ma’lumot yuklash komponent ichida emas, **routing qatlamida** bo‘ladi — bu SEO va performance uchun foydali.

---

## 📝 7.3 `action` funksiyasi — Form yuborishni boshqarish

Siz POST/PUT/DELETE kabi amallarni `action` orqali bajarishingiz mumkin:

```jsx
<Route
  path="/contact"
  element={<ContactForm />}
  action={async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return null;
  }}
/>
```

```jsx
import { Form } from "react-router-dom";

const ContactForm = () => (
  <Form method="post">
    <input name="email" type="email" />
    <textarea name="message" />
    <button type="submit">Yuborish</button>
  </Form>
);
```

✅ `Form` komponenti avtomatik `action` funksiyasiga ulanadi.

---

## 💥 7.4 Error handling: `errorElement`

Agar `loader` yoki `action` xatoga uchrasa, siz alohida sahifa ko‘rsatishingiz mumkin.

```jsx
<Route
  path="/users"
  element={<Users />}
  loader={...}
  errorElement={<ErrorPage />}
/>
```

```jsx
// ErrorPage.jsx
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return <p>Xatolik yuz berdi: {error.message}</p>;
};
```

---

## 🛠 7.5 Marshrutni ob'ekt sifatida belgilash (createBrowserRouter)

```jsx
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "contact",
        element: <ContactForm />,
        action: contactAction,
      },
      {
        path: "users",
        element: <Users />,
        loader: usersLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

<RouterProvider router={router} />;
```

✅ Bu professional yondashuv hisoblanadi.

---

## 🧠 Yodingizda bo‘lsin:

| API               | Maqsadi                                   |
| ----------------- | ----------------------------------------- |
| `loader()`        | Sahifa yuklanishidan oldin ma’lumot olish |
| `useLoaderData()` | Yuklangan datani olish                    |
| `action()`        | Form yuborishda serverga ma’lumot uzatish |
| `Form`            | Yangi marshrut-forma elementi             |
| `errorElement`    | Loader/action xatolarini ko‘rsatish       |
| `useRouteError()` | Xato haqida ma’lumot olish                |

---

## 🧪 Amaliy mashq:

1. `/users` sahifasi yarating va `loader` orqali API’dan foydalanuvchilarni yuklang.
2. `/contact` sahifasi yaratib, `Form` + `action` bilan forma yuborilishini ta’minlang.
3. Har bir route uchun `errorElement` sahifa yarating.

---
---

# 🔄 **Modul 8: Navigatsiya Holati, Pending States va Transitions (UX Optimallashtirish)**

Bu modulda React Router yordamida foydalanuvchi harakatlarini kuzatish, **loading spinner**, **disable button**, va **yaxshi foydalanuvchi tajribasi (UX)** ni qanday yaratish o‘rganiladi.

---

## 🚥 8.1 `useNavigation()` — Harakat holatini aniqlash

`useNavigation()` yordamida siz **foydalanuvchi sahifa o‘zgartirayotganini** aniqlay olasiz.

```jsx
import { useNavigation } from "react-router-dom";

const Page = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <p>⏳ Yuklanmoqda...</p>}
      <h1>Asosiy kontent</h1>
    </>
  );
};
```

---

## 🌀 8.2 Formlarda `submitting` holatini aniqlash

```jsx
const ContactForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method="post">
      <input name="name" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
      </button>
    </Form>
  );
};
```

✅ `submitting` = action ishlayapti
✅ `loading` = loader ishlayapti yoki yangi sahifa yuklanmoqda

---

## 💫 8.3 Skeleton, Spinner, va Animation bilan UX yaxshilash

```jsx
const ProductList = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? (
        <div className="skeleton-list">🔄 Yuklanmoqda...</div>
      ) : (
        <ProductGrid />
      )}
    </>
  );
};
```

Yoki siz [Framer Motion](https://www.framer.com/motion/) kabi kutubxona yordamida chiqish/kirish animatsiyalarini qo‘shishingiz mumkin.

---

## 📦 8.4 Scroll to Top — Sahifa almashganda yuqoriga chiqish

```jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
```

🔁 `ScrollToTop` komponentini `BrowserRouter` ichiga qo‘shing.

---

## 📍 8.5 Navigatsiya holatlarini bo‘lish

Siz `navigation.location.pathname` orqali qaysi sahifaga o‘tilayotganini ham ko‘ra olasiz.

```jsx
const navigation = useNavigation();

if (navigation.location?.pathname === "/dashboard") {
  // Dashboard sahifasiga o‘tmoqda
}
```

---

## 🧠 Yodingizda bo‘lsin:

| Hook                     | Vazifasi                                     |
| ------------------------ | -------------------------------------------- |
| `useNavigation()`        | Sahifa yoki forma harakati holatini aniqlash |
| `state === "loading"`    | Sahifa yuklanmoqda                           |
| `state === "submitting"` | Forma jo‘natilmoqda                          |
| `navigation.location`    | Qaysi sahifaga ketilayotganini ko‘rsatadi    |

---

## 🛠️ Amaliy mashq:

1. `useNavigation()` bilan loading spinner yozing.
2. `Form` tugmasini yuborish paytida disable qiling va "Yuborilmoqda..." deb yozing.
3. Scroll to Top komponentini butun loyihangizga qo‘shing.

---
---

# ⚡ **Modul 9: Code Splitting & Lazy Loading (React Router bilan Performance Optimallashtirish)**

Katta loyihalarda barcha sahifalarni bir vaqtda yuklash — foydalanuvchiga sekin ishlaydigan tajriba beradi. Bu muammoni **dynamic import** va **lazy loading** bilan hal qilamiz.

---

## 🧠 9.1 Code Splitting nima?

Bu React’ning sahifalarni **qismlarga bo‘lib yuklash** texnikasi:

* Foydalanuvchi biror sahifaga kirgandagina u sahifa yuklanadi.
* Ilova boshlanishida faqat kerakli fayllar yuklanadi.
* Ishlash tezlashadi, ayniqsa mobil qurilmalarda.

---

## 🛠️ 9.2 React.lazy() bilan sahifalarni bo‘lib yuklash

```jsx
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
```

```jsx
<Suspense fallback={<p>⏳ Yuklanmoqda...</p>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>
```

✅ `Suspense` — bu yerda fallback (kutish) komponenti ko‘rsatiladi.

---

## 🔁 9.3 Dynamic import bilan marshrutlash (advanced)

React Router’da **lazy-loaded route’lar** professional tarzda yoziladi:

```jsx
const Dashboard = lazy(() => import("./pages/Dashboard"));
```

```jsx
<Route
  path="/dashboard"
  element={
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  }
/>
```

Yoki:

```jsx
<Route path="/about" element={
  <LazyWrapper component={About} />
} />
```

```jsx
const LazyWrapper = ({ component: Component }) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);
```

---

## 📦 9.4 Real loyiha misol (split by feature)

```jsx
const ShopLayout = lazy(() => import("./layouts/ShopLayout"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
```

```jsx
<Route path="/shop" element={<ShopLayout />}>
  <Route path="products/:id" element={<ProductPage />} />
  <Route path="cart" element={<CartPage />} />
</Route>
```

✅ Har bir feature (yo‘nalish) bo‘yicha yuklab olish, foydalanuvchiga faqat kerakli fayllarni beradi.

---

## ⚠️ 9.5 SSR holatlarida ehtiyot bo‘ling

Agar siz SSR (server-side rendering) yoki Next.js ishlatayotgan bo‘lsangiz:

* `React.lazy` emas, balki `next/dynamic` yoki `loadable-component` ishlatiladi
* `Suspense` har doim fallback bilan ishlashi shart

---

## 🧠 Yodingizda bo‘lsin:

| Texnika        | Maqsadi                                                        |
| -------------- | -------------------------------------------------------------- |
| `React.lazy()` | Sahifani kerak bo‘lganda yuklash                               |
| `Suspense`     | Yuklash vaqtida kutish interfeysi                              |
| `fallback`     | Spinner, loader yoki har qanday element ko‘rsatish             |
| LazyWrapper    | Bo‘sh sahifalarga dynamic komponent qo‘shish uchun ishlatiladi |

---

## 🛠️ Amaliy mashq:

1. Loyihangizdagi 2–3 sahifani `React.lazy()` bilan yuklanadigan qiling.
2. Har bir sahifaga `<Suspense fallback={<Loading />}>` qo‘shing.
3. Ekran yuklanayotganida foydalanuvchiga loading effektini ko‘rsating.

---
---

# 🚀 **Modul 10: SEO, SSR, Testlash va Production Optimallashtirish**

Bu modulda React Router ishlatilgan loyihalarni **haqiqiy foydalanuvchilarga yetkazish**, **qidiruv tizimlariga moslashtirish**, va **ishlash tezligini oshirish** texnikalari bilan tanishasiz.

---

## 🔍 10.1 SEO (Search Engine Optimization) muammosi

SPA’lar (Single Page Application) qidiruv tizimlari tomonidan to‘liq indekslanmaydi. Chunki:

* HTML dastlab bo‘sh bo‘ladi
* Kontent JavaScript orqali keyinroq yuklanadi

🔴 `react-router-dom` SPA’lar uchun ishlatiladi, lekin **SSR** yoki **meta tag injection** bilan SEO yaxshilanishi mumkin.

---

## ⚙️ 10.2 React Helmet yordamida Meta tag’lar qo‘shish

```bash
npm install react-helmet-async
```

```jsx
// App.jsx
import { HelmetProvider } from "react-helmet-async";

<HelmetProvider>
  <App />
</HelmetProvider>
```

```jsx
// Home.jsx
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Bosh sahifa | MySite</title>
  <meta name="description" content="Bu mening vebsaytim" />
</Helmet>
```

✅ Har bir sahifa uchun `title`, `meta`, `og:title`, `og:image` qo‘shish mumkin.

---

## 🧪 10.3 Routing test qilish (React Testing Library bilan)

```bash
npm install @testing-library/react @testing-library/jest-dom
```

```jsx
// App.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Bosh sahifa ko‘rsatiladi", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/bosh sahifa/i)).toBeInTheDocument();
});
```

✅ `MemoryRouter` testlar uchun `BrowserRouter` o‘rnini bosadi.

---

## 🌐 10.4 SSR (Server Side Rendering) bilan React Router ishlatish

Agar siz SEO uchun mukammal ishlashni istasangiz, React Router’ni:

* **Next.js** bilan
* yoki **Remix** bilan
  yoki `@remix-run/router` yordamida SSR tarzida ishlatishingiz mumkin.

Yoki shunchaki `createStaticRouter()` (v7+) dan foydalaning.

---

## 🧊 10.5 Tree-shaking va bundle analiz

**react-router-dom** juda modular bo‘lgani uchun siz foydalanmagan API’lar build jarayonida olib tashlanadi. Ammo siz:

```bash
npm run build
npx source-map-explorer build/static/js/*.js
```

Yoki `vite-plugin-inspect`, `webpack-bundle-analyzer` orqali ko‘rishingiz mumkin.

---

## 🧠 Yodingizda bo‘lsin:

| Texnika                 | Maqsadi                                |
| ----------------------- | -------------------------------------- |
| `Helmet`                | Sahifa title/meta qo‘shish             |
| `MemoryRouter`          | Testlarda routing qilish               |
| `React Testing Library` | Komponentlar testlash                  |
| `SSR` yoki `Next.js`    | SEO uchun to‘liq rendering             |
| `build optimization`    | Yengil, tez yuklanadigan sayt yaratish |

---

## ✅ Final Mashqlar:

1. Har bir sahifa uchun `Helmet` orqali meta ma’lumotlar yozing.
2. Sahifalaringizni `MemoryRouter` orqali test qilib ko‘ring.
3. Vite yoki CRA build’ini `source-map-explorer` orqali analiz qiling.
4. Tayyor loyihani **Netlify**, **Vercel**, yoki **GitHub Pages**ga joylashtiring.

---

## 🎓 Yakuniy xulosa

Siz o‘rgandingiz:

✅ Modern `<Routes>` va `<Route>`
✅ Navigatsiya: `Link`, `NavLink`, `useNavigate`
✅ Protected Routes (auth bilan)
✅ Dynamic Routing, `:params`, `query`
✅ Layouts va `<Outlet>`
✅ `loader`, `action`, `useLoaderData`, `Form`
✅ `useNavigation`, pending states
✅ Lazy loading & code splitting
✅ SEO, testlash, SSR, deploy

---

✅ Bu bilan **React Router 2025** bo‘yicha **professional darajadagi to‘liq kurs** tugadi.