// Requisições a API do GitHub:

// Profile:

async function gitProfile() {
  await fetch("https://api.github.com/users/qcx").then(response => {
      if (!response.ok) {
          throw Error('err');
      } 
      return response.json();
  }).then(data => {
      console.log(data);
      renderGitCard(data);
  }).catch(err => {
      console.log(err);
  });
}


// Repositório:

async function gitRepo() {
  await fetch("https://api.github.com/users/qcx/repos").then(response => {
      if (!response.ok) {
          throw Error('err')
      }
      return response.json()
  }).then(data => {
      renderRepo(data)
  }).catch(err => {
      console.log(err)
  })
}


// Favoritos:

async function gitStarred() {
  await fetch("https://api.github.com/users/qcx/starred").then(response => {
      if (!response.ok) {
          throw Error('err')
      }
      return response.json()
  }).then(data => {
      renderStarred(data)
  }).catch(err => {
      console.log(err)
  })
}

gitProfile();
gitRepo();
gitStarred();


// Renderizar Desafios:

function renderGitCard(data) {
  const divProfile = document.getElementById('profile');
  const resHtml = 
  ` <h1>${data.name}</h1>
  
    <div class="container-gitRepo">
      <div class="left">
          <img src="${data.avatar_url}">
          <a href="${data.html_url}" target="_blank">VISITAR PERFIL</a>
      </div>

      <div class="right">
        <ul>
          <li>REPOSITÓRIOS: ${data.public_repos}</li>
          <li>SEGUIDORES: ${data.followers}</li>
          <li>SEGUINDO: ${data.following}</li>
        </ul>
          <div class="btn">
            <input type="button" value="VER REPOSITÓRIOS" id="btn-rep" onclick="showRepo()"></input>
            <input type="button" value="VER FAVORITOS" id="btn-starred" onclick="showStarred()"></input>
          </div>
        </div>
     </div>

    <div id="repo-list"></div>
    </div> `;

  divProfile.innerHTML = resHtml;
}