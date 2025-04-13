const kafka = require('./kafka')

const runProducer = async () => {
  const producer = kafka.producer()
  await producer.connect()

  const message = {
    value: 'Hello from KafkaJS!',
  }

  await producer.send({
    topic: 'orders',
    messages: [message],
  })

  console.log('Message sent!')
  await producer.disconnect()
}

runProducer().catch(console.error)
