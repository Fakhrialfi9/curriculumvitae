import pagesStyle from "../../../assets/style/views/pages.module.css";
import contactData from "../../../data/pages/contactData.js";
import contactStyle from "../../../assets/style/views/section/contact.module.css";
import { SquareArrowOutUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id='contact' className={pagesStyle.contact}>
      <div className='Container'>
        <div className={contactStyle.contactcontent}>
          <div className={contactStyle.header}>
            <h5>Contact</h5>
          </div>

          <div className={contactStyle.body}>
            {contactData.map((contact, contactData) => (
              <div key={contactData} className={contactStyle.information}>
                <div className={contactStyle.brand}>
                  <h5>{contact.brand}</h5>
                </div>

                <div className={contactStyle.heading}>
                  <div className={contactStyle.name}>
                    <a href={contact.to}>
                      {contact.name} <SquareArrowOutUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
