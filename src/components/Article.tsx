import React from 'react';
import { Lightbulb, Quote } from 'lucide-react';

const Article: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Artificial intelligence has moved beyond the realm of science fiction into our everyday reality. 
          From the moment we wake up to when we go to bed, AI systems are silently working to make our 
          lives more convenient, efficient, and connected.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          The integration of AI into daily life has been so gradual and seamless that many people don't 
          even realize how frequently they interact with intelligent systems. Your smartphone's camera 
          automatically adjusting settings, your email sorting important messages, and your music app 
          creating the perfect playlist – all powered by sophisticated AI algorithms.
        </p>

        <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Smart Homes: The New Standard
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          The concept of smart homes has evolved from luxury to necessity. Modern AI-powered home systems 
          can learn your preferences, anticipate your needs, and optimize energy consumption automatically.
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>Thermostats that learn your schedule and adjust temperature accordingly</li>
          <li>Security systems that recognize family members and trusted visitors</li>
          <li>Lighting systems that adapt to natural light patterns</li>
          <li>Smart appliances that order groceries when supplies run low</li>
        </ul>

        {/* Key Insight Callout Box */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-l-4 border-teal-500 p-6 my-8 rounded-r-lg shadow-sm">
          <div className="flex items-start space-x-3">
            <Lightbulb className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Insight</h3>
              <p className="text-gray-700">
                By 2025, it's estimated that 75% of homes in developed countries will have at least 
                one AI-powered device, making artificial intelligence as common as smartphones are today.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          The Workplace Revolution
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Professional environments are experiencing a paradigm shift as AI tools become integral to 
          productivity and decision-making processes. From automated scheduling to predictive analytics, 
          AI is reshaping how we approach work.
        </p>

        {/* Wide Image with Caption */}
        <figure className="my-12">
          <img 
            src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="AI and robotics in modern workplace" 
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-center text-sm text-gray-600 mt-4 italic">
            Modern workplaces are increasingly integrating AI-powered tools and robotics to enhance productivity and innovation.
          </figcaption>
        </figure>

        <h3 className="text-2xl font-serif font-semibold text-gray-900 mt-10 mb-4">
          Healthcare: Personalized and Predictive
        </h3>

        <p className="text-gray-700 leading-relaxed mb-6">
          Perhaps nowhere is AI's impact more profound than in healthcare. Machine learning algorithms 
          can now detect diseases earlier, predict health risks, and personalize treatment plans with 
          unprecedented accuracy.
        </p>

        <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-600 bg-gray-50 py-4 rounded-r">
          <Quote className="h-8 w-8 text-gray-400 mb-2" />
          "AI is not replacing doctors; it's making them superhuman. We can now see patterns in data 
          that would take years for the human eye to detect, allowing for earlier interventions and 
          better patient outcomes."
          <footer className="text-sm text-gray-500 mt-2 not-italic">
            — Dr. Michael Torres, Chief of Radiology, Stanford Medical Center
          </footer>
        </blockquote>

        <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Looking Ahead: Challenges and Opportunities
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          As AI continues to permeate every aspect of our lives, we must address important questions 
          about privacy, ethics, and the changing nature of human-machine collaboration. The goal 
          isn't to replace human intelligence but to augment it.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          The future promises even more seamless integration of AI into our daily routines. From 
          predictive health monitoring to intelligent city infrastructure, we're moving toward a 
          world where AI doesn't just respond to our needs—it anticipates them.
        </p>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </article>
  );
};

export default Article;