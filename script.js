function toggleMode() {
  const html = document.documentElement  //o document é tudo dentro do codigo, então com o documentElement eu acesso a minha tag HTML
  if(html.classList.contains("light")) {  //dentro do HTML eu coloquei o classlist que é a lista de class, e o contains  que vai verificar se tem light dentro do HTML
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  //podemos simplificar esse codigo todo com o toggle  html.classList.toggle("light") ele é um elemento que já existe dentro do javascript e faz a função do codigo a cima. 
}
