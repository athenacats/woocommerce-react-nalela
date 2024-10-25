import client from "@/app/lib/apolloClient";
import { GET_PRODUCT } from "@/app/lib/singleProductQuery";
import DOMPurify from "dompurify";

export default async function page({ params }: any) {
  const { slug } = params;

  const { data } = await client.query({
    query: GET_PRODUCT,
    variables: { slug },
  });
  const sanitizeHtml = (html: any) => {
    if (typeof window !== "undefined") {
      return DOMPurify.sanitize(html);
    }
    return html;
  };
  const ingredientsIndex = data.product.description.search(
    /<h3[^>]*>.*Ingredients/i
  );

  // If the word "Ingredients" is found in an <h3> tag, slice up to that point
  const truncatedDescription =
    ingredientsIndex !== -1
      ? data.product.description.slice(0, ingredientsIndex)
      : data.product.description;

  const ingredientsSection =
    ingredientsIndex !== -1
      ? data.product.description.slice(ingredientsIndex)
      : "";

  return (
    <>
      <div
        className="card border-primary mb-3 mt-4 m-auto"
        style={{
          maxHeight: "90vh",
          maxWidth: "80vw",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div className="card-body d-flex flex-wrap">
          <img
            srcSet={data.product.image.srcSet}
            src={data.product.image.src}
            className="card-img-top img-fluid"
            alt="..."
            style={{ maxHeight: "auto", width: "50%" }}
          />
          <div className="w-50">
            <h4 className="card-title pt-2">{data.product.name}</h4>

            <h6
              className="card-subtitle mb-2 text-muted"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.product.price),
              }}
            ></h6>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data.product.shortDescription),
              }}
            ></div>
            <button type="button" className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div
        className="card border-primary mb-3 mt-4 m-auto"
        style={{
          maxHeight: "90vh",
          maxWidth: "80vw",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div className="card-header">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#description"
                aria-selected="true"
                role="tab"
              >
                Description
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#ingredients"
                aria-selected="false"
                role="tab"
              >
                Ingredients
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link "
                data-bs-toggle="tab"
                href="#reviews"
                aria-selected="false"
                role="tab"
              >
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div id="myTabContent" className="tab-content">
            <div
              className="tab-pane fade show active"
              id="description"
              role="tabpanel"
            >
              {}
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(truncatedDescription),
                }}
              ></p>
            </div>
            <div className="tab-pane fade" id="ingredients" role="tabpanel">
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(ingredientsSection),
                }}
              ></p>
            </div>
            <div className="tab-pane fade" id="reviews">
              <p>
                Etsy mixtape wayfarers, ethical wes anderson tofu before they
                sold out mcsweeney's organic lomo retro fanny pack lo-fi
                farm-to-table readymade. Messenger bag gentrify pitchfork
                tattooed craft beer, iphone skateboard locavore carles etsy
                salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                Leggings gentrify squid 8-bit cred pitchfork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
