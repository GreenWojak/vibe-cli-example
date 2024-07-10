export default {
  paths: {
    dest: ['vibe/deployed', 'src/lib/contracts'],
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
  calls: {
    localhost: {
      increment: { fileName: "Counter", script: "Increment"  },
      decrement: { fileName: "Counter", script: "Decrement"  }
    }
  }
}