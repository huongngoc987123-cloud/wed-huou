import React from 'react';
import { Article } from '../types';
import { X, Calendar, Clock, Share2, Sparkles } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#141221] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 mb-3">
            {article.category}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-6 text-xs text-slate-400 mt-3 pt-3 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#ff4a8d]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5 ml-auto text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Tác giả: Ban Biên Tập VĐ VIỆT
            </span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 max-h-96">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
          <p className="p-4 rounded-xl bg-white/5 border-l-4 border-[#FF007F] text-slate-200 font-medium italic">
            "{article.excerpt}"
          </p>

          <div className="pt-2 text-slate-300 leading-loose">
            {article.content}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            © Bản tin truyền thông chính thức VĐ VIỆT (VIETDZ)
          </div>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Đã sao chép liên kết bài viết!');
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Chia Sẻ Bài Viết</span>
          </button>
        </div>
      </div>
    </div>
  );
};
