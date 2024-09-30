module.exports = {
  apps: [
    {
      name: "inventory-management",
      scripts: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      }
    }
  ]
}