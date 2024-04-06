import { provideHttpClient, withFetch } from '@angular/common/http'
import type { ApplicationConfig } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideFileRouter } from '@analogjs/router'

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
}
