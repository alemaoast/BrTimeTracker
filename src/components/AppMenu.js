export default class AppMenu extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");

    const menuLeft = document.createElement("div");

    const newTask = document.createElement("button");
    newTask.innerHTML = "&#128074; Nova Tarefa";

    menuLeft.appendChild(newTask);

    const menuRight = document.createElement("div");

    const download = document.createElement("button");
    download.innerHTML = "&#128190;";

    const settings = document.createElement("button");
    settings.innerHTML = "&#9881;";

    componentRoot.appendChild(menuLeft);
    componentRoot.appendChild(menuRight);

    return componentRoot;
  }

  styles() {
    const styles = document.createElement("style");
    return styles;
  }
}