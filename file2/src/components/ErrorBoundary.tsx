import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

const ErrorFallback: React.FC<{ error: Error | null }> = ({ error }) => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <ExclamationTriangleIcon className="mx-auto h-12 w-12 text-red-500" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {t('error.title')}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {t('error.message')}
            </p>
            {error && (
              <p className="mt-2 text-sm text-gray-500">
                {error.message}
              </p>
            )}
          </div>

          <div className="mt-6 space-y-4">
            <Link
              to="/"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <HomeIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              {t('error.backHome')}
            </Link>
            <button
              onClick={() => window.location.reload()}
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowPathIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              {t('error.refresh')}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 