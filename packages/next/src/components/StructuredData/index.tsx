import type { StructuredDataWebSite } from '@epoxide/web-types'

interface StructuredDataProps {
  schema: StructuredDataWebSite
}

export function StructuredData({ schema }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ ...schema, '@context': 'https://schema.org' }),
      }}
    />
  )
}
