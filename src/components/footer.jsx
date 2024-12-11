import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#232325] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm text-white">
              Flying Legend Vietnam is dedicated to preserving aviation history and inspiring future generations of pilots.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <form className="flex space-x-2">
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
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5 text-white" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5 text-white" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5 text-white" />
              </Button>
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

