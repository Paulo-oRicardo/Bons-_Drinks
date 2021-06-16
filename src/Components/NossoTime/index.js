import React from "react";

import styles from "./nosso.module.scss";

// Demo styles, see 'Styles' section below for some notes on use.
export default function NossoTime() {
  return (
    <section className={styles.contentOur}>
      <h1>Our Team</h1>
      <div className={styles.contentDescriptionTeam}>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7njwJYxu4mNe-gKO_JO2V3alorDOSGaR_Q&usqp=CAU"
            alt="edward"
          />
          <h3>Edward</h3>
          <p>
            Sou um vampirão que gosta de bons drinks. Lorem ipsum dolor sit
            amei, consenter adipisicing eleliteIPisaanimi neque porro aliquam.
            Ipsum perferendis, quam nostrum aut quibusdam natus molestiae omnis
            placeat fuga sunt quidem eius dignissimos cumque reprehenderit! Sint
          </p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqqHPn9liWWoYsl8vozxhQaHeXVSDoHr_UA&usqp=CAU"
            alt="Jacob"
          />
          <h3>Jacob</h3>
          <p>
            Sou um lobão e faço au au. Lorem ipsum dolor sit amei, consenter
            adipisicing eleliteIPisaanimi neque porro aliquam. Ipsum
            perferendis, quam nostrum aut quibusdam natus molestiae omnis
            placeat fuga sunt quidem eius dignissimos cumque reprehenderit! Sint
          </p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HDQJ68u-HFEW_lywnmsIZWxmQ71hAJCG-q7uuyXKsZaot1iiBcxg7kMV3hmUqo_icx0&usqp=CAU"
            alt="Bela"
          />
          <h3>Bela</h3>
          <p>
            Me tornei uma vampiro, que lê mentes, ea in utLorem ipsum dolor sit
            amei, consenter adipisicing eleliteIPisaanimi neque porro aliquam.
            Ipsum perferendis, quam nostrum aut quibusdam natus molestiae omnis
            placeat fuga sunt quidem eius dignissimos cumque reprehenderit! Sint
          </p>
        </div>
      </div>
    </section>
  );
}
