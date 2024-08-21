// Created Configuration for PM2 (Which keeps our apps EC2 Server
module.exports = {
    apps: [
        {name: "inventory-management",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: 'development',
                ENV_VAR1: "environment-variable"
            }
        }
    ]
}
