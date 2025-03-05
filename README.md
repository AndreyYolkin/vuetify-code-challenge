# Vuetify Code Challenge

A blog application built with Vue 3 and Vuetify 3. Users can create, view, and manage blog posts that are saved in the browser's local storage.

## 💿 Installation

### Prerequisites

1. Node.js (>= 18.x)
2. Pnpm (>= 9.5.x)

### Steps

Clone the repository and install dependencies:

```bash
git clone git clone https://github.com/andreyyolkin/vuetify-code-challenge.git
cd vuetify-code-challenge
```

Install dependencies:
```bash
pnpm install
```

## 💡 Usage
### Development Server

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create a production build:

```bash
pnpm build
```

## 🏗️ Project Structure

```
src/
├── components/     # Reusable Vue components
│   ├── BlogHeader.vue
│   └── PostCard.vue
├── composables/    # Composable functions
│   └── useLocalStorage.ts
├── layouts/        # Page layouts
├── pages/          # Application pages
├── stores/         # Pinia stores
│   └── blog.ts
├── types/          # TypeScript type definitions
│   └── blog.ts
└── utils/          # Utility functions
    └── getId.ts
```

## ✨ Technical Stack

- **Vue 3 + Vuetify 3**
- **Pinia**
- **Vue Router**
- **TypeScript**
- **Vite**

## 📑 License

[MIT](http://opensource.org/licenses/MIT)
