import paho.mqtt.client as mqtt

BROKER = "test.mosquitto.org"   # broker publik
PORT = 1883
TOPIC = "gisel/demo"

# callback pas konek ke broker
def on_connect(client, userdata, flags, rc):
    print("Berhasil terhubung ke kode", rc)
    client.subscribe(TOPIC)
    print(f"Subscribed ke topik '{TOPIC}'")

# callback pas nerima pesan
def on_message(client, userdata, msg):
    print(f"[{msg.topic}] {msg.payload.decode()}")

client = mqtt.Client("subscriber1")
client.on_connect = on_connect
client.on_message = on_message

client.connect(BROKER, PORT, keepalive=69)
client.loop_forever()
