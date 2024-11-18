import type { StructuredDataWebSite } from '@epoxide/web-types'

export interface StructuredDataProps {
  schema: StructuredDataWebSite
}

export default function StructuredData(props: StructuredDataProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({ ...props.schema, '@context': 'https://schema.org' })}
    </script>
  )
}
