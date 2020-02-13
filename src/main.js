import axios from 'axios';

class Api {
  static async getUserInfo(username){
    const response = await axios.get(`https://api.github.com/users/${username}`);

    const followers = response.data.followers;
    const following = response.data.following;
    const avatar = response.data.avatar_url;
    const repos = response.data.public_repos

    console.log(`Seguidores: ${followers}`);
    console.log(`Seguindo: ${following}`);
    console.log(`URL avatar: ${avatar}`);
    console.log(`Repositórios: ${repos}`);

    console.log(response);
  }

  static async getUserRepo(username){
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  }

  static async getUserStarred(username){
    const response = await axios.get(`https://api.github.com/users/${username}/starred`);

    console.log(response.data);
  }
}

Api.getUserInfo('matheuscpimentel');
Api.getUserRepo('matheuscpimentel');
Api.getUserStarred('matheuscpimentel');