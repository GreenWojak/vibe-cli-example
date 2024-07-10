<script>
import { modal, config } from '$lib/util';
import { watchAccount, getAccount, getChainId } from '@wagmi/core'
import { readContract, writeContract, simulateContract } from '@wagmi/core'
import { deployments, abi } from '$lib/contracts/Counter.json'
import { watchContractEvent } from '@wagmi/core'

let nr = $state(undefined);
let address = $state(undefined);
let chainId = $state(getChainId(config));

readContract(config, {
  address: deployments[chainId],
  abi: abi,
  functionName: 'number'
}).then((val) => {
  console.log('New val!', val)
  nr = val;
})

watchContractEvent(config, {
  address: deployments[chainId], abi: abi, eventName: 'Change',
  onChange(val) {
    console.log('New val!', val)
    nr = val;
  },
  onLogs(logs) { 
    console.log('Logs changed!', logs)
    console.dir(logs[0].args._value)
    nr = logs[0].args._value;
  }, 
})

function openModal() {
  modal.open();
}


async function increment() {
  const { request } = await simulateContract(config, {
    address: deployments[chainId],
    abi: abi,
    functionName: 'increment',
  })
  const hash = await writeContract(config, request)
  console.dir(hash)
}

async function decrement() {
  const { request } = await simulateContract(config, {
    address: deployments[chainId],
    abi: abi,
    functionName: 'decrement',
  })
  const hash = await writeContract(config, request)
  console.dir(hash)
}

watchAccount(config, {
  onChange(data) {
    address = data.isConnected ? getAccount(config).address : undefined;
  },
});
</script>

<button onclick={openModal}>
  {address ?? ' Connect'}
</button>
<button onclick={increment}>
  Increment
</button>
<button onclick={decrement}>
  Decrement
</button>
<span>{nr}</span>