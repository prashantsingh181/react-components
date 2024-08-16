import Accordion from "./accordion";
import RandomColor from "./random-color";
import StarRating from "./star-rating";
import ImageSlider from "./image-slider";
import TreeView from "./tree-view";
import LightDark from "./light-dark";
import ScrollIndicator from "./scroll-indicator";
import TabParent from "./custom-tabs";
// import GithubProfileFinder from "./github-profile-finder";
// import ModalParent from "./custom-modal";
import SearchAutocomplete from "./search-autocomplete";
import TicTacToeWithHistory from "./tic-tac-toe-with-history";
import TicTacToe from "./tic-tac-toe";
// import FeatureFlagProvider from "./feature-flag/context";
// import FeatureFlagComponent from "./feature-flag/FeatureFlagComponent";
import UseFetchTest from "./useFetch/test";
import UseClickOutsideTest from "./useClickOutside/test";
import UseWindowResizeTest from "./use-window-resize/test";
import ScrollToParticularSection from "./scroll-to-particular-section";
import ScrollToTopAndBottom from "./scroll-to-top-and-bottom";
import AlertTest from "./alerts/AlertTest";
import InfiniteScroll from "./infinite-scroll";

const components = [
  {
    label: "Accordion",
    path: "/accordion",
    element: <Accordion />,
  },
  {
    label: "Random Color",
    path: "/random-color",
    element: <RandomColor />,
  },
  {
    label: "Scroll Indicator",
    path: "/scroll-indicator",
    element: <ScrollIndicator url="https://dummyjson.com/recipes" />,
  },
  {
    label: "Star Rating",
    path: "/star-rating",
    element: <StarRating />,
  },
  {
    label: "Infinite Scroll",
    path: "/infinite-scroll",
    element: <InfiniteScroll url="https://dummyjson.com/products" limit="20" />,
  },
  //   {
    //     label: "Table with Checkbox",
    //     path: "/table-with-checkbox",
    //     element: <TableWithCheckbox headers={headers} order={order} bodyObject={bodyObject} />,
    //   }
    {
      label: "Tree View",
      path: "/tree-view",
      element: <TreeView />,
    },
    {
      label: "Light Dark Mode",
      path: "/light-dark",
      element: <LightDark />,
    },
    {
      label: "Image Slider",
      path: "/image-slider",
      element: (
        <ImageSlider url="https://picsum.photos/v2/list" page="1" limit="5" />
      ),
    },
  {
    label: "Custom Tabs",
    path: "/custom-tabs",
    element: <TabParent />,
  },
  // {
  //   label: "Github Profile Finder",
  //   path: "/github-profile-finder",
  //   element: <GithubProfileFinder />,
  // },
  // {
  //   label: "Custom Modal",
  //   path: "/custom-modal",
  //   element: <ModalParent />,
  // },
  {
    label: "Search Autocomplete",
    path: "/search-autocomplete",
    element: <SearchAutocomplete />,
  },
  {
    label: "Tic Tac Toe with History",
    path: "/tic-tac-toe-with-history",
    element: <TicTacToeWithHistory />,
  },
  {
    label: "Tic Tac Toe",
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
  // {
  //   label: "Feature Flag Provider",
  //   path: "/feature-flag",
  //   element: (
  //     <FeatureFlagProvider>
  //       <FeatureFlagComponent />
  //     </FeatureFlagProvider>
  //   ),
  // },
  {
    label: "Use Fetch",
    path: "/use-fetch-test",
    element: <UseFetchTest />,
  },
  {
    label: "Use Click Outside",
    path: "/use-click-outside-test",
    element: <UseClickOutsideTest />,
  },
  {
    label: "Use Window Resize",
    path: "/use-window-resize-test",
    element: <UseWindowResizeTest />,
  },
  {
    label: "Scroll To Particular Section",
    path: "/scroll-to-particular-section",
    element: <ScrollToParticularSection />,
  },
  {
    label: "Scroll To Top and Bottom",
    path: "/scroll-to-top-and-bottom",
    element: <ScrollToTopAndBottom />,
  },
  {
    label: "Alert",
    path: "/alert-test",
    element: <AlertTest />,
  },
];
export default components;
