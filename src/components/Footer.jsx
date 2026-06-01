import { useTranslation } from 'react-i18next'

function Footer() {

  const { t } = useTranslation()

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <h3>
            Hotel Amalfi
          </h3>

          <p>
            Jesolo Venezia
          </p>

          <p>
            {t('footerRelax')}
          </p>

        </div>

        <div className="footer-col">

          <h4>
            {t('footerContacts')}
          </h4>

          <p>
            Via Verdi 73 —
            Jesolo
          </p>

          <p>
            +39 000 000000
          </p>

          <p>
            info@hotelamalfi.it
          </p>

        </div>

        <div className="footer-col">

          <h4>
            {t('follow')}
          </h4>

          <div className="socials">

            <a href="#">
              Instagram
            </a>

            <a href="#">
              Facebook
            </a>

            <a href="#">
              TikTok
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Hotel Amalfi —
        {t('rights')}

      </div>

    </footer>

  )

}

export default Footer