import React from 'react'

import styles from './styles.module.scss'


const Benefits = () => {
    return (
        <section className={styles.benefits}>
            <div className="container">
                <h2 className="section-title">Наши преимущества</h2>
                <div className={styles.benefits__cards}>
                    <div className={styles.benefits__cards__item}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.6473 30.9187C35.5178 30.8907 35.3849 30.8856 35.2537 30.9052C33.939 30.7522 32.9472 29.6399 32.945 28.3167C32.945 27.6827 32.4308 27.1685 31.7968 27.1685C31.1627 27.1685 30.6486 27.6827 30.6486 28.3167C30.6519 30.5262 32.1298 32.4616 34.2602 33.0463V34.1946C34.2602 34.8286 34.7743 35.3428 35.4084 35.3428C36.0425 35.3428 36.5566 34.8286 36.5566 34.1946V33.1159C39.0156 32.6012 40.6869 30.311 40.4285 27.8122C40.1694 25.3134 38.0642 23.4145 35.552 23.4139C34.1122 23.4139 32.945 22.2466 32.945 20.8069C32.945 19.3672 34.1122 18.1999 35.552 18.1999C36.9917 18.1999 38.159 19.3672 38.159 20.8069C38.159 21.441 38.6731 21.9551 39.3072 21.9551C39.9413 21.9551 40.4554 21.441 40.4554 20.8069C40.452 18.4869 38.8267 16.486 36.5566 16.0072V14.9622C36.5566 14.3281 36.0425 13.814 35.4084 13.814C34.7743 13.814 34.2602 14.3281 34.2602 14.9622V16.0773C31.8909 16.7243 30.366 19.0246 30.6923 21.4589C31.0186 23.8933 33.0958 25.7103 35.552 25.7097C36.9726 25.7097 38.1315 26.8473 38.1573 28.2674C38.1836 29.6875 37.0668 30.8671 35.6473 30.9187Z" fill="black" />
                            <path d="M18.9023 24.6501C18.9023 33.8458 26.3567 41.3001 35.5524 41.3001C44.7481 41.3001 52.2024 33.8458 52.2024 24.6501C52.2024 15.4543 44.7481 8 35.5524 8C26.3612 8.01009 18.913 15.4588 18.9023 24.6501ZM35.5524 10.2964C43.4799 10.2964 49.906 16.7225 49.906 24.6501C49.906 32.5776 43.4799 39.0037 35.5524 39.0037C27.6249 39.0037 21.1987 32.5776 21.1987 24.6501C21.2077 16.7264 27.6288 10.3054 35.5524 10.2964Z" fill="black" />
                            <path d="M57.8633 44.1309L48.8689 48.3806C47.6271 46.0707 45.2449 44.6007 42.6233 44.5267L34.3202 44.2985C33.0054 44.261 31.7154 43.9279 30.5464 43.3241L29.7016 42.8863C25.3756 40.6314 20.2194 40.637 15.8979 42.9008L15.9506 40.9868C15.968 40.3527 15.4684 39.8246 14.8344 39.8072L5.72947 39.5566C5.09538 39.5392 4.56781 40.0387 4.55043 40.6728L4.00044 60.6531C3.98306 61.2872 4.4826 61.8153 5.11669 61.8327L14.2216 62.0833H14.253C14.8753 62.0833 15.3843 61.5883 15.4012 60.9665L15.4275 60.0106L17.7929 58.7441C18.7213 58.2446 19.8067 58.1257 20.8209 58.4128L34.9458 62.3771C34.9705 62.3844 34.9952 62.39 35.0204 62.3956C36.0413 62.6092 37.0819 62.7163 38.1247 62.7157C40.3336 62.7169 42.5168 62.2409 44.5245 61.3192C44.5738 61.2968 44.6214 61.2704 44.6669 61.2407L65.1467 47.9937C65.6569 47.6635 65.8217 46.9936 65.5229 46.4643C64.0024 43.7665 60.6301 42.7388 57.8633 44.1309ZM6.32768 59.5688L6.81432 41.8838L13.6234 42.0711L13.1367 59.7567L6.32768 59.5688ZM43.4901 59.2683C40.9958 60.3941 38.2099 60.7047 35.5289 60.157L21.4421 56.2027C19.8566 55.7548 18.1595 55.9403 16.7092 56.7202L15.5004 57.3677L15.8239 45.6093C19.6542 43.0617 24.5666 42.7999 28.6459 44.9253L29.4907 45.3632C30.9675 46.1257 32.5962 46.5462 34.2574 46.5944L42.5611 46.8226C44.8934 46.8898 46.8741 48.5505 47.3473 50.8357L34.9789 50.4942C34.3448 50.4768 33.8173 50.9769 33.7993 51.6105C33.7819 52.2446 34.282 52.7727 34.9156 52.7901L48.565 53.1657H48.597C49.2187 53.1651 49.7272 52.6701 49.7441 52.0489C49.7581 51.5499 49.7211 51.0504 49.6331 50.5593L58.8585 46.2002C58.8675 46.1963 58.8764 46.1918 58.8854 46.1873C60.1939 45.5252 61.7761 45.7467 62.8525 46.7429L43.4901 59.2683Z" fill="black" />
                        </svg>
                        <span>
                            Возможность оплаты при получении
                        </span>
                        <p>
                            Мы предлагаем возможность оплаты наложенным платежом (при получении)
                        </p>
                    </div>
                    <div className={styles.benefits__cards__item}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.459 20.3483H40.9616V16.5372C40.9616 15.9375 40.8428 15.3437 40.612 14.7903C40.3812 14.2368 40.0429 13.7346 39.6169 13.3127C39.1908 12.8908 38.6853 12.5576 38.1297 12.3323C37.574 12.107 36.9793 11.9942 36.3798 12.0002H8.53502C7.93799 11.9951 7.34593 12.109 6.79337 12.3352C6.24081 12.5615 5.73882 12.8955 5.31669 13.3178C4.89456 13.7401 4.56074 14.2423 4.33471 14.795C4.10867 15.3478 3.99495 15.94 4.00017 16.5372V47.5001C3.99495 48.0973 4.10867 48.6895 4.33471 49.2422C4.56074 49.795 4.89456 50.2971 5.31669 50.7195C5.73882 51.1418 6.24081 51.4758 6.79337 51.702C7.34593 51.9282 7.93799 52.0421 8.53502 52.037H11.7031C11.9846 53.7043 12.8473 55.218 14.1383 56.3095C15.4293 57.4011 17.0652 58 18.7556 58C20.4461 58 22.0819 57.4011 23.3729 56.3095C24.6639 55.218 25.5267 53.7043 25.8081 52.037H44.0657C44.3471 53.7043 45.2099 55.218 46.5009 56.3095C47.7919 57.4011 49.4277 58 51.1182 58C52.8086 58 54.4445 57.4011 55.7355 56.3095C57.0265 55.218 57.8892 53.7043 58.1706 52.037H61.3388C63.8729 52.037 66 50.0364 66 47.5001V32.2401C66 32.2304 65.9668 32.2209 65.9659 32.2111C65.9659 32.1892 65.9319 32.1674 65.9307 32.1456C65.9293 32.1275 65.9274 32.1096 65.9252 32.0917C65.9227 32.0711 65.9194 32.0508 65.9159 32.0304C65.9123 32.0099 65.909 31.9934 65.9048 31.9752C65.9005 31.957 65.8954 31.9367 65.89 31.9176C65.8845 31.8985 65.8796 31.8808 65.8729 31.8627C65.8663 31.8447 65.8598 31.8256 65.8527 31.8072C65.8455 31.7888 65.8387 31.7718 65.8309 31.7544C65.823 31.737 65.8138 31.7188 65.8051 31.7011C65.7965 31.6833 65.7881 31.667 65.7781 31.65C65.768 31.6329 65.7583 31.6159 65.7479 31.6004C65.7375 31.5849 65.7259 31.5663 65.7138 31.5503C65.7018 31.5343 65.692 31.5205 65.6806 31.5058C65.6692 31.4912 65.6535 31.4717 65.6394 31.4561C65.6329 31.4487 65.6273 31.4407 65.6205 31.4334L56.8457 21.8537C56.4154 21.3828 55.8924 21.006 55.3096 20.747C54.7268 20.4879 54.0968 20.3522 53.459 20.3483ZM18.7548 55.6778C17.8115 55.6778 16.8894 55.398 16.1051 54.8739C15.3208 54.3497 14.7096 53.6047 14.3486 52.733C13.9876 51.8613 13.8932 50.9022 14.0772 49.9768C14.2612 49.0515 14.7154 48.2015 15.3824 47.5343C16.0494 46.8672 16.8992 46.4129 17.8243 46.2288C18.7495 46.0447 19.7084 46.1392 20.5799 46.5003C21.4513 46.8613 22.1962 47.4727 22.7202 48.2572C23.2443 49.0417 23.524 49.964 23.524 50.9075C23.5225 52.1722 23.0196 53.3847 22.1255 54.279C21.2314 55.1733 20.0192 55.6764 18.7548 55.6778ZM38.577 32.2401V49.6519H25.8072C25.2378 46.4148 22.293 43.6889 18.7556 43.6889C15.2182 43.6889 12.2726 46.4148 11.704 49.6519H8.53502C8.25104 49.6574 7.96888 49.6055 7.70544 49.4993C7.442 49.3931 7.20272 49.2348 7.00193 49.0338C6.80114 48.8329 6.64298 48.5935 6.53693 48.3299C6.43088 48.0664 6.37913 47.7841 6.38478 47.5001V16.5372C6.37913 16.2531 6.43088 15.9709 6.53693 15.7073C6.64298 15.4438 6.80114 15.2044 7.00193 15.0034C7.20272 14.8025 7.442 14.6442 7.70544 14.538C7.96888 14.4318 8.25104 14.3799 8.53502 14.3854H36.3798C36.6662 14.379 36.951 14.4299 37.2175 14.5351C37.484 14.6404 37.7267 14.7979 37.9315 14.9984C38.1362 15.1989 38.2988 15.4383 38.4096 15.7026C38.5205 15.9668 38.5774 16.2506 38.577 16.5372V32.2401ZM51.1173 55.6778C50.1741 55.6778 49.252 55.398 48.4677 54.8739C47.6834 54.3497 47.0721 53.6047 46.7111 52.733C46.3502 51.8613 46.2557 50.9022 46.4397 49.9768C46.6238 49.0515 47.078 48.2015 47.745 47.5343C48.412 46.8672 49.2617 46.4129 50.1869 46.2288C51.112 46.0447 52.071 46.1392 52.9424 46.5003C53.8139 46.8613 54.5587 47.4727 55.0828 48.2572C55.6068 49.0417 55.8865 49.964 55.8865 50.9075C55.8851 52.1722 55.3822 53.3847 54.4881 54.279C53.594 55.1733 52.3817 55.6764 51.1173 55.6778ZM63.6154 47.5001C63.6154 48.7213 62.558 49.6519 61.3371 49.6519H58.1689C57.5995 46.4148 54.6547 43.6889 51.1173 43.6889C47.5799 43.6889 44.6342 46.4148 44.0648 49.6519H40.9616V33.4668H63.6154V47.5001ZM40.9616 31.0816V22.7335H53.459C53.7678 22.74 54.072 22.8101 54.3526 22.9392C54.6333 23.0683 54.8843 23.2538 55.0902 23.4841L62.0313 31.0816H40.9616Z" fill="black" />
                            <path d="M31.3981 23.0674L23.0675 18.1584C22.8906 18.0546 22.6902 18 22.4863 18C22.2823 18 22.0819 18.0546 21.9051 18.1584L13.5821 23.0674C13.4058 23.1709 13.2592 23.32 13.157 23.4996C13.0549 23.6793 13.0007 23.8833 13 24.091V33.909C13 34.1165 13.0534 34.3203 13.155 34.5C13.2565 34.6797 13.4025 34.8289 13.5783 34.9327L21.8978 39.8416C22.0736 39.9454 22.273 40 22.476 40C22.6791 40 22.8785 39.9454 23.0543 39.8416L31.3968 34.9327C31.5757 34.8304 31.7255 34.6822 31.8313 34.5026C31.9371 34.3231 31.9952 34.1185 32 33.909V24.091C31.9953 23.8817 31.9374 23.6772 31.8318 23.4977C31.7263 23.3182 31.5768 23.1699 31.3981 23.0674ZM22.4774 20.547L24.2417 21.5882L18.2362 25.1319L16.4719 24.0907L22.4774 20.547ZM21.2609 36.7714L15.313 33.2273V26.1385L21.2609 29.6826V36.7714ZM22.4774 27.636L20.5493 26.4982L26.5548 22.9544L28.4829 24.0921L22.4774 27.636ZM29.687 33.2266L23.5739 36.7714V29.6826L29.687 26.1385V33.2266Z" fill="black" />
                        </svg>
                        <span>
                            Гарантия обмена
                            и возврата товара
                        </span>
                        <p>
                            100% гарантия возврата товара - 14 дней на возврат, без скандалов
                            и истерик.                            Мы предлагаем возможность оплаты наложенным платежом (при получении)
                        </p>
                    </div>
                    <div className={styles.benefits__cards__item}>
                        <svg width="50" height="56" viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.282 19.1562C44.282 8.57653 35.7055 0 25.1258 0C14.5461 0 5.96961 8.57653 5.96961 19.1562C3.23453 19.4968 0.648438 21.2847 0.648438 25.4352V35.439C0.648438 40.1216 3.92628 41.8244 7.03384 41.8244H10.1201C10.7078 41.8244 11.1844 41.3479 11.1844 40.7602V20.1566C11.1844 19.5689 10.7078 19.0924 10.1201 19.0924H8.09808C8.09808 9.68826 15.7217 2.06461 25.1258 2.06461C34.5299 2.06461 42.1536 9.68826 42.1536 19.0924H40.1315C39.5438 19.0924 39.0673 19.5689 39.0673 20.1566V40.7282C39.0673 41.316 39.5438 41.7925 40.1315 41.7925H42.1536C41.8556 49.1038 38.3436 50.8172 31.3303 51.1258V50.4128C31.3303 49.2372 30.3774 48.2843 29.2018 48.2843H22.5078C21.3322 48.2843 20.3793 49.2372 20.3793 50.4128V53.8715C20.3793 55.0471 21.3322 56 22.5078 56H29.2231C30.3987 56 31.3516 55.0471 31.3516 53.8715V53.2543C38.0988 52.9456 43.9308 51.5515 44.282 41.7286C47.0171 41.3881 49.6032 39.6002 49.6032 35.4496V25.4458C49.6032 21.274 47.0278 19.4968 44.282 19.1562ZM9.05589 21.1463V39.664H6.98063C5.40556 39.664 2.72369 39.1106 2.72369 35.4071V25.4033C2.72369 21.7317 5.37364 21.1463 6.98063 21.1463H9.05589ZM29.2231 52.2645V53.8822H22.5078V50.4234H29.2231V52.2645ZM47.4747 35.439C47.4747 39.1106 44.8248 39.6959 43.2178 39.6959H41.1958V21.2208H43.271C44.8461 21.2208 47.528 21.7742 47.528 25.4778L47.4747 35.439Z" fill="black" />
                        </svg>
                        <span>
                            Профессиональная консультация
                        </span>
                        <p>
                            Промокоды со скидками для постоянных клиентов, акции на новые позиции
                        </p>
                    </div>
                    <div className={styles.benefits__cards__item}>
                        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.9866 13.9198C42.4237 9.97509 38.9901 7 35.0001 7C32.434 7 29.997 8.23825 28.4818 10.3135C28.1723 10.7367 28.2649 11.3304 28.6881 11.6399C29.11 11.9483 29.705 11.8568 30.014 11.433C31.1738 9.84606 33.0374 8.89839 34.9998 8.89839C38.0513 8.89839 40.6766 11.1725 41.1071 14.1876C41.1749 14.6611 41.5812 15.0029 42.0458 15.0029C42.0901 15.0029 42.1357 14.9996 42.181 14.9934C42.6999 14.9192 43.0605 14.4384 42.9866 13.9198Z" fill="black" />
                            <path d="M56.6937 24.5452L53.8462 19.7994C53.6749 19.5133 53.366 19.3386 53.0323 19.3386H50.3036C49.7797 19.3386 49.3545 19.7638 49.3545 20.2877C49.3545 20.8116 49.7797 21.2367 50.3036 21.2367H52.4951L54.2036 24.0842H15.7932L17.5017 21.2367H18.5069C19.0308 21.2367 19.456 20.8116 19.456 20.2877C19.456 19.7638 19.0308 19.3386 18.5069 19.3386H16.9645C16.6308 19.3386 16.3219 19.5133 16.1506 19.7994L13.3031 24.5452C13.1271 24.8389 13.1229 25.204 13.2912 25.5015C13.4594 25.7991 13.7747 25.9831 14.117 25.9831H55.8798C56.2221 25.9831 56.5371 25.7991 56.7056 25.5015C56.8742 25.204 56.8697 24.8383 56.6937 24.5452Z" fill="black" />
                            <path d="M51.9636 15.7934C51.8307 15.579 51.6185 15.4269 51.3733 15.3696L38.4343 12.3434C38.1893 12.2858 37.9313 12.3286 37.7172 12.461C37.5036 12.5939 37.3512 12.8061 37.2939 13.0513L36.3182 17.2224C36.1986 17.7327 36.5156 18.2432 37.0262 18.3622C37.5364 18.4818 38.0475 18.1648 38.1665 17.6543L38.9262 14.4078L50.0166 17.0019L48.2739 24.4528C48.1543 24.9631 48.4713 25.4736 48.9819 25.5927C49.055 25.6096 49.1276 25.6177 49.1993 25.6177C49.6303 25.6177 50.0204 25.3224 50.1219 24.885L52.081 16.51C52.1388 16.265 52.0965 16.007 51.9636 15.7934Z" fill="black" />
                            <path d="M35.5007 18.0372L34.6359 10.7225C34.6065 10.4725 34.4788 10.2442 34.2808 10.0885C34.0828 9.93276 33.8329 9.86157 33.5818 9.89105L17.7067 11.7675C17.1864 11.8292 16.8143 12.3008 16.8758 12.8216L18.3176 25.0215C18.3749 25.5045 18.7845 25.8596 19.2591 25.8596C19.2961 25.8596 19.3342 25.8571 19.372 25.8529C19.892 25.7912 20.2641 25.3196 20.2029 24.7987L18.8723 13.5407L32.8624 11.8873L33.6154 18.2593C33.6771 18.7799 34.1465 19.1497 34.6696 19.0908C35.1899 19.0296 35.5619 18.5577 35.5007 18.0372Z" fill="black" />
                            <path d="M43.0075 24.6732L41.1236 16.8388C41.0646 16.5944 40.9108 16.3827 40.6964 16.2512C40.482 16.1208 40.2248 16.0799 39.9787 16.1383L24.6884 19.8155C24.1787 19.9379 23.865 20.4507 23.9874 20.9604L24.9289 24.8762C25.0513 25.3864 25.5641 25.7004 26.0735 25.5772C26.5832 25.4548 26.8969 24.9421 26.7745 24.4324L26.0546 21.4392L39.4993 18.2063L41.1614 25.1175C41.2656 25.5527 41.6549 25.8447 42.0835 25.8447C42.1571 25.8447 42.2317 25.8361 42.3065 25.818C42.8162 25.6954 43.1298 25.1829 43.0075 24.6732Z" fill="black" />
                            <path d="M56.8303 24.9854C56.8042 24.4809 56.3876 24.085 55.8821 24.085H14.1194C13.6138 24.085 13.1973 24.4807 13.1711 24.9854L11.2727 62.0022C11.2594 62.262 11.3534 62.5161 11.5325 62.7047C11.7118 62.8929 11.9604 63 12.2207 63H57.7799C58.0399 63 58.2888 62.8932 58.469 62.7047C58.6478 62.5161 58.7418 62.2622 58.7287 62.0022L56.8303 24.9854ZM13.2195 61.1016L15.0206 25.9831H54.9797L56.7808 61.1016H13.2195Z" fill="black" />
                            <path d="M42.1189 27.8813C40.5487 27.8813 39.2715 29.1585 39.2715 30.7288C39.2715 32.2991 40.5487 33.5763 42.1189 33.5763C43.6892 33.5763 44.9664 32.2991 44.9664 30.7288C44.9664 29.1585 43.6892 27.8813 42.1189 27.8813ZM42.1189 31.6781C41.5953 31.6781 41.1699 31.2524 41.1699 30.7291C41.1699 30.2057 41.5956 29.78 42.1189 29.78C42.6423 29.78 43.068 30.2057 43.068 30.7291C43.068 31.2524 42.6423 31.6781 42.1189 31.6781Z" fill="black" />
                            <path d="M27.8807 27.8813C26.3104 27.8813 25.0332 29.1585 25.0332 30.7288C25.0332 32.2991 26.3104 33.5763 27.8807 33.5763C29.4509 33.5763 30.7281 32.2991 30.7281 30.7288C30.7281 29.1585 29.4509 27.8813 27.8807 27.8813ZM27.8807 31.6781C27.3573 31.6781 26.9316 31.2524 26.9316 30.7291C26.9316 30.2057 27.3573 29.78 27.8807 29.78C28.404 29.78 28.8297 30.2057 28.8297 30.7291C28.8297 31.2524 28.404 31.6781 27.8807 31.6781Z" fill="black" />
                            <path d="M42.118 30.7288H42.0448C41.5209 30.7288 41.0958 31.1539 41.0958 31.6778C41.0958 31.8074 41.1214 31.9311 41.1689 32.0438V36.8981C41.1689 40.2997 38.4013 43.0676 34.9993 43.0676C31.5974 43.0676 28.8298 40.3 28.8298 36.8981V31.6781C28.8298 31.1542 28.4046 30.729 27.8807 30.729C27.3568 30.729 26.9316 31.1542 26.9316 31.6781V36.8983C26.9316 41.3469 30.5507 44.966 34.9993 44.966C39.4479 44.966 43.067 41.3469 43.067 36.8983V31.6781C43.067 31.1542 42.6419 30.7288 42.118 30.7288Z" fill="black" />
                        </svg>
                        <span>
                            Акции и бонусы для покупателей
                        </span>
                        <p>
                            Промокоды со скидками для постоянных клиентов, акции на новые позиции
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits