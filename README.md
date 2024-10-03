Here's a **complete and well-structured README file** for your Next.js project that includes `shadcn/ui`, `@dnd-kit/core` for drag-and-drop, and Tailwind CSS.

---

# **Report Builder Web App**

This is a small web application built with **Next.js**, **shadcn/ui**, **@dnd-kit/core** for drag-and-drop functionality, and **Tailwind CSS** for styling. The app allows users to build and reorder sections in a report using an intuitive drag-and-drop interface.

## **Features**

- **Report Building**: Create sections of a report (`introduction`, `body`, `conclusion`) and dynamically add content to them.
- **Drag-and-Drop Functionality**: Rearrange elements within each report section using `@dnd-kit/core`.
- **Tailwind CSS**: The UI is styled with Tailwind CSS, providing a responsive and sleek design.
- **Dynamic Components**: Shadcn's `ui` components used to enhance the user interface with modern components.

## **Technologies Used**

- **Next.js**: A React-based framework for building fast and scalable web applications.
- **@dnd-kit/core**: A lightweight and flexible library for building drag-and-drop interfaces in React.
- **shadcn/ui**: UI components for building accessible and customizable user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling the application.
- **TypeScript**: Used for type-safe development.

## **Project Setup**

### **Prerequisites**

Ensure that you have the following installed on your machine:

- **Node.js** (version 14 or later)
- **npm** or **yarn**

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Tunki1201/report-app.git
   cd report-app
   ```

2. **Install dependencies:**

   If you are using npm:

   ```bash
   npm install
   ```

   If you are using yarn:

   ```bash
   yarn install
   ```

3. **Set up Tailwind CSS:**

   If Tailwind is not already set up, configure it using the steps below:

   - Create a `tailwind.config.js` file:

     ```bash
     npx tailwindcss init
     ```

   - Add the following content to `tailwind.config.js`:

     ```js
     module.exports = {
       content: [
         './pages/**/*.{js,ts,jsx,tsx}',
         './components/**/*.{js,ts,jsx,tsx}',
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the app at `http://localhost:3000`.

## **Usage**

1. **Report Sections**: The app comes with three default sections: `introduction`, `body`, and `conclusion`.
2. **Add Elements**: Use the buttons on the right side to add different types of elements (e.g., Heading, Paragraph, Detail, Summary) to each section.
3. **Drag and Drop**: Once elements are added, you can drag and drop them within each section to reorder them.

## **Folder Structure**

```
.
├── components
│   ├── ElementButton.tsx         # Component to add elements to sections
│   ├── ReportSection.tsx         # Component to render a draggable section of the report
|   ├── ui
|       ├── button.tsx            # shadcn component
├── app
│   └── page.tsx                 # Home page with dynamic report builder
|   └── layout.tsx               # Layout component
│   └── globals.css               # Global CSS with Tailwind imports
├── public
│   └── favicon.ico               # Favicon for the app
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## **Commands**

- **`npm run dev`**: Run the application in development mode.
- **`npm run build`**: Build the application for production.
- **`npm run start`**: Start the production build.
- **`npm run lint`**: Lint the codebase for errors.
- **`npm run test`**: Run the test suite using Jest.

## **Testing**

The project includes a setup for testing with **Jest** and **React Testing Library**. 

To run the tests:

```bash
npm run test
```

Ensure you have configured the necessary Jest setup in `jest.setup.ts`:

```ts
import '@testing-library/jest-dom/extend-expect';
```

## **Customization**

- **Shadcn's Components**: You can easily customize or extend the UI components provided by `shadcn/ui` in the application.
- **Tailwind CSS**: Tailwind can be extended in the `tailwind.config.js` file to customize the design according to your requirements.
- **Drag-and-Drop**: The drag-and-drop functionality can be easily modified or extended using the flexibility of `@dnd-kit/core`.

## **Contributing**

If you'd like to contribute to this project, feel free to submit a pull request or open an issue with your suggestions. Contributions are always welcome!

## **License**

This project is licensed under the MIT License.

---

### **Author**

- **Your Name** - [GitHub](https://github.com/tunki1201)

---

Feel free to adjust and expand this README to suit your project's needs.