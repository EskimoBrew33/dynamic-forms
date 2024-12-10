This is a small proof of concept for the CSS application. It uses Vite as a front end tool. It contains 2 projects: the front end, and the API. The front end fetches the data from the API (GET), and generates the forms dynamically using the json payload returned by the API. On submit, the updated is sent to the API (PUT) to update the data. The 

1 - To create the web app project in VSCode (optional):

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

