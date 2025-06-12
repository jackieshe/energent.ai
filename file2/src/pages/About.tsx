import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { submitContactForm } from '../services/contact'
import LoadingSpinner from '../components/LoadingSpinner'
import { useTranslation, Trans } from 'react-i18next'
import {
  EnvelopeIcon,
  CodeBracketIcon,
  ChatBubbleLeftRightIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline'

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const zhTeamMembers: TeamMember[] = [
  {
    name: '张明',
    role: '创始人 & CEO',
    bio: '拥有10年AI领域经验，曾在多家知名科技公司担任技术负责人。致力于将AI技术应用于实际场景，提升用户体验。',
  },
  {
    name: '李华',
    role: '技术总监',
    bio: '专注于自然语言处理和机器学习，拥有丰富的AI模型开发和优化经验。带领团队不断突破技术边界。',
  },
  {
    name: '王芳',
    role: '产品总监',
    bio: '深耕用户体验设计，擅长将复杂的技术转化为简单易用的产品。致力于打造最自然的AI对话体验。',
  },
]

const enTeamMembers: TeamMember[] = [
  {
    name: 'Zhang Ming',
    role: 'Founder & CEO',
    bio: 'With 10 years of experience in AI, has served as technical lead in several renowned tech companies. Dedicated to applying AI technology to real-world scenarios to enhance user experience.',
  },
  {
    name: 'Li Hua',
    role: 'Technical Director',
    bio: 'Specialized in natural language processing and machine learning, with extensive experience in AI model development and optimization. Leading the team to continuously push technical boundaries.',
  },
  {
    name: 'Wang Fang',
    role: 'Product Director',
    bio: 'Deep expertise in user experience design, skilled at transforming complex technology into simple and usable products. Committed to creating the most natural AI conversation experience.',
  },
]

export default function About() {
  const { t, i18n } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // 使用 useMemo 缓存本地化的团队成员数据
  const localizedTeamMembers = useMemo(() => {
    return i18n.language === 'en' ? enTeamMembers : zhTeamMembers
  }, [i18n.language])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      await submitContactForm(formData)
      setSubmitStatus({
        type: 'success',
        message: t('contact.form.success'),
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : t('contact.form.error'),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sections = [
    {
      title: t('about.mission.title'),
      content: t('about.mission.content'),
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: t('about.vision.title'),
      content: t('about.vision.content'),
      icon: CodeBracketIcon,
    },
    {
      title: t('about.team.title'),
      content: t('about.team.content'),
      icon: UserPlusIcon,
    },
  ]

  const contactLinks = [
    {
      name: t('about.contact.email'),
      href: 'mailto:contact@example.com',
      icon: EnvelopeIcon,
    },
    {
      name: t('about.contact.github'),
      href: 'https://github.com/yourusername',
      icon: CodeBracketIcon,
    },
    {
      name: t('about.contact.feedback'),
      href: '#',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: t('about.contact.join'),
      href: '#',
      icon: UserPlusIcon,
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af036?q=80&w=1920&auto=format&fit=crop"
            alt={t('about.title')}
            className="h-full w-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-100/20 to-white dark:from-gray-900 dark:to-gray-900" />
        </div>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                {t('about.title')}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t('about.subtitle')}
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                {t('about.description')}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('about.team.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('about.team.content')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {localizedTeamMembers.map((person, index) => (
            <motion.li
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1534528741775-53994a69daeb' : index === 1 ? '1438761681033-6461ffad8d80' : '1494790108377-be9c29b29330'}?q=80&w=800&auto=format&fit=crop`}
                  alt={person.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-primary-600 dark:text-primary-400">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {person.bio}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Contact section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-600/20 to-primary-800/20" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t('contact.subtitle')}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-16 max-w-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                    {t('contact.form.name')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                    {t('contact.form.email')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                    {t('contact.form.message')}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900 w-full"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center w-full">
                      <LoadingSpinner size="sm" className="mr-2" />
                      {t('contact.form.submitting')}
                    </div>
                  ) : (
                    <span className="w-full text-center">{t('contact.form.submit')}</span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <section.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 联系方式 */}
        <div className="mx-auto mt-32 max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('about.contact.title')}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-x-3 rounded-lg bg-white p-4 shadow-sm ring-1 ring-gray-200 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:ring-gray-700 dark:hover:bg-gray-700"
              >
                <link.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 