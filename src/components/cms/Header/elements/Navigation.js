import Link from "next/link";
import { Col } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={`d-flex ${
          positionClass ? positionClass : "justify-content-end"
        }`}
      >
        <li>
          <Link href="/">
            <a className="nav-link">
              HOME <IoIosArrowDown />
            </a>
          </Link>

          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/home/fashion-one">
                <a>Fashion Home One</a>
              </Link>
            </li>
            <li>
              <Link href="/home/fashion-two">
                <a>Fashion Home Two</a>
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-one">
                <a>Furniture Home One</a>
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-two">
                <a>Furniture Home Two</a>
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-one">
                <a>Electronics Home One</a>
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-two">
                <a>Electronics Home Two</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              SHOP <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">SHOP PAGE LAYOUT</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Grid Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Grid Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">
                    <a>List Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">
                    <a>List Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>List No Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">OTHER PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/other/cart">
                    <a>Cart</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/checkout">
                    <a>Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/my-account">
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist">
                    <a>Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/compare">
                    <a>Compare</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/order-completed">
                    <a>Order Completed</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-basic/lorem-ipsum-fashion-eight"
                  >
                    <a>Default</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-left-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-left-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-right-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-right-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-thumb-left/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-thumb-left/lorem-ipsum-fashion-eight"
                  >
                    <a>Thumb Left</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <div className="header-banner">
                <div className="header-banner__content">
                  <div className="shop-banner">
                    <div className="banner-img overlay-bg--40">
                      <img
                        src="/assets/images/banner/shop_banner.jpg"
                        alt="shop_banner"
                      />
                    </div>
                    <div className="shop-bn-content">
                      <h5 className="text-uppercase shop-subtitle">
                        New Collection
                      </h5>
                      <h3 className="text-uppercase shop-title">
                        Sale 30% Off
                      </h3>
                      <Link href="/shop/grid-left-sidebar">
                        <a className="btn btn-white rounded-0 btn-sm text-uppercase">
                          Shop Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="/">
            <a className="nav-link">
              PRODUCTS <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--mega sub-menu--mega--with-banner">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">SHOP PAGE LAYOUT</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/grid-left-sidebar">
                    <a>Grid Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    <a>Grid Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">
                    <a>List Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">
                    <a>List Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    <a>List No Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">OTHER PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/other/cart">
                    <a>Cart</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/checkout">
                    <a>Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/my-account">
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist">
                    <a>Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/compare">
                    <a>Compare</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other/order-completed">
                    <a>Order Completed</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-basic/lorem-ipsum-fashion-eight"
                  >
                    <a>Default</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-left-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-left-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-right-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-right-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-thumb-left/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-thumb-left/lorem-ipsum-fashion-eight"
                  >
                    <a>Thumb Left</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-basic/lorem-ipsum-fashion-eight"
                  >
                    <a>Default</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-left-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-left-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-right-sidebar/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-right-sidebar/lorem-ipsum-fashion-eight"
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-thumb-left/[slug]?slug=lorem-ipsum-fashion-eight"
                    as="/shop/product-thumb-left/lorem-ipsum-fashion-eight"
                  >
                    <a>Thumb Left</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="d-lg-flex sub-menu--mega__column--banners">
              <Col lg={4}>
                <div className="header-banner p-0">
                  <img
                    src="/assets/images/banner/menu_banner1.jpg"
                    alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/grid-left-sidebar">
                      <a>Shop now</a>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="header-banner p-0">
                  <img
                    src="/assets/images/banner/menu_banner2.jpg"
                    alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/grid-left-sidebar">
                      <a>Shop now</a>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="header-banner p-0">
                  <img
                    src="/assets/images/banner/menu_banner3.jpg"
                    alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/grid-left-sidebar">
                      <a>Shop now</a>
                    </Link>
                  </div>
                </div>
              </Col>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
            <a className="nav-link">
              PAGES <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/other/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/other/contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="/other/faq">
                <a>F.A.Q</a>
              </Link>
            </li>
            <li>
              <Link href="/other/not-found">
                <a>404 Error Page</a>
              </Link>
            </li>
            <li>
              <Link href="/other/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/other/register">
                <a>Register</a>
              </Link>
            </li>
            <li>
              <Link href="/other/terms">
                <a>Terms & Conditions</a>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/">
            <a className="nav-link">
              BLOG <IoIosArrowDown />
            </a>
          </Link>
          <ul className="sub-menu sub-menu--one-column sub-menu--one-column--has-children sub-menu--one-column--reverse">
            <li>
              <Link href="/blog/grid-four-columns">
                <a>
                  Grids <IoIosArrowForward />
                </a>
              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/grid-three-columns">
                    <a>Three Columns</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-four-columns">
                    <a>Four Columns</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-left-sidebar">
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-right-sidebar">
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-left-sidebar">
                    <a>Standard Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-right-sidebar">
                    <a>Standard Right Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/list-left-sidebar">
                <a>
                  Lists <IoIosArrowForward />
                </a>
              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/list-left-sidebar">
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/list-right-sidebar">
                    <a>Right Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/post-left-sidebar">
                <a>
                  Single Post <IoIosArrowForward />
                </a>
              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/post-left-sidebar">
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-right-sidebar">
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-slider">
                    <a>Slider Post</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-audio">
                    <a>Audio Post</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-video">
                    <a>Video Post</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/other/contact-us">
            <a className="nav-link">CONTACT US</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
