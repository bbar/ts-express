module.exports = {
  apps: [
    {
      name: 'some-project',
      script: 'dist/app.js',
      interpreter_args: '--harmony',
      instances: 'max', // maximum processes possible according to the numbers of CPUs
      exec_mode: 'cluster',
      merge_logs: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      wait_ready: true,
      listen_timeout: 3000,
    },
  ],
};

// pm2 startOrGracefulReload ecosystem.config.js --env production;