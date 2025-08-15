User Directory – Fetch API Demo
This simple web application demonstrates how to fetch and display user data from a public API using JavaScript's Fetch API.
It dynamically loads user information (name, email, and address) from the JSONPlaceholder Users API and displays it in a styled card layout.

It also includes error handling, a manual "Reload" button, and network failure testing.

📂 Project Structure
project-folder/
│
├── index.html      # Main HTML structure
├── styles.css      # CSS styling for the UI
├── script.js       # Fetch API logic & DOM manipulation
└── README.md       # This file

🚀 Features
Fetches user data from a public API

Displays name, email, and formatted address

Styled card layout

Reload button to refetch data

Handles errors gracefully (including network failures)

Works in any modern browser

🛠️ Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Fetch API

📖 How to Run Locally
Clone or Download this repository to your local machine.

Open the folder in VS Code or your preferred editor.

Make sure the following three files are present:

index.html

styles.css

script.js

Open index.html directly in your browser (e.g., Chrome).

On load, user data will be automatically fetched and displayed.

📡 API Used
We are using the free JSONPlaceholder API for mock user data:
https://jsonplaceholder.typicode.com/users

⚠️ Error Handling
If the API call fails (e.g., no internet), an error message is displayed in red.

To test:

Disconnect from the internet

Click the Reload Users button

You should see an error message.

🔄 Reload Button
The Reload Users button refetches the API data without reloading the page.

Useful for refreshing data manually.
