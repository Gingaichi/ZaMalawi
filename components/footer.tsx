import Link from "next/link";

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
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><Link href="/facebook" className="text-gray-400 hover:text-white">Facebook</Link></li>
              <li><Link href="/twitter" className="text-gray-400 hover:text-white">Twitter</Link></li>
              <li><Link href="/instagram" className="text-gray-400 hover:text-white">Instagram</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}