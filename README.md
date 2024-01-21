# NextUI SPA DummyJSON

[Demo](https://nextui-spa-dummyjson.vercel.app/)

![screen](https://github.com/keisuke-333/nextui_spa_dummyjson/assets/65392082/27673b3b-c554-420d-a9ad-8003a861874a)

This is a demo application using React18 and TypeScript, inspired by a part of an EC site.
The purpose is to get backend API information from the frontend and display that information on the screen.
DummyJSON is used as dummy data for the backend API.
TailwindCSS is used for styling and NextUI is used in the UI library. Bun is used for JavaScript runtime.

This application was created as a demo application to verify the usage of NextUI. Please be aware of this when checking the repository.

## Stack

- [React](https://react.dev/) - The library for web and native user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types.
- [Tailwind CSS](https://tailwindcss.com/) - Rapidly build modern websites without ever leaving your HTML.
- [NextUI](https://nextui.org/) - Make beautiful websites regardless of your design experience.
- [react-hot-toast](https://react-hot-toast.com/) - Add beautiful notifications to your React app.
- [Bun](https://bun.sh/) - Bun is an npm-compatible package manager.
- [DummyJSON](https://dummyjson.com/) - Get dummy/fake JSON data to use as placeholder in development or in prototype testing.

## Project structure

```
$PROJECT_ROOT
│   # Static files for images
├── public
└── src
     │   # React component files
     ├── components
     │   # Type definition files
     ├── types
     │   # Define overall visuals and functionality
     ├── App.tsx
     │   # Styling file with tailwindcss set
     ├── index.css
     │   # Application entry points
     └── main.tsx
```
