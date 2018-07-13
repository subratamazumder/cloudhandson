import React from 'react';
import AppBodyRow1 from './AppBodyRow1';
import AppBodyRow2 from './AppBodyRow2';
import AppBodyRow3 from './AppBodyRow3';
import AppAboutUs from './AppAboutUs';
class AppBody extends React.Component {
  render() {
    return (
      <div>

        <div className="App">
          <AppBodyRow1 />
          <AppBodyRow2 />
          <AppBodyRow3 />
          <AppAboutUs />
        </div>


      </div>
    );
  }
}
export default AppBody;