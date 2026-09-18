/* Emits a JSON-LD graph. Rendered by the server, so the markup is in the HTML
   Google first receives — no hydration, no client JavaScript.

   The payload is our own data, never user input; JSON.stringify plus the `<`
   escape keeps a stray sequence from closing the script element early. */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
