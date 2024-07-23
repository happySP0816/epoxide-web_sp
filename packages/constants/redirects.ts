import { OLD_SITE } from './oldSite'

export const REDIRECTS = {
  R2AT: {
    PATH: '/R2AT',
    REDIRECT_URL: `${OLD_SITE}/R2AT`,
  },
  TOTTES_KZ: {
    PATH: '/stats',
    REDIRECT_URL: `${OLD_SITE}/stats`,
  },
  KZ_REPLAY_VIEWER: {
    PATH: '/replay',
    REDIRECT_URL: `${OLD_SITE}/replay`,
  },
} as const
