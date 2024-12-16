function toggleMode() {
  const html = document.documentElement  //o document é tudo dentro do codigo, então com o documentElement eu acesso a minha tag HTML
  if(html.classList.contains("light")) {  //dentro do HTML eu coloquei o classlist que é a lista de class, e o contains  que vai verificar se tem light dentro do HTML
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  //podemos simplificar esse codigo todo com o toggle  html.classList.toggle("light") ele é um elemento que já existe dentro do javascript e faz a função do codigo a cima. 
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const profilePic = document.getElementById("profile-pic");
  const uploadBtn = document.getElementById("upload-btn");
  const changePicBtn = document.getElementById("change-pic-btn");

  // Carrega a imagem do localStorage, se disponível
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    profilePic.src = savedImage;
  }

  // Clique no botão para abrir o seletor de arquivos
  changePicBtn.addEventListener("click", () => {
    uploadBtn.click();
  });

  // Manipula o upload da imagem
  uploadBtn.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        // Atualiza a imagem e salva no localStorage
        profilePic.src = reader.result;
        localStorage.setItem("profileImage", reader.result);
      };

      reader.readAsDataURL(file);
    }
  });
});
