import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview -- --port 4174',
    port: 4174,
    reuseExistingServer: !process.env.CI,
  },
  testDir: '../tests/tests',
  retries: 2,
}

export default config
