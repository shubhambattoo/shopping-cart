import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CartContext } from '../../context/cartContext';
import { Loader } from '../../components/loader/Loader';
import { request } from '../../utils/fetch';
import Noty from 'noty';
import style from './product.module.css';
import './../../../node_modules/noty/lib/noty.css';
import './../../../node_modules/noty/lib/themes/relax.css';

const breakPoints = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1921 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1201 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1200, min: 0 },
    items: 1,
  },
};

const breakPointsFS = {
  preview: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  return (
    <div className={style.arrow_btns}>
      <button type="button" onClick={() => previous()}>
        <span className="material-icons">chevron_left</span>
      </button>
      <button type="button" onClick={() => next()}>
        <span className="material-icons">chevron_right</span>
      </button>
    </div>
  );
};

const CarouselFullScreen = ({ product }) => {
  return (
    <Carousel
      infinite={true}
      partialVisible={false}
      responsive={breakPointsFS}
      keyBoardControl
      swipeable
      showDots={false}
      arrows={false}
      customButtonGroup={<ButtonGroup totalItems={5} />}
      renderButtonGroupOutside={true}
    >
      {product.images.map((img, i) => (
        <div className={style.preview_large} key={i}>
          <div className={style.cover_large}>
            <img src={img.src} alt={product.name} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const CarouselFitScreen = ({ product }) => {
  return (
    <Carousel
      infinite={true}
      partialVisible={false}
      responsive={breakPoints}
      keyBoardControl
      swipeable
      showDots={false}
      arrows={false}
      customButtonGroup={<ButtonGroup totalItems={5} />}
      renderButtonGroupOutside={true}
    >
      {product.images.map((img, i) => (
        <div className={style.preview} key={i}>
          <div className={style.cover}>
            <img src={img.src} alt={product.name} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const ViewProduct = () => {
  let { id } = useParams();

  const { setProduct } = useContext(CartContext);
  const [product, setProductDetails] = useState(null);
  const [colors, setColors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [colorSelected, setColorSelected] = useState(1);

  useEffect(() => {
    document.body.classList.add('noscroll-web');
    document.body.classList.remove('trans');
  }, []);

  useEffect(() => {
    const productId = id.split('-').pop();
    const url = `products/${productId}`;
    request(url)
      .then((res) => {
        setProductDetails(res.data.product);
        const allColors = res.data.product.images
          .map((img) => ({
            name: img.color,
            code: img.hex,
          }))
          .filter((v, i, a) => a.findIndex((t) => t.name === v.name) === i);
        setColors(allColors);
        setIsLoading(false);
      })
      .catch((err) => {
        setProductDetails(null);
        setIsLoading(false);
      });
  }, [id]);

  const [fullView, setFullView] = useState(false);

  function addToCart() {
    const cartProduct = {
      qty: 1,
      product,
    };
    setProduct(cartProduct);
    new Noty({
      layout: 'bottomCenter',
      progressBar: false,
      text: `<div style="display:flex; align-items: center;gap:15px;"><img width="40" src=${product.images[0].src} alt='sneaker' /> <div>Added to cart</div></div>`,
      theme: 'relax',
      timeout: 1000
    }).show();
  }

  const getCustomerType = (code) => {
    let cust = '';
    switch (code) {
      case 2:
        cust = 'Men';
        break;
      case 3:
        cust = 'Women';
        break;
      case 4:
        cust = 'Unisex';
        break;
      case 5:
        cust = 'Kids';
        break;
      default:
        cust = 'All';
        break;
    }
    return cust;
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div
        className={`${style.view_wrapper} ${fullView ? style.full_view : ''}`}
      >
        <div className={style.view_background}>
          {fullView ? (
            <CarouselFullScreen product={product} />
          ) : (
            <CarouselFitScreen product={product} />
          )}
          <div
            className={`${style.view_controller} ${
              fullView ? style.right_aligned : ''
            }`}
          >
            <div className={style.fs_btn}>
              {!fullView ? (
                <button type="button" onClick={(e) => setFullView(true)}>
                  <span className="material-icons">add</span>
                </button>
              ) : (
                <button
                  type="button"
                  className={style.dark_btn}
                  onClick={(e) => setFullView(false)}
                >
                  <span className="material-icons">close</span>
                </button>
              )}
            </div>
          </div>
        </div>
        {!fullView && (
          <div className={style.view_foreground}>
            <div className={style.product_details}>
              <div className={style.details_meta}>
                <ul className={style.breadcrumb}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Products</li>
                  <li>{product.category}</li>
                  <li>{getCustomerType(product.customerType)}</li>
                </ul>
                <span className={style.details_id}>
                  Id: {product.productCode}
                </span>
              </div>
              <div className={style.details_info}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
              <div className={style.details_more}>
                <div className={style.colors}>
                  {colors.map((c, i) => (
                    <span
                      key={i}
                      title={c.name}
                      style={{
                        backgroundColor: c.code,
                        border: `1px solid ${
                          c.name === 'White' ? '#ddd' : c.code
                        }`,
                      }}
                      className={`${
                        colorSelected === i + 1 ? style.selected_color : ''
                      }`}
                      onClick={(e) => setColorSelected(i + 1)}
                    ></span>
                  ))}
                </div>
                <div className={style.ratings_reviews}>
                  <div className={style.r_count}>
                    {product.ratings.total} Reviews
                  </div>
                  <div className={style.stars}>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star</span>
                    <span className="material-icons">star_half</span>
                    <span className="material-icons">star_outline</span>
                  </div>
                </div>
              </div>
              <div className={style.price_big}>
                {product.currency.format} {product.price.toFixed(2)}
              </div>
              <div className={style.details_actions}>
                <div className={style.size_details}>
                  <span>Available sizes:</span>
                  <span>US {product.sizes.join(', ')}</span>
                </div>
                <div className={style.action_buy} onClick={addToCart}>
                  <span className={style.price}>
                    {' '}
                    {product.currency.format} {product.price.toFixed(2)}
                  </span>
                  <span className={style.buy_text}>Add to Cart</span>
                  <span className={`material-icons ${style.buy_icon}`}>
                    shopping_cart
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
