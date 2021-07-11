import { CmsSection } from '../modules/cms/models/cms.section';

const CmsPageLayout = ({ children, page }) => {
  const { sections } = page.pageView;
  return (
    <div className={`page-wrapper ${page.name}`}>
      {sections.map((sec, index) => {
        const section = new CmsSection(sec);
        const sectionType = section.getType();
        const Component = section.getSectionComponent();
        return (<div key={index} className={`section-wrapper-${sectionType.name}`} id={`${section.id}_${index}`}>
          <Component section={section}/>
        </div>);
      })}
    </div>
  );
};
export default CmsPageLayout;
