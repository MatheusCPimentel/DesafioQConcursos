// Requisições a API do GitHub:

// Profile:

function gitProfile(githubName) {
  fetch(`https://api.github.com/users/${githubName}`).then(response => {
      if (!response.ok) {
          throw Error('GitHub profile did not find!');
      } 
      return response.json();
  }).then(data => {
      renderGitCard(data);
  }).catch(err => {
      console.error(err);
  });
}


// Repositório:

function gitRepo(githubName) {
  fetch(`https://api.github.com/users/${githubName}/repos`).then(response => {
      return response.json()
  }).then(data => {
      renderGitRepo(data)
  }).catch(err => {
      console.warn(err)
  })
}


// Favoritos:

function gitStarred(githubName) {
  fetch(`https://api.github.com/users/${githubName}/starred`).then(response => {
      return response.json()
  }).then(data => {
      renderGitStarred(data)
  }).catch(err => {
      console.warn(err)
  })
}


// --------------------------------*--------------------------------



// Renderizar Card:

function renderGitCard(data) {

  const name = data.name;
  const avatar = data.avatar_url;
  const link = data.html_url;
  const repos = data.public_repos;
  const followers = data.followers;
  const following = data.following;

  const divProfile = document.getElementById('profile');

  const resHtml = 

  ` <h1>${name}</h1>
  
    <div class="container-gitRepo">
      <div class="left">
          <a href="${avatar}" target="_blank" img src>
            <img src="${avatar}"> 
          </a>
          <a href="${link}" target="_blank">VISITAR PERFIL</a>
      </div>

      <div class="right">
        <ul>
          <li>REPOSITÓRIOS: ${repos}</li>
          <li>SEGUIDORES: ${followers}</li>
          <li>SEGUINDO: ${following}</li>
        </ul>
          <div class="btn">
            <input type="button" value="VER REPOSITÓRIOS" id="btn-rep" onclick="showRepo()"></input>
            <input type="button" value="VER FAVORITOS" id="btn-starred" onclick="showStarred()"></input>
          </div>
        </div>
     </div>

    <div id="repo"></div>
    <div id="starred"></div>
    </div> `;

  divProfile.innerHTML = resHtml;
}



// Renderizar Repositórios:

function renderGitRepo(data) {

  const repoDiv = document.getElementById('repo');
  const repoList = 

  ` <hr>
    <h3>LISTA DOS 5 PRIMEIROS REPOSITÓRIOS</h3>
    <ul>
      <li>${data[0].name}</li>
      <li>${data[1].name}</li>
      <li>${data[2].name}</li>
      <li>${data[3].name}</li>
      <li>${data[4].name}</li>
      <li>${data[5].name}</li>
     </ul> `;

  repoDiv.innerHTML = repoList;
}


// Renderizar Favoritos:

function renderGitStarred(data) {

  const starredDiv = document.getElementById('starred');

  const starredDefault =

  ` <hr>
    <h3>LISTA DOS 5 PRIMEIROS FAVORITOS</h3>
    <ul>
    </ul> `;

     starredDiv.innerHTML = starredDefault;
  }


// --------------------------------*--------------------------------


// Métodos de clique no botão:

// Mostrar Repositórios:

window.showRepo = function() {
  const listRepo = document.getElementById('repo');

  if ((listRepo.style.display == 'none') ? (listRepo.style.display = 'block') : (listRepo.style.display = 'none'));
}


// Mostrar Favoritos:

window.showStarred = function() {
  const listStarred = document.getElementById('starred');

  if ((listStarred.style.display == 'none') ? (listStarred.style.display = 'block') : (listStarred.style.display = 'none'));
}


// --------------------------------*--------------------------------

// Procurar por perfil no GitHub:

const inputEle = document.getElementById('inputGit');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
    gitProfile(this.value);
    gitRepo(this.value);
    gitStarred(this.value);
  }
});

gitProfile('matheuscpimentel');
gitRepo('matheuscpimentel');
gitStarred('matheuscpimentel');