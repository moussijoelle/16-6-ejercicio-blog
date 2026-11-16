/// <reference types="astro/client" />
/// <reference types="astro/astro-jsx" />

declare namespace JSX {
  type Element = astroHTML.JSX.Element;
  interface IntrinsicElements extends astroHTML.JSX.IntrinsicElements {}
}
