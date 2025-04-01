import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CommentsList from './sections/CommentsSection';
import Hero from './sections/Hero';
import Updates from './sections/Updates';
import Requirements from './sections/Requirements';
import DownloadSection from './sections/DownloadSection';
import Gallery from './sections/Gallery';
import GameMainInfo from './sections/GameMainInfo';
import Footer from './sections/Footer';
import NewsMain from './sections/NewsMain';
import { EmptySpace } from './sections/EmptySpace';
import Credits from './sections/Credits';
import DeveloperMain from './sections/DeveloperMain';
import ReportForm from './sections/ReportForm'; 
import { TermsServices } from './sections/TermsServices';
import { DownloadInfo } from './sections/DownloadInfo';
import { useRef } from 'react';

const App = () => {
  const setActivePage = (page: 'home' | 'news' | 'game_info' | 'credits' | 'dev' | 'Report_Bugs' | 'DMCA' | 'Terms') => {
    console.log('Active Page:', page);
  
  };
  const downloadRef = useRef<HTMLDivElement>(null);
  return (
    <Router>
      <main className="relative font-montserrat">
        <Nav />

        <Routes>
          <Route path="/" element={
            <>
             <Hero downloadRef={downloadRef} />
              <Updates />
              <GameMainInfo />
              <Gallery />
              <section ref={downloadRef}><Requirements /></section>
              <DownloadSection />
              <CommentsList />
              <DeveloperMain />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/news" element={
            <>
              <EmptySpace />
              <Updates />
              <NewsMain />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/game_info" element={
            <>
              <EmptySpace />
              <GameMainInfo />
              <Gallery />
              <Requirements />
              <DownloadSection />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/credits" element={
            <>
              <EmptySpace />
              <Credits />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/dev" element={
            <>
              <EmptySpace />
              <DeveloperMain />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/Report_Bugs" element={
            <>
              <EmptySpace />
              <ReportForm 
              title="Submit a Bug Report"
               reportType="bugReports" />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/dmca" element={
            <>
              <EmptySpace />
              <ReportForm title="Submit a DMCA Report" reportType="dmcaReports" />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/terms" element={
            <>
              <EmptySpace />
              <TermsServices />
              <Footer setActivePage={setActivePage} />
            </>
          } />

          <Route path="/download" element={
            <>
              <EmptySpace />
              <DownloadInfo />
           
              <EmptySpace />
              <Footer setActivePage={setActivePage} />
            </>
          } />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
