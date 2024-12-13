import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#414655] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Về Chúng Tôi</h3>
            <p className="text-sm text-white">
              Flying Legend Vietnam is dedicated to preserving aviation history and inspiring future generations of pilots.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Thông Tin</h3>
            <form className="flex space-x-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-800"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Thông Tin Liên Lạc</h3>
            <div className="flex space-x-4">
              {/*Company address and hotline number */}
              <div>
                <p className="text-white">Flying Legend Vietnam</p>
                <p className="text-white">TDP Hưởng Lộc, Đạo Đức, Bình Xuyên, Vĩnh Phúc, Việt Nam</p>
                <p className="text-white">Tel: {"+84 (0) 90 329 8676"} Email: flv@flyinglegend.vn</p>
                <p className="text-white"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white">
          © {new Date().getFullYear()} Flying Legend Vietnam. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

