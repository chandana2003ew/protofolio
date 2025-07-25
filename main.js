import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

function App() {
  return (
    React.createElement("main", null,
      React.createElement("div", { className: "card" },
      
        React.createElement("h1", null, "Chandana V"),
      
      ),
      React.createElement("div", { className: "card" },
        React.createElement("h2", null, "About Me"),
        React.createElement("p", null, "I'm a third-year CSE student who enjoys building websites and exploring full-stack development. I love solving problems, learning new tools, and turning ideas into clean, functional projects. Always curious, always improving.")
      ),
      React.createElement("div", { className: "card" },
        React.createElement("h2", null, "Projects"),
        React.createElement("ul", null,
          React.createElement("li", null, "Farm Management System"),
          React.createElement("li", null, "Portfolio Website"),
          React.createElement("li", null, "AI Model Deployment")
        )
      ),
      React.createElement("div", { className: "card" },
        React.createElement("h2", null, "Contact"),
        React.createElement("p", null, "vchandana00@email.com"),
        React.createElement("p", null, "+91-9113541977")
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
