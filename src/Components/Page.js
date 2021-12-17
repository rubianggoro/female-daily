import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Carousel from './Carousel/Carousel'
import EditorChoice from './EditorChoice/EditorChoice'
import Section from './Section/Section'
import SectionInternalCampaign from './SectionInternalCampaign/SectionInternalCampaign'
import LatestArticles from './LatestArticles/LatestArticles'
import LatestReviews from './LatestReviews/LatestReviews'
import PopularGroups from './PopularGroups/PopularGroups'
import LatestVideos from './LatestVideos/LatestVideos'
import TrandingThisWeek from './TrandingThisWeek/TrandingThisWeek'
import TopBrands from './TopBrands/TopBrands'
import Footer from './Footer/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { getData } from "../Redux/Actions/actions";

const Page = () => {

  const dispatch = useDispatch();
  const actionData = useSelector((state) => state.getData.data);
  
  useEffect(() => {
    const loadData = async () => {
      await dispatch(getData())
    };
    loadData()
  }, [dispatch])

  return (
    <>
      <Navbar/>
      <Carousel/>
      {/* <Sekeleton/> */}
      <EditorChoice data={actionData["editor's choice"]}/>
      <Section/>
      <SectionInternalCampaign/>
      <LatestArticles data={actionData["latest articles"]}/>
      <LatestReviews data={actionData["latest review"]}/>
      <PopularGroups/>
      <LatestVideos/>
      <TrandingThisWeek/>
      <TopBrands/>
      <Footer/>
    </>
  )
}

export default Page