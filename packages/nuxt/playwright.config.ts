import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && export PORT=4174 && npm run preview',
    port: 4174,
    reuseExistingServer: !process.env.CI,
  },
  testDir: '../tests/tests',
  retries: 2,
}

export default config
