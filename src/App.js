import Header from "./Header.js";
import Collection from "./Collection.js";
import NewProducts from "./NewProducts.js";
import Footer from "./Footer.js";
import Card from "./Card";


function App() {
  return (
    <div className="App">
      <Header />

      <Collection
        CategoryLabel1="Koala"
        CategoryLabel2="Panda"
        CategoryLabel3="Elephant"
        CategoryImg1="./img/koala1.png"
        CategoryImg2="./img/panda1.png"
        CategoryImg3="./img/elephant1.png"
      />

      <NewProducts
        CategoryLabel1="Tees"
        CategoryLabel2="Mugs"
        CategoryLabel3="Phone cases"
        CategoryLabel4="Accessories"
        // Product #1
        ProductImg1="./img/tee1.png"
        ProductSale1="50%"
        ProductCategory1="T-shirt"
        ProductName1="save the wildlife black shirt"
        ProductPrice1="$20.00"
        ProductOldPrice1="$40.00"
        // Product #2
        ProductImg2="./img/case1.png"
        ProductSale2="50%"
        ProductCategory2="phonecase"
        ProductName2="save the turtles blue phonecase"
        ProductPrice2="$7.00"
        ProductOldPrice2="$14.00"
        // Product #3
        ProductImg3="./img/tee2.png"
        ProductSale3="50%"
        ProductCategory3="T-shirt"
        ProductName3="save the wildlife green shirt"
        ProductPrice3="$20.00"
        ProductOldPrice3="$40.00"
        // Product #4
        ProductImg4="./img/mask1.png"
        ProductSale4="50%"
        ProductCategory4="Accessories"
        ProductName4="Double-layerd mask"
        ProductPrice4="$5.00"
        ProductOldPrice4="$10.00"
        // Product #5
        ProductImg5="./img/mug1.png"
        ProductSale5="50%"
        ProductCategory5="Mugs"
        ProductName5="Save the sharks mug"
        ProductPrice5="$8.00"
        ProductOldPrice5="$4.00"
      />

      <Footer />
    </div>
  );
}

export default App;
