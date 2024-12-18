import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#414655] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Về Chúng Tôi
            </h3>
            <p className="text-sm text-white">
              Flying Legend Vietnam và TP-150 không chỉ đơn thuần là một sản
              phẩm, mà còn là niềm tự hào của đội ngũ chúng tôi, góp một viên
              gạch đầu tiên cho nền sản xuất máy bay Việt Nam.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Liên Lạc Với Chúng Tôi
            </h3>
            <a
              href="https://forms.gle/ZvuabTL7wXTetxUj8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="button" variant="secondary">
                Form Liên Lạc
              </Button>
            </a>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Thông Tin Liên Lạc
            </h3>
            <div className="flex space-x-4">
              {/*Company address and hotline number */}
              <div>
                <p className="text-white">Flying Legend Vietnam</p>
                <p className="text-white">
                  TDP Hưởng Lộc, Đạo Đức, Bình Xuyên, Vĩnh Phúc, Việt Nam
                </p>
                <p className="text-white">Tel: +84 (0) 90 329 8676</p>
                <p className="text-white">Email: flv@flyinglegend.vn</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white grid grid-cols-1 gap-4 md:grid-cols-2">
          © {new Date().getFullYear()} Flying Legend Vietnam. All rights
          reserved.
          <p>Web Admin: Nguyen Hoang Minh | Email: hoangminh0824@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
