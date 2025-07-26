import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  const handleProjectsClick = () => {
    // Navigate to the projects page
    window.location.href = 'projects.html';
  };

  return (
    React.createElement("div", { className: "book-page" }, // Main container for the book aesthetic
      React.createElement("div", { className: "profile-section" },
        React.createElement("img", {
          src: "prof pic.jpg", // Your profile picture
          alt: "Chandana V Profile"
        }),
        React.createElement("h1", null, "Chandana V"),
        React.createElement("p", {className: "tagline"}, "AI/ML Enthusiast | Web Developer") // Added tagline class
      ),

      React.createElement("div", { className: "contact-section" },
        React.createElement("h2", null, "Reach Out"), // More inviting heading
        React.createElement("p", {className: "contact-item"},
          React.createElement("span", {className: "icon"}, "📧"), // Email icon
          React.createElement("a", {href: "mailto:vchandana00@gmail.com"}, "vchandana00@gmail.com") // Email link
        ),
        React.createElement("p", {className: "contact-item"},
          React.createElement("span", {className: "icon"}, "📱"), // Phone icon
          React.createElement("a", {href: "tel:+919113541977"}, "+91-9113541977") // Phone link
        )
      ),

      React.createElement("div", { className: "social-section" },
        React.createElement("h2", null, "Connect With Me"), // New heading
        React.createElement("div", { className: "social-links-container" }, // Container for social links
          React.createElement("a", { href: "https://www.linkedin.com/in/chandana-v-a4322231a", target: "_blank", rel: "noopener noreferrer", className: "social-link" }, // Added social-link class
            React.createElement("span", {className: "icon"}, "🔗"), "LinkedIn"
          ),
          React.createElement("a", { href: "https://github.com/chandana2003ew", target: "_blank", rel: "noopener noreferrer", className: "social-link" }, // Added social-link class
            React.createElement("span", {className: "icon"}, "🐙"), "GitHub"
          )
        )
      ),

      React.createElement("div", { className: "projects-link-section" }, // New section for Projects button
        React.createElement("button", { className: "projects-button", onClick: handleProjectsClick },
          "View My Projects ➡️"
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
