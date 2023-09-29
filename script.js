document.addEventListener("DOMContentLoaded", () => {
  const userCards = document.getElementById("user-cards");
  const getUsersBtn = document.getElementById("get-users-btn");

  const fetchUsers = async () => {
      userCards.innerHTML = `<h1 class='load'>Fetching and Loading Users Data...</h1>`;
      try {
          const response = await fetch("https://reqres.in/api/users?page=1");
          const data = await response.json();

          if (data.data && data.data.length > 0) {
              userCards.innerHTML = data.data.map(user => `
                  <div class="card">
                      <div class="profile-image">
                          <img src="${user.avatar}" alt="User Image">
                      </div>
                      <div class="card-content">
                          <h3>${user.first_name} ${user.last_name}</h3>
                          <h2>${user.email}</h2>
                          <h2>User ID: ${user.id}</h2>
                      </div>
                  </div>
              `).join("");
          } else {
              userCards.innerHTML = "<p>No users found.</p>";
          }
      } catch (error) {
          console.error("Error fetching user data:", error);
          userCards.innerHTML = "<p>Error fetching user data. Please try again later.</p>";
      }
  };

  getUsersBtn.addEventListener("click", fetchUsers);
});

const getUsersBtn = document.getElementById("get-users-btn");

getUsersBtn.addEventListener("mousedown", () => {
    getUsersBtn.style.backgroundColor = "#ff6b6b"; // Change to the desired color on click
});

getUsersBtn.addEventListener("mouseup", () => {
    getUsersBtn.style.backgroundColor = "#00adb5"; // Change back to the original color on release
});