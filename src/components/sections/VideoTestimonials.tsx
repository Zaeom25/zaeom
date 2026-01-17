import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Youtube, ChevronLeft, ChevronRight } from "lucide-react"

// Declaração global para o YouTube
declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

const VideoCard = ({ videoId, title, client }: { videoId: string, title: string, client: string }) => {
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [isPaused, setIsPaused] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const playerRef = React.useRef<any>(null)
    const containerId = `yt-player-${videoId.replace(/[^a-zA-Z0-0]/g, '')}`

    // Carregamento da API (Sempre uma única vez)
    React.useEffect(() => {
        if (window.YT && window.YT.Player) return
        if (document.getElementById('youtube-api-core')) return

        const tag = document.createElement('script')
        tag.id = 'youtube-api-core'
        tag.src = "https://www.youtube.com/iframe_api"
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }, [])

    // Gerenciamento do Ciclo de Vida do Player
    React.useEffect(() => {
        if (!isPlaying) return

        let mounted = true
        let progressInterval: NodeJS.Timeout

        const stopEverything = () => {
            if (progressInterval) clearInterval(progressInterval)
            if (playerRef.current) {
                try {
                    playerRef.current.destroy()
                } catch (e) { }
                playerRef.current = null
            }
        }

        const createPlayer = () => {
            if (!mounted) return
            try {
                playerRef.current = new window.YT.Player(containerId, {
                    videoId: videoId,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3,
                        disablekb: 1,
                        enablejsapi: 1,
                        origin: window.location.origin
                    },
                    events: {
                        onReady: (event: any) => {
                            if (mounted) {
                                event.target.playVideo()
                                progressInterval = setInterval(() => {
                                    if (mounted && playerRef.current?.getCurrentTime) {
                                        const curr = playerRef.current.getCurrentTime()
                                        const dur = playerRef.current.getDuration()
                                        if (dur > 0) setProgress((curr / dur) * 100)
                                    }
                                }, 100)
                            }
                        },
                        onStateChange: (event: any) => {
                            if (!mounted) return
                            // End (0), Playing (1), Paused (2)
                            if (event.data === 1) setIsPaused(false)
                            if (event.data === 2) setIsPaused(true)
                            if (event.data === 0) {
                                setIsPlaying(false)
                                setProgress(0)
                            }
                        },
                        onError: () => {
                            if (mounted) setIsPlaying(false)
                        }
                    }
                })
            } catch (e) {
                console.error("YT creation failed", e)
            }
        }

        if (window.YT && window.YT.Player) {
            createPlayer()
        } else {
            const currentOnReady = window.onYouTubeIframeAPIReady
            window.onYouTubeIframeAPIReady = () => {
                if (currentOnReady) currentOnReady()
                createPlayer()
            }
        }

        return () => {
            mounted = false
            stopEverything()
        }
    }, [isPlaying, videoId, containerId])

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (!isPlaying) {
            setIsPlaying(true)
            return
        }
        if (playerRef.current?.getPlayerState) {
            const state = playerRef.current.getPlayerState()
            state === 1 ? playerRef.current.pauseVideo() : playerRef.current.playVideo()
        }
    }

    return (
        <div className="spotlight-card relative group transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-[#FEFDFA]/[0.02] border border-[#FEFDFA]/5 flex flex-col h-full shadow-2xl mx-2">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#39F265]/30 rounded-tl-[2.5rem] group-hover:border-[#39F265] transition-all duration-500 z-20" />

            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{ background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(57, 242, 101, 0.08), transparent 80%)` }}
            />

            <div className="relative aspect-[9/16] w-full overflow-hidden bg-black flex items-center justify-center">
                {/* Imagem de Capa e Overlay de Controle */}
                <div
                    className={`absolute inset-0 transition-opacity duration-700 cursor-pointer z-40 ${isPlaying && !isPaused ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    onClick={handleToggle}
                >
                    {/* Thumbnail e Info - Visível apenas antes de dar o play ou quando o vídeo acaba */}
                    <div className={`absolute inset-0 transition-opacity duration-700 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                        <img
                            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                            alt={title}
                            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                            onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` }}
                        />
                        <div className="absolute bottom-6 px-6 w-full z-20 text-left">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1 h-1 rounded-full bg-[#39F265]" />
                                <span className="text-[10px] font-black text-[#39F265] uppercase tracking-[0.2em]">{client}</span>
                            </div>
                            <h3 className="text-[#FEFDFA] font-bold text-lg leading-snug group-hover:text-[#39F265] transition-colors duration-500">
                                {title}
                            </h3>
                        </div>
                    </div>

                    {/* Ícone de Play - Visível quando pausado ou antes do play */}
                    <div className="absolute inset-0 flex items-center justify-center z-30">
                        <div className="w-16 h-16 rounded-full border border-[#39F265]/40 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(57,242,101,0.2)]">
                            <Play className="w-6 h-6 text-[#39F265] fill-[#39F265]" />
                        </div>
                    </div>
                </div>

                {/* Player Container (Renderizado condicionalmente mas isolado) */}
                {isPlaying && (
                    <div className="absolute inset-0 z-30 bg-black">
                        <div className="absolute inset-x-0 w-full h-[126%] -top-[13%] pointer-events-none scale-105">
                            <div id={containerId} className="w-full h-full"></div>
                        </div>
                        <div className="absolute inset-0 z-40 cursor-pointer" onClick={handleToggle} />
                    </div>
                )}

                {/* Timeline Progress */}
                <div className="absolute bottom-0 left-0 w-full h-1 z-50 bg-[#FEFDFA]/10">
                    <div
                        style={{ width: `${progress}%` }}
                        className="h-full bg-[#39F265] shadow-[0_0_15px_rgba(57,242,101,0.8)] transition-all duration-150 ease-linear"
                    />
                </div>
            </div>

            <div className="p-4 relative z-20 bg-black/40 backdrop-blur-md border-t border-[#FEFDFA]/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Youtube className="w-3.5 h-3.5 text-[#FEFDFA]/20" />
                    <span className="text-[10px] font-bold text-[#FEFDFA]/20 uppercase tracking-widest">Cliente Zaeom</span>
                </div>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <div key={s} className="w-1 h-1 rounded-full bg-[#39F265]/40" />)}
                </div>
            </div>
        </div>
    )
}

export const VideoTestimonials = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const containerRef = React.useRef<HTMLDivElement>(null)

    const videos = [
        { id: "qWrcPix5-RQ", client: "Nexus Ops", title: "A revolução na nossa triagem de leads" },
        { id: "jNQXAC9IVRw", client: "Innovate Group", title: "Escalando 10x sem contratar mais" },
        { id: "9bZkp7q19f0", client: "Alpha Digital", title: "Agente autônomo é o futuro da gestão" },
        { id: "L_jWHffIx5E", client: "Future Logistics", title: "Eficiência operacional no piloto automático" },
        { id: "60ItHLz5WEA", client: "Smart Core", title: "Segurança total nos nossos dados" },
        { id: "M7lc1UVf-VE", client: "Global Tech", title: "Otimização de processos em 30 dias" }
    ]

    const [slidesToShow, setSlidesToShow] = React.useState(1)

    React.useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth >= 1024) setSlidesToShow(3)
            else if (window.innerWidth >= 640) setSlidesToShow(2)
            else setSlidesToShow(1)
        }
        updateSlides()
        window.addEventListener('resize', updateSlides)
        return () => window.removeEventListener('resize', updateSlides)
    }, [])

    const maxIndex = Math.max(0, videos.length - slidesToShow)

    const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0))

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const cards = containerRef.current.getElementsByClassName("spotlight-card")
        for (const card of cards as any) {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }
    }

    return (
        <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-dot-pattern" id="depoimentos">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="text-left">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#39F265]/20 bg-[#39F265]/5 mb-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#39F265] animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#39F265]">Social Proof / Z-1</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-[#FEFDFA] mb-4 tracking-tighter">
                                A Prova na <span className="text-gradient">Prática</span>
                            </h2>
                            <p className="text-[#FEFDFA]/40 text-lg max-w-xl font-medium leading-relaxed italic text-balance">
                                Resultados reais contados por quem está à frente das empresas que mais crescem.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className={`w-12 h-12 rounded-full border border-[#FEFDFA]/10 flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'text-[#FEFDFA]/40 hover:text-[#39F265] hover:border-[#39F265]/40 hover:bg-[#39F265]/5'}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex >= maxIndex}
                            className={`w-12 h-12 rounded-full border border-[#FEFDFA]/10 flex items-center justify-center transition-all ${currentIndex >= maxIndex ? 'opacity-20 cursor-not-allowed' : 'text-[#FEFDFA]/40 hover:text-[#39F265] hover:border-[#39F265]/40 hover:bg-[#39F265]/5'}`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove}>
                    <motion.div
                        className="flex"
                        animate={{ x: `-${currentIndex * (100 / slidesToShow)}%` }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {videos.map((video, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 px-2"
                                style={{ width: `${100 / slidesToShow}%` }}
                            >
                                <VideoCard videoId={video.id} title={video.title} client={video.client} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="flex justify-center gap-2 mt-12">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-[#39F265]' : 'w-2 bg-[#FEFDFA]/10'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#39F265]/20 to-transparent" />
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39F265]/10 to-transparent" />
            </div>
        </section>
    )
}
