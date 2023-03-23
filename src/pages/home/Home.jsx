import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import TopFeatured from '../../components/topFeatured/TopFeatured'
import PropertyType from '../../components/propertyType/propertyType'
import FeaturedProperties from '../../components/featuredProperties/featuredProperties'
import './home.css'
import MailList from '../../components/mailList/MailList'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <TopFeatured />
        <Featured />
        <h1 className="homeTitle">Explore Indonesia</h1>
        <p className='pi'>These popular destinations have a lot to offer</p>
        <PropertyList />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyType />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
      </div>
    </div>
  )
}

export default Home