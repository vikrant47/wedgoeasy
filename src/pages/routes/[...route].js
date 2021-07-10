import {LayoutOne} from "../../layouts";
import {HeroSliderOne} from "../../components/HeroSlider";
import heroSliderOneData from "../../data/hero-sliders/hero-slider-one.json";
import {BannerOne, BannerTwo} from "../../components/Banner";
import {ProductTab} from "../../components/ProductTab";
import {ProductSliderOne} from "../../components/ProductSlider";
import {TestimonialOne} from "../../components/Testimonial";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";
import {IconBoxOne} from "../../components/IconBox";
import {connect} from "react-redux";
import {getProducts} from "../../lib/product";
import {TenantService} from "../../modules/engine/services/tenant.service";
import {CmsRoute} from "../../modules/cms/cms.route";

function Route({cmsRoute}) {
  return (
    <div>
      {/* hero slider */}
      {/*<HeroSliderOne heroSliderData={heroSliderOneData}/>*/}
      {/* double banner */}
      <BannerTwo/>
      {/* tab product */}
      {/*<ProductTab
        title="Exclusive Products"
        newProducts={newProducts}
        bestSellerProducts={bestSellerProducts}
        featuredProducts={featuredProducts}
        saleProducts={saleProducts}
      />*/}
      {/* single banner */}
      <BannerOne/>
      {/* product slider */}
      {/*<ProductSliderOne title="Featured Products" products={featuredProducts}/>
       testimonial
      <TestimonialOne testimonialData={testimonialOneData}/>*/}
      {/* icon box */}
      <IconBoxOne/>
    </div>
  );
}

export async function getStaticPaths() {
  return {paths: [], fallback: true};
}

// This also gets called at build time
export async function getStaticProps({params}) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const cmsRoute = new CmsRoute(params.route.join('/'));
  await cmsRoute.loadPageData();

  // Pass post data to the page via props
  return {props: {cmsRoute: {}}};
}

export default Route;
