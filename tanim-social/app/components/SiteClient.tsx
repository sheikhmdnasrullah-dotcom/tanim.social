'use client';

import { useState, useEffect, useRef } from 'react';
import { AboutSection } from './sections/AboutSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ThoughtsSection } from './sections/ThoughtsSection';
import { ContactSection } from './sections/ContactSection';
import { Navbar } from './Navbar';
import { ChatModal } from './modals/ChatModal';
import { YoutubeModal } from './modals/YoutubeModal';
import { VoiceModal } from './modals/VoiceModal';
import { ColdEmailModal } from './modals/ColdEmailModal';

export type Section = 'about' | 'expertise' | 'portfolio' | 'thoughts' | 'contact';

export default function SiteClient() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [isColdEmailOpen, setIsColdEmailOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const switchSection = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsChatOpen(false);
        setIsYoutubeOpen(false);
        setIsVoiceOpen(false);
        setIsColdEmailOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when modals open
  useEffect(() => {
    if (isChatOpen || isYoutubeOpen || isVoiceOpen || isColdEmailOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isChatOpen, isYoutubeOpen, isVoiceOpen, isColdEmailOpen]);

  return (
    <>
      <Navbar activeSection={activeSection} switchSection={switchSection} />
      
      <main ref={mainRef} style={{
        maxWidth: '980px',
        margin: '0 auto',
        padding: '8.2rem 2.8rem 5.8rem',
      }}>
        {activeSection === 'about' && (
          <AboutSection 
            switchSection={setActiveSection} 
            openChatAgent={() => setIsChatOpen(true)}
            openVoiceAgent={() => setIsVoiceOpen(true)}
            openYoutubeModal={(url) => { setYoutubeUrl(url); setIsYoutubeOpen(true); }}
            openColdEmailModal={() => setIsColdEmailOpen(true)}
          />
        )}
        {activeSection === 'expertise' && (
          <ExpertiseSection 
            switchSection={setActiveSection}
            openChatAgent={() => setIsChatOpen(true)}
            openYoutubeModal={(url) => { setYoutubeUrl(url); setIsYoutubeOpen(true); }}
          />
        )}
        {activeSection === 'portfolio' && (
          <PortfolioSection />
        )}
        {activeSection === 'thoughts' && (
          <ThoughtsSection />
        )}
        {activeSection === 'contact' && (
          <ContactSection />
        )}
      </main>

      <YoutubeModal open={isYoutubeOpen} url={youtubeUrl} onClose={() => setIsYoutubeOpen(false)} />
      <ChatModal open={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <VoiceModal open={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
      <ColdEmailModal open={isColdEmailOpen} onClose={() => setIsColdEmailOpen(false)} />
    </>
  );
}
