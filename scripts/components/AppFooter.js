export default class AppFooter extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.innerHTML = "&#128338; Total de horas (hoje):";

    const totalHours = document.createElement("span");
    totalHours.innerHTML = "05:00:00";

    componentRoot.appendChild(totalHours);

    return componentRoot;
  }

  styles() {
    const styles = document.createElement("style");
    return styles;
  }
}