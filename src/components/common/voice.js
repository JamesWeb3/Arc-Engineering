import React, { useState, useRef } from 'react';
import { IconMicrophone } from '@/components/icons';

const VoiceComponent = () => {
    const [isListening, setIsListening] = useState(false);

    const recognitionRef = useRef(null);

    const toggleListening = () => {
        if (typeof window === 'undefined') {
            console.error("This code cannot run server-side.");
            return;
        }
        if (!recognitionRef.current) {
            const SpeechRecognition = window.SpeechRecognition || (window).webkitSpeechRecognition;
            if (!SpeechRecognition) {
                console.error("Speech Recognition API not supported in this browser.");
                return;
            }
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.lang = 'en-US';
            recognitionRef.current.interimResults = false;

            recognitionRef.current.onstart = () => setIsListening(true);
            recognitionRef.current.onend = () => setIsListening(false);

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                console.log(transcript);
                sendTranscriptToMake(transcript);
            };
            recognitionRef.current.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
            };
        }
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
    };

    const sendTranscriptToMake = async (transcript) => {
        try {
          const response = await fetch('/api/transcript', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ transcript }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          } else {
            console.log("Transcript sent successfully to Make.com");
            const data = await response.json();
          }
        } catch (error) {
          console.error("Failed to send transcript to Make.com", error);
        }
      };

    return (
        <div onClick={toggleListening} className={`relative bg-muted border-red-500 rounded-full flex items-center p-2 border-2 cursor-pointer ${isListening ? 'border-red-500 border-2' : ''}`}>
            <IconMicrophone />
        </div>
    );
};

export default VoiceComponent;
