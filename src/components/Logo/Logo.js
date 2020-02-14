import React from "react";

const Logo = ({ footer, height, className="" }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     wordpressAcfHome {
  //       acf {
  //         common {
  //           header_logo {
  //             localFile {
  //               childImageSharp {
  //                 fixed(width: 165) {
  //                   ...GatsbyImageSharpFixed
  //                 }
  //               }
  //             }
  //           }
  //           footer_logo {
  //             localFile {
  //               childImageSharp {
  //                 fixed(width: 165) {
  //                   ...GatsbyImageSharpFixed
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const headerImg = data.wordpressAcfHome.acf.common.header_logo.localFile.childImageSharp.fixed;
  // const footerImg = data.wordpressAcfHome.acf.common.footer_logo.localFile.childImageSharp.fixed;

  return (
    <div className={`${className}`}>
      {/* <Img
        fixed={footer ? footerImg : headerImg}
        css={`
          height: ${height || "auto"};
        `}
        alt="Logo"
      /> */}
      Logo
    </div>
  );
};

export default Logo;
