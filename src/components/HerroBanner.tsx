import SearchBar from "./SearchBar";

export default function HeroBanner() {
  return (
    <section 
    className="relative h-[400px] bg-cover bg-center flex items-center justify-center mt-20 rounded-xl mb-16"
    style={{backgroundImage: 'url(/images/banner1.jpg)', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Jual Beli dan Sewa Properti Jadi Mudah
        </h1>
        <p className="mt-4 text-lg drop-shadow">
          Temukan Properti Yang Anda Cari Dengan Mudah
        </p>

        {/* Search bar diposisikan di tengah */}
        <div className="mt-10">
          <SearchBar />
        </div>
      </div>
    </section>
  )
}
