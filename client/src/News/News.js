import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader';
import './News.css';
import SCENE from '../Assets/scene1.png';
import COW from '../Assets/COW.png';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const News = () => {
  const [indianFarmingNews, setIndianFarmingNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndianFarmingNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=farming&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f'
        );
        const articles = response.data.articles;

        // Filter articles with both title and image
        const filteredArticles = articles.filter(article => article.title && article.urlToImage);

        // Take the first 5 filtered articles
        const firstFiveArticles = filteredArticles.slice(0, 5);
        setIndianFarmingNews(firstFiveArticles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Indian farming news:', error);
        setLoading(false);
      }
    };

    fetchIndianFarmingNews();
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <PulseLoader color="#1b591c" loading={loading} size={20} />
        </div>
      ) : (
        <div className='news'>
          <div>
            <img className='img' src={COW} alt='img' />
          </div>
          <div className='thenews'>
            <div className='top-section'>
              <div className='d0' onClick={() => handleClick(indianFarmingNews[0]?.url)}>
                {indianFarmingNews[0]?.urlToImage && <img src={indianFarmingNews[0].urlToImage} alt={indianFarmingNews[0].title} />}
                <h3 className='image-title'>{indianFarmingNews[0]?.title}</h3>
              </div>
              <div className='d1' onClick={() => handleClick(indianFarmingNews[1]?.url)}>
                {indianFarmingNews[1]?.urlToImage && <img src={indianFarmingNews[1].urlToImage} alt={indianFarmingNews[1].title} />}
                <h3 className='image-title1'>{indianFarmingNews[1]?.title}</h3>
              </div>
            </div>
            <div className='down-section'>
              {indianFarmingNews.slice(2).map((article, index) => (
                <div key={index + 2} className={`d${index + 2}`} onClick={() => handleClick(article.url)}>
                  {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                  <h3 className='image-title2'>{article.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {!loading && (
        <div className='footer-section'>
          <div className='image-container'>
            <img className='footer-img' src={SCENE} alt='scene' />
            <div className='footer'>
              <h1 className='h1-news'>Plow. Proper. Prospect</h1>
              <div className='social-icons'>
                <FaTwitter className='iconne' />
                <FaInstagram className='iconne' />
                <FaLinkedin className='iconne' />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
