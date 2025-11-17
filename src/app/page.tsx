import Markdown from "react-markdown";

const markdown = `
# Hello, world!

This is a test of the markdown component.
`;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <article className="verse-zinc [--verse-spacing:17px]">
        <Markdown>{markdown}</Markdown>
      </article>
    </div>
  );
}
