// import React from 'react';
// import cropsData from './Cropdata';
import React, { useEffect, useState } from 'react';
import { getAllCrops } from '../backendservice';
import './CropInventory.css';
import TomatoImage from '../Images/tomato.jpg'; 
import AppleImage from '../Images/apple.jpg'; 
import CarrotImage from '../Images/carrot.jpg'; 
import PotatoImage from '../Images/potato.jpg'; 
import BananaImage from '../Images/banana.jpg'; 
import LettuceImage from '../Images/lettuce.jpg';     
import GrapesImage from '../Images/Grapes.jpg';
import CucumberImage from '../Images/cucumber.jpg';
import OrangeImage from '../Images/orange.jpg';
import SpinachImage from '../Images/spinach.jpg';
import MangoImage from '../Images/mango.jpg';
import RiceImage from '../Images/rice.jpg';
import JowarImage from '../Images/jowar.avif';
import BajraImage from '../Images/bajra.jpg';
import TurImage from '../Images/tur.jpg';
import MoongImage from '../Images/moong.jpg';
import UradImage from '../Images/urad.avif';
import CottonImage from '../Images/cotton.jpg';
import JuteImage from '../Images/jute.png';
import GroundnutImage from '../Images/groundnut.jpeg';
import SoybeanImage from '../Images/soyabean.jpg';
import WheatImage from '../Images/wheat.jpg';
import BarleyImage from '../Images/barley.jpg';
import MaizeImage from '../Images/maize.jpg';
import RubberImage from '../Images/rubber.jpg';
import GramImage from '../Images/gram.webp';
import MustardImage from '../Images/mustard.jpg';
import SesameImage from '../Images/sesame.jpg';
import RapeseedImage from '../Images/rapeseed.jpg';
import SugarcaneImage from '../Images/sugarcane.avif';
import CastorImage from '../Images/castor.webp';

const imageMap = {
  TomatoImage: TomatoImage,
  AppleImage: AppleImage,
  CarrotImage: CarrotImage,
  PotatoImage: PotatoImage,
  BananaImage: BananaImage,
  LettuceImage: LettuceImage,
  GrapesImage: GrapesImage,
  CucumberImage: CucumberImage,
  OrangeImage: OrangeImage,
  SpinachImage: SpinachImage,
  MangoImage: MangoImage,
  RiceImage: RiceImage,
  JowarImage: JowarImage,
  BajraImage: BajraImage,
  TurImage: TurImage,
  MoongImage: MoongImage,
  UradImage: UradImage,
  CottonImage: CottonImage,
  JuteImage: JuteImage,
  GroundnutImage: GroundnutImage,
  SoybeanImage: SoybeanImage,
  WheatImage: WheatImage,
  BarleyImage: BarleyImage,
  MaizeImage: MaizeImage,
  RubberImage: RubberImage,
  GramImage: GramImage,
  MustardImage: MustardImage,
  SesameImage: SesameImage,
  RapeseedImage: RapeseedImage,
  SugarcaneImage: SugarcaneImage,
  CastorImage: CastorImage,
};


const CropInventory = () => {
  const [cropsData, setCropsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCrops();
        setCropsData(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="crpcontainer">
        {cropsData.map((crop, index) => (
          <div key={crop.cropsId} className={`box box-${index + 1}`}>
            <div className="crop-summary">
              <h3 className='crop-name'>{crop.cropsName}</h3>
              {index === 0 && (
                <>
                  <p className='cip1'>Type: {crop.cropsType}</p>
                  <p className='cip1'>District: {crop.cropsDistrict}</p>
                  <p className='cip1'>Found in: {crop.cropsFoundin}</p>
                  <p className='cip1'>State: {crop.cropsState}</p>
                  <p className='cip2'>Description: {crop.cropsDescription}</p>
                </>
              )}
              {index === 1 && (
                <>
                  <p className='cip3'>Type: {crop.cropsType}</p>
                  <p className='cip3'>District: {crop.cropsDistrict}</p>
                  <p className='cip3'>Found in: {crop.cropsFoundin}</p>
                  <p className='cip3'>State: {crop.cropsState}</p>
                  <p className='cip4'>Description: {crop.cropsDescription}</p>
                </>
              )}
              {index === 2 && (
                <>
                  <p className='cip3'>Type: {crop.cropsType}</p>
                  <p className='cip3'>District: {crop.cropsDistrict}</p>
                  <p className='cip3'>Found in: {crop.cropsFoundin}</p>
                  <p className='cip3'>State: {crop.cropsState}</p>
                  <p className='cip4'>Description: {crop.cropsDescription}</p>
                </>
              )}
              {index > 2 && (
                <>
                  <p>Type: {crop.cropsType}</p>
                  <p>District: {crop.cropsDistrict}</p>
                  <p>Found in: {crop.cropsFoundin}</p>
                </>
              )}
            </div>
            <img src={imageMap[crop.cropsThumb]} alt={crop.cropsName} className="crop-thumb" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CropInventory;
