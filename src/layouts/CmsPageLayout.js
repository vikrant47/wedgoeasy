import {Fragment} from "react";
import {HeaderOne} from "../components/Header";
import {FooterOne} from "../components/Footer";
import {CMS_SECTION_TYPES} from "../modules/cms/enums/section.types";
import {CmsSection} from "../modules/cms/models/cms.section";

const CmsPageLayout = ({children, page}) => {
  const sections = page.pageView.sections;
  return (
    <Fragment>
      {sections.map((sec, index) => {
        const section = new CmsSection(sec);
        const sectionType = section.getType();
        const Component = section.getSectionComponent();
        return (<div key={index} className={"section-wrapper" + sectionType.name} id={section.id + '_' + index}>
          <Component section={section}></Component>
        </div>);
      })}
    </Fragment>
  );
};
export default CmsPageLayout;
