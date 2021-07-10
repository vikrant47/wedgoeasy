import { Fragment } from "react";
import { HeaderOne } from "../components/Header";
import { FooterOne } from "../components/Footer";

const CmsPageLayout = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
export default CmsPageLayout;
