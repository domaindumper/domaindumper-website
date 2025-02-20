import { useState } from "react";
import 'material-symbols'
import Link from "next/link";
import { useTranslation } from 'next-i18next';

export default function FormSignUp() {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const { t } = useTranslation('auth');

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="user_name" className="form-label">{t('register.form.nameLabel')}</label>
                <input id="user_name" type="text" className="form-control" placeholder={t('register.form.namePlaceholder')} />
            </div>
            <div className="mb-3">
                <label htmlFor="user_work_email" className="form-label">{t('register.form.emailLabel')}</label>
                <input id="user_work_email" type="text" className="form-control" placeholder={t('register.form.emailPlaceholder')} />
            </div>
            <div className="mb-3">
                <label htmlFor="user_password" className="form-label">{t('register.form.passwordLabel')}</label>
                <div className="position-relative">
                <input 
                  name="user_password" 
                  type={isRevealPwd ? "text" : "password"}
                  value={pwd}
                  onChange={e => setPwd(e.target.value)} 
                  id="user_password" 
                  className="form-control pe-5" 
                  placeholder={t('register.form.password')} 
                  required
                />
          {/* Password icon */}
          <span role="button"
          className={isRevealPwd ? "password-hide position-absolute end-0 top-50 translate-middle-y me-2 size-30 d-flex align-items-center justify-content-center" : "password-show position-absolute end-0 top-50 translate-middle-y size-30 me-2 d-flex align-items-center justify-content-center"}
          onClick={() => setIsRevealPwd(prevState => !prevState)}></span>
                </div>
            </div>
            <div className="mb-3 small text-muted">
                {t('register.form.agreementText')}
                <br/>
                 <span><Link href="#" className="text-decoration-underline d-inline-block">{t('register.form.terms')}</Link></span> 
                 <span> {t('register.form.and')} </span> 
                  <span><Link href="#" className="text-decoration-underline d-inline-block">{t('register.form.conditions')}</Link></span>
                
            </div>
            <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary">{t('register.form.signUpButton')}</button>
            </div>
        </form>
    );
}