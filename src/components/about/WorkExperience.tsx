import React from 'react'

const WorkExperience = (): JSX.Element => {
  const style = require('./WorkExperience.module.css')

  const itemClass =
    style.timeline__item + ' dark:before:!bg-blue-300 dark:after:!bg-blue-300'
  const yearClass =
    style.timeline__year + ' dark:!text-blue-300 dark:!border-gray-700'
  const contentClass = style.timeline__content + ' dark:!border-gray-700'

  return (
    <section>
      <h2 id={'work-experience'}>Work Experience</h2>
      <ul className={style.timeline}>
        <li className={itemClass}>
          <div className={yearClass}>2019年〜</div>
          <div className={contentClass}>
            <h3 className={style.timeline__title}>開発チームマネージャー</h3>
            <p className={style.timeline__desc}>
              学生の頃からの知り合い2人と共に開発チームを結成。
            </p>
            <ul>
              <li>Next.js / Nuxt.js での業務システム開発</li>
              <li>Next.js / Gatsby でのヘッドレスCMSサイト制作</li>
              <li>Apollo / Express での WebAPI ( REST / GraphQL )開発</li>
              <li>自動ユニットテスト / インテグレーションテスト</li>
              <li>AWS でのインフラ設計・構築</li>
              <li>スプレッドシート、GAS でのシステム開発</li>
              <li>Figma / Storybook を使ったシステムUI設計</li>
            </ul>
          </div>
        </li>
        <li className={itemClass}>
          <div className={yearClass}>2016年〜</div>
          <div className={contentClass}>
            <h3 className={style.timeline__title}>フリーランスに転向</h3>
            <ul>
              <li>
                <a
                  href="https://onesword.jp"
                  target={'_blank'}
                  rel={'noreferrer noopener'}
                >
                  ONE SWORD株式会社
                </a>
                に参画
              </li>
              <li>Web制作</li>
              <li>WordPressプラグイン開発</li>
              <li>PHPでのWebシステム開発</li>
              <li>RPAシステム開発</li>
            </ul>
          </div>
        </li>
        <li className={itemClass}>
          <div className={yearClass}>2014年〜</div>
          <div className={contentClass}>
            <h3 className={style.timeline__title}>某システム会社に入社</h3>
            <ul>
              <li>VB.net / SQL / オブジェクト指向</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default WorkExperience
