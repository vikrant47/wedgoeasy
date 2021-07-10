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
import {CmsRoute} from "../../modules/cms/models/cms.route";
import CmsPageLayout from "../../layouts/CmsPageLayout";

function Route({pageData}) {
  if (pageData) {
    const page = pageData.contents.page;
    return (
      <div className={'page-' + page.name}>
        <CmsPageLayout page={page}/>
      </div>
    );
  }
  return <div>Loading...</div>;
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
  return {props: {pageData: cmsRoute.pageData}};
}

export default Route;

