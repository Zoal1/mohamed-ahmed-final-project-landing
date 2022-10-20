function Header() {
  return (
    <header>
      {/* <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- responsive-nav --> */}
          <div id="responsive-nav">
            {/* <!-- NAV --> */}
            <ul className="main-nav nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">
                  <strong>Our Work </strong>
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>Get involved&nbsp;</strong>
                </a>
              </li>
              <li>
                <a href="#"> About us</a>
              </li>
              <li>
                <a href="#"> Adopt</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
              <li>
                <a href="#">products</a>
              </li>
            </ul>
            {/* <!-- /NAV --> */}
          </div>
          {/* <!-- /responsive-nav --> */}
          <div className="pull-right">
            <button type="button" className="primary-btn">
              Login
            </button>
            <button type="button" className="secondary-btn">
              Signup
            </button>
          </div>
        </div>
        {/* <!-- /container --> */}
      </nav>
      {/* <!-- /NAVIGATION --> */}

      {/* <!-- MAIN HEADER --> */}
      <div id="header">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- LOGO --> */}
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src="" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- /LOGO --> */}

            {/* <!-- SEARCH BAR --> */}
            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">Click here</option>
                    <option value="1">Donations</option>
                    <option value="1">Adoptions</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>
            {/* <!-- /SEARCH BAR --> */}
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/* <!-- /MAIN HEADER --> */}
    </header>
    // <!-- /HEADER -->
  );
}
export default Header;
