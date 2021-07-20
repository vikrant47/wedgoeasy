import { CmsSection } from '../modules/cms/models/cms.section';
import Header from '../components/cms/Header/Header';
import Footer from '../components/cms/Footer/Footer';

const CmsPageLayout = ({ children, page, website }) => {
  if (page) {
    const { sections } = page.pageView;
    return (
      <div className={`page-wrapper ${page.name}`}>
        <div className='header-wrapper'>
          <Header website={website}/>
        </div>
        {sections.map((sec, index) => {
          const section = new CmsSection(sec);
          console.log(JSON.stringify(section));
          const sectionType = section.getType();
          const Component = section.getSectionComponent();
          return (<div key={index} className={`section-wrapper-${sectionType.name}`} id={`${sectionType.id}_${index}`}>
            <Component section={section}/>
          </div>);
        })}
        <div className='footer-wrapper'>
          <Footer website={website}/>
        </div>
      </div>
    );
  }
  return (
    <div className={`page-wrapper ${page.name}`}>
      <div className='header-wrapper'>
        <Header website={website}/>
      </div>
      <div>Loading....</div>
      <div className='footer-wrapper'>
        <Footer website={website}/>
      </div>
    </div>);
};
export default CmsPageLayout;
