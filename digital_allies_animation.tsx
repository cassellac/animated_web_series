import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DigitalAlliesAnimationSeries = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop;
        const scrollHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
        const progress = scrollTop / scrollHeight;
        setScrollPosition(progress);
        
        if (progress < 0.33) setActivePhase(0);
        else if (progress < 0.66) setActivePhase(1);
        else setActivePhase(2);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const phases = [
    {
      title: "Phase 1: The Legacy & The Struggle",
      subtitle: "Hero Section - Top of Funnel",
      mood: "Rooted, Historical, Overwhelmed",
      scenes: [
        {
          name: "Historic Storefront - Dusk",
          description: "Multi-generational bakery with weathered sign. Warm interior light, but street feels empty. Owner visible through window, looking at papers with concern.",
          elements: [
            "Heavy brick building with traditional architecture",
            "Vintage hand-painted sign (slightly faded)",
            "Warm yellow light from inside contrasts with cooler street",
            "Empty sidewalk suggests lack of foot traffic",
            "Owner figure: shoulders slightly hunched, hand on forehead"
          ],
          animation: "Slow dimming of street lights. Gentle sway of hanging sign. Occasional passing shadow.",
          colorPalette: "Warm ochres, muted burgundy, deep browns, soft yellow interior glow"
        },
        {
          name: "Owner at Desk - Frustrated",
          description: "Close view of business owner surrounded by traditional tools (ledgers, recipe books) next to a dusty laptop. Screen shows confusing website builder.",
          elements: [
            "Wooden desk with worn finish",
            "Stack of physical ledgers and papers",
            "Old laptop with tangled cables",
            "Coffee mug (half-empty)",
            "Owner: furrowed brow, hand reaching toward screen hesitantly"
          ],
          animation: "Cursor blinking on screen. Papers shifting slightly. Steam rising from coffee.",
          colorPalette: "Warm wood tones, muted blues from screen, desaturated overall palette"
        }
      ]
    },
    {
      title: "Phase 2: The Alliance & The Bridge",
      subtitle: "Services & Process - Middle of Funnel",
      mood: "Collaboration, Clarity, Connection",
      scenes: [
        {
          name: "The Meeting - Understanding",
          description: "Split perspective showing owner and Digital Allies team member across table. Sketches and digital tablet between them. Light is brighter, warmer.",
          elements: [
            "Round table (bridging shape)",
            "Paper sketches blend with tablet screen",
            "Both figures leaning in (engaged posture)",
            "Coffee cups present (relationship building)",
            "Owner: face more open, slight smile forming",
            "Digital line elements start appearing subtly in background"
          ],
          animation: "Gentle glow from tablet. Hand gestures (pointing, drawing). Digital network lines slowly forming.",
          colorPalette: "Warmer tones emerging, clean whites from tablet, soft blue digital accents"
        },
        {
          name: "Building the Bridge",
          description: "Visual metaphor showing historic storefront with modern digital framework overlaying. Owner stands between both worlds, hands touching both.",
          elements: [
            "Original brick building (left side)",
            "Digital wireframe structure (right side)",
            "Central connecting space where both merge",
            "Owner figure: arms outstretched, connecting both",
            "Traditional textures blending with clean digital lines",
            "Subtle grid patterns emerging from historical architecture"
          ],
          animation: "Digital lines drawing themselves. Brick texture morphing into pixels at connection points. Light pulsing at junction.",
          colorPalette: "Historical warm tones transitioning to clean whites, vibrant blue accents, energetic orange highlights"
        },
        {
          name: "Tools in Hand",
          description: "Owner at modern desk setup. Old ledgers now organized beside sleek monitor showing beautiful website. Confident posture.",
          elements: [
            "Clean workspace (organized)",
            "Modern monitor with elegant website visible",
            "Traditional elements (recipe book) honored beside new tools",
            "Owner: upright posture, finger confidently on mouse",
            "Window behind showing brighter daylight",
            "Subtle connecting lines between old and new items"
          ],
          animation: "Screen showing smooth website interactions. Cursor moving purposefully. Sunlight slowly brightening.",
          colorPalette: "Balanced warm and cool tones, crisp whites, clear blues, natural sunlight"
        }
      ]
    },
    {
      title: "Phase 3: Revitalization & Momentum",
      subtitle: "Portfolio & Contact - Bottom of Funnel",
      mood: "Empowered, Vibrant, Forward-Looking",
      scenes: [
        {
          name: "Storefront Transformed",
          description: "Same building from Phase 1, now vibrant. Line of customers. Digital order pickup sign. Owner greeting customer with confidence.",
          elements: [
            "Same brick building (now clean, well-lit)",
            "Fresh paint on sign (traditional style, modern execution)",
            "Line of diverse customers",
            "Tablet in owner's hand showing orders",
            "Digital pickup station integrated naturally",
            "Street now alive with activity"
          ],
          animation: "Customers moving in/out. Digital order notifications pinging. Owner gesturing welcomingly. Light reflecting off clean windows.",
          colorPalette: "Full spectrum vibrant colors, bright whites, energetic accent colors, natural sunlight"
        },
        {
          name: "Owner Portrait - Empowered",
          description: "Confident portrait of owner in their space. Traditional elements honored, modern tools integrated. Looking directly at viewer with invitation.",
          elements: [
            "Owner: centered, upright, open expression",
            "Background: historic building with digital enhancements visible",
            "Both worlds fully integrated behind them",
            "Hands in welcoming gesture",
            "Subtle glow suggesting forward momentum"
          ],
          animation: "Gentle breathing movement. Background elements subtly pulsing with energy. Light gradually brightening.",
          colorPalette: "Rich, saturated colors balanced with clean whites, full tonal range, optimistic lighting"
        },
        {
          name: "The Invitation - Your Turn",
          description: "Wide view showing thriving business district. Multiple storefronts (various types) all showing signs of digital integration. Path leading toward viewer.",
          elements: [
            "Multiple business types represented",
            "Each showing historical charm + modern tools",
            "Path in foreground (literal invitation to start)",
            "Owners visible in various shops (all confident)",
            "Digital connection lines linking businesses subtly",
            "Bright, clear sky suggesting unlimited potential"
          ],
          animation: "Gentle movement throughout scene. Lights twinkling. Figures moving naturally. Path glowing invitingly.",
          colorPalette: "Full vibrant palette, optimistic blues, energetic oranges, clean whites, natural lighting"
        }
      ]
    }
  ];

  return (
    <div className="w-full h-screen bg-gray-50 overflow-hidden">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">Digital Allies Animation Series</h1>
          <p className="text-sm text-gray-600 mt-1">Scroll to progress through the transformation journey</p>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <div className="flex-1">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300 rounded-full"
                  style={{ width: `${scrollPosition * 100}%` }}
                />
              </div>
            </div>
            <div className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Phase {activePhase + 1} of 3
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div ref={containerRef} className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto p-8 space-y-16">
            {phases.map((phase, phaseIndex) => (
              <div 
                key={phaseIndex}
                className={`transition-all duration-700 ${
                  activePhase === phaseIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                }`}
              >
                {/* Phase Header */}
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-3">
                    {phase.subtitle}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{phase.title}</h2>
                  <p className="text-lg text-gray-600 italic">{phase.mood}</p>
                </div>

                {/* Scenes */}
                <div className="space-y-12">
                  {phase.scenes.map((scene, sceneIndex) => (
                    <div key={sceneIndex} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                      {/* Scene Visual Placeholder */}
                      <div className={`h-80 relative overflow-hidden ${
                        phaseIndex === 0 ? 'bg-gradient-to-br from-amber-100 via-orange-50 to-red-50' :
                        phaseIndex === 1 ? 'bg-gradient-to-br from-blue-50 via-white to-orange-50' :
                        'bg-gradient-to-br from-blue-100 via-white to-green-50'
                      }`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className={`w-32 h-32 mx-auto mb-4 rounded-lg ${
                              phaseIndex === 0 ? 'bg-amber-200 opacity-60' :
                              phaseIndex === 1 ? 'bg-blue-200 opacity-60' :
                              'bg-green-200 opacity-60'
                            }`} />
                            <p className="text-gray-500 text-sm font-medium">Visual Scene: {scene.name}</p>
                            <p className="text-gray-400 text-xs mt-1">Illustration to be created based on specifications below</p>
                          </div>
                        </div>
                      </div>

                      {/* Scene Details */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{scene.name}</h3>
                        <p className="text-gray-700 mb-4">{scene.description}</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Elements */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Elements:</h4>
                            <ul className="space-y-1">
                              {scene.elements.map((element, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-blue-600 mr-2">•</span>
                                  <span>{element}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Animation & Color */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Animation Notes:</h4>
                              <p className="text-sm text-gray-600">{scene.animation}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Color Palette:</h4>
                              <p className="text-sm text-gray-600">{scene.colorPalette}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Phase Divider */}
                {phaseIndex < phases.length - 1 && (
                  <div className="mt-16 flex items-center justify-center">
                    <div className="flex items-center gap-3 text-gray-400">
                      <div className="h-px w-16 bg-gray-300" />
                      <ChevronDown className="w-5 h-5" />
                      <div className="h-px w-16 bg-gray-300" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Technical Specifications */}
            <div className="mt-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Technical Execution Specifications</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-200 mb-3">Illustration Style Requirements:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Consistent outline weight across all assets (2-3px recommended)</li>
                    <li>• Limited color palette per phase with smooth transitions</li>
                    <li>• Textured fills for warmth (subtle grain, not distracting)</li>
                    <li>• Clean vector shapes for scalability</li>
                    <li>• Character design: relatable, not overly stylized</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-200 mb-3">Animation Guidelines:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Subtle movements only (2-3 second loops)</li>
                    <li>• Scroll-triggered transitions between major sections</li>
                    <li>• Easing: smooth, natural (ease-in-out)</li>
                    <li>• Environmental effects: slow, atmospheric</li>
                    <li>• Character movements: purposeful, not fidgety</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-200 mb-3">Layer Structure:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Characters: head, torso, left arm, right arm, left leg, right leg</li>
                    <li>• Environments: background, midground, foreground</li>
                    <li>• Effects: lighting layer, digital elements layer</li>
                    <li>• All layers named clearly for animator handoff</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-200 mb-3">Delivery Format:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• SVG for web (optimized, cleaned paths)</li>
                    <li>• Layered AI/Figma source files</li>
                    <li>• PNG exports at 2x for fallbacks</li>
                    <li>• Animation timing documentation</li>
                    <li>• Color values in HEX and RGB</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scroll indicator at bottom */}
            <div className="py-8 text-center text-gray-400 text-sm">
              <ChevronUp className="w-5 h-5 mx-auto mb-2" />
              <p>Scroll to top to review journey again</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalAlliesAnimationSeries;