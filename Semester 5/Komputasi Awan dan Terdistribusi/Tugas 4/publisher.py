import time
import paho.mqtt.client as mqtt

BROKER = "test.mosquitto.org"   # broker publik
PORT = 1883
TOPIC = "gisel/demo"

client = mqtt.Client("publisher1")
client.connect(BROKER, PORT, keepalive=69)

for i in range(1, 6):
    msg = f"Pesan ke-{i} dari Gisel"
    result = client.publish(TOPIC, msg)
    status = result[0]
    if status == 0:
        print(f"Terkirim: {msg}")
    else:
        print("Gagal kirim pesan")
    time.sleep(1)

client.disconnect()