const kafka = require('./kafka')

const runConsumer = async () => {
  const consumer = kafka.consumer({ groupId: 'order-service' })
  await consumer.connect()
  await consumer.subscribe({ topic: 'orders', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic,
        partition,
        value: message.value.toString(),
      })
    },
  })
}

runConsumer().catch(console.error)
