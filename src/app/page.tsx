import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
# The Art of Modern Web Development

Welcome to a journey through the evolving landscape of web development. In this post, we'll explore the tools, techniques, and philosophies that shape how we build for the web today.

## Why Typography Matters

Good typography is the foundation of readable content. It's not just about choosing a pretty font—it's about creating a hierarchy that guides readers through your content naturally. Learn more about [typography best practices](https://practicaltypography.com/).

### The Power of Spacing

Spacing creates breathing room. It gives your content structure and makes complex ideas digestible. Consider these key principles:

- **Vertical rhythm** keeps your content flowing smoothly
- **Consistent margins** create visual harmony
- **Thoughtful padding** provides comfortable reading zones

## Code in Context

When we write about code, we need to show it clearly. Here's a simple example using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript):

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`

Inline code like \`const x = 42\` should be easy to spot but not distracting.

> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

## Building for Everyone

Modern web development isn't just about making things work—it's about making them work for *everyone*. [Accessibility](https://www.w3.org/WAI/), [performance](https://web.dev/performance/), and user experience are not optional extras; they're fundamental requirements.

### Key Considerations

1. **Semantic HTML** provides meaning and structure
2. **Progressive enhancement** ensures baseline functionality
3. **Responsive design** adapts to any screen size
4. **Performance budgets** keep your site fast

## Visual Examples

![A beautiful sunset over mountains](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop)

## Tables in Action

Here's how data looks when properly structured:

| Feature | Description | Priority |
|---------|-------------|----------|
| Accessibility | Ensure content is available to all users | High |
| Performance | Keep load times under 3 seconds | High |
| Responsive | Adapt to all screen sizes | Medium |
| SEO | Optimize for search engines | Medium |

## Looking Forward

The web ~continues~ to evolve, and so do we. By focusing on fundamentals—clean code, thoughtful design, and user-centered thinking—we can build experiences that stand the test of time. Check out [MDN Web Docs](https://developer.mozilla.org/) for comprehensive web development resources.

---

**Remember:** The best code is code that serves its users well.
`;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans py-44">
      <article className="verse-neutral verse-blue [--verse-spacing:16px] max-w-3xl mx-auto">
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </article>
    </div>
  );
}
