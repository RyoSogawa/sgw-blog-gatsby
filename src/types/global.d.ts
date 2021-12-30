type Maybe<T> = T | undefined
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: string
  JSON: never
}

declare type PostMeta = {
  title?: Maybe<Scalars['String']>
  emoji?: Maybe<Scalars['String']>
  tags?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
}

declare type Post = {
  excerpt?: string
  fields?: {
    slug?: string
  }
  frontmatter?: PostMeta
  html?: string
}
