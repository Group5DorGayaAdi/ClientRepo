userData = JSON.parse(localStorage.getItem("user"));

function getUserOnNavBar(userData) {
  userDetailsPlaceHolder = document.getElementById("user-details");
  if (!userDetailsPlaceHolder) {
    console.error("Navbar placeHolder NOT FOUND");
    return;
  }

  const userName =
    userData.email === "admin@admin.com" ? "BOSS" : userData.name;
  const detTemplate = ` 
            <div class="currentUser" "> 
              <div class="card-details"> 
                <p id="card-current-name" class="card-text">Welcome ,  ${userName}!</p>
              </div> 
            </div> `;
  userDetailsPlaceHolder.innerHTML = detTemplate;
}
