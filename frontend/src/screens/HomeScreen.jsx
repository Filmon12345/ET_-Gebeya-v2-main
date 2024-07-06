import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faTshirt,faHamburger,faArchive ,faBlender,faSpa,faCubes} from '@fortawesome/free-solid-svg-icons';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { useState } from 'react';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
const[dis,Setdis]=useState(false)
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  const cardStyle = {
    width: '300px',
    height: '200px',
    margin: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
  }

  const categoryText = {
    padding: '10px',
  };
function display(){
  Setdis(!dis)

 }

  return (
    <>
 
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
    <div >
    <h1 className="bg-primary"
  style={{ cursor: 'pointer',
  color:'#eee',
  padding: '10px 20px',
  backgroundColor: '#686D76',
  borderRadius: '10px',
  display: 'inline-block',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontFamily:'serif',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  transition: 'all 0.3s ease'}}onClick={display}>Category <FontAwesomeIcon icon={faArchive}/> </h1>
      <Row style={dis ? { marginLeft: "auto", marginRight: "auto", display: "flex" ,justifyContent:"center" ,fontFamily:'serif', } : { marginLeft: "auto", marginRight: "auto", display: "none" }}>
      <div className="bg-primary" style={{ ...cardStyle}}>
          <a href="category/Electronics" style={{ color: 'white', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faMicrochip} style={{ marginRight: '10px' }} />
            <div  style={categoryText}>Electronics</div>
          </a>
        </div>
        <div className="bg-primary" style={{ ...cardStyle }}>
          <a href="category/Clothes" style={{ color: 'white', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faTshirt} style={{ marginRight: '10px' }} />
            <div style={categoryText}>Clothes</div>
          </a>
        </div>
        <div className="bg-primary" style={{ ...cardStyle }}>
          <a href="category/Food" style={{ color: 'white', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faHamburger} style={{ marginRight: '10px' }} />
            <div style={categoryText}>Food</div>
          </a>
        </div>
         <div className="bg-primary" style={{ ...cardStyle}}>
          <a href="category/HomeAppliance" style={{ color: 'white', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faBlender} style={{ marginRight: '10px' }} />
            <div style={categoryText}>Home Appliance</div>
          </a>
        </div> <div className="bg-primary" style={{ ...cardStyle}}>
          <a href="category/Cosmetics" style={{ color: 'white', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faSpa} style={{ marginRight: '10px' }} />
            <div style={categoryText}>Cosmetics</div>
          </a>
        </div> <div className="bg-primary" style={{ ...cardStyle }}>
          <a href="category/Others" style={{ color: 'white', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faCubes} style={{ marginRight: '10px' }} />
            <div style={categoryText}>Others</div>
          </a>
        </div>
      </Row>
    </div>

          <Meta />
          <p style={{  color: '#343a40',
  textDecoration: 'none',
  borderRadius: '1px',
  padding: '10px 20px',
  backgroundColor: '#f2f2f2',
  fontSize: '1.1rem', // Slightly increasing the font size for better readability
  fontWeight: 'bold' }}>Latest Products</p>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
