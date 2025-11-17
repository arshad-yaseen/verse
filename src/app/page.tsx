import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
# Building Products That Matter: A Developer's Journey

After a decade of building software, I've learned that the best products aren't born from perfect code—they emerge from deep empathy, relentless iteration, and a willingness to be wrong. This is what I wish I knew when I started.

![A developer working at their desk with multiple monitors](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop)

## The Myth of the Perfect Stack

We obsess over choosing the "right" framework, the "best" database, the most "scalable" architecture. But here's the truth: **the stack doesn't matter nearly as much as you think**. What matters is shipping something people actually want to use.

I've seen beautiful, over-engineered systems that nobody used, and I've seen "hacky" prototypes that changed industries. The difference? One team was building for users, the other was building for themselves.

### Start With Why

Before you write a single line of code, ask yourself:

- Who is this for?
- What problem does it solve?
- Why does this matter *right now*?
- How will I know if it's working?

These questions are uncomfortable. They force you to confront whether your idea is actually solving a real problem or just scratching a personal itch.

## The Power of Constraints

Early in my career, I thought more resources meant better products. I was wrong. Some of my best work happened when I had:

1. **Limited time** – Forces you to focus on what truly matters
2. **Small teams** – Enables fast decisions and clear communication  
3. **Tight budgets** – Demands creative solutions over expensive ones
4. **Clear scope** – Prevents feature creep and endless pivots

> "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."  
> — Antoine de Saint-Exupéry

## Writing Code That Lasts

The best code I've written isn't the cleverest—it's the most *boring*. Here's what maintainable code looks like:

\`\`\`javascript
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

const calcTotal = items => items.reduce((s, {price: p}) => s + p, 0);
\`\`\`

Your future self (and your teammates) will thank you for choosing clarity over cleverness. Use descriptive names like \`getUserById()\` instead of \`get()\`. Write comments that explain *why*, not *what*.

## Learning From Failure

![A path through a forest representing the journey of learning](https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop)

My biggest failures taught me more than my successes ever could. That product I spent six months building that got zero users? It taught me to validate ideas before building. That "temporary" hack that became permanent? It taught me that ~~shortcuts~~ technical debt compounds faster than you think.

**Failure isn't the opposite of success—it's part of the process.** The teams that ship great products aren't the ones that never fail; they're the ones that fail fast, learn quickly, and iterate relentlessly.

### Embrace the Feedback Loop

The faster you can get your work in front of real users, the faster you'll learn what actually matters. This means:

- Ship early, even when it's embarrassing
- Talk to users *constantly*
- Measure what matters, ignore vanity metrics
- Be willing to kill your darlings

## The Human Side of Code

We don't build software in a vacuum. Every line of code affects real people—your users, your teammates, your future self. Consider the impact:

| Stakeholder | What They Need | How We Deliver |
|-------------|----------------|----------------|
| Users | Fast, intuitive experiences | Performance optimization, user testing |
| Teammates | Clear, maintainable code | Documentation, code reviews |
| Business | Reliable, scalable systems | Monitoring, testing, architecture |
| Future You | Context and reasoning | Comments, commit messages, ADRs |

## Resources That Changed My Thinking

Over the years, certain resources have fundamentally shifted how I approach building software:

- [The Pragmatic Programmer](https://pragprog.com/titles/tpp20/) – Timeless wisdom on software craftsmanship
- [Shape Up](https://basecamp.com/shapeup) – Rethinking how we plan and build products
- [Working in Public](https://press.stripe.com/working-in-public) – Understanding open source dynamics
- [Refactoring UI](https://www.refactoringui.com/) – Design principles for developers

## Moving Forward

The web platform is more powerful than ever. We have [incredible tools](https://developer.mozilla.org/), [amazing frameworks](https://nextjs.org/), and a community that shares knowledge freely. But tools are just tools—what matters is what we build with them.

Focus on the fundamentals: *write clear code, ship often, listen to users, and never stop learning*. The rest is just details.

---

**The best time to start was yesterday. The second best time is now.**

What will you build today?
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
