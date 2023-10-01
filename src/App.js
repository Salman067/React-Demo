import React from 'react';
import '../src/style/style.css'
import Item from './components/Item';
import Users from '../src/data/user.json';
// const heading="Paragraph";
// const paragraphStyle=`A paragraph is a series of sentences
// that are organized and coherent, and are all related to a 
// single topic. Almost every piece of writing you do
// that is longer than a few sentences should be organized
// into paragraphs. This is because paragraphs show a reader where the 
// subdivisions of an essay begin and end, and thus help the reader see the organization of the 
// essay and grasp its main points.`;

const App = ()=> {
return ( <div>
    <div className="headingStyle">
    <h1 id='subheading'>BD Store</h1>
    </div>
   <Item />
  </div>
);
}

export default App



