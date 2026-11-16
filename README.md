# Ejercicio blog — 16.6 (Astro)

Práctica de blog con Astro: posts en Markdown, listado con paginación y página de cada artículo.

## Qué hace

- Home del “Blog de Dibujo” con enlace al listado
- Listado paginado en `/blog/1`, `/blog/2`, …
- Cada post tiene su URL por slug (`/blog/nombre-del-post`)
- Los artículos están en `src/content/posts/` (Markdown)

## Cómo probarlo

```sh
pnpm install
pnpm dev
```

```sh
pnpm build
pnpm preview
```

Demo: https://astro-16-6-blog.netlify.app

## Cómo lo construí

- Content Collections de Astro (`content.config.ts` + carpeta `content/posts`)
- Rutas dinámicas: `blog/[page].astro` para la paginación y `blog/[slug].astro` para el detalle
- Layout `DefaultLayout.astro` para no repetir la estructura
- Tailwind para el estilo
- `sharp` para que el build pueda optimizar las imágenes del proyecto

## Cómo comprobarlo

No hay tests. Abro la home, entro al blog, paso de página si hay más de una y abro un par de posts para ver que el Markdown se renderiza bien.

---

Moussi Joelle · [github.com/moussijoelle](https://github.com/moussijoelle)
