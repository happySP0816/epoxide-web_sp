import config from '../../playwright.config'

config.webServer = {
  command: 'npm run build && export PORT=4173 && npm run preview',
  port: 4173,
  reuseExistingServer: !process.env.CI,
}

export default config
