import React from "react";
import "./SearchImagePage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchImagePage() {
  const [{ term }, dispatch] = useStateValue();

  const type = "image";

  const { data } = useGoogleSearch(term, type);

  //const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="./google-logo.png"
            alt="google logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/search">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <div>News</div>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <div>shopping</div>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <div>maps</div>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <div>more</div>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <div>Settings</div>
              </div>
              <div className="searchPage__option">
                <div>Tools</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchImagePage__results">
          <p className="searchImagePage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          <div className="searchImagePage__container">
            {data?.items.map((item) => (
              <div className="searchImagePage__result">
                <a href={item.image.contextLink}>
                  <img
                    className="searchImagePage__resultImage"
                    src={item.link}
                    alt=""
                  />
                  <p className="resultImage__snippet">{item.title}</p>
                </a>
                <p className="image__snippet">{item.displayLink}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchImagePage;
