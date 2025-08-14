const userContainer = document.getElementById('userContainer');
const errorMsg = document.getElementById('errorMsg');
const reloadBtn = document.getElementById('reloadBtn');

// Function to fetch and display user data
function fetchUsers() {
  userContainer.innerHTML = ''; // Clear previous users
  errorMsg.textContent = '';    // Clear previous errors

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok (' + response.status + ')');
      }
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        // Create a card for each user
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      errorMsg.textContent = 'Failed to load users: ' + error.message;
    });
}

// Enable manual reload
reloadBtn.addEventListener('click', fetchUsers);

// Initial fetch on page load
window.addEventListener('DOMContentLoaded', fetchUsers);
