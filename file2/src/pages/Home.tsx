import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChatBubbleLeftRightIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const features = [
    {
      name: t('home.features.chat.name'),
      description: t('home.features.chat.description'),
      icon: ChatBubbleLeftRightIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: t('home.features.models.name'),
      description: t('home.features.models.description'),
      icon: SparklesIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: t('home.features.deploy.name'),
      description: t('home.features.deploy.description'),
      icon: RocketLaunchIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        {/* 背景图片 */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af036?q=80&w=1920&auto=format&fit=crop"
            alt={t('home.title')}
            className="h-full w-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/20 to-white dark:from-gray-900 dark:to-gray-900" />
        </div>

        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                    {t('home.title')}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                    {t('home.subtitle')}
                  </p>
                </motion.div>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/chat"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900"
                  >
                    {t('home.startChat')}
                  </Link>
                  <Link
                    to="/features"
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                  >
                    {t('home.learnMore')} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full rounded-2xl bg-gradient-to-r from-primary-400 to-primary-600 opacity-20 blur-3xl" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                alt={t('home.title')}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">{t('home.features.title')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('home.features.subtitle')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('home.features.description')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* 展示区域 */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-600/20 to-primary-800/20" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('home.showcase.title')}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t('home.showcase.description')}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
              >
                <img
                  src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop`}
                  alt={`${t('home.showcase.items.title')} ${item}`}
                  className="aspect-[16/9] w-full rounded-lg object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{t('home.showcase.items.title')} {item}</h3>
                  <p className="mt-2 text-sm text-gray-300">
                    {t('home.showcase.items.description')}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 