const controles = document.getElementById("controles");
const btn = document.querySelector(".btn");
const cssText = document.querySelector(".css");

// 1° crei event do change
controles.addEventListener("change", handleChange);

//  2° chame as variantes do name e value
function handleChange(event) {
  const value = event.target.value;
  const name = event.target.name;
  handleStyles[name](value);
  saveValues(name, value);
  showCss();
}
// crei um objeto de styles para não cria um monte de função que cada um
const handleStyles = {
  element: btn,
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  text(value) {
    this.element.innerText = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};
//  crie um função para que aparece os codígos no site
function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split(";").join(";</span><span>");
  //  para cada';'é criando um array com split e apatir de ai e criado um span para cada item  "<span>" no comedo e no fim adicona novamente um ";" junto com </span><span>" fara que os codígos aparecem em linha
}
//  crie função para salvar os names e values, para utilizamos quando o usuário sair da pagína
function saveValues(name, value) {
  localStorage[name] = value;
}

// page os values e crie função para e loop para cada propriedade
function getValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((property) => {
    handleStyles[property](localStorage[property]);
    controles.elements[property].value = localStorage[property];
  });
}
getValues();
