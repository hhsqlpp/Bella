import React from 'react'
import styles from './styles.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__columns}>
                    <div className={styles.footer__columns__item}>
                        <span>Покупателям</span>
                        <ul>
                            <li>
                                <a href="/">Как сделать заказ</a>
                            </li>
                            <li>
                                <a href="/">Способы оплаты</a>
                            </li>
                            <li>
                                <a href="/">Доставка </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__columns__item}>
                        <span>Покупателям</span>
                        <ul>
                            <li>
                                <a href="/">Возврат товара</a>
                            </li>
                            <li>
                                <a href="/">Вопросы и ответы</a>
                            </li>
                            <li>
                                <a href="/">Публичная оферта</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__columns__item}>
                        <span>Компания</span>
                        <ul>
                            <li>
                                <a href="/">О нас</a>
                            </li>
                            <li>
                                <a href="/">Реквизиты</a>
                            </li>
                            <li>
                                <a href="/">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__columns__item}>
                        <span>Контакты</span>
                        <ul>
                            <li>
                                +996 778 898 776
                            </li>
                            <li>
                                mail@zulya.kg
                            </li>
                            <li>
                                +996 778 898 776
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <span>Developed by Sunrise Studio 2021</span>
                    <ul>
                        <li>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.93415 15.7341C8.42331 16.7382 9.00331 17.2182 10.3266 18.0382C11.4516 18.7332 13.0058 18.9874 14.0041 19.0891C13.595 19.4824 15.47 17.6791 10.07 22.8732C8.92498 23.9707 10.7683 25.7316 11.9125 24.6574L15.01 21.6699C16.1958 22.8107 17.3325 23.9041 18.1075 24.6616C19.2525 25.7399 21.095 23.9941 19.9625 22.8774C19.8775 22.7966 15.765 18.8516 16.0158 19.0932C17.0266 18.9916 18.5575 18.7224 19.6691 18.0424L19.6683 18.0416C20.9916 17.2174 21.5716 16.7382 21.0683 15.7341C20.7641 15.1641 19.9441 14.6874 18.8525 15.5116C18.8525 15.5116 17.3783 16.6407 15.0008 16.6407C12.6225 16.6407 11.1491 15.5116 11.1491 15.5116C10.0583 14.6832 9.23498 15.1641 8.93415 15.7341Z" fill="#7C7C7C" />
                                <path d="M14.9983 15.1183C17.8966 15.1183 20.2633 12.8533 20.2633 10.065C20.2633 7.265 17.8966 5 14.9983 5C12.0991 5 9.73242 7.265 9.73242 10.065C9.73242 12.8533 12.0991 15.1183 14.9983 15.1183ZM14.9983 7.56583C16.4224 7.56583 17.5841 8.68333 17.5841 10.065C17.5841 11.435 16.4224 12.5525 14.9983 12.5525C13.5741 12.5525 12.4124 11.435 12.4124 10.065C12.4116 8.6825 13.5733 7.56583 14.9983 7.56583Z" fill="#7C7C7C" />
                            </svg>
                        </li>
                        <li>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.4898 16.5973C23.1785 17.2692 23.9067 17.9017 24.5249 18.6445C24.7979 18.9727 25.0563 19.3113 25.2532 19.6916C25.5327 20.2365 25.2793 20.8334 24.7926 20.8663L21.7679 20.865C20.9872 20.9292 20.365 20.6144 19.8403 20.0803C19.4231 19.655 19.0331 19.1998 18.6303 18.7601C18.4664 18.579 18.293 18.4097 18.087 18.2746C17.6738 18.0069 17.3154 18.0882 17.0792 18.5185C16.839 18.9569 16.7826 19.4437 16.7605 19.9318C16.7276 20.6444 16.5125 20.8308 15.7974 20.8651C14.2672 20.9359 12.8159 20.7035 11.4682 19.9332C10.2779 19.2536 9.35685 18.2928 8.55496 17.2064C6.99219 15.0883 5.79529 12.763 4.72063 10.3708C4.47773 9.83166 4.65516 9.54274 5.24804 9.53232C6.23639 9.5128 7.22434 9.51518 8.21131 9.531C8.61278 9.53773 8.87916 9.76718 9.03272 10.1464C9.56685 11.4589 10.2202 12.708 11.0403 13.8669C11.2596 14.1753 11.4827 14.4823 11.7988 14.7C12.1492 14.9415 12.4169 14.8626 12.5821 14.4703C12.6873 14.221 12.7333 13.956 12.7555 13.6895C12.8341 12.7775 12.8435 11.8644 12.7081 10.955C12.6241 10.3866 12.3027 10.0191 11.7359 9.91164C11.447 9.85652 11.4903 9.75036 11.6295 9.58474C11.8737 9.30023 12.1035 9.1228 12.5587 9.1228H15.9772C16.5163 9.22797 16.6372 9.4708 16.7105 10.0127L16.7132 13.8118C16.7068 14.0217 16.8183 14.6435 17.1949 14.7813C17.4965 14.881 17.6974 14.6381 17.8785 14.4466C18.6972 13.5779 19.2814 12.5506 19.8034 11.4877C20.0345 11.0205 20.2341 10.535 20.4282 10.0492C20.5713 9.68977 20.7944 9.51274 21.1999 9.51913L24.491 9.52315C24.5881 9.52315 24.6879 9.52315 24.7836 9.53891C25.3372 9.63465 25.4895 9.87353 25.3174 10.4154C25.0487 11.2643 24.5223 11.9731 24.0093 12.6829C23.4594 13.4428 22.8742 14.1761 22.3283 14.94C21.8297 15.6395 21.869 15.9912 22.4898 16.5973Z" fill="#7C7C7C" />
                            </svg>
                        </li>
                        <li>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.145 6.87622H9.85545C8.21327 6.87622 6.87695 8.21246 6.87695 9.85471V20.1442C6.87695 21.7867 8.21327 23.123 9.85545 23.123H20.145C21.7875 23.123 23.1238 21.7867 23.1238 20.1442V9.85471C23.1238 8.21254 21.7875 6.87622 20.145 6.87622ZM15 20.3479C12.0512 20.3479 9.65179 17.9484 9.65179 14.9993C9.65179 12.0505 12.0512 9.65105 15 9.65105C17.9492 9.65105 20.3486 12.0505 20.3486 14.9993C20.3486 17.9484 17.9492 20.3479 15 20.3479ZM20.5207 10.757C19.8225 10.757 19.2549 10.1893 19.2549 9.49158C19.2549 8.79375 19.8225 8.22605 20.5207 8.22605C21.2185 8.22605 21.7861 8.79375 21.7861 9.49158C21.7861 10.1894 21.2185 10.757 20.5207 10.757Z" fill="#7C7C7C" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0007 11.9116C13.2984 11.9116 11.9121 13.2972 11.9121 14.9996C11.9121 16.7026 13.2984 18.0885 15.0007 18.0885C16.7037 18.0885 18.089 16.7026 18.089 14.9996C18.089 13.2972 16.7037 11.9116 15.0007 11.9116Z" fill="#7C7C7C" />
                            </svg>
                        </li>
                        <li>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.8471 8.25609H17.5023C17.0378 8.25609 16.5691 8.73609 16.5691 9.09319V11.4842H19.8425C19.7107 13.3177 19.4401 14.9942 19.4401 14.9942H16.5523V25.3846H12.2491V14.9931H10.1543V11.4967H12.2491V8.63805C12.2491 8.11532 12.1432 4.61548 16.6582 4.61548H19.8472L19.8471 8.25609Z" fill="#7C7C7C" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer