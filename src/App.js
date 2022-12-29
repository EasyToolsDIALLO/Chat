import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Body from './components/Body';
import Sponsor from './components/Sponsor';
import Footer from './components/Footer';
import Statistic from './components/Statistic';

function App() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: '38489bd3eef525fd1dd0f481c1fd99c4b',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  });

  return (
    <div>
      <NavBar />
      <Banner />
      <Body />
      <Statistic />
      <Sponsor />
      <Footer />
    </div>
  );
}

export default App;
