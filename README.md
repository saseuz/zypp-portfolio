# Zypp Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. This project showcases my skills, experience, and projects in a modern and responsive layout.

## Features

- **About Me**: Introduction and personal background.
- **What I Do**: Overview of technical skills and services.
- **Products**: Showcase of personal or professional projects.
- **Experience**: timeline of professional work history.
- **Education**: Academic background and qualifications.
- **Responsive Design**: Optimized for various screen sizes.
- **Light/Dark Mode**: Seamless theme switching with persistent user preference.
- **Modern UI**: Clean and minimal interface using Tailwind CSS.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/zypp-portfolio.git
    cd zypp-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Development

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Build

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
zypp-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, icons)
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Layout components
│   ├── context/         # Context providers
│   ├── pages/           # Page components
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles (Tailwind imports)
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## License

This project is licensed under the MIT License.
