import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  return (
    React.createElement("main", null,
      React.createElement("div", { className: "card profile-card" }, // Added a class for specific styling if needed
        React.createElement("img", {
          src: "https://via.placeholder.com/100", // Remember to replace this with your actual image
          alt: "Profile"
        }),
        React.createElement("h1", null, "Chandana V"),
        React.createElement("p", null, "AI/ML Enthusiast | Web Developer")
      ),

      React.createElement("div", { className: "card about-contact-card" }, // Grouping About Me and Contact
        React.createElement("h2", null, "About Me"),
        React.createElement("p", null, "I’m a 3rd-year CSE student passionate about AI, ML, and full-stack development."),

        React.createElement("h2", null, "Contact"),
        React.createElement("p", null, "📧 chandana@email.com"),
        React.createElement("p", null, "📱 +91-XXXXXXXXXX"),
        // Add LinkedIn and GitHub Links
        React.createElement("p", { className: "social-links" },
          React.createElement("a", { href: "YOUR_LINKEDIN_PROFILE_URL", target: "_blank", rel: "noopener noreferrer" },
            "🔗 LinkedIn" // You can replace this with an icon later
          ),
          React.createElement("span", { style: { margin: '0 10px' } }, "|"), // Separator
          React.createElement("a", { href: "YOUR_GITHUB_PROFILE_URL", target: "_blank", rel: "noopener noreferrer" },
            "🐙 GitHub" // You can replace this with an icon later
          )
        )
      ),

      React.createElement("div", { className: "card projects-card" }, // Projects section moved to second
        React.createElement("h2", null, "Projects"),
        React.createElement("ul", null,
          React.createElement("li", null, "Farm Management System"),
          React.createElement("li", null, "Portfolio Website"),
          React.createElement("li", null, "AI Model Deployment")
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
