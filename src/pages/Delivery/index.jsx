import React from "react";
import { Breadcrumbs } from "../../components";
import styles from "./styles.module.scss";

const Delivery = () => {
  const [activeTab, setActiveTab] = React.useState("delivery");
  return (
    <div className={styles.delivery}>
      <div className="container">
        <Breadcrumbs current={"Доставка"} />
        <div className={styles.tabs}>
          <ul className={styles.tabs__action}>
            <li
              className={activeTab === "delivery" && "active"}
              onClick={() => setActiveTab("delivery")}
            >
              Доставка
            </li>
            <li
              className={activeTab === "contacts" && "active"}
              onClick={() => setActiveTab("contacts")}
            >
              Контакты
            </li>
            <li
              className={activeTab === "faq" && "active"}
              onClick={() => setActiveTab("faq")}
            >
              Вопросы и ответы
            </li>
          </ul>
          <div className={styles.tabs__list}>
            {activeTab === "delivery" && (
              <div className={styles.tabs__item}>
                <span>Доставка</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                  lobortis scelerisque fermentum dui faucibus in ornare quam
                  viverra orci sagittis eu volutpat odio facilisis mauris sit
                  amet massa vitae tortor condimentum lacinia quis vel eros
                  donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
                  augue lacus, viverra vitae congue eu, consequat ac felis donec
                  et odio pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                  lobortis scelerisque fermentum dui faucibus in ornare quam
                  viverra orci sagittis eu volutpat odio facilisis mauris sit
                  amet massa vitae tortor condimentum lacinia quis vel eros
                  donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
                  augue lacus, viverra vitae congue eu, consequat ac felis donec
                  et odio pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus
                </p>
              </div>
            )}

            {activeTab === "contacts" && (
              <div className={styles.tabs__item}>
                <span>Контакты</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                  lobortis scelerisque fermentum dui faucibus in ornare quam
                  viverra orci sagittis eu volutpat odio facilisis mauris sit
                  amet massa vitae tortor condimentum lacinia quis vel eros
                  donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
                  augue lacus, viverra vitae congue eu, consequat ac felis donec
                  et odio pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus
                </p>
              </div>
            )}
            {activeTab === "faq" && (
              <div className={styles.tabs__item}>
                <span>Вопросы и ответы</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                  lobortis scelerisque fermentum dui faucibus in ornare quam
                  viverra orci sagittis eu volutpat odio facilisis mauris sit
                  amet massa vitae tortor condimentum lacinia quis vel eros
                  donec ac odio tempor orci dapibus ultrices in iaculis nunc sed
                  augue lacus, viverra vitae congue eu, consequat ac felis donec
                  et odio pellentesque diam volutpat commodo sed egestas egestas
                  fringilla phasellus faucibus
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
