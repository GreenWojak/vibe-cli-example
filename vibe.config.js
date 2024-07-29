export default {
  paths: {
    dest: ['vibe/deployed', 'src/lib/contracts'],
  },
  chains: {
    polygon: {
      forkBlockTime: 2,
      supplyBalance: "100000000000000000000000",
      supplyAddresses: ['0x2e2B92F976339945b3070E0262E2A9BC82928a1e'],
      supplyTokens: [
        {
          address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
          from: ['0x5f83a7fC0F3a7A3573587636a631C8a7978232D3'],
          amount: '100000000000000000000000'
        }
      ]
    }
  },
  compile: [
    { fileName: "Counter", contracts: ["Counter"] },
  ],
  deploy: {
    localhost: [
      { 
        fileName: "Counter", contracts: [{ name: "Counter", args: {} }] 
      },
    ]
  },
  scripts: {
    localhost: {
      increment: { fileName: "Counter", script: "Increment"  },
      decrement: { fileName: "Counter", script: "Decrement"  }
    }
  }
}