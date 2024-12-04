import axios from 'axios';
import * as cheerio from 'cheerio';

export async function getTikTokProfileImage(username) {
  try {
    const response = await axios.get(`https://www.tiktok.com/@${username}`);
    const html = response.data;
    const $ = cheerio.load(html);
    const profileImage = $('img[class*="css-1zpj2q-ImgAvatar e1e9er4e1"]').attr('src');
    return profileImage;
  } catch (error) {
    console.error('Erro ao obter a imagem de perfil:', error);
    return null;
  }
}

// Export the function to be used by other modules
export default {
  getTikTokProfileImage
};