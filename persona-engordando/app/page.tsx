export default function NetArtPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-violet-900/30" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-balance">Consumo</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
            Una reflexión sobre el consumo, la transformación y las consecuencias
          </p>
          <a
            href="#animation"
            className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm border border-white/20"
          >
            Explorar
          </a>
        </div>
      </section>

      {/* Animation Section */}
      <section id="animation" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">La Transformación</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-pretty">
            Una animación interactiva que explora el ciclo del consumo excesivo
          </p>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 shadow-2xl">
            <iframe
              src="/animation.html"
              className="w-full h-[600px] rounded-lg"
              title="Animación de persona engordando"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Reflexiones Visuales</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-pretty">
            Imágenes que cuestionan nuestra relación con el consumo
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-black">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-q6Hjg89zMizJsk64vXZhAylTdvbwMN.png"
                alt="Figura etérea con formas animales"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm text-pretty">
                  La transformación interior: lo que consumimos se convierte en parte de nosotros
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-black">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sliICL1XM2AevnIzthVnWfHizYLSAz.png"
                alt="Siluetas y platos vacíos"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm text-pretty">
                  El ritual del consumo: platos vacíos esperando ser llenados
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-black md:col-span-2 lg:col-span-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mLBSdX3Tj9mvzWRkx5Cwa3P3O4XMTw.png"
                alt="Platos con diferentes carnes"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm text-pretty">La realidad del consumo: de la vida al plato</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Sobre esta obra</h2>
          <p className="text-gray-400 leading-relaxed mb-6 text-pretty">
            Esta pieza de net art explora la relación entre el consumo excesivo y sus consecuencias. A través de la
            animación CSS y las imágenes provocativas, se cuestiona nuestra cultura de consumo desmedido y la
            desconexión entre lo que comemos y su origen.
          </p>
          <p className="text-gray-400 leading-relaxed text-pretty">
            La animación representa el ciclo del consumo: comienza con una figura delgada que, al consumir sin control,
            crece hasta explotar. Las imágenes complementarias profundizan en la transformación física y ética de este
            proceso.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>Net Art · 2025 · Una reflexión sobre el consumo</p>
        </div>
      </footer>
    </div>
  )
}
