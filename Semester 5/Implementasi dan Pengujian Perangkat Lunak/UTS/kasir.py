class Product:
    def __init__(self, id, name, price):
        self.id = id
        self.name = name
        self.price = price

    # Sama seperti getPrice(id) pada Java
    def get_price(self, id):
        if self.id == id:
            return self.price
        return 0


class OrderDetail:
    def __init__(self):
        self.product_id = 0
        self.quantity = 0
        self.subtotal = 0

    def set_id(self, id):
        self.product_id = id

    # Sama seperti setQuantity(id, qty, product)
    def set_quantity(self, id, qty, product):
        self.quantity = qty
        self.subtotal = product.get_price(id) * qty

    def get_subtotal(self):
        return self.subtotal


class Order:
    def __init__(self):
        self.items = []
        self.total = 0

    def add_item(self, order_detail):
        self.items.append(order_detail)

    def calculate_total(self):
        self.total = sum(item.get_subtotal() for item in self.items)

    def get_items(self):
        return self.items

    def get_total(self):
        return self.total


class Printer:
    def load_data(self, order):
        print("\n------ STRUK PEMBELIAN ------")
        for od in order.get_items():
            print("Subtotal Item : Rp", od.get_subtotal())
        print("Total Bayar : Rp", order.get_total())
        print("-----------------------------")

    def print(self):
        print("Struk berhasil dicetak.\n")


# ===== MAIN Program Kasir =====
if __name__ == "__main__":

    # Data Produk (ibarat database sederhana)
    p1 = Product(1, "Teh Botol", 5000)
    p2 = Product(2, "Roti", 8000)

    order = Order()

    od1 = OrderDetail()
    od1.set_id(1)
    od1.set_quantity(1, 2, p1)
    order.add_item(od1)

    od2 = OrderDetail()
    od2.set_id(2)
    od2.set_quantity(2, 1, p2)
    order.add_item(od2)

    order.calculate_total()

    printer = Printer()
    printer.load_data(order)
    printer.print()
