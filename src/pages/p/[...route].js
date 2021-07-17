import { CmsPage } from '../../modules/cms/models/cms.page';
import CmsPageLayout from '../../layouts/CmsPageLayout';
import CmsHead from '../../components/cms/Head/CmsHead';
import { CmsWebsite } from '../../modules/cms/models/cms.website';

function Route({ pageData, website }) {
  if (website) {
    const { page } = pageData;
    return (
      <>
        <CmsHead page={page} website={website}/>
        <div className={`page-${page.name}`}>
          <CmsPageLayout page={page} website={website}/>
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
  const website = CmsWebsite.instance();
  await website.load();
  const cmsRoute = new CmsPage(params.route.join('/'));
  await cmsRoute.load();

  // Pass post data to the page via props
  return { props: { pageData: cmsRoute.toPojo(), website: website.toPojo() }};
}

export default Route;

