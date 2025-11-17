import Markdown from "react-markdown";

const markdown = `
# Building Modern Web Applications with React

React has revolutionized the way we build user interfaces. Its component-based architecture and declarative approach make it easier to create complex, interactive applications.

## Why Choose React?

There are several compelling reasons to use React for your next project:

- **Component Reusability**: Build once, use everywhere
- **Virtual DOM**: Efficient rendering and better performance
- **Rich Ecosystem**: Thousands of libraries and tools available
- **Strong Community**: Active support and continuous improvements

## Getting Started

Starting with React is straightforward. You can create a new project using modern tools like Next.js, which provides server-side rendering, routing, and many other features out of the box.

The learning curve might seem steep at first, but once you grasp the fundamentals of components, props, and state management, you'll find yourself building applications faster than ever before.

## Conclusion

Whether you're building a simple landing page or a complex web application, React provides the tools and flexibility you need to succeed. The future of web development is here, and it's more exciting than ever.
`;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <article className="verse-zinc [--verse-spacing:16px] max-w-3xl mx-auto">
        <Markdown>{markdown}</Markdown>
      </article>
    </div>
  );
}
