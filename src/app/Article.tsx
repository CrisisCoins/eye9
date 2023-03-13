type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article className='bg-slate-100 dark:bg-slate-800 flex flex-col
    rounded-lg shadow-sm hover:scale-105 hover:shadow-lg
    hover:bg-slate-200 transition-all duration-200 ease-out'>
      {article.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
          src={article.image}
          alt={article.title}
        />
      )}
      <div>
        <div>
          <h2>{article.title}</h2>
          <section>
            <p>
              {article.description}
            </p>
          </section>
          <footer>
            <p>{article.source} -</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
        {/* Read More */}
      </div>
    </article>
  );
}

export default Article;
