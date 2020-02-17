// Requisições a API do GitHub:

// Profile:

async function gitProfile (githubName) {
  try {
      const data = await fetch(`https://api.github.com/users/${githubName}`);
      return renderGitCard(await data.json());
  } catch (err) {
      console.error(err);
  }
}


// Repositório:

async function gitRepo (githubName) {
  try {
      const data = await fetch(`https://api.github.com/users/${githubName}/repos`);
      return renderGitRepo(await data.json());
  } catch (err) {
      console.error(err)
  }
}


// Favoritos:

async function gitStarred (githubName) {
  try {
      const data = await fetch(`https://api.github.com/users/${githubName}/starred`);
      return renderGitStarred(await data.json());
  } catch (err) {
      console.error(err)
  }
}


// --------------------------------*--------------------------------


// Renderizações no HTML:

// Profile Card:

function renderGitCard(data) {

  if (!data.message) {
    
    if ((data.name == null) ? (name = data.login) : (name = data.name));
    
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
          <ul id ="liRepo">
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

  } else {

    const divProfile = document.getElementById('profile');

    const resHtml = 

    ` <div class="container-gitRepo">
          <div class="left">
                <img src="./images/usernotfound.jpg"> 
              </a>
          </div>
          <div class="right">
            <h1>Usuário não encontrado!</h1>
          </div>`

    divProfile.innerHTML = resHtml;

  }
}


// Repositórios:

function renderGitRepo(data) {

  const repoDiv = document.getElementById('repo');

  if (data.length > 0) {

    const repoDefault = 

    ` <hr>
      <h3>LISTA DE REPOSITÓRIOS (LIMITADO A 30)</h3>
      <ul id = "ulRepo">
      </ul> `;

    repoDiv.innerHTML = repoDefault;

    const ul = document.getElementById('ulRepo');

    const repoList = data.reduce((acc, actualObj) => `${acc}<li>${actualObj.name}</li>`, "")

    ul.innerHTML = repoList;

} else {
      
    repoDiv.innerHTML = 

    `<hr> 
    <h3>Usuário não possui repositórios!</h3>`
  }
}


// Favoritos:

function renderGitStarred(data) {

  const starredDiv = document.getElementById('starred');

  if (data.length > 0) {

    const starredDefault =

    ` <hr>
      <h3>LISTA DE FAVORITOS (LIMITADO A 30)</h3>
      <ul id = "ulStarred">
      </ul> `;

    starredDiv.innerHTML = starredDefault;

    const ul = document.getElementById('ulStarred');

    const starredList = data.reduce((acc, actualObj) => `${acc}<li>${actualObj.name}</li>`, "")

    ul.innerHTML = starredList;

} else {

    starredDiv.innerHTML = 

    `<hr> 
     <h3>Usuário não possui favoritos!</h3>`
  }
}


// --------------------------------*--------------------------------


// Métodos de clique no botão:

// Mostrar Repositórios:

window.showRepo = function() {
  const listRepo = document.getElementById('repo');

  if ((listRepo.style.display == 'block') ? (listRepo.style.display = 'none') : (listRepo.style.display = 'block'));
}


// Mostrar Favoritos:

window.showStarred = function() {
  const listStarred = document.getElementById('starred');

  if ((listStarred.style.display == 'block') ? (listStarred.style.display = 'none') : (listStarred.style.display = 'block'));
}


// --------------------------------*--------------------------------


// Procurar por perfil no GitHub:

// Pressionando enter:

const inputEle = document.getElementById('inputGit');
inputEle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
    gitProfile(this.value);
    gitRepo(this.value);
    gitStarred(this.value);
  }
});


// Clicando na imagem "search":

const search = document.getElementById('search');
search.onclick = function() {
  gitProfile(inputEle.value);
  gitRepo(inputEle.value);
  gitStarred(inputEle.value);
};


// --------------------------------*--------------------------------


// Requisitar meu perfil do GitHub como padrão ao carregar a página:

gitProfile('matheuscpimentel');
gitRepo('matheuscpimentel');
gitStarred('matheuscpimentel');