import supabase from "./supabase.js";

async function cadastrar() {
  const nome = document.getElementById("nome").value;
  const celular = document.getElementById("celular").value;
  const email = document.getElementById("email").value;

  if (!nome || !celular || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  const { error } = await supabase
    .from('pacientes')
    .insert([{ nome, celular, email }])

  if (error) {
    console.error(error)
    alert("Erro ao salvar no banco!")
    return
  }

  limparCampos()
  renderizar()
}

async function renderizar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  const { data, error } = await supabase
    .from('pacientes')
    .select('*')

  if (error) {
    console.error(error)
    return
  }

  data.forEach((p) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${p.nome}</strong><br>
      ${p.celular}<br>
      ${p.email}
    `;
    lista.appendChild(item);
  });
}

function limparCampos() {
  document.getElementById("nome").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("email").value = "";
}

document.getElementById("btnCadastrar")
  .addEventListener("click", cadastrar)

renderizar()
