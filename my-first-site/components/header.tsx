"use client"

import React from "react"
import { Home, User, Briefcase, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const menuItems = [
    { name: "홈", url: "#hero", icon: <Home size={18} /> },
    { name: "소개", url: "#about", icon: <User size={18} /> },
    { name: "프로젝트", url: "#projects", icon: <Briefcase size={18} /> },
    { name: "연락하기", url: "#contact", icon: <Mail size={18} /> },
  ]

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 w-full z-50">
      {/* 로고 */}
      <div className="text-2xl font-bold text-blue-600">이쁘고 사랑받는 쭈</div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex gap-6">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            {item.icon}
            {item.name}
          </a>
        ))}
      </nav>

      {/* 다크모드 토글 */}
      <div>
        <ThemeToggle />
      </div>
    </header>
  )
}
