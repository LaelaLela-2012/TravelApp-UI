import './topFeatured.css';

const TopFeatured = () => {
  return (
    <div className='topfeatured'>
      <div className="topfeaturedItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=" alt="" className="topfeaturedImg" />
        <div className="topfeaturedTitle">
        <h1>Ubud</h1>
        <h2>123 Properties</h2>
        </div>
      </div>
      <div className="topfeaturedItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/688053.jpg?k=da426cecdc6492da255ca0612c4bb41bd785b2565c83405f7281f15c05b16376&o=" alt="" className="topfeaturedImg" />
        <div className="topfeaturedTitle">
        <h1>Jakarta</h1>
        <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default TopFeatured