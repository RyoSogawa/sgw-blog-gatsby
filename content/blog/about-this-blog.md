---
title: '本ブログの構成について'
emoji: '⚙️'
tags: ['Next.js', 'mdx']
createdAt: '2021-12-18'
updatedAt: '2021-12-18'
---

このブログは

- Next.js(SG)
- MDX
- TailwindCSS
- Vercel

を使っています。

https://github.com/RyoSogawa/sgw-dev

それぞれについて簡単に解説したいと思います。

## Next.js について

このブログを作り始めたころ、ちょうど[Remix](https://remix.run)が登場したこともあり、

- Next.js
- Remix
- Gatsby

の 3 つの選択肢がありました。

Remix の素振りも兼ねていいかもなとも思ったのですが、そんなに頻繁に更新しないであろうブログとの相性を考えると SG がよく、使い慣れてる Next.js に落ち着きました。

## 記事投稿について

記事投稿の方法は

- MDX
- GitHubIssue
- Notion
- microCMS 等のヘッドレス CMS

から MDX を選択しました。

GitHub の issue を記事とし、GitHubActions で GitHubPage にデプロイするリポジトリ（[Gh-cms](https://github.com/oscarnevarezleal/gh-cms)）がとてもおもしろかったので、なんらかの形で GitHubIssue を使いたいなと思ってたんですけど、とりあえず早くリリースできそうな MDX を選択しました。

将来的にはポートフォリオのページを一部パスワード制限で公開等しようと思ってるので、そのときに MDX では限界がある（リポジトリが public である以上、パスワードの意味が薄くなる）ので、そのときはまた別の方法を使おうと思ってます。

### MDX の実装方法

いくつか実装方法に選択肢がありましたが、純粋に公式で紹介されていた`@next/mdx`パッケージを使って実現しています。

[公式ドキュメント](https://nextjs.org/docs/advanced-features/using-mdx)

pages 内に mdx ファイルを配置でき、ラッパー等も自由に設定できたのでいろいろちょうどよかったです。

一般的に mdx ファイルは frontmatter のようなライブラリを使って meta 情報を格納しますが、このライブラリでは meta 情報はオブジェクトで保持するようです。

```jsx
// この記事ファイルのmeta情報とラッパー
import PagePost from '../../components/page/PagePost'
export const meta = {
  title: '本ブログの構成について',
  emoji: '⚙️',
  tags: ['Next.js', 'mdx'],
  createdAt: '2021-12-18',
  updatedAt: '2021-12-18',
}
export default ({ children }) => <PagePost meta={meta}>{children}</PagePost>
```

（ここで meta の型指定ができたら、記事ごとの meta 情報の格納漏れがチェックできたんですけど、mdx で ts が動作するようにはできるんでしょうか？）

次に、一覧ページの実装方法はこちらの記事を参考にしました。
https://blog.omoidasu.dev/posts/2020-06-13-blog-opened

```ts
import * as fs from 'fs'
import * as path from 'path'

export const getAllPosts = (): Post[] => {
  const mdxFileNames = fs.readdirSync(path.resolve('.', 'src', 'pages', 'post'))

  return mdxFileNames
    .map(fileName => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const post = require(`../pages/post/${fileName}`)

      return {
        ...post.meta,
        slug: fileName.replace(/.mdx$/, ''),
      }
    })
    .sort((a: Post, b: Post) => (a.createdAt > b.createdAt ? 0 : 1))
}
```

この関数で前記事の meta 情報と slug を取得し、page ファイルの`getStaticProps`で記事データを取得しています。

## TailwindCSS について

普段から TailwindCSS は好みでよく使っているのでこのブログでも採用しました。
特別 UI フレームワークが必要になったら [HeadlessUI](https://headlessui.dev/) でも入れようと思います。

他にも TailwindCSS を使った理由として、`@tailwindcss/typography` のプラグインが美しいことがあります。

文字組みのスタイルとして、[Nextra](https://nextra.vercel.app/) でも採用されており、[SWR のドキュメント](https://swr.vercel.app/)もこのプラグインの文字組みがメインで使われています。
技術メインのブログとしては見慣れた文字組みになって見やすいと思いました。

### 好みの設定

#### z-index

[chakra-ui の z-index の設定値](https://chakra-ui.com/docs/theming/theme#z-index-values)がわかりやすかったので、基本的にこの値で上書きしてます。

```js
zIndex: {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
},
```

どんな要素の z-index なのかが分かりやすくなるので、相対的な上下関係を調整することが減ります。

#### container

コンテナのテーマは中央寄せにし、padding も指定します。（extend）

```js
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',
    md: '2rem',
  },
}
```

あとは breakpoint ごとにコンテナのサイズを plugin のところで定義し直すことで、TailwindCSS の container クラスをカスタムしています。

```js
plugins: [
  function ({ addComponents }) {
    addComponents({
      '.container': {
        maxWidth: '100%',
        '@screen sm': {
          maxWidth: '640px',
        },
        '@screen md': {
          maxWidth: '768px',
        },
        '@screen lg': {
          maxWidth: '1024px',
        },
      },
    })
  },
],
```

## Vercel

デプロイ先は安定の Vercel です。
無料プランでも国内リージョンのエッジサーバーが使えるためサイトの表示速度向上が見込めます（Netlify よりも）。

料金まわりはちょっと気になりますが、とりあえず ISR をいれない純粋な SG であればよほど更新しまくらない限り問題ないかと。

## これから追加したい機能

最後に実装したい機能を書いて置こうと思います。

- パスワード制限のポートフォリオページ
- ブログカード
- ダークモード
- コメント機能
