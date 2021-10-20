import React from "react";
import { Breadcrumbs, Button } from "../../components";
import banner from "../../assets/images/profile.jpg";
import {useSelector, useDispatch} from "react-redux";
import styles from "./styles.module.scss";
import {setChangeProfile, user_loading} from "../../redux/actions/auth";


const Profile = () => {
  const dispatch = useDispatch()
  const userProfile = JSON.parse(localStorage.getItem('user'))
  const [profile, setProfile] = React.useState({
    first_name: '',
    last_name: '',
    phone: '',
    country: '',
    city: ''
  })
  const onChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    })
  }
  const handleChangeProfile = (e) => {
    e.preventDefault();
    dispatch(setChangeProfile(profile))
    window.confirm('Вы изменили профиль')
  }
  return (
    <div className={styles.profile}>
      <div className="container">
        <div className="breadcrumbs">
          <Breadcrumbs current={"Профиль"} />
        </div>
        <div className={styles.profile__container}>
          <div className={styles.profile__container__info}>
            <div className={styles.profile__container__info__main}>
              <form className={styles.form}>
                <div className={styles.profile__container__info__main__general}>
                  <h3>Профиль</h3>
                  <div className={styles.form__group}>
                    <label htmlFor="firstName">Имя</label>
                    <input
                      type="text"
                      id="firstName"
                      className={styles.field}
                      onChange={onChange}
                      name={"first_name"}
                      placeholder={userProfile.first_name ? userProfile.first_name : 'Имя'}
                    />
                  </div>
                  <div className={styles.form__group}>
                    <label htmlFor="lastName">Имя</label>
                    <input
                      type="text"
                      id="lastName"
                      className={styles.field}
                      onChange={onChange}
                      name={"last_name"}
                      placeholder={userProfile.last_name ? userProfile.last_name : 'Фамилия'}
                    />
                  </div>
                  <div className={styles.form__group}>
                    <label htmlFor="telephone">Номер телефона</label>
                    <input
                      type="text"
                      id="telephone"
                      className={styles.field}
                      onChange={onChange}
                      name={"phone"}
                      placeholder={userProfile.phone ? userProfile.phone : 'Номер телефона'}
                    />
                  </div>
                </div>
                <div
                  className={styles.profile__container__info__main__location}
                >
                  <h3>Адрес доставки</h3>
                  <div className={styles.form__group}>
                    <label htmlFor="country">Страна</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      onChange={onChange}
                      placeholder={userProfile ? userProfile.country : 'Кыргызстан'}
                      className={styles.field}
                    />
                  </div>
                  <div className={styles.form__group}>
                    <label htmlFor="city">Город</label>
                    <input
                      type="text"
                      id="city"
                      onChange={onChange}
                      placeholder={userProfile ? userProfile.city : 'Бишкек'}
                      name={"city"}
                      className={styles.field}
                    />
                  </div>
                </div>
                <Button onClick={handleChangeProfile} black center width={450}>
                  Сохранить
                </Button>
              </form>
            </div>
          </div>
          <div className={styles.profile__container__poster}>
            <div className={styles.profile__container__poster__title}>
              <svg
                width="498"
                height="86"
                viewBox="0 0 498 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M61.5278 41.3345C66.7707 42.7477 70.7801 45.2711 73.5557 48.9049C76.4342 52.5387 77.8735 57.1315 77.8735 62.6831C77.8735 70.1526 74.8922 75.9061 68.9296 79.9437C63.0698 83.9812 54.4857 86 43.1774 86H0V0H40.7101C51.0932 0 59.1119 2.01879 64.7661 6.05635C70.4203 9.99296 73.2473 15.3932 73.2473 22.257C73.2473 26.6984 72.2193 30.534 70.1633 33.7641C68.1072 36.9941 65.2287 39.5176 61.5278 41.3345ZM14.9579 11.2042V36.9437H39.1681C45.2335 36.9437 49.911 35.8333 53.2007 33.6127C56.5932 31.392 58.2895 28.2124 58.2895 24.0739C58.2895 19.8345 56.6446 16.6549 53.3549 14.5352C50.0652 12.3146 45.3363 11.2042 39.1681 11.2042H14.9579ZM42.4064 74.7958C55.9764 74.7958 62.7614 70.3545 62.7614 61.4718C62.7614 52.5892 55.9764 48.1479 42.4064 48.1479H14.9579V74.7958H42.4064Z"
                  fill="#2B2A2A"
                />
                <path
                  d="M183.435 73.7359V86H117.744V0H181.739V12.1127H132.702V36.338H176.342V48.2993H132.702V73.7359H183.435Z"
                  fill="#2B2A2A"
                />
                <path
                  d="M224.193 0H239.151V73.7359H286.184V86H224.193V0Z"
                  fill="#2B2A2A"
                />
                <path
                  d="M320.855 0H335.813V73.7359H382.845V86H320.855V0Z"
                  fill="#2B2A2A"
                />
                <path
                  d="M473.79 65.5599H426.757L417.505 86H402.856L442.949 0H457.753L498 86H482.888L473.79 65.5599ZM468.547 53.9014L450.351 13.3239L432 53.9014H468.547Z"
                  fill="#2B2A2A"
                />
              </svg>
            </div>
            <img src={banner} alt="Profile Poster" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
