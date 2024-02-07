export default class Task extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");

    const header = document.createElement("div");

    const title = document.createElement("h1");
    title.innerHTML = "Write";

    const timer = document.createElement("div");

    const currentTime = document.createElement("span");

    const playTime = document.createElement("button");
    playTime.innerHTML = "&#9654;";

    timer.appendChild(currentTime);
    timer.appendChild(playTime);

    header.appendChild(title);
    header.appendChild(timer);

    const body = document.createElement("div");

    const description = document.createElement("p");
    description.innerHTML = "Write a bealtiful blog";

    const actions = document.createElement("div");

    const editar = document.createElement("button");
    editar.innerHTML = "editar";

    const resetar = document.createElement("button");
    resetar.innerHTML = "resetar";

    const deletar = document.createElement("button");
    deletar.innerHTML = "deletar";

    actions.appendChild(editar);
    actions.appendChild(resetar);
    actions.appendChild(deletar);

    body.appendChild(description);
    body.appendChild(actions);

    componentRoot.appendChild(header);
    componentRoot.appendChild(body);

    return componentRoot;
  }

  styles() {
    const styles = document.createElement("style");
    return styles;
  }
}