export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a team of passionate individuals who are dedicated to providing a platform for fellow Malawians to buy and sell products.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="/facebook" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li><a href="/twitter" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="/instagram" className="text-gray-400 hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}