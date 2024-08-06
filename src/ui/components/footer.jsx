import footerStyle from "../../assets/style/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle.main}>
      <section className={footerStyle.footer}>
        <div className='Container'>
          <div className={footerStyle.content}>
            <h5>Fakhrialfi9_ Studio © 2021 – 2024. All rights reserved.</h5>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
