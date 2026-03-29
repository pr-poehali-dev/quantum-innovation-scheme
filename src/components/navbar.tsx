import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Link, useLocation } from "react-router-dom"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  const navLink = (anchor: string, label: string) =>
    isHome ? (
      <a
        href={anchor}
        className="font-geist text-white hover:text-violet-500 transition-colors duration-200"
      >
        {label}
      </a>
    ) : (
      <Link
        to={`/${anchor}`}
        className="font-geist text-white hover:text-violet-500 transition-colors duration-200"
      >
        {label}
      </Link>
    )

  const mobileNavLink = (anchor: string, label: string) =>
    isHome ? (
      <a
        href={anchor}
        className="block px-3 py-2 font-geist text-white hover:text-violet-500 transition-colors duration-200"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </a>
    ) : (
      <Link
        to={`/${anchor}`}
        className="block px-3 py-2 font-geist text-white hover:text-violet-500 transition-colors duration-200"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    )

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="font-orbitron text-xl font-bold text-white">
                Blubsyy<span className="text-violet-500">.</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLink("#demo", "Платформа")}
              {navLink("#cases", "Кейсы")}
              {navLink("#comparison", "Сравнение")}
              {navLink("#faq", "Вопросы")}
              <Link
                to="/early-access"
                className="font-geist text-violet-400 hover:text-violet-300 transition-colors duration-200"
              >
                Ранний доступ
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white font-geist border-0">
              <Link to="/early-access">Попробовать бесплатно</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-violet-500 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/98 border-t border-violet-500/20">
              {mobileNavLink("#demo", "Платформа")}
              {mobileNavLink("#cases", "Кейсы")}
              {mobileNavLink("#comparison", "Сравнение")}
              {mobileNavLink("#faq", "Вопросы")}
              <Link
                to="/early-access"
                className="block px-3 py-2 font-geist text-violet-400 hover:text-violet-300 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Ранний доступ
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-violet-500 hover:bg-violet-600 text-white font-geist border-0">
                  <Link to="/early-access" onClick={() => setIsOpen(false)}>
                    Попробовать бесплатно
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
