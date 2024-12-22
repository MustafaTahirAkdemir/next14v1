import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";


export const metadata = {
  title: 'Next App Title',
  description: 'Next.js starter app',
}


const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill />
      </div>
      <div className={styles.formContainer}></div>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Name and Surname" />
        <input type="text" placeholder="Email Addres" />
        <input type="text" placeholder="PhoneNumber (optional)" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="message"
        ></textarea>

        <button>Send</button>


      </form>
    </div>
  );
};

export default ContactPage;
