import ArticleCard from './ArticleCard';

function ArticleCardsDemo() {
  const articles = [
    {
      category: 'AI ENGINEERING',
      date: 'FEBRUARY, 2026',
      title: 'Automating compliance checks in regulated environments',
      gradient: 'linear-gradient(146.77deg, rgba(0, 140, 86, 1) 66.97%, rgba(7, 25, 32, 1) 100%)',
      backgroundImage: null,
      backgroundBlend: null
    },
    {
      category: 'AI ENGINEERING',
      date: 'FEBRUARY, 2026',
      title: 'Automating compliance checks in regulated environments',
      gradient: 'linear-gradient(146.77deg, rgba(166, 216, 191, 1) 66.97%, rgba(0, 0, 0, 1) 100%)',
      backgroundImage: null,
      backgroundBlend: null
    },
    {
      category: 'AI ENGINEERING',
      date: 'FEBRUARY, 2026',
      title: 'Automating compliance checks in regulated environments',
      gradient: 'linear-gradient(197.89deg, rgba(164, 237, 63, 1) 49.6%, rgba(0, 0, 0, 1) 119.26%)',
      backgroundImage: '/office-workspace.png',
      backgroundBlend: 'hard-light'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020f14] flex items-center justify-center p-8">
      <div className="flex gap-[27px] flex-wrap justify-center">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            category={article.category}
            date={article.date}
            title={article.title}
            gradient={article.gradient}
            backgroundImage={article.backgroundImage}
            backgroundBlend={article.backgroundBlend}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticleCardsDemo;
