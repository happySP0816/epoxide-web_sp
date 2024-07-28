import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview -- --port 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
  testDir: '../tests/tests',
  snapshotPathTemplate: '../tests/snapshots/{testFileName}.{testName}{ext}',
  retries: 2,
}

export default config
