import { redirect } from '@solidjs/router'

export function GET() {
  return redirect('https://old.epoxide.se/stats')
}
