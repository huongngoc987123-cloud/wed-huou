import React, { useState } from 'react';
import { Article } from '../types';
import { ARTICLES } from '../data/mockData';
import { NewsCard } from '../components/NewsCard';
import { Sparkles, Search, Calendar, Clock, ArrowRight } from 'lucide-react';

interface NewsViewProps {
  onSelectArticle: (article: Article) => void;
}

export const NewsView: React.FC<NewsViewProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  const categories = [
    { id: 'all', label: 'Tất Cả Bài Viết' },
    { id: 'CÔNG NGHỆ MỚI', label: 'Công Nghệ R&D' },
    { id: 'SỰ KIỆN', label: 'Sự Kiện & Triển Lãm' },
    { id: 'SỨC KHỎE', label: 'Cẩm Nang Sức Khỏe' },
  ];

  const filteredArticles = ARTICLES.filter((a) => {
    const matchesCat = selectedCategory === 'all' || a.category === selectedCategory;
    const matchesQuery = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Thông Tin &amp; Nghiên Cứu Mới Nhất</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
          Tin Tức &amp; Sự Kiện VĐ VIỆT
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Cập nhật các công trình nghiên cứu dược liệu nhung hươu, thông tin triển lãm nông nghiệp và hướng dẫn chăm sóc sức khỏe chuyên sâu.
        </p>
      </div>

      {/* Featured Article Hero */}
      {featuredArticle && (
        <div 
          onClick={() => onSelectArticle(featuredArticle)}
          className="glass-card rounded-3xl overflow-hidden border border-white/15 cursor-pointer group hover:border-[#FF007F]/40 transition-all duration-500 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10]">
            <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-black/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
              TIÊU ĐIỂM NỔI BẬT
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#ff4a8d]" />
                {featuredArticle.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {featuredArticle.readTime}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ffb1c4] transition-colors leading-tight">
              {featuredArticle.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
              {featuredArticle.excerpt}
            </p>

            <button className="btn-gradient px-6 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-md shadow-[#FF007F]/20">
              <span>Đọc Bài Viết Này</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Search & Category Filter Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#FF007F] to-[#7928CA] text-white shadow-md'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm bài viết..."
            className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF007F]"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              onReadMore={onSelectArticle}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 space-y-3 bg-white/5 rounded-3xl border border-white/10">
          <p className="text-slate-400 text-sm">Không tìm thấy bài viết phù hợp với tìm kiếm của bạn.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="text-xs text-[#ffb1c4] underline"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}

    </div>
  );
};
