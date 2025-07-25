import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  return (
    React.createElement("main", null,
      React.createElement("div", { className: "card" },
        React.createElement("img", {
          src: "./profile.jpg",  // <-- Update with your image path
          alt: "Profile"
        }),
        React.createElement("h1", null, "Chandana V"),
      ),
      React.createElement("div", { className: "card" },
        React.createElement("h2", null, "About Me"),
        React.createElement("p", null, "I'm a third-year CSE student who enjoys building websites and exploring full-stack development. I love solving problems, learning new tools, and turning ideas into clean, functional projects. Always curious, always improving.")
      ),
      React.createElement("div", { className: "card" },
        React.createElement("h2", null, "Projects"),
        React.createElement("ul", null,
          React.createElement("li", null, React.createElement("a", { href: "#", target: "_blank" }, "Farm Management System")),
          React.createElement("li", null, React.createElement("a", { href: "#", target: "_blank" }, "Portfolio Website")),
          React.createElement("li", null, React.createElement("a", { href: "#", target: "_blank" }, "AI Model Deployment"))
        )
      ),
      React.createElement("div", { className: "card" },
        React.createElement("h2", null, "Contact"),
        React.createElement("p", null, React.createElement("a", { href: "mailto:vchandana00@gmail.com" }, "chandana@email.com")),
        React.createElement("p", null, React.createElement("a", { href: "tel:+919113541977" }, "+91-9113541977"))
        React.createElement("p", null, React.createElement("a", { href: "https://www.linkedin.com/in/chandana-v-a4322231" }, "Linkedin"))
        React.createElement("p", null, React.createElement("a", { href: "https://github.com/chandana2003ew" }, "Github"))
                          
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
