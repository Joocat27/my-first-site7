"use client"

import React from "react"
import { Phone, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">연락하기</h2>
      <p className="text-gray-600 mb-10">
        언제든 문의해 주세요.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-700">
        {/*010-2979-5585 // 1-213-247-5525 */}
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-blue-600" />
          <span className="text-lg">010-2979-5585, 1-213-247-5525</span>
        </div>

        {/* hivytv@gmail.com */}
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-blue-600" />
          <span className="text-lg">hivytv@gmail.com</span>
        </div>
      </div>
    </section>
  )
}
