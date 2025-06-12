import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      name: t('features.features.chat.name'),
      description: t('features.features.chat.description'),
      icon: ChatBubbleLeftRightIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: t('features.features.models.name'),
      description: t('features.features.models.description'),
      icon: SparklesIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: t('features.features.deploy.name'),
      description: t('features.features.deploy.description'),
      icon: RocketLaunchIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: t('features.features.security.name'),
      description: t('features.features.security.description'),
      icon: ShieldCheckIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: t('features.features.global.name'),
      description: t('features.features.global.description'),
      icon: GlobeAltIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: t('features.features.mobile.name'),
      description: t('features.features.mobile.description'),
      icon: DevicePhoneMobileIcon,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
  ]

  const advantages = [
    {
      title: t('features.advantages.tech.title'),
      description: t('features.advantages.tech.description'),
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: t('features.advantages.user.title'),
      description: t('features.advantages.user.description'),
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af036?q=80&w=1920&auto=format&fit=crop"
            alt={t('features.title')}
            className="h-full w-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/20 to-white dark:from-gray-900 dark:to-gray-900" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">{t('features.title')}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {t('features.subtitle')}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t('features.description')}
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </div>

      {/* 展示区域 */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-600/20 to-primary-800/20" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('features.whyChooseUs')}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t('features.whyChooseUsDesc')}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/9] w-full rounded-lg object-cover"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 