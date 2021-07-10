import {CMS_SECTION_TYPES} from "../enums/section.types";

export class CmsSection {
  section;

  /**@param section string*/
  constructor(section) {
    this.section = section;
  }

  /**@return string*/
  getType() {
    return this.section.ref_section_type_id;
  }

  /**@return string|Function*/
  getSectionComponent() {
    const sectionType = this.getType();
    const component = CMS_SECTION_TYPES[sectionType.name];
    if (typeof component === 'function') {
      return component(this);
    }
    return component;
  }

  /**
   * @return Array
   * */
  getContents() {
    if (this.section.query_component_data) {
      return this.section.query_component_data;
    }
    if (this.section.contents) {
      return this.section.contents;
    }
  }
}
