"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Eye, Heart } from "lucide-react"
import { ThemeDetailModal } from "@/components/theme-detail-modal"

const themes = [
  {
    id: 1,
    name: "Modern Minimal",
    category: "modern",
    room: "living-room",
    image: "/modern-minimal-interior-design-living-room.jpg",
    description: "Clean lines, neutral colors, and functional furniture create a serene living space.",
    features: ["Neutral palette", "Clean lines", "Functional furniture", "Natural light"],
    priceRange: "$$",
  },
  {
    id: 2,
    name: "Luxury Premium",
    category: "luxury",
    room: "bedroom",
    image: "/luxury-premium-interior-design-bedroom.jpg",
    description: "Opulent materials, rich textures, and sophisticated color schemes for ultimate comfort.",
    features: ["High-end materials", "Rich textures", "Sophisticated colors", "Statement pieces"],
    priceRange: "$$$",
  },
  {
    id: 3,
    name: "Scandinavian",
    category: "scandinavian",
    room: "kitchen",
    image: "/scandinavian-interior-design-kitchen.jpg",
    description: "Light, airy spaces with natural wood and a focus on functionality and simplicity.",
    features: ["Natural wood", "White palette", "Functional design", "Cozy atmosphere"],
    priceRange: "$$",
  },
  {
    id: 4,
    name: "Industrial Loft",
    category: "industrial",
    room: "living-room",
    image: "/industrial-loft-living-room-design.jpg",
    description: "Exposed brick, metal accents, and raw materials create an urban aesthetic.",
    features: ["Exposed materials", "Metal accents", "Open spaces", "Urban aesthetic"],
    priceRange: "$$",
  },
  {
    id: 5,
    name: "Traditional Classic",
    category: "traditional",
    room: "bedroom",
    image: "/traditional-classic-bedroom-design.jpg",
    description: "Timeless elegance with ornate details, rich woods, and classic patterns.",
    features: ["Ornate details", "Rich woods", "Classic patterns", "Timeless elegance"],
    priceRange: "$$$",
  },
  {
    id: 6,
    name: "Contemporary Chic",
    category: "modern",
    room: "kitchen",
    image: "/contemporary-chic-kitchen-design.jpg",
    description: "Bold colors, sleek surfaces, and cutting-edge design for the modern home.",
    features: ["Bold colors", "Sleek surfaces", "Modern fixtures", "Statement lighting"],
    priceRange: "$$$",
  },
  {
    id: 7,
    name: "Rustic Farmhouse",
    category: "traditional",
    room: "living-room",
    image: "/rustic-farmhouse-living-room-design.jpg",
    description: "Warm, inviting spaces with reclaimed wood and vintage-inspired elements.",
    features: ["Reclaimed wood", "Vintage elements", "Warm palette", "Cozy textures"],
    priceRange: "$$",
  },
  {
    id: 8,
    name: "Minimalist Zen",
    category: "modern",
    room: "bedroom",
    image: "/minimalist-zen-bedroom-design.jpg",
    description: "Tranquil spaces with minimal decoration and a focus on peace and balance.",
    features: ["Minimal decoration", "Neutral tones", "Natural elements", "Peaceful atmosphere"],
    priceRange: "$",
  },
  {
    id: 9,
    name: "Coastal Breeze",
    category: "coastal",
    room: "living-room",
    image: "/coastal-breeze-living-room-design.jpg",
    description: "Light, breezy spaces inspired by the ocean with soft blues and natural textures.",
    features: ["Ocean-inspired", "Soft blues", "Natural textures", "Airy spaces"],
    priceRange: "$$",
  },
]

const categories = [
  { id: "all", label: "All Themes" },
  { id: "modern", label: "Modern" },
  { id: "luxury", label: "Luxury" },
  { id: "scandinavian", label: "Scandinavian" },
  { id: "industrial", label: "Industrial" },
  { id: "traditional", label: "Traditional" },
  { id: "coastal", label: "Coastal" },
]

const rooms = [
  { id: "all", label: "All Rooms" },
  { id: "living-room", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bathroom", label: "Bathroom" },
]

export function ThemeCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedRoom, setSelectedRoom] = useState("all")
  const [selectedTheme, setSelectedTheme] = useState<(typeof themes)[0] | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredThemes = themes.filter((theme) => {
    const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || theme.category === selectedCategory
    const matchesRoom = selectedRoom === "all" || theme.room === selectedRoom
    return matchesSearch && matchesCategory && matchesRoom
  })

  const toggleFavorite = (themeId: number) => {
    setFavorites((prev) => (prev.includes(themeId) ? prev.filter((id) => id !== themeId) : [...prev, themeId]))
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Renovation Theme Catalog
          </h1>
          <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
            Browse our extensive collection of design themes. Each theme includes high-quality visualizations and
            detailed specifications to help you choose the perfect style for your home.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category and Room Filters */}
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedRoom}>
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent">
              {rooms.map((room) => (
                <TabsTrigger
                  key={room.id}
                  value={room.id}
                  className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                >
                  {room.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredThemes.length}</span> themes
          </p>
        </div>

        {/* Theme Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredThemes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={theme.image || "/placeholder.svg"}
                    alt={theme.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" onClick={() => setSelectedTheme(theme)}>
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(theme.id)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites.includes(theme.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </button>

                  {/* Price Badge */}
                  <div className="absolute top-3 left-3 glass-panel px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-white">{theme.priceRange}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{theme.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{theme.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {theme.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-muted rounded-full text-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredThemes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No themes found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSelectedRoom("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Theme Detail Modal */}
      {selectedTheme && <ThemeDetailModal theme={selectedTheme} onClose={() => setSelectedTheme(null)} />}
    </div>
  )
}
