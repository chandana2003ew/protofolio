import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  return (
    React.createElement("main", null,
      React.createElement("div", { className: "card profile-card" },
        React.createElement("img", {
          src: "https://via.placeholder.com/100", // Remember to replace this with your actual image
          alt: "Profile"
        }),
        React.createElement("h1", null, "Chandana V"),
        React.createElement("p", null, "AI/ML Enthusiast | Web Developer")
      ),

      React.createElement("div", { className: "card about-contact-card" },
        React.createElement("h2", null, "About Me"),
        React.createElement("p", null, "I’m a 3rd-year CSE student passionate about AI, ML, and full-stack development."),

        React.createElement("h2", null, "Contact"),
        React.createElement("p", null, "📧 vchandana00@gmail.com"),
        React.createElement("p", null, "📱 +91-9113541977"),
        // LinkedIn and GitHub Links
        React.createElement("p", { className: "social-links" },
          React.createElement("a", { href: "https://www.linkedin.com/in/chandana-v-a4322231a", target: "_blank", rel: "noopener noreferrer" },
            "🔗 LinkedIn"
          ),
          React.createElement("span", { style: { margin: '0 10px' } }, "|"), // Separator
          React.createElement("a", { href: "https://github.com/chandana2003ew", target: "_blank", rel: "noopener noreferrer" },
            "🐙 GitHub"
          )
        )
      ),

      React.createElement("div", { className: "card projects-card" },
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
