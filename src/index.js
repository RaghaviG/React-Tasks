import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Main Function returning teh list of Books
function App (){
  return(
  <>
  {BooksList.map((book)=>{
      return(
      <>  <Books BookImg={book.BookImg}
          Bookname ={book.Bookname}
          PublishDate  ={book.PublishDate}
          Type  ={book.Type}
          Price  ={book.Price}
          AuthorName ={book.AuthorName}
          Deliverydate={book.DeliveryDate}/>
          <hr></hr>
  </>
  )})}
  </>)
}

//Function for Book
function Books(props){
console.log(props)
  return(
    <>
    <div>
      <img src={props.BookImg} alt="Image of the Book"></img>
      <h1 >{props.Bookname}</h1>
      <h2 >by {props.AuthorName}  | {props.PublishDate}</h2>
      <h4>{props.Type}</h4>
      <span>Limited time deal</span>
      <h3>₹{props.Price}</h3> 
      <h5>Get it by {props.Deliverydate}. 
      <br></br>
      FREE Delivery over ₹499. Fulfilled by Amazon</h5>
    </div>
    </>
  )
}

//Object containing teh list of Books
const BooksList = [
  {
  Bookname:'Meditations',
  AuthorName:'Marcus Aurelius',
  PublishDate:'10 August 2017',
  Price:'129',
  BookImg:'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY327_FMwebp_QL65_.jpg',
  DeliveryDate: 'January 13',
  Type:'PaperBack'
  },
  {
  Bookname:'Moonrise and Memories: Contemporary Poems to nourish your soul',
  AuthorName:'Navaneel Kar',
  PublishDate:'25 September 2006',
  Price:'169',
  BookImg:'https://m.media-amazon.com/images/I/61AQv8zwi6L._AC_UY327_QL65_.jpg',
  DeliveryDate: 'January 14',
  Type:'PaperBack'
 },
 {
 Bookname:'The Theory of Everything: The Origin and Fate of the Universe',
 AuthorName:'Stephen Hawking',
 PublishDate:'25 September 2006',
 Price:'296',
 BookImg:'https://m.media-amazon.com/images/I/51oHUvYzbsL._AC_UY327_QL65_.jpg',
 DeliveryDate: 'January 18',
 Type:'PaperBack'
 },
 {
 Bookname:'Ikigai: The Japanese secret to a long and happy life',
 AuthorName:'Héctor García and Francesc Miralles',
 PublishDate:'7 September 2017',
 Price:'313',
 BookImg:'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg',
 DeliveryDate: 'January 14',
 Type:'PaperBack'
 },
 {
 Bookname:'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)',
 AuthorName:'Mark Manson',
 PublishDate:'13 September 2016',
 Price:'423',
 BookImg:'https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UY327_FMwebp_QL65_.jpg',
 DeliveryDate: 'January 21',
 Type:'PaperBack'
 }
]

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
