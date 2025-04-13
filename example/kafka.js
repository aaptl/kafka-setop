const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-kafka-app',
  brokers: ['localhost:9092'], // use kafka:9093 if inside docker network
})

module.exports = kafka
