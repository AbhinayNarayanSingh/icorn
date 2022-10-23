import { APP_LOGO, LIGHT_GREY_FONT, PRIMARY_COLOUR } from "../../../utils/Environment";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <Link href="/">
            <img src={APP_LOGO[0]} alt={APP_LOGO[1]} className="logo" />
          </Link>

          <p>
            The iCorn store uses industry-standard encryption to protect the
            confidentiality of the information you submit. Learn more about our
            Security Policy.
          </p>
          <p>Copyright © 2022 iCorn. All rights reserved.</p>
        </div>
        <style jsx>{`
          .footer-container {
            background: ${PRIMARY_COLOUR};
            padding: 1rem;
          }
          .footer {
            max-width: 1512px;
            padding: 2rem 1rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          p {
            color: ${LIGHT_GREY_FONT};
            margin: 0.5rem 0 0;
            font-size: 1rem;
            text-align: center;
          }
          .logo {
            padding-bottom: 2rem;
            height: 55px;
          }
          @media only screen and (max-width: 600px) {
            p {
              font-size: 0.8rem;
              line-height: 18px;
            }
            .footer-container {
              padding: 1rem;
            }
            .footer {
              padding: 2rem 0;
            }
            .logo {
              height: 40px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Footer;
