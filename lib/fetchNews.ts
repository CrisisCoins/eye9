const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const GET_QUERY = gql`
  query MyQuery {
    myQuery(access_key: "abc") {
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
        count
        limit
        offset
        total
      }
    }
  }
}
`;









export default fetchNews;


