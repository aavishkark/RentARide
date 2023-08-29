import React from 'react';
import MyFormComponent from '../Components/Form/Form';
import CarTypesComponent from '../Components/CarTypes/Cartypes';
import HoWToBook from '../Components/HowToBook/HowToBook';
import WhyChose from '../Components/Why/WhyChoose';
import PopularPlaces from '../Components/PopularPlaces/PopularPlaces';
import DisplayReviews from '../Components/Reviews/DisplayReviews';
import Faq from '../Components/FAQ/Faq';
import CarList from '../Components/AllCars/AllCars';
function Home() {
    return (
      <div>
   <MyFormComponent></MyFormComponent>
   <CarList></CarList>
   <CarTypesComponent></CarTypesComponent>
   <HoWToBook></HoWToBook>
   <WhyChose></WhyChose>
   <PopularPlaces></PopularPlaces>
   <DisplayReviews></DisplayReviews>  
   <Faq></Faq>
      </div>
    );
  }
  
  export default Home;
  
