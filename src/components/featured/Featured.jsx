import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/691530.jpg?k=d7c3bf00b1194d220f2bb995f4888d6062e93d3b366b6df8633484d2eac7df03&o=" alt="" className="featuredImg" />
        <div className="featuredTitle">
        <h1>Canggu</h1>
        <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/688062.jpg?k=1262974dc7e10bba90ada2c6630958862b2a7fdd480f4309032b8f9df1c2bb81&o=" alt="" className="featuredImg" />
        <div className="featuredTitle">
        <h1>Kuta</h1>
        <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/600x600/644683.jpg?k=383ab34552dfd954f467022b2eb3ae78ab2e39cd79894ecb35ab4d70d45ac3e7&o=" alt="" className="featuredImg" />
        <div className="featuredTitle">
        <h1>Uluwatu</h1>
        <h2>123 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured