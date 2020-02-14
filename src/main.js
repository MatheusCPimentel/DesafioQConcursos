class Api {
  static async getUserInfo(username){
    fetch(`https://api.github.com/users/${username}`).then((response) => {
      return response.json();
    })
    .then((userInfo) => {

      const avatar = userInfo.avatar_url; 
      const followers = userInfo.followers;
      const following = userInfo.following;
      const repos = userInfo.public_repos;

      console.log(avatar);
      console.log(followers);
      console.log(following);
      console.log(repos);
    });
  }

   static async getUserRepo(username){
    fetch(`https://api.github.com/users/${username}/repos`).then((response) => {
      return response.json();
    })
    .then((userRepo) => {

      

      console.log(userRepo);
    });
  }

  static async getUserStarred(username){
    fetch(`https://api.github.com/users/${username}/starred`).then((response) => {
      return response.json();
    })
    .then((userStarred) => {



      console.log(userStarred);
    });
  }
}

Api.getUserInfo('matheuscpimentel');
Api.getUserRepo('matheuscpimentel');
Api.getUserStarred('matheuscpimentel');