import React, { useState } from 'react';
import { ChevronRight, Tag, Folder, TrendingUp } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const recentPosts = [
    { title: "Machine Learning in Healthcare", date: "Jan 12, 2025" },
    { title: "GPT-4 vs GPT-5: What's New?", date: "Jan 10, 2025" },
    { title: "Autonomous Vehicles: 2025 Update", date: "Jan 8, 2025" },
    { title: "AI Ethics in the Modern World", date: "Jan 5, 2025" },
  ];

  const categories = [
    { name: "Machine Learning", count: 15, icon: TrendingUp },
    { name: "Generative AI", count: 12, icon: Folder },
    { name: "Automation", count: 8, icon: Tag },
    { name: "Neural Networks", count: 6, icon: TrendingUp },
  ];

  const tags = [
    "AI", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", 
    "Robotics", "Automation", "Ethics", "Future Tech", "Innovation"
  ];

  return (
    <aside className="bg-gray-50 p-6 rounded-lg shadow-sm">
      {/* Recent Posts */}
      <div className="mb-8">
        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 text-teal-600 mr-2" />
          Recent Posts
        </h3>
        <div className="space-y-3">
          {recentPosts.map((post, index) => (
            <div key={index} className="group">
              <a 
                href="#" 
                className="block p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-teal-600 leading-tight mb-1">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500">{post.date}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 flex items-center">
          <Folder className="h-5 w-5 text-teal-600 mr-2" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index}>
                <button
                  onClick={() => setActiveCategory(activeCategory === category.name ? null : category.name)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <IconComponent className="h-4 w-4 text-gray-500 mr-3" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-2">{category.count}</span>
                    <ChevronRight 
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                        activeCategory === category.name ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4 flex items-center">
          <Tag className="h-5 w-5 text-teal-600 mr-2" />
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1 text-xs font-medium bg-white text-gray-600 rounded-full border border-gray-200 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;