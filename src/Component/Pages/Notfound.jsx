import React from 'react'

function Notfound() {
  return (
    <>
    <main className="main page-404">
  <div className="page-content pt-150 pb-150">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
          <p className="mb-20">
            <img
              src="https://nest-frontend.netlify.app/assets/imgs/page/page-404.png"
              alt=""
              className="hover-up"
            />
          </p>
          <h1 className="display-2 mb-30">Page Not Found</h1>
          <p className="font-lg text-grey-700 mb-30">
            The link you clicked may be broken or the page may have been
            removed.
            <br />
            visit the{" "}
            <a href="index.htm">
              {" "}
              <span> Homepage</span>
            </a>{" "}
            or{" "}
            <a href="page-contact.html">
              <span>Contact us</span>
            </a>{" "}
            about the problem
          </p>
          <div className="search-form">
            <form action="#">
              <input type="text" placeholder="Search…" />
              <button type="submit">
                <i className="fi-rs-search" />
              </button>
            </form>
          </div>
          <a
            className="btn btn-default submit-auto-width font-xs hover-up mt-30"
            href="index.htm"
          >
            <i className="fi-rs-home mr-5" /> Back To Home Page
          </a>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default Notfound