import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run start -- --port 4177',
    port: 4177,
    reuseExistingServer: !process.env.CI,
  },
  testDir: '../tests/tests',
  retries: 2,
}

export default config
