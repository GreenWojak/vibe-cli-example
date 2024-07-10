import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { localhost } from 'viem/chains'
import { reconnect } from '@wagmi/core'

const projectId = 'cf6a574854b5b2491657e5c3fcb2fb30'
const chains = [localhost]

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain.
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

reconnect(config)

export const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
})

export interface Contract {
  deployments: any;
  abi: any;
}