# 🧪 Kafka + Zookeeper + Kafdrop - Docker Compose Setup

This setup provides a local development environment for **Apache Kafka**, **Zookeeper**, and **Kafdrop** using Docker Compose. Useful for testing Kafka-based architectures.

---

## 🏗️ Services Included

- **Zookeeper** - Kafka's dependency for managing brokers
- **Kafka** - Distributed event streaming platform
- **Kafdrop** - Lightweight web UI for inspecting Kafka topics, partitions, and messages

---

## 🐳 Getting Started

### 🔧 Requirements
- Docker
- Docker Compose

### ▶️ Start the Cluster

```bash
docker-compose up -d
```

### ⏹️ Stop the Cluster

```bash
docker-compose down
```

---

## 🌐 Access Kafdrop UI

- URL: [http://localhost:9000](http://localhost:9000)
- Use this UI to browse topics, partitions, consumer groups, and messages

---

## 🧪 Kafka CLI Examples

### 🔍 List All Topics

```bash
docker exec -it kafka /opt/kafka/bin/kafka-topics.sh --list --bootstrap-server localhost:9092
```

### 📤 Produce Messages to a Topic

```bash
docker exec -it kafka /opt/kafka/bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test
```

Type a message and press `Enter`.

### 📥 Consume Messages from a Topic

```bash
docker exec -it kafka /opt/kafka/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning
```

---

## 🔄 Kafka Internals Quick Notes

| Concept | Description |
|--------|-------------|
| Topic | Logical stream of records |
| Partition | Split of topic for scalability |
| Consumer Group | Enables message load balancing |
| Offset | Message position in a partition |
| Broker | Kafka server that stores data |

---

## ❓ Interview Q&A

**Q: What is the role of Zookeeper in Kafka?**  
A: It manages broker metadata, leader election, and stores configuration.

**Q: How does Kafka ensure message delivery?**  
A: Kafka ensures delivery using offset tracking and replication. Consumers commit offsets to keep track of progress.

**Q: Can multiple consumers read from the same topic?**  
A: Yes, by assigning different consumer groups. Same group = load balancing, different groups = broadcast style.

**Q: What happens if a consumer restarts?**  
A: It starts from the last committed offset.

**Q: How do you view messages in a topic?**  
A: Using `kafka-console-consumer.sh` or via Kafdrop UI.

---

## 🔥 Useful Commands

| Action | Command |
|--------|---------|
| List consumer groups | `kafka-consumer-groups.sh --list` |
| View topic details | `kafka-topics.sh --describe --topic <name>` |
| Delete all containers | `docker rm -f $(docker ps -aq)` |
| Check logs | `docker-compose logs -f kafka` |

---

## 📁 Project Structure

```
.
├── docker-compose.yml
└── README.md
```

---

## 🛠 Troubleshooting

- `No security protocol defined`: Ensure `KAFKA_LISTENER_SECURITY_PROTOCOL_MAP` is defined correctly
- Messages not visible? Try `--from-beginning` in your consumer CLI

---

## 🤝 License

This setup is free to use under the MIT License. Contributions welcome!