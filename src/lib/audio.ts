class AudioService {
  private synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    if (this.synth) {
      const loadVoices = () => {
        this.voices = this.synth!.getVoices();
      };
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = loadVoices;
      }
      loadVoices();
    }
  }

  // Mandatory to call this on the first user interaction to "unlock" audio in some browsers
  init() {
    if (this.synth) {
      this.synth.cancel();
      const utterance = new SpeechSynthesisUtterance('');
      this.synth.speak(utterance);
    }
  }

  speak(text: string) {
    if (!this.synth) return;

    // Direct synchronous call is required by most browsers
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Best voice selection
    const preferredVoices = this.voices.filter(v => v.lang.startsWith('en'));
    const voice = preferredVoices.find(v => v.name.includes('Google') || v.name.includes('Natural')) || 
                  preferredVoices[0] || 
                  this.voices[0];

    if (voice) utterance.voice = voice;
    
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.volume = 1.0;

    this.synth.speak(utterance);
  }

  stop() {
    this.synth?.cancel();
  }

  playSFX(type: 'correct' | 'incorrect' | 'click') {
    console.log(`Playing SFX: ${type}`);
  }
}

export const audioService = new AudioService();
