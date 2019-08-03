import React from "react"
import { Translation } from 'react-i18next';
import Layout from "../components/layout/layout"

const NotFoundPage = () => (
  <Translation>
    {t => (
      <Layout>
        <h1>{t('НЕ НАЙДЕНО')}</h1>
        <p>{t('Вы просто попали на маршрут, который не существует ... грусть.')}</p>
      </Layout>
    )}
  </Translation>
)

export default NotFoundPage
