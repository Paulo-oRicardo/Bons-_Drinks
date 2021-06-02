import React from "react";

import styles from "./nosso.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function NossoTime() {
  return (
    <section className={styles.contentOur}>
      <h1>Our Team</h1>
      <div className={styles.contentAccordion}>
        <div>
          <img src="./men.jpg" alt="" />
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.button}>
                  Edward
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Sou um vampirão que gosta de bons drinks. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Ipsa animi neque porro
                  aliquam. Ipsum perferendis, quam nostrum aut quibusdam natus
                  molestiae omnis placeat fuga sunt quidem eius dignissimos
                  cumque reprehenderit! Sint ipsa voluptate omnis porro
                  inventore perspiciatis quam quas animi fuga nisi
                  exercitationem cupiditate
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <img src="./Jacob.jpg" alt="" />
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.button}>
                  Jacob
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Sou um lobão e faço au au. ea in ut nostrud velit in irure
                  cillum tempor laboris sed adipisicing eu esse duis nulla
                  non.hcdjchabsjchabjsch ashdoancaoicna ciajsocianscoa
                  ichaosicnasoicna lcnzpçiuxhfvbladv bçipfubwnlicvjewb
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <img src="./woman.jpg" alt="" />
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.button}>
                  Bela
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur ea in
                  ut nostrud velit in irure cillum tempor laboris sed
                  adipisicing eu esse duis nulla non.hcdjchabsjchabjsch
                  ashdoancaoicna ciajsocianscoa ichaosicnasoicna
                  lcnzpçiuxhfvbladv bçipfubwnlicvjewb
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
