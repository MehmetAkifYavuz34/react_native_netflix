import user1 from '../assets/image/user1.png';
import user2 from '../assets/image/user2.png';
import user3 from '../assets/image/user3.png';
import user4 from '../assets/image/user4.png';
import user5 from '../assets/image/user5.png';

const userImages = [user1, user2, user3, user4, user5];
const getRandomUserImage = () => {
  const randomIndex = Math.floor(Math.random() * userImages.length);
  return userImages[randomIndex];
};

export default getRandomUserImage;
