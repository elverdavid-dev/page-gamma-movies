# Technical Test Inlaze

## Technologies

- [Next.js 14](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [NextUI](https://nextui.org/) - React UI library
- [Biome.js](https://biomejs.dev/) - Formatter and linter
- [Hugeicons](https://hugeicons.com/) - Icon library


This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This leads to more readable messages that are easy to follow when looking through the project history. 

## Project Structure

the project follows a modular architecture organized as follows:

```
src/
├── modules/
│   ├── shared/             # Shared functionality
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── home/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── search/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   └── movie/
│       ├── components/
│       ├── services/
│       ├── types/
│       └── utils/
└── app/
    ├── (routes)/
    │   ├── popular/
    │   │   └── page.tsx
    │   ├── search/
    │   │   └── page.tsx
    │   └── movie/
    │       └── [id]/
    │           └── page.tsx
    ├── layout.tsx
```

- modules/: Contains all feature-specific modules and the shared shared.

- shared/: Houses shared components, services, and utilities used across multiple modules.

- Other directories (e.g., home/, search/, movie/) contain feature-specific code.

- (routes)/: Contains route-specific pages.

> [!NOTE]
> This architecture is particularly beneficial for large-scale applications or projects expected to grow significantly over time.
