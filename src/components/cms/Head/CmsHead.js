import Head from 'next/head';
import { useRouter } from 'next/router';
import { Engine } from '../../../modules/engine/core/engine';

const CmsHead = ({ children, page }) => {
  const router = useRouter();
  const { pageView } = page;
  return (<Head>
    <title>{pageView.meta_title || pageView.name}</title>
    <meta name='description' content={pageView.meta_description}/>
    <meta name='keywords' content={pageView.meta_keywords}/>
    <meta property='og:url' content={router.pathname}/>
    <meta property='og:type' content='article'/>
    <meta property='og:title' content={pageView.meta_title || pageView.name}/>
    <meta property='og:description' content={pageView.meta_description}/>
    <meta property='og:image' content={Engine.media(pageView.meta_image)}/>
    <og-title>{pageView.meta_title || pageView.name}</og-title>
    <link
      href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap'
      rel='stylesheet'
    />
    <link
      href='https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap'
      rel='stylesheet'
    />
  </Head>);
};
export default CmsHead;
