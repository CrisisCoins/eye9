type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article>
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
        </div>
      </div>
    </article>
  );
}

export default Article;
