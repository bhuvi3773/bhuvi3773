# Portfolio Design Specification

## 1. Design Plan

### Color Palette (6 Named Hex Values)
- **`paper`**: `#F9FAFB` — Neutral soft background; reduces high-contrast eye fatigue while keeping contrast crisp.
- **`surface`**: `#FFFFFF` — Elevated cards and navigation container surface.
- **`ink`**: `#111827` — Primary text, headings, and high-emphasis labels. WCAG AAA compliant.
- **`muted`**: `#4B5563` — Secondary descriptions, technical metrics, and dates (7.2:1 contrast ratio, WCAG AA pass).
- **`line`**: `#E5E7EB` — Hairline borders and section separators.
- **`accent`**: `#2563EB` — Architectural cobalt blue used strictly for focus rings, primary call-to-actions, and active filter states.
*(Dark mode equivalent custom properties included via `prefers-color-scheme: dark`)*

### Typography
- **Primary Body & Headings:** Clean sans-serif system stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`). Zero layout shift, instant rendering, high readability at all screen densities.
- **Technical & Stack Elements:** Monospace stack (`ui-monospace, "JetBrains Mono", SFMono-Regular, Menlo, Monaco, Consolas, monospace`).
- **Fluid Scale:**
  - Base body: `16px` (`1rem`)
  - Subtext / Meta: `14px` (`0.875rem`)
  - Badges / Monospace tags: `12px` (`0.75rem`)
  - Section Titles: `clamp(1.25rem, 1.1rem + 0.8vw, 1.5rem)`
  - Hero Headline: `clamp(1.75rem, 1.4rem + 1.8vw, 2.75rem)`

### Layout & Alignment
- **Max Width:** `760px` centered container with left-aligned typographic hierarchy.
- **Wireframes:**

```
HERO WIREFRAME:
+-----------------------------------------------------------------+
| Venkata Bhuvan Lolla              [Resume] [GitHub] [LinkedIn]  |
+-----------------------------------------------------------------+
|                                                                 |
| Full-Stack & AI/ML Software Engineer                            |
| Full Stack Developer Intern at OneBridge Infotech. Building     |
| production web architectures and machine learning systems.      |
|                                                                 |
| [Status Badge: Available for Software Engineering Roles]       |
+-----------------------------------------------------------------+

PROJECT ROW WIREFRAME:
+-----------------------------------------------------------------+
| GoLive Classes — Scalable LMS & Online Learning Platform        |
| [Next.js 16] [React 19] [Prisma] [PostgreSQL] [Playwright E2E]  |
|                                                                 |
| Problem:       Multi-tenant classroom requiring strict role     |
|                isolation between students, teachers, & admins.  |
| What was built:Full student/teacher/admin portals with video    |
|                streaming and Playwright test coverage.          |
| Key decisions: Next.js Server Actions with Prisma ORM; server-  |
|                side auth verification over client-side tokens.  |
| Honest result: Operational LMS catalog, lesson player, & tests. |
|                                                                 |
| [Inspect GitHub Code]                                           |
+-----------------------------------------------------------------+
```

### Signature Element: System Matrix Filter
- A persistent, tactile lens toggle: `[All Systems]`, `[Full-Stack Platforms]`, `[AI & Deep Learning]`.
- Directly mirrors Venkata Bhuvan's actual dual engineering roles (Full-Stack Intern at OneBridge Infotech + AI/ML coursework and Deep Learning internship at SkillDzire).
- Zero gimmicky canvas/3D load; pure CSS-driven state transition that respects `prefers-reduced-motion`.

---

## 2. Generic Default Audit & Anti-Pattern Checklist
- [x] **No cream/terracotta serif cliché:** Modern, disciplined industrial sans.
- [x] **No dark mode neon glow / pitch-black cliché:** Restrained slate and charcoal palette with measured contrast.
- [x] **No trailing "→" on every link:** Actions use explicit semantic verb labels (`View Live System`, `Inspect GitHub Code`).
- [x] **No gradient text or animated particle backgrounds:** Whitespace and typography carry the layout.
- [x] **No vague filler words:** Removed all fluff words like "passionate", "cutting-edge", "seamless", "results-driven".
- [x] **Single corner radius hierarchy:** `4px` for small tags, `8px` for buttons, `12px` for project containers.
