export default function Footer() {
  return (
    <div className="bg-[#1f4f46] text-white py-10 px-4 mt-20">
      <div className="max-w-5xl mx-auto  p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">KeenKeeper</h1>
        <p className="text-sm md:text-base text-gray-200 mb-6 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <p className="mb-4 text-sm md:text-base">Social Links</p>

        <div className="flex justify-center gap-4 mb-8">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
            <i className="fab fa-x-twitter"></i>
          </div>
        </div>

        <div className="border-t border-dashed border-cyan-400 pt-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 gap-2">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </div>
  );
}