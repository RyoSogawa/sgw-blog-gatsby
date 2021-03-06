import React from 'react'
import Layout from '../layout/Layout'
import Services from '../about/Services'
import WorkExperience from '../about/WorkExperience'
import Favorites from '../about/Favorites'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../layout/Seo'
import Link from '../uiParts/Link'

const PageAbout = () => {
  return (
    <Layout>
      <Seo title={'About'} />
      <h1>About</h1>
      <div className={'flex items-center'}>
        <StaticImage
          src="../../images/logo/dinosaur_record_round.svg"
          width={337}
          height={337}
          quality={100}
          alt={''}
          className={'w-10 h-10 rounded-full shrink-0'}
        />
        <div
          className={
            'mr-10 ml-3 font-mono font-bold text-black dark:text-white shrink-0'
          }
        >
          Ryo Sogawa
        </div>
        <Services />
      </div>
      <p>
        香川県出身福岡県在住の 33 歳 1
        児の父。フリーランスでエンジニアをしています。
        <br />
        React を中心としたWebフロントエンドをメインで担当していますが、企画 /
        要件定義 / UI デザイン / システム設計 / バックエンド / インフラ /
        ネイティブアプリ等もやっています。
      </p>
      <p>
        お仕事のご依頼・ご相談は
        <a
          href="mailto:koashimitekara.1122@gmail.com"
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          こちら
        </a>
        まで。
      </p>
      <section>
        <h2 id={'policy'}>Policy</h2>
        <p>
          <strong>
            「よい UX は、よい DX （開発者体験）からしか生まれない」
          </strong>
          という気持ちから、DX を最も大事にしています。
        </p>
        DX 向上のために、
        <ul>
          <li>なるべく快適な開発環境を構築する（自動化、効率化）</li>
          <li>コミュニケーションを丁寧にする（無駄なネガティブを生まない）</li>
          <li>コードレビュー / 勉強会</li>
        </ul>
        といった取り組みに特に力を入れています。
      </section>
      <Favorites />
      <WorkExperience />
      <section>
        <h2 id={'education'}>Education</h2>
        <ul>
          <li>
            2019年{' '}
            <a
              href="https://www.eat-star.asia/"
              target={'_blank'}
              rel={'noreferrer noopener'}
            >
              EATビジネス予備校
            </a>
            卒業
          </li>
          <li>2014年 九州大学芸術工学部音響設計学科卒業</li>
        </ul>
      </section>
      <hr />
      <h1 id={'hobbies'}>Hobbies</h1>
      <section>
        <h2 id={'keyboard'}>Keyboard</h2>
        <p>
          2019年頃からキーボード沼に浸かりはじめました。
          <br />
          40%のカラムスタッガード配列のキーボードが今は好きです。
        </p>
        <ul>
          <li>メイン機: Lily58 Pro</li>
          <li>外用サブ機: cocot49</li>
          <li>補欠: HHKB</li>
        </ul>
      </section>
      <section>
        <h2 id={'music'}>Music</h2>
        <h3 id={'tariki-honganzi'}>他力本願寺</h3>
        <p>
          大学生の頃のバンドです。
          <br />
          作曲・作詞・ギター・ボーカル・レコーディング・ミックスをしていて、器用貧乏っぷりが垣間見えます。
        </p>
        <iframe
          title={'Spotify music player'}
          src="https://open.spotify.com/embed/album/5vlz4IQH6VTUWdQEqjjkQI?utm_source=generator"
          width="100%"
          height="210"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
        <div className="mt-8 responsive-wrap">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/6F3stJ8fbxs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <h3 id={'favorite-artists'}>Favorite Artists</h3>
        <ul>
          <li>The Beatles</li>
          <li>Sex Pistols</li>
          <li>Oasis</li>
          <li>The Smith</li>
          <li>Gang of Four</li>
          <li>Elliot Smith</li>
          <li>忌野 清志郎</li>
          <li>The Blue Hearts</li>
          <li>坂本 慎太郎</li>
        </ul>
        <h3 id={'others'}>Others</h3>
        友人が音楽プロデューサーをしてた時期があり、声優ユニットミルキーホームズの
        <Link to="https://www.nicovideo.jp/watch/sm25688422">みるみる体操</Link>
        を作曲、ピアノの演奏をしました。
      </section>
      <section>
        <h2>ストリートファイター</h2>
        ゲームはもともと色々やってたのですが、ストリートファイター4と出会ってから格ゲーメインになりました。
        <br />
        4のメインキャラは元、5はメナトです。
      </section>
    </Layout>
  )
}

export default PageAbout
