import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview -- --port 4176',
    port: 4176,
    reuseExistingServer: !process.env.CI,
  },
  testDir: '../tests/tests',
  retries: 2,
}

export default config
