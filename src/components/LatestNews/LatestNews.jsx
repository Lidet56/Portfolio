import React from "react";

export default function LatestNews() {
  return (
    <section className="latest-news-area sec-pad" id="blog">
      <div className="container">
        <div className="sec-title text-center">
          <h2>Latest News</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt <br /> mollit anim id est laborum Sed ut
            perspiciatis unde omnis.
          </p>
          <div className="line"></div>
          {/* <!-- /.line --> */}
        </div>
        {/* <!-- /.sec-title --> */}
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
              className="single-blog-grid wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0s"
              data-wow-offset="0"
            >
              <div className="img-box">
                <img src="img/blog-1-1.png" alt="Awesome Image" />
                <div className="date-box">
                  20
                  <br />
                  Nov
                </div>
                {/* <!-- /.date-box --> */}
              </div>
              {/* <!-- /.img-box --> */}
              <div className="text-box">
                <a href="#">
                  <h3>Sapien in Purus</h3>
                </a>
                <div className="meta">
                  <a href="#">by Admin</a>
                  <span className="sep">/</span>
                  <a href="#">2 Comments</a>

                  <span className="sep">/</span>
                  {/* <!----> */}
                  <a href="#">Design</a>
                </div>
                {/* <!-- /.meta --> */}
                <p>
                  Totam aperiam eaque ipsa quae inventore veritatis quasi
                  architebetea.vitae dicta sunt explicabo. nemo.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
              {/* <!-- /.text-box --> */}
            </div>
            {/* <!-- /.single-blog-grid --> */}
          </div>
          {/* <!-- /.col-md-4 --> */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
              className="single-blog-grid wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0s"
              data-wow-offset="0"
            >
              <div className="img-box">
                <img src="img/blog-1-2.png" alt="Awesome Image" />
                <div className="date-box">
                  20
                  <br />
                  Nov
                </div>
                {/* <!-- /.date-box --> */}
              </div>
              {/* <!-- /.img-box --> */}
              <div className="text-box">
                <a href="#">
                  <h3>Sapien in Purus</h3>
                </a>
                <div className="meta">
                  <a href="#">by Admin</a>
                  <span className="sep">/</span>

                  <a href="#">2 Comments</a>

                  <span className="sep">/</span>

                  <a href="#">Design</a>
                </div>
                {/* <!-- /.meta --> */}
                <p>
                  Totam aperiam eaque ipsa quae inventore veritatis quasi
                  architebetea.vitae dicta sunt explicabo. nemo.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
              {/* <!-- /.text-box --> */}
            </div>
            {/* <!-- /.single-blog-grid --> */}
          </div>
          {/* <!-- /.col-md-4 --> */}
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div
              className="single-blog-grid wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0s"
              data-wow-offset="0"
            >
              <div className="img-box">
                <img src="img/blog-1-3.png" alt="Awesome Image" />
                <div className="date-box">
                  20
                  <br />
                  Nov
                </div>
                {/* <!-- /.date-box --> */}
              </div>
              {/* <!-- /.img-box --> */}
              <div className="text-box">
                <a href="#">
                  <h3>Sapien in Purus</h3>
                </a>
                <div className="meta">
                  <a href="#">by Admin</a>
                  {/* <!----> */}
                  <span className="sep">/</span>
                  {/* <!---> */}
                  <a href="#">2 Comments</a>
                  {/* <!----> */}
                  <span className="sep">/</span>
                  {/* {/* <!-- --> */}
                  <a href="#">Design</a>
                </div>
                {/* <!-- /.meta --> */}
                <p>
                  Totam aperiam eaque ipsa quae inventore veritatis quasi
                  architebetea.vitae dicta sunt explicabo. nemo.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
              {/* <!-- /.text-box --> */}
            </div>
            {/* <!-- /.single-blog-grid --> */}
          </div>
          {/* <!-- /.col-md-4 --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </section>
    // <!-- /.latest-news-area -->
  );
}
