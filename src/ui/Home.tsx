import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          $SOS Casino
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An open source, decentralized casino built on Gamba.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=2mnGSkXH1h6x5qmhwoQzAZDKa83vnRf8wNkNWVbdv7w5&outputSymbol=%24S0S&fixed=in"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Buy $SOS
          </Button>
        </div>
      </Section>
    </div>
  )
}
