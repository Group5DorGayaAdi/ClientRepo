userData = JSON.parse(localStorage.getItem("user"));

function getUserOnNavBar(userData) {
  userDetailsPlaceHolder = document.getElementById("user-details");
  if (!userDetailsPlaceHolder) {
    console.error("Navbar placeHolder NOT FOUND");
    return;
  }
  const detTemplate = ` 
            <div class="currentUser" "> 
              <div class="card-details"> 
                <p id="card-current-name" class="card-text">Welcome ,  ${userData.name}</p>
              </div> 
            </div> `;
  userDetailsPlaceHolder.innerHTML = detTemplate;
}
