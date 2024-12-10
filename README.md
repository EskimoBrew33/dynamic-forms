
# CSS Application Proof of Concept

This repository showcases a simple proof of concept for a dynamic form application for CSS. It is built with **Vite** and ***React*** as the front-end tool and consists of two main projects: the **Frontend** and the **API**.

### Vite is handling:
- Running the development server
- Auto-reloading when changes are made to files
- Compiling JSX code to JavaScript
- Managing the connection between the React front-end and the Express API server
- Processing Tailwind CSS styles

### React is being used to:
- Create the dynamic form interface that switches between Product and Coverage views
- Handle form state (manage values in each field)
- Manage the active form (Product or Coverage)
- Handle form submissions
- Update the display when values change
- Make API calls to the server to fetch and update configurations


### Key Features:
- **Frontend**: The frontend fetches data from the API using a **GET** request, dynamically generating forms based on the JSON payload returned by the API.
- **Form Submission**: When a user submits the form, the updated data is sent back to the API via a **PUT** request, which updates the stored data.
- **API**: The API serves as a backend, retrieving data from a local JSON file on the server. Upon receiving a **PUT** request, it updates the JSON file with the new data.
- The djosn data files are located here: products-data-api/data

### Project Structure:
- **Frontend**: Built using Vite and React
- **API**: A simple API that handles data retrieval and updating from a JSON file.

This proof of concept demonstrates the integration of a dynamic form interface with a simple backend API for data management.

### Instructions


1 - Create the web app project in VSCode (optional):

    npm create vite@latest web-app -- --template react
    cd web-app
    npm install

2 - Install the required dependencies (since we're using shadcn/ui components):

    npm install @radix-ui/react-icons
    npm install @radix-ui/react-slot
    npm install class-variance-authority
    npm install clsx
    npm install tailwindcss-animate
    npm install @radix-ui/react-dialog


3 - Set up Tailwind CSS:

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

3 - Update your tailwind.config.js to look like this:

    /** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ["class"],
      content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
      ],
      prefix: "",
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {},
      },
      plugins: [require("tailwindcss-animate")],
}

5 - Install Axios to interact with the Product API:

    cd ../web-app
    npm install axios


4 - Create the API project

    # Create a new directory for the API
    mkdir preoduct-data-api
    cd product-data-api
    
    # Initialize a new Node.js project
    npm init -y
    
    # Install necessary dependencies
    npm install express cors

