import { z } from 'zod'

import type { PineconeMetadata } from '@/server/types'

export { PineconeMetadata }
export type SearchResult = {
  id: string
  score: number
  metadata: PineconeMetadata
}

export const SearchQuerySchema = z.object({
  query: z.string(),
  limit: z.coerce.number().nonnegative().int().min(1).max(50).optional()
})

export const SearchOptionsSchema = z.object({
  searchMode: z.string().optional(),
  orderBy: z.string().optional()
})

export type SearchQuery = z.infer<typeof SearchQuerySchema>
export type ISearchOptions = z.infer<typeof SearchOptionsSchema>
