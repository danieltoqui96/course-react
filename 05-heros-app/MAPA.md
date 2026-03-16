# Mapa del proyecto

Este proyecto está organizado por dominios (heroes, admin) y componentes reutilizables.

## 📁 Estructura principal

- `index.html` - HTML base de Vite.
- `package.json` - dependencias y scripts.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` - configuración TypeScript.
- `vite.config.ts` - configuración de Vite.
- `src/` - todo el código de la app.

## 📁 `src/`

- `main.tsx` - punto de entrada de React.
- `HeroesApp.tsx` - componente raíz principal de la aplicación.
- `index.css` - estilos globales.

## 📁 `src/router`

- `app.router.tsx` - define las rutas de la aplicación (Home, Search, Hero, Admin, etc.) y la navegación.

## 📁 `src/admin`

- `layouts/AdminLayout.tsx` - Layout del panel de administración.
- `pages/AdminPage.tsx` - Página de administración.
- `components/custom/` - componentes personalizados de UI para admin:
  - `CustomBreadcrum.tsx`
  - `CustomJumbotron.tsx`
  - `CustomMenu.tsx`

## 📁 `src/components`

- `ui/` - componentes de UI globales reutilizables:
  - `badge.tsx`, `breadcrumb.tsx`, `button.tsx`, `card.tsx`, `input.tsx`, `navigation-menu.tsx`, `progress.tsx`, `tabs.tsx`

## 📁 `src/heroes`

### `actions/`

- `get-hero.ts` - acción para obtener un héroe por id.
- `get-heroes-by-page.action.ts` - obtiene héroes paginados.
- `get-summary.action.ts` - obtiene información estadística.

### `api/`

- `hero.api.ts` - capa de llamadas a API (simuladas o reales) para héroes.

### `hooks/`

- `useHeroPaginated.tsx` - hook para obtener héroes paginados y manejar estado.
- `useHeroSummary.tsx` - hook para obtener resumen estadístico.

### `layouts/`

- `HeroesLayout.tsx` - layout principal para las páginas de héroes y busqueda.

### `components/`

- `HeroGrid.tsx` - lista tabular o grid de héroes.
- `HeroGridCard.tsx` - tarjeta individual de héroe en la grilla.
- `HeroStatCard.tsx` - tarjeta de estadística.
- `HeroStats.tsx` - componente con resumen de estadísticas.

### `pages/`

- `home/HomePage.tsx` - página inicial.
- `hero/HeroPage.tsx` - página de detalle de un héroe.
- `search/SearchPage.tsx` - página de búsqueda.
- `search/ui/SearchControl.tsx` - control (input + botones) para búsqueda.

### `types/`

- `get-heroes.response.ts` - tipos de respuesta para lista de héroes.
- `hero.interface.ts` - interfaz de héroe.
- `summary-information.response.ts` - tipos de respuesta de resumen.

## 📁 `src/lib`

- `utils.ts` - utilidades generales (formato, helpers, etc.).

## ✅ Recomendaciones rápidas

1. Mantén la organización por funcionalidades: si hay más secciones, crea carpetas análogas.
2. Usa nombres claros: `hooks`, `actions`, `api`, `components`, `pages`.
3. Si tu aplicación crece aún más, separa por dominio principal (`heroes`, `admin`, `users`, etc.) para no saturar la raíz.

> Este mapa te ayudará a navegar el proyecto y entender dónde agregar nueva funcionalidad sin romper estructura.
