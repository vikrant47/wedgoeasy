import { CmsRoute } from '../../modules/cms/models/cms.route';
import CmsPageLayout from '../../layouts/CmsPageLayout';
import CmsHead from '../../components/cms/Head/CmsHead';

function Route({ pageData }) {
  if (pageData) {
    const { page } = pageData.contents;
    return (
      <>
        <CmsHead page={page}/>
        <div className={`page-${page.name}`}>
          <CmsPageLayout page={page}/>
        </div>
      </>
    );
  }
  return <div>Loading...</div>;
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const cmsRoute = new CmsRoute(params.route.join('/'));
  await cmsRoute.loadPageData();

  // Pass post data to the page via props
  return { props: { pageData: cmsRoute.pageData }};
}

export default Route;

