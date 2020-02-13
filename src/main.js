import axios from 'axios';

class Api {
  static async getUserInfo(username){
    const response = await axios.get(`https://api.github.com/users/${username}`);

    const followers = response.data.followers;
    const following = response.data.following;
    const avatar = response.data.avatar_url;

    console.log(response);
  }

  static async getUserRepo(username){
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);

    const repo = response.data.length;
    console.log(repo);
  }
}

Api.getUserInfo('matheuscpimentel');
Api.getUserRepo('matheuscpimentel');