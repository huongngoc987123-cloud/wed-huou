'use client';

import React from 'react';
import { Article } from '@/types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  article: Article;
  onReadMore: (article: Article) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, onReadMore }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-[#7928CA]/50 transition-all duration-300">
      <div className="relative h-52 overflow-hidden bg-black/50">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase bg-black/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
          {article.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#ff4a8d]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <button
          onClick={() => onReadMore(article)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#ffb1c4] hover:text-white transition-colors group/btn pt-2"
        >
          <span>Đọc Chi Tiết</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
