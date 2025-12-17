
document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password");
      }
    });
  }

  const sidebar = document.getElementById("sidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");

  const menuButtons = document.querySelectorAll(".menu-btn");
  const contentArea = document.getElementById("contentArea");
  const pageTitle = document.getElementById("pageTitle");

  const tableData = {
    1: [{ id: 1, name: "John", email: "john1@test.com" }, { id: 2, name: "Jane", email: "jane1@test.com" }],
    2: [{ id: 1, name: "Alice", email: "alice@test.com" }, { id: 2, name: "Bob", email: "bob@test.com" }],
    3: [{ id: 1, name: "Charlie", email: "charlie@test.com" }, { id: 2, name: "Diana", email: "diana@test.com" }],
    4: [{ id: 1, name: "kabi", email: "kabi@test.com" }, { id: 2, name: "Dina", email: "dina@test.com" }],
    5: [{ id: 1, name: "mani", email: "mani@test.com" }, { id: 2, name: "kala", email: "kala@test.com" }],
    6: [{ id: 1, name: "doe", email: "doe@test.com" }, { id: 2, name: "key", email: "key@test.com" }],
    7: [{ id: 1, name: "sat", email: "sat@test.com" }, { id: 2, name: "subi", email: "subi@test.com" }]
  };

  menuButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (window.innerWidth < 768 && sidebar) {
        sidebar.classList.remove("show");
      }

      menuButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const menuNumber = button.getAttribute("data-menu");
      pageTitle.innerText = "Menu " + menuNumber;

      const rows = tableData[menuNumber] || [];

      let tableHTML = `
      <form class="mb-4">
        <div class="row">
          <div class="col-md-4 mb-2">
            <input type="text" name="name" class="form-control" placeholder="Name">
          </div>
          <div class="col-md-4 mb-2">
            <input type="email" name="email" class="form-control" placeholder="Email">
          </div>
          <div class="col-md-4 mb-2">
            <button type="submit" class="btn btn-success w-100">Submit</button>
          </div>
        </div>
      </form>

      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="table-secondary">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
      `;

      rows.forEach(row => {
        tableHTML += `
          <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.email}</td>
          </tr>
        `;
      });

      tableHTML += `</tbody></table></div>`;

      contentArea.innerHTML = tableHTML;

      const form = contentArea.querySelector("form");
      if (form) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();

          const name = form.querySelector('input[name="name"]').value.trim();
          const email = form.querySelector('input[name="email"]').value.trim();

          if (!name || !email) {
            alert("Please fill both Name and Email");
            return;
          }

          const tableBody = contentArea.querySelector("table tbody");
          const newRow = document.createElement("tr");
          const rowCount = tableBody.rows.length + 1;

          newRow.innerHTML = `
            <td>${rowCount}</td>
            <td>${name}</td>
            <td>${email}</td>
          `;

          tableBody.appendChild(newRow);
          form.reset();
        });
      }
    });
  });

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });
  }
});

