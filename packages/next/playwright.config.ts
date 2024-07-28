import config from '../../playwright.config'

config.webServer = {
  command: 'npm run build && npm run start -- --port 4173',
  port: 4173,
  reuseExistingServer: !process.env.CI,
}

export default config
