import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
  query MyQuery(
    $access_key: String!
    $category: String
    $keywords: String
  ) {
    myQuery(
      access_key: $access_key
      categories: $category
      countries: "gb, il, us, jp"
      sort: "published_desc"
      keywords: $keywords
      ) {
      data {
        author
        category
        image
        description
        country
        language
        published_at
        source
        title
        url
      }
      pagination {
        total
        offset
        limit
        count
      }
    }
  }
`;

  const res = await fetch(
    "https://sidizouine.stepzen.net/api/sad-wolf/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `ApiKey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log(
    "LOADING NEW DATA FROM API for category >>> ",
    category,
    keywords
  );

const newsResponse = await res.json(); 

 const news = sortNewsByImage(newsResponse.data.myQuery);
 
 return news;
};

export default fetchNews;
