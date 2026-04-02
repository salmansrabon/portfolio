export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1F2A3C] bg-[#0B0F19] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[#00FFD1] font-bold font-mono">{"<"}</span>
          <span className="font-bold text-white">Salman</span>
          <span className="text-[#00FFD1] font-bold font-mono">{"/>"}</span>
        </div>
        <p className="text-gray-500 text-sm text-center">
          © {year} Salman Rahman · Senior SDET · Building reliable systems at scale
        </p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:salman@roadtocareer.net"
            className="text-gray-400 hover:text-[#00FFD1] text-sm transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/kmsalmanrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFD1] text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://roadtosdet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00FFD1] text-sm transition-colors"
          >
            Road to SDET
          </a>
        </div>
      </div>
    </footer>
  );
}
