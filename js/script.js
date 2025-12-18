document.addEventListener("DOMContentLoaded", function () {

   const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

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

  if (!menuButtons.length) return;


  const tableData = {
    users: [
      { id: 1, name: "John", email: "john@test.com" },
      { id: 2, name: "Jane", email: "jane@test.com" }
    ]
  };

  menuButtons.forEach(button => {
    button.addEventListener("click", () => {

      if (window.innerWidth < 768 && sidebar) {
        sidebar.classList.remove("show");
      }

      menuButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const menu = button.dataset.menu;


      if (menu === "dashboard") {
        pageTitle.textContent = "Dashboard";
       
      }

if (menu === "about") {
  pageTitle.textContent = "About Us";
  contentArea.innerHTML = `
    <!-- Company Intro -->
    <section class="mb-5">
      <div class="row align-items-center">
        <div class="col-md-6 text-center">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
               class="img-fluid rounded shadow"
               alt="Our Company">
        </div>
        <div class="col-md-6">
          <h3 class="fw-bold mb-3">Who We Are</h3>
          <p>
            TechCorp is a leading IT company delivering innovative, secure, and scalable
            digital solutions. We specialize in web development, cloud services, and IT consulting.
          </p>
          <ul>
            <li>10+ Years of Industry Experience</li>
            <li>Certified and Skilled Professionals</li>
            <li>Customer-Centric Approach</li>
            <li>Innovative & Scalable Solutions</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mb-5 text-center">
      <h4 class="fw-bold mb-3">Our Mission & Vision</h4>
      <div class="row g-3">
        <div class="col-md-6">
          <div class="card p-3 shadow-sm h-100">
            <h5 class="fw-bold">Mission</h5>
            <p>To provide high-quality IT solutions that empower businesses worldwide.</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card p-3 shadow-sm h-100">
            <h5 class="fw-bold">Vision</h5>
            <p>To be a globally recognized IT company known for innovation and reliability.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section>
      <h4 class="fw-bold mb-3 text-center">Meet Our Team</h4>
      <div class="row text-center g-3">
        <div class="col-md-3">
          <div class="card p-3 shadow-sm">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" 
                 class="img-fluid rounded-circle mb-2" alt="Team Member">
            <p class="fw-bold mb-0">John Doe</p>
            <small>CEO</small>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-3 shadow-sm">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" 
                 class="img-fluid rounded-circle mb-2" alt="Team Member">
            <p class="fw-bold mb-0">Jane Smith</p>
            <small>CTO</small>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-3 shadow-sm">
            <img src="https://randomuser.me/api/portraits/men/56.jpg" 
                 class="img-fluid rounded-circle mb-2" alt="Team Member">
            <p class="fw-bold mb-0">Mike Brown</p>
            <small>Lead Developer</small>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card p-3 shadow-sm">
            <img src="https://randomuser.me/api/portraits/women/66.jpg" 
                 class="img-fluid rounded-circle mb-2" alt="Team Member">
            <p class="fw-bold mb-0">Sara Lee</p>
            <small>UI/UX Designer</small>
          </div>
        </div>
      </div>
    </section>
  `;
}

if (menu === "contact") {
  pageTitle.textContent = "Contact Us";
  contentArea.innerHTML = `
    <div class="row">
      <!-- Contact Info -->
      <div class="col-lg-5 mb-4">
        <h4 class="fw-bold mb-3">Get in Touch</h4>
        <p>We’d love to hear from you. Reach out to us for project inquiries or support.</p>
        <ul class="list-unstyled">
          <li class="mb-2"><strong>Email:</strong> contact@example.com</li>
          <li class="mb-2"><strong>Phone:</strong> +91 12345 67890</li>
          <li class="mb-2"><strong>Address:</strong> 123 Tech Street, Silicon City</li>
        </ul>
        <div class="mt-4">
          <button class="btn btn-primary me-2">Email Us</button>
          <button class="btn btn-outline-secondary">Call Us</button>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="col-lg-7">
        <div class="card p-4 shadow-sm">
          <h5 class="fw-bold mb-3">Send a Message</h5>
          <form id="contactForm">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input type="text" class="form-control" name="name" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input type="email" class="form-control" name="email" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Message</label>
              <textarea class="form-control" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  `;

  const contactForm = contentArea.querySelector("#contactForm");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
    this.reset();
  });
}

      if (menu === "users") {
        pageTitle.textContent = "Users";

        let rows = tableData.users;
        let tableHTML = `
          <form class="mb-4">
            <div class="row">
              <div class="col-md-4 mb-2">
                <input type="text" class="form-control" name="name" placeholder="Name">
              </div>
              <div class="col-md-4 mb-2">
                <input type="email" class="form-control" name="email" placeholder="Email">
              </div>
              <div class="col-md-4 mb-2">
                <button class="btn btn-success w-100">Add User</button>
              </div>
            </div>
          </form>

          <div class="table-responsive">
            <table class="table table-bordered">
              <thead class="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
        `;

        rows.forEach(r => {
          tableHTML += `
            <tr>
              <td>${r.id}</td>
              <td>${r.name}</td>
              <td>${r.email}</td>
            </tr>
          `;
        });

        tableHTML += `</tbody></table></div>`;
        contentArea.innerHTML = tableHTML;

        const form = contentArea.querySelector("form");
        form.addEventListener("submit", e => {
          e.preventDefault();
          const name = form.name.value.trim();
          const email = form.email.value.trim();
          if (!name || !email) return alert("Fill all fields");

          const tbody = contentArea.querySelector("tbody");
          tbody.innerHTML += `
            <tr>
              <td>${tbody.rows.length + 1}</td>
              <td>${name}</td>
              <td>${email}</td>
            </tr>
          `;
          form.reset();
        });
      }

      if (menu === "logout") {
        window.location.href = "index.html";
      }
    });
  });

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("show");
    });
  }

});
