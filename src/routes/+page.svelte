<script>
import { modal, config } from '$lib/util';
import { watchAccount, getAccount } from '@wagmi/core'

let address = $state(undefined);

function openModal() {
  modal.open();
}

watchAccount(config, {
  onChange(data) {
    address = data.isConnected ? getAccount(config).address : undefined;
  },
});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if address }
<button onclick={openModal} type="button" class="btn btn-sm w-40 h-8 variant-soft-primary rounded-lg line-clamp-1 truncate">
  {address}
</button>
{:else}
<button onclick={openModal} type="button" class="btn btn-sm w-40 h-8 variant-soft-primary rounded-lg">
  Connect
</button>
{/if}