import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      welcome: "Welcome to ThreeBasket",
      login: "Login",
      register: "Register"
    }
  },
  ar: {
    translation: {
      welcome: "مرحباً بك في ثري باسكت",
      login: "تسجيل الدخول",
      register: "إنشاء حساب"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
})

export default i18n
