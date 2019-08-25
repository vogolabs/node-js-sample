module.exports = {
  apps : [{
    name: 'iot_collector_app_kafka_consumer',
    script: 'index.js',
    instances: 'max',
    autorestart: true,
    watch: false,
    cwd: '/opt/vogo/iot-collector-consumer/',
    exec_mode  : "cluster",
//    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
