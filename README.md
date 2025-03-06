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
├── assets/         # Static assets like images, fonts, etc.
├── components/     # Reusable Vue components
├── composables/    # Composable functions
├── constants/      # Project constants
├── layouts/        # Page layouts
├── pages/          # Application pages
├── plugins/        # Vue plugins and configurations
├── stores/         # Pinia stores
├── styles/         # No custom CSS, only Vuetify settings
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## ✨ Technical Stack

- **Vue 3 + Vuetify 3**
- **Pinia**
- **Vue Router**
- **TypeScript**
- **Vite**

## 📑 License

[MIT](http://opensource.org/licenses/MIT)
