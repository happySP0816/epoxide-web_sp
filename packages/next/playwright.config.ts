import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run start -- --port 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
  testDir: 'tests',
  retries: 2,
}

export default config
