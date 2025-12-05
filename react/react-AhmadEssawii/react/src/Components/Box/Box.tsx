import "./Box.css";

export default function Box() {
  return (
    <main>
      <section className="box">
        <img src="https://placehold.co/400x300" alt="Sample Product" />
      </section>
      <section className="product-info box">
        <h2>Minimal Chair</h2>
        <p>Comfortable, modern, and lightweight chair perfect for any space.</p>
        <p className="price">$79.99</p>
        <button>Add to Cart</button>
      </section>


      
    </main>
  );
}
