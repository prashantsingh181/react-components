import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreButton from "./components/load-more-data";
import TableWithCheckbox from "./components/tableWithCheckbox";
import TreeView from "./components/tree-view";
import QrCode from "./components/QrCode";
import LightDark from "./components/light-dark";
import ScrollIndicator from "./components/scroll-indicator";
import TabParent from "./components/custom-tabs";
import GithubProfileFinder from "./components/github-profile-finder";
import ModalParent from "./components/custom-modal";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToeWithHistory from "./components/tic-tac-toe-with-history";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagProvider from "./components/feature-flag/context";
import FeatureFlagComponent from "./components/feature-flag/FeatureFlagComponent";
import UseFetchTest from "./components/useFetch/test";
import UseClickOutsideTest from "./components/useClickOutside/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToParticularSection from "./components/scroll-to-particular-section";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random Color component */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list" page="1" limit="5" /> */}
      {/* <LoadMoreButton url="https://dummyjson.com/products" limit="20"/> */}
      {/* <TableWithCheckbox headers={headers} order={order} bodyObject={bodyObject} /> */}
      {/* <TreeView /> */}
      {/* <QrCode /> */}
      {/* <LightDark /> */}
      {/* <ScrollIndicator url="https://dummyjson.com/products?limit=100" /> */}
      {/* <TabParent /> */}
      {/* <GithubProfileFinder /> */}
      {/* <ModalParent /> */}
      {/* <SearchAutocomplete /> */}
      {/* <TicTacToeWithHistory /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagProvider>
        <FeatureFlagComponent />
      </FeatureFlagProvider> */}
      {/* <UseFetchTest /> */}
      {/* <UseClickOutsideTest /> */}
      {/* <UseWindowResizeTest /> */}
      <ScrollToParticularSection />
      <ScrollToTopAndBottom />
    </div>
  );
}

export default App;
