import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { useRouter } from 'next/router';
import { CmsPage } from '../../modules/cms/models/cms.page';
import CmsPageLayout from '../../layouts/CmsPageLayout';
import CmsHead from '../../components/cms/Head/CmsHead';
import { CmsWebsite } from '../../modules/cms/models/cms.website';
import NotificationRenderer from '../../components/cms/Notification/NoticationRenderer';
import { NotificationService } from '../../modules/cms/services/notification.service';
import { NavigationManager } from '../../modules/cms/services/navigation.manager';

function Route({ pageData, website, notifications }) {
  const { addToast } = useToasts();
  const router = useRouter();
  NotificationService.instance().initialize({ addToast });
  NavigationManager.instance().initialize(router);
  if (website) {
    const { page } = pageData;
    return (
      <>
        <NotificationRenderer/>
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

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(Route);

