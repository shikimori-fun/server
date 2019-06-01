import axios from 'axios';
import https from 'https';

axios.defaults.baseURL = 'https://shikimori.one/';
axios.defaults.headers['User-Agent'] = process.env.APPLICATION_NAME;
axios.defaults.httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

export class Shiki {
  public async auth(code: string) {
    const form = new FormData();
    form.append('grant_type', 'authorization_code');
    form.append('client_id', process.env.CLIENT_ID);
    form.append('client_secret', process.env.CLIENT_SECRET);
    form.append('code', code);
    form.append('redirect_uri', 'https://shikimori.fun/auth/login');

    return await axios.post('oath/token');
  }

  public async search(match?: string) {
    try {
      const res = await axios.get(`api/animes`, {
        params: {
          search: match,
          limit: 10
        }
      });
      return res.data;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  public async user(token: string) {
    return {
      loggedIn: true,
      userData: {
        id: 1234,
        image: 'https://shikimori.fun/layout/images/logo.png'
      }
    };
  }
}

const shiki: Shiki = new Shiki();
export default shiki;
