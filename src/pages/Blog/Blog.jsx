import { Link } from "react-router-dom";

const blogPosts = [
  {
    img: "/img/blog-1-1.png",
    date: "20 Nov",
    title: "Sapien in Purus",
    author: "Admin",
    comments: 2,
    category: "Design",
    excerpt:
      "Totam aperiam eaque ipsa quae inventore veritatis quasi architebetea.vitae dicta sunt explicabo. nemo.",
  },
  {
    img: "/img/blog-1-2.png",
    date: "20 Nov",
    title: "Sapien in Purus",
    author: "Admin",
    comments: 2,
    category: "Design",
    excerpt:
      "Totam aperiam eaque ipsa quae inventore veritatis quasi architebetea.vitae dicta sunt explicabo. nemo.",
  },
  {
    img: "/img/blog-1-3.png",
    date: "20 Nov",
    title: "Sapien in Purus",
    author: "Admin",
    comments: 2,
    category: "Design",
    excerpt:
      "Totam aperiam eaque ipsa quae inventore veritatis quasi architebetea.vitae dicta sunt explicabo. nemo.",
  },
];

const Blog = () => {
  return (
    <section className="latest-news-area sec-pad" id="blog">
      <div className="container">
        <div className="sec-title text-center">
          <h2>Latest News</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt <br />
            mollit anim id est laborum Sed ut perspiciatis unde omnis.
          </p>
          <div className="line"></div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
              <div className="single-blog-grid wow fadeIn">
                <div className="img-box">
                  <img src={post.img} alt="Awesome Image" />
                  <div className="date-box">
                    {post.date.split(" ")[0]}
                    <br />
                    {post.date.split(" ")[1]}
                  </div>
                </div>
                <div className="text-box">
                  <Link to="/blog-details">
                    <h3>{post.title}</h3>
                  </Link>
                  <div className="meta">
                    <Link to="#">by {post.author}</Link>
                    <span className="sep">/</span>
                    <Link to="#">{post.comments} Comments</Link>
                    <span className="sep">/</span>
                    <Link to="#">{post.category}</Link>
                  </div>
                  <p>{post.excerpt}</p>
                  <Link to="/blog-details" className="read-more">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;