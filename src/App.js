import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreButton from './components/load-more-data';
import TableWithCheckbox from './components/tableWithCheckbox';
import TreeView from './components/tree-view';
import QrCode from './components/QrCode';
import LightDark from './components/light-dark';
import ScrollIndicator from './components/scroll-indicator';

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
      <ScrollIndicator url="https://dummyjson.com/products?limit=100" />
    </div>
  );
}

export default App;
