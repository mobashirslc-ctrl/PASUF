import React from 'react';

const projects = [
  { title: "শিক্ষা সহায়তা", description: "মেধাবী ও অসচ্ছল শিক্ষার্থীদের শিক্ষা সামগ্রী ও বৃত্তি প্রদান।" },
  { title: "খাদ্য ও ত্রাণ", description: "দুস্থ ও অসহায় মানুষের মাঝে নিয়মিত খাদ্য ও নিত্যপণ্য বিতরণ।" },
  { title: "স্বাস্থ্যসেবা", description: "বিনামূল্যে চিকিৎসা ক্যাম্প ও জরুরি স্বাস্থ্য সহায়তা প্রদান।" },
];

export const ProjectSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0F6B4A] mb-12">
          আমাদের কার্যক্রম
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#E59F34] rounded-lg mb-6 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};