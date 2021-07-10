export const CMS_SECTION_TYPES = {
  account_section_type: () => {

  },
  header_section_type: () => {
    return require('../../../components/cms/Header/Header').default;
  },
  home_banner_section_type: () => {
    return require('../../../components/cms/Banner/HomeBanner').default;
  },
  login_section_type: () => {

  },
  register_section_type: () => {

  },
  two_column_section_type: () => {

  },
};
