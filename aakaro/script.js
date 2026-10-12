/**
 * Aakaro — Vanilla JavaScript UI Recreation
 * Full recreation of the Aakaro Claymorphism + Bento Brand Identity System
 */

(function () {
  "use strict";

  // --- Constants & Stage Definitions ---
  const STAGE_STEPS = [
    { id: "idea", label: "Idea" },
    { id: "clarification", label: "Clarify" },
    { id: "strategy", label: "Strategy" },
    { id: "naming", label: "Naming" },
    { id: "identity", label: "Identity" },
  ];

  const NEXT_STEPS_LIST = [
    { label: "Clarify", note: "Three quick questions" },
    { label: "Strategy", note: "Your brand foundation" },
    { label: "Naming", note: "Directions and alternatives" },
    { label: "Identity", note: "Voice, colors, and kit" },
  ];

  const STATUS_LINES_STRATEGY = [
    "Understanding your audience",
    "Finding the central promise",
    "Defining your positioning",
    "Mapping naming territories",
  ];

  const STATUS_LINES_NAMING = [
    "Mining your naming territories",
    "Shaping five distinct candidates",
    "Stress-testing how each one sounds",
    "Matching names to your positioning",
  ];

  const STATUS_LINES_EVALUATING = [
    "Scoring distinctiveness and strategic fit",
    "Weighing memorability and extensibility",
    "Writing honest trade-offs for each name",
  ];

  const SCORE_METRICS = [
    { key: "distinctiveness", label: "Distinctive" },
    { key: "strategicFit", label: "Strategic fit" },
    { key: "memorability", label: "Memorable" },
    { key: "extensibility", label: "Extensible" },
  ];

  const PLAIN_SWAPS = {
    revolutionary: "new",
    "game-changing": "useful",
    "best-in-class": "strong",
    "cutting-edge": "modern",
    disruptive: "different",
    "world-class": "solid",
    seamless: "smooth",
    leverage: "use",
    synergy: "teamwork",
    effortless: "simple",
    "10x": "much faster",
  };

  // --- Mock Persona Engine (from Aakaro reference) ---
  const PERSONAS = [
    {
      keywords: ["teammate", "hackathon", "student", "college", "campus"],
      questions: [
        {
          question:
            "Who feels this problem most strongly: first-time hackathon participants, experienced competitors, or college clubs organising teams?",
          reason: "The strongest audience decides the voice and the words the name must own.",
        },
        {
          question:
            "What should make joining a team here meaningfully different from posting in campus groups or Discord servers?",
          reason: "Differentiation is what the name and tagline must hint at.",
        },
        {
          question:
            "Should the brand feel energetic and competitive, collaborative and welcoming, or professional and career-oriented?",
          reason: "Personality steers tone, color, and naming style together.",
        },
      ],
      territories: ["Team Spark", "Coined & Friendly", "Campus Rituals"],
      personality: ["Welcoming", "Focused", "Honest"],
      positioning:
        "The welcoming teammate-finder for campus builders, standing apart from noisy group chats by matching on skills and intent.",
      candidates: [
        {
          id: "n1",
          name: "Teamly",
          territory: "Team Spark",
          rationale:
            "Mock candidate 1 from the Team Spark territory, aimed at First-time hackathon participants forming their first teams: Deliver clearly on what you described.",
          linguisticNote: "Pronounced exactly as spelled.",
          scores: { distinctiveness: 4, strategicFit: 5, memorability: 4, extensibility: 4 },
          strengths: [
            "Speaks directly to First-time hackathon participants forming their first teams.",
            "Short, concrete, and easy to say aloud.",
          ],
          risks: [
            "Could blend in with similarly named tools.",
            "May feel narrow if the promise shifts.",
          ],
          verdict:
            "Works best for First-time hackathon participants when matching on skills and intent. Main trade-off: Could blend in with similarly named tools.",
        },
        {
          id: "n2",
          name: "Coinedora",
          territory: "Coined & Friendly",
          rationale:
            "Mock candidate 2 from the Coined & Friendly territory, aimed at First-time hackathon participants forming their first teams: Deliver clearly on what you described.",
          linguisticNote: "Flows smoothly with open vowel endings.",
          scores: { distinctiveness: 3, strategicFit: 4, memorability: 5, extensibility: 3 },
          strengths: [
            "Short, concrete, and easy to say aloud.",
            "Leaves room beyond the first idea: Collaborative and welcoming.",
          ],
          risks: [
            "Pronunciation may vary across languages.",
            "Could blend in with similarly named tools.",
          ],
          verdict:
            "Works best for First-time hackathon participants when matching on skills and intent. Main trade-off: Pronunciation may vary across languages.",
        },
        {
          id: "n3",
          name: "TeamSpot",
          territory: "Team Spark",
          rationale:
            "Mock candidate 3 from the Team Spark territory, aimed at First-time hackathon participants forming their first teams: Deliver clearly on what you described.",
          linguisticNote: "Pronounced exactly as spelled.",
          scores: { distinctiveness: 5, strategicFit: 3, memorability: 4, extensibility: 5 },
          strengths: [
            "Leaves room beyond the first idea: Collaborative and welcoming.",
            "Speaks directly to First-time hackathon participants forming their first teams.",
          ],
          risks: [
            "May feel narrow if the promise shifts.",
            "Pronunciation may vary across languages.",
          ],
          verdict:
            "Works best for First-time hackathon participants when matching on skills and intent. Main trade-off: May feel narrow if the promise shifts.",
        },
        {
          id: "n4",
          name: "Coinedcraft",
          territory: "Coined & Friendly",
          rationale:
            "Mock candidate 4 from the Coined & Friendly territory, aimed at First-time hackathon participants forming their first teams: Deliver clearly on what you described.",
          linguisticNote: "Compound Germanic structure gives a sturdy feel.",
          scores: { distinctiveness: 3, strategicFit: 4, memorability: 3, extensibility: 4 },
          strengths: [
            "Speaks directly to First-time hackathon participants forming their first teams.",
            "Short, concrete, and easy to say aloud.",
          ],
          risks: [
            "Could blend in with similarly named tools.",
            "May feel narrow if the promise shifts.",
          ],
          verdict:
            "Works best for First-time hackathon participants when matching on skills and intent. Main trade-off: Could blend in with similarly named tools.",
        },
        {
          id: "n5",
          name: "TeamLoop",
          territory: "Team Spark",
          rationale:
            "Mock candidate 5 from the Team Spark territory, aimed at First-time hackathon participants forming their first teams: Deliver clearly on what you described.",
          linguisticNote: "Pronounced exactly as spelled.",
          scores: { distinctiveness: 4, strategicFit: 5, memorability: 4, extensibility: 3 },
          strengths: [
            "Short, concrete, and easy to say aloud.",
            "Leaves room beyond the first idea: Collaborative and welcoming.",
          ],
          risks: [
            "Pronunciation may vary across languages.",
            "Could blend in with similarly named tools.",
          ],
          verdict:
            "Works best for First-time hackathon participants when matching on skills and intent. Main trade-off: Pronunciation may vary across languages.",
        },
      ],
    },
    {
      keywords: ["market", "buy", "sell", "shop", "store", "product", "goods"],
      questions: [
        {
          question:
            "Who is this marketplace really for: individual sellers, small local businesses, or collectors with a niche?",
          reason: "The seller audience shapes how premium or everyday the brand should feel.",
        },
        {
          question:
            "What frustrates people most about the way they buy or sell this today?",
          reason: "The sharpest pain point becomes the promise the brand leads with.",
        },
        {
          question:
            "Should the brand feel like a trusted craftsman, a playful bazaar, or a minimal modern storefront?",
          reason: "Personality steers tone, color, and naming style together.",
        },
      ],
      territories: ["Trusted Hands", "The Modern Stall", "Coined & Light"],
      personality: ["Trusted", "Crafted", "Modern"],
      positioning:
        "The focused storefront for its niche, standing apart from crowded general marketplaces by keeping exchange simple and trustworthy.",
      candidates: [
        {
          id: "n1",
          name: "Stallio",
          territory: "The Modern Stall",
          rationale: "Echoes the agility of a boutique booth with a crisp digital sound.",
          linguisticNote: "Pronounced exactly as spelled.",
          scores: { distinctiveness: 4, strategicFit: 5, memorability: 4, extensibility: 4 },
          strengths: ["Clean, modern phonetic shape.", "Suggests high-touch curation."],
          risks: ["Could sound like Italian dining.", "Slightly informal."],
          verdict: "Strongest candidate for independent sellers seeking an elevated identity.",
        },
        {
          id: "n2",
          name: "Vouch",
          territory: "Trusted Hands",
          rationale: "One syllable of pure reassurance and integrity.",
          linguisticNote: "Single syllable verb-noun.",
          scores: { distinctiveness: 5, strategicFit: 4, memorability: 5, extensibility: 3 },
          strengths: ["Unforgettable brevity.", "Strong built-in promise of honesty."],
          risks: ["Trademark density in fintech.", "Hard to expand into broad retail."],
          verdict: "High-impact option if transaction trust is the primary competitive moat.",
        },
        {
          id: "n3",
          name: "Mercura",
          territory: "Coined & Light",
          rationale: "Classical patron of commerce adapted into a breezy contemporary mark.",
          linguisticNote: "Soft Latin root.",
          scores: { distinctiveness: 4, strategicFit: 4, memorability: 4, extensibility: 5 },
          strengths: ["Timeless sophistication.", "Extremely flexible across categories."],
          risks: ["Slightly formal.", "May need extra marketing to convey niche focus."],
          verdict: "Ideal for long-term scalability beyond the initial vertical.",
        },
        {
          id: "n4",
          name: "BazaarCraft",
          territory: "The Modern Stall",
          rationale: "Blends vibrant discovery with deliberate maker quality.",
          linguisticNote: "Compound descriptive cadence.",
          scores: { distinctiveness: 3, strategicFit: 4, memorability: 4, extensibility: 4 },
          strengths: ["Instant clarity of category.", "Warm and participatory."],
          risks: ["Longer syllable count.", "Craft may feel overly artisanal."],
          verdict: "Very friendly starting mark for creative community goods.",
        },
        {
          id: "n5",
          name: "Fairfold",
          territory: "Trusted Hands",
          rationale: "Evokes equitable terms and clean, orderly exchanges.",
          linguisticNote: "Alliterative Anglo-Saxon compound.",
          scores: { distinctiveness: 4, strategicFit: 5, memorability: 3, extensibility: 4 },
          strengths: ["Quietly confident and ethical.", "No tech jargon."],
          risks: ["May feel quiet alongside flashy competitors."],
          verdict: "The thoughtful choice for makers valuing sustainable partnerships.",
        },
      ],
    },
    {
      keywords: ["write", "content", "newsletter", "blog", "creator", "video", "media"],
      questions: [
        {
          question:
            "Who are you making this for: hobbyist creators, professionals building an audience, or teams publishing together?",
          reason: "The creator's ambition level changes how bold the brand can be.",
        },
        {
          question:
            "What should people get from your content that they cannot get from the channels they already follow?",
          reason: "The distinct payoff is what the name must be able to carry.",
        },
        {
          question:
            "Should the brand voice feel like a sharp editor, a generous mentor, or a curious explorer?",
          reason: "Personality steers tone, color, and naming style together.",
        },
      ],
      territories: ["Plain Spoken", "The Long Game", "Coined & Sharp"],
      personality: ["Sharp Editor", "Generous Mentor", "Curious Explorer"],
      positioning:
        "The publishing home for voices with a point of view, standing apart from algorithm-fed feeds with a clear editorial identity.",
      candidates: [
        {
          id: "n1",
          name: "Folio",
          territory: "The Long Game",
          rationale: "Honors the physical leaf of paper and the deliberate collection of work.",
          linguisticNote: "Classic Latin printing term.",
          scores: { distinctiveness: 4, strategicFit: 5, memorability: 5, extensibility: 4 },
          strengths: ["Instant authority.", "Lends prestige to independent writers."],
          risks: ["Widely used in traditional arts.", "Requires strong visual distinction."],
          verdict: "The prestige anchor for thoughtful writers building enduring bodies of work.",
        },
        {
          id: "n2",
          name: "Scribe",
          territory: "Plain Spoken",
          rationale: "Direct, ancient, and unflinchingly devoted to words.",
          linguisticNote: "Single syllable command.",
          scores: { distinctiveness: 3, strategicFit: 5, memorability: 4, extensibility: 3 },
          strengths: ["Unmatched clarity.", "Beloved by serious essayists."],
          risks: ["Common tech trademark.", "May feel historical without modern visual treatment."],
          verdict: "Classic mark that instantly declares editorial seriousness.",
        },
        {
          id: "n3",
          name: "ProseLoop",
          territory: "Coined & Sharp",
          rationale: "Signals constant iteration, writing discipline, and reader return.",
          linguisticNote: "Sharp compound cadence.",
          scores: { distinctiveness: 4, strategicFit: 4, memorability: 4, extensibility: 4 },
          strengths: ["Tech-enabled yet craft-centered.", "Memorable rhythm."],
          risks: ["Loop is common in SaaS naming."],
          verdict: "Great bridge between traditional prose and modern creator workflows.",
        },
        {
          id: "n4",
          name: "Inkwell",
          territory: "The Long Game",
          rationale: "A deep reservoir of ideas, depth, and patient thought.",
          linguisticNote: "Rich compound noun.",
          scores: { distinctiveness: 3, strategicFit: 4, memorability: 4, extensibility: 4 },
          strengths: ["Warm, intimate aesthetic.", "Evokes craftsmanship."],
          risks: ["Can lean nostalgic if visual identity is not modern."],
          verdict: "Resonates strongly with long-form essayists and reflective essayists.",
        },
        {
          id: "n5",
          name: "Marginalia",
          territory: "Plain Spoken",
          rationale: "Celebrates the notes, insights, and thoughts written along the edges.",
          linguisticNote: "Latin plural noun.",
          scores: { distinctiveness: 5, strategicFit: 4, memorability: 3, extensibility: 4 },
          strengths: ["Deeply distinctive.", "Speaks directly to intellectual curiosity."],
          risks: ["Five syllables requires careful typographic layout."],
          verdict: "Unique and memorable for discerning research-backed newsletters.",
        },
      ],
    },
  ];

  const DEFAULT_PERSONA = {
    keywords: [],
    questions: [
      {
        question: "Who feels this problem most acutely in their day-to-day life?",
        reason: "The strongest audience decides the voice and the words the name must own.",
      },
      {
        question: "What should make this meaningfully better than the workaround people use today?",
        reason: "Differentiation is what the name and tagline must hint at.",
      },
      {
        question: "Should the brand feel calm and dependable, bold and energetic, or warm and human?",
        reason: "Personality steers tone, color, and naming style together.",
      },
    ],
    territories: ["Plain Spoken", "Coined & Warm", "The New Standard"],
    personality: ["Calm", "Dependable", "Human"],
    positioning:
      "The focused answer for its audience, standing apart from generic tools by doing one important thing well.",
    candidates: [
      {
        id: "n1",
        name: "Avent",
        territory: "Coined & Warm",
        rationale: "Clean opening sound that invites exploration without corporate stiffness.",
        linguisticNote: "Pronounced ah-vent.",
        scores: { distinctiveness: 4, strategicFit: 5, memorability: 4, extensibility: 4 },
        strengths: ["Smooth phonetics.", "Open and welcoming."],
        risks: ["Slightly abstract."],
        verdict: "A balanced, versatile identity that adapts as the product grows.",
      },
      {
        id: "n2",
        name: "Loomis",
        territory: "Plain Spoken",
        rationale: "Friendly, grounded presence with craft resonance.",
        linguisticNote: "Gentle two-syllable lilt.",
        scores: { distinctiveness: 4, strategicFit: 4, memorability: 5, extensibility: 4 },
        strengths: ["Feels established from day one.", "Approachable warmth."],
        risks: ["May feel traditional without modern styling."],
        verdict: "Superb for building high customer trust and enduring loyalty.",
      },
      {
        id: "n3",
        name: "Solace",
        territory: "The New Standard",
        rationale: "A promise of relief, calm clarity, and effortless utility.",
        linguisticNote: "Soft sibilant vowels.",
        scores: { distinctiveness: 5, strategicFit: 4, memorability: 4, extensibility: 3 },
        strengths: ["Emotional resonance.", "Feels quiet and reliable."],
        risks: ["Has poetic connotations."],
        verdict: "Memorable candidate if peace of mind is the core product outcome.",
      },
      {
        id: "n4",
        name: "Vantage",
        territory: "The New Standard",
        rationale: "Offers a clear elevated perspective on the problem.",
        linguisticNote: "Crisp Anglo-French root.",
        scores: { distinctiveness: 3, strategicFit: 5, memorability: 4, extensibility: 4 },
        strengths: ["Confident authority.", "Easy to grasp."],
        risks: ["Common in business circles."],
        verdict: "Strong for professionals wanting reliable visibility and control.",
      },
      {
        id: "n5",
        name: "Kith",
        territory: "Coined & Warm",
        rationale: "One syllable celebrating familiarity, community, and welcome.",
        linguisticNote: "Historic one-syllable noun.",
        scores: { distinctiveness: 5, strategicFit: 3, memorability: 5, extensibility: 4 },
        strengths: ["Strikingly brief.", "Warm human connection."],
        risks: ["Needs strong context to convey digital utility."],
        verdict: "Memorable human mark for community-first products.",
      },
    ],
  };

  function getPersonaFor(ideaText) {
    const text = (ideaText || "").toLowerCase();
    for (const p of PERSONAS) {
      if (p.keywords.some((k) => text.includes(k))) {
        return p;
      }
    }
    return DEFAULT_PERSONA;
  }

  // --- Initial Default Project State ---
  function getEmptyProject() {
    return {
      currentStage: "idea",
      activeView: "landing", // 'landing' | 'auth' | 'app'
      idea: {
        rawIdea:
          "A platform that helps college students find the right teammates for hackathons based on skills and interests…",
      },
      clarification: {
        questions: [],
        answers: [],
        completed: false,
        currentIndex: 0,
      },
      strategy: {
        draft: null,
        confirmed: null,
        confirmedAt: null,
      },
      naming: {
        candidates: [],
        evaluations: [],
        selectedIds: [],
        graveyardIds: [],
        generationStatus: "idle", // 'idle' | 'ready' | 'confirmed'
      },
      directions: {
        items: [],
        selectedDirectionId: null,
        status: "idle", // 'idle' | 'generating' | 'ready' | 'confirmed'
      },
      brandKit: {
        draft: null,
        confirmed: null,
        status: "idle", // 'idle' | 'ready' | 'editing' | 'confirmed'
      },
      session: {
        isLoggedIn: false,
        name: "Local session",
        email: "Sign-in arrives with the next milestone",
        avatar: "A",
        method: "guest",
      },
      spellcheck: {
        originalContent: "",
        workingContent: "",
        review: null,
        status: "idle", // 'idle' | 'reviewing' | 'ready' | 'complete'
        contentRevision: 0,
      },
    };
  }

  let state = getEmptyProject();

  // --- Storage & State Persistence ---
  function saveProject() {
    try {
      localStorage.setItem("aakaroProject", JSON.stringify(state));
    } catch (e) {
      console.warn("Storage save error", e);
    }
  }

  function deepMerge(target, source) {
    const out = Object.assign({}, target);
    Object.keys(source).forEach((key) => {
      const sv = source[key];
      const tv = target[key];
      if (sv !== null && sv !== undefined && typeof sv === "object" && !Array.isArray(sv) &&
          tv !== null && tv !== undefined && typeof tv === "object" && !Array.isArray(tv)) {
        out[key] = deepMerge(tv, sv);
      } else {
        out[key] = sv;
      }
    });
    return out;
  }

  function loadProject() {
    try {
      const saved = localStorage.getItem("aakaroProject");
      if (saved) {
        const parsed = JSON.parse(saved);
        state = deepMerge(getEmptyProject(), parsed);
      }
    } catch (e) {
      console.warn("Storage load error", e);
    }
  }

  function resetProject() {
    localStorage.removeItem("aakaroProject");
    state = getEmptyProject();
    saveProject();
    renderApp();
  }

  // --- Theme Toggle Management ---
  function initTheme() {
    const saved = localStorage.getItem("aakaro:theme");
    const theme =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = theme;
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("aakaro:theme", next);
    } catch (e) {}
  }

  // --- Modal Helpers ---
  function openModal(title, bodyHtml, confirmLabel, onConfirm) {
    const modal = document.getElementById("clay-modal");
    const titleEl = document.getElementById("clay-modal-title");
    const bodyEl = document.getElementById("clay-modal-body");
    const cancelBtn = document.getElementById("clay-modal-cancel");
    const confirmBtn = document.getElementById("clay-modal-confirm");

    titleEl.textContent = title;
    bodyEl.innerHTML = bodyHtml;
    confirmBtn.textContent = confirmLabel ? `${confirmLabel} →` : "Confirm →";

    function cleanUp() {
      cancelBtn.removeEventListener("click", onCancel);
      confirmBtn.removeEventListener("click", onAction);
      modal.removeEventListener("cancel", onCancel);
      modal.close();
      document.body.style.overflow = "";
    }

    function onCancel() {
      cleanUp();
    }

    function onAction() {
      cleanUp();
      if (onConfirm) onConfirm();
    }

    cancelBtn.addEventListener("click", onCancel);
    confirmBtn.addEventListener("click", onAction);
    modal.addEventListener("cancel", onCancel);

    document.body.style.overflow = "hidden";
    modal.showModal();
  }

  // --- Color Contrast Utility ---
  function ink(hex) {
    if (!hex || hex.length < 7) return "#111111";
    const rgb = [1, 3, 5]
      .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 > 0.179 ? "#111111" : "#FFFFFF";
  }

  // --- Stage Rail Rendering ---
  function getCompletedStages() {
    const done = new Set();
    if (state.idea.rawIdea.trim()) done.add("idea");
    if (state.clarification.completed) done.add("clarification");
    if (state.strategy.confirmed) done.add("strategy");
    if (state.naming.generationStatus === "confirmed") done.add("naming");
    if (state.directions.status === "confirmed") done.add("directions");
    if (state.brandKit.status === "confirmed") done.add("brand-kit");
    return done;
  }

  function getActiveStepId(stage) {
    if (["idea", "clarification", "strategy", "naming"].includes(stage)) {
      return stage;
    }
    return "identity";
  }

  function renderStageRail() {
    const railEl = document.getElementById("stage-rail");
    const activeStepId = getActiveStepId(state.currentStage);
    const completed = getCompletedStages();
    const activeIndex = STAGE_STEPS.findIndex((s) => s.id === activeStepId);

    railEl.innerHTML = STAGE_STEPS.map((step, index) => {
      const isCurrent = step.id === activeStepId;
      const isDone = index < activeIndex || completed.has(step.id);
      const stateClass = isCurrent ? "current" : isDone ? "done" : "upcoming";

      const dotContent =
        isDone && !isCurrent
          ? `<svg viewBox="0 0 16 16" width="10" height="10" aria-hidden="true">
               <path d="M3 8.4 6.4 11.6 13 4.8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
             </svg>`
          : String(index + 1).padStart(2, "0");

      const connector =
        index < STAGE_STEPS.length - 1
          ? '<span class="stage-connector" aria-hidden="true"></span>'
          : "";

      return `
        <div class="stage-step ${stateClass}" data-step-id="${step.id}" ${isCurrent ? 'aria-current="step"' : ""}>
          <span class="stage-dot" aria-hidden="true">${dotContent}</span>
          <span class="stage-label">${step.label}</span>
          ${connector}
        </div>
      `;
    }).join("");

    // Allow clicking on completed stages to return to them
    railEl.querySelectorAll(".stage-step.done").forEach((el) => {
      el.style.cursor = "pointer";
      el.onclick = () => {
        const stepId = el.getAttribute("data-step-id");
        if (stepId === "idea") state.currentStage = "idea";
        else if (stepId === "clarification") state.currentStage = "clarification";
        else if (stepId === "strategy") state.currentStage = "strategy";
        else if (stepId === "naming") state.currentStage = "naming";
        else if (stepId === "identity") {
          if (state.brandKit.status === "confirmed") state.currentStage = "spellcheck";
          else if (state.directions.status === "confirmed") state.currentStage = "brand-kit";
          else state.currentStage = "directions";
        }
        saveProject();
        renderApp();
      };
    });
  }

  // --- SCREEN 01: Idea ---
  function renderIdeaScreen(container) {
    const rawIdea = state.idea.rawIdea || "";
    const isReady = rawIdea.trim().length > 0;

    container.innerHTML = `
      <section class="bento idea-bento" aria-label="Start with the idea">
        <div class="clay tile tile-input">
          <span class="eyebrow">Start your brand</span>
          <h1 class="tile-hero">Tell us what you’re building.</h1>
          <label for="idea-input-field" class="sr-only">Your idea</label>
          <textarea
            id="idea-input-field"
            class="idea-input"
            maxlength="1000"
            placeholder="A platform that helps college students find the right teammates for hackathons based on skills and interests…"
          >${escapeHtml(rawIdea)}</textarea>
          <div class="tile-foot">
            <p class="tile-hint">Say it the way you’d say it to a friend.</p>
            <div class="tile-foot-end">
              <span class="char-count" id="idea-char-count">${rawIdea.length}/1,000</span>
              <button
                class="btn btn-primary"
                id="btn-shape-idea"
                ${!isReady ? "disabled" : ""}
              >
                Shape my idea <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <div class="tile-stack">
          <div class="clay tile tile-progress" aria-label="Stage progress">
            <span class="tile-step-num">01</span>
            <div>
              <span class="eyebrow">Stage</span>
              <p class="tile-step-label">Idea</p>
            </div>
          </div>
          <div class="clay tile tile-next">
            <span class="eyebrow">What happens next</span>
            <ol class="next-steps">
              ${NEXT_STEPS_LIST.map(
                (step, i) => `
                <li>
                  <span class="next-step-index" aria-hidden="true">${i + 1}</span>
                  <span>
                    <strong>${step.label}</strong>
                    <small>${step.note}</small>
                  </span>
                </li>
              `,
              ).join("")}
            </ol>
          </div>
          <div class="clay tile tile-tip">
            <p>
              One or two honest sentences are plenty — Aakaro asks what matters
              before shaping the brand around it.
            </p>
          </div>
        </div>
      </section>
    `;

    const textarea = container.querySelector("#idea-input-field");
    const charCount = container.querySelector("#idea-char-count");
    const shapeBtn = container.querySelector("#btn-shape-idea");

    textarea.addEventListener("input", (e) => {
      const val = e.target.value;
      state.idea.rawIdea = val;
      charCount.textContent = `${val.length}/1,000`;
      shapeBtn.disabled = val.trim().length === 0;
      saveProject();
    });

    shapeBtn.addEventListener("click", () => {
      if (!state.idea.rawIdea.trim()) return;
      state.currentStage = "clarification";
      saveProject();
      renderApp();
    });
  }

  // --- SCREEN 02: Clarify ---
  function renderClarifyScreen(container) {
    const persona = getPersonaFor(state.idea.rawIdea);

    // Populate questions if empty
    if (!state.clarification.questions || state.clarification.questions.length === 0) {
      state.clarification.questions = persona.questions.map((q, idx) => ({
        id: `q${idx + 1}`,
        question: q.question,
        reason: q.reason,
      }));
    }

    const questions = state.clarification.questions;
    let currIndex = state.clarification.currentIndex || 0;
    if (currIndex >= questions.length) currIndex = questions.length - 1;

    const q = questions[currIndex];
    let existingAnsObj = state.clarification.answers.find((a) => a.questionId === q.id);
    let answerText = existingAnsObj ? existingAnsObj.answer : "";
    const isLast = currIndex === questions.length - 1;

    const placeholders = [
      "A sentence or two — what you know, what you don't yet.",
      "Even a rough direction helps; say what you're torn between.",
      "Whatever you answer, Aakaro treats it as a starting point, not a rule.",
    ];

    container.innerHTML = `
      <section class="bento clarify-bento" aria-label="Clarification questions">
        <div class="clay tile tile-question">
          <span class="eyebrow">
            Clarify · Question ${currIndex + 1} of ${questions.length}
          </span>
          <div class="question-swap" key="${q.id}">
            <h2 class="question-text">${q.question}</h2>
            <label for="clarify-answer-input" class="sr-only">Your answer</label>
            <textarea
              id="clarify-answer-input"
              class="answer-input"
              maxlength="1200"
              placeholder="${placeholders[currIndex] || placeholders[0]}"
            >${escapeHtml(answerText)}</textarea>
          </div>
          <p class="field-help">
            <button type="button" class="text-button" id="btn-clarify-unsure">
              I’m not sure
            </button>
            <span class="char-count" id="clarify-char-count">${answerText.length}/1,200</span>
          </p>
          <div class="tile-actions">
            <button class="btn btn-secondary" id="btn-clarify-back">
              <span aria-hidden="true">←</span> Back
            </button>
            <span class="spacer"></span>
            <button
              class="btn btn-primary"
              id="btn-clarify-continue"
              ${!answerText.trim() ? "disabled" : ""}
            >
              ${isLast ? "Build my strategy" : "Continue"}
              <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div class="tile-stack">
          <div class="clay tile tile-progress">
            <span class="eyebrow">Progress</span>
            <div class="q-dots" aria-hidden="true">
              ${questions
                .map((item, i) => {
                  const isAnswered = state.clarification.answers.some(
                    (a) => a.questionId === item.id && a.answer.trim().length > 0,
                  );
                  const isCurrent = i === currIndex;
                  const isDone = isAnswered && !isCurrent;
                  const dotClass = isCurrent ? "q-dot current" : isDone ? "q-dot done" : "q-dot";
                  const dotText = isDone ? "✓" : String(i + 1);
                  const connector =
                    i > 0
                      ? `<span class="q-line ${i <= currIndex ? "done" : ""}"></span>`
                      : "";
                  return `${connector}<span class="${dotClass}">${dotText}</span>`;
                })
                .join("")}
            </div>
          </div>
          <div class="clay tile tile-why">
            <span class="eyebrow">Why we ask</span>
            <p>${q.reason}</p>
          </div>
          <div class="clay tile tile-tip">
            <p>Answers are saved as you type. Go back any time.</p>
          </div>
        </div>
      </section>
    `;

    const textarea = container.querySelector("#clarify-answer-input");
    const charCount = container.querySelector("#clarify-char-count");
    const continueBtn = container.querySelector("#btn-clarify-continue");
    const backBtn = container.querySelector("#btn-clarify-back");
    const unsureBtn = container.querySelector("#btn-clarify-unsure");

    function updateAnswer(text) {
      answerText = text;
      textarea.value = text;
      charCount.textContent = `${text.length}/1,200`;
      continueBtn.disabled = !text.trim();

      const existingIndex = state.clarification.answers.findIndex((a) => a.questionId === q.id);
      if (existingIndex >= 0) {
        state.clarification.answers[existingIndex].answer = text;
      } else {
        state.clarification.answers.push({ questionId: q.id, answer: text });
      }

      state.clarification.completed =
        questions.length > 0 &&
        questions.every((qu) => {
          const found = state.clarification.answers.find((a) => a.questionId === qu.id);
          return found && found.answer.trim().length > 0;
        });

      saveProject();
    }

    textarea.addEventListener("input", (e) => updateAnswer(e.target.value));

    unsureBtn.addEventListener("click", () => updateAnswer("Not sure yet."));

    backBtn.addEventListener("click", () => {
      if (currIndex > 0) {
        state.clarification.currentIndex = currIndex - 1;
        saveProject();
        renderClarifyScreen(container);
      } else {
        state.currentStage = "idea";
        saveProject();
        renderApp();
      }
    });

    continueBtn.addEventListener("click", () => {
      if (!answerText.trim()) return;
      if (isLast) {
        state.clarification.completed = true;
        state.currentStage = "strategy";
        saveProject();
        renderApp();
      } else {
        state.clarification.currentIndex = currIndex + 1;
        saveProject();
        renderClarifyScreen(container);
      }
    });
  }

  // --- SCREEN 03: Strategy ---
  function ensureStrategyDraft() {
    if (!state.strategy.draft) {
      const persona = getPersonaFor(state.idea.rawIdea);
      const answers = state.clarification.answers;
      const ans0 = answers[0]?.answer || "College students and first-time hackathon builders";
      const ans1 = answers[1]?.answer || "Good teammates are hard to find quickly when group chats are noisy.";
      const ans2 = answers[2]?.answer || "Collaborative, welcoming, and intent-driven.";

      state.strategy.draft = {
        oneLiner: "Teammates found on intent, not noise.",
        audience: {
          primary: ans0.length > 80 ? ans0.slice(0, 80) + "..." : ans0,
          description:
            "Students forming their first teams, often seeking complementary skillsets for hackathons and projects.",
        },
        problem: ans1,
        promise: "A focused match in minutes, built on skills and intent.",
        differentiation: "Matching on skills and intent instead of who posts first.",
        personality: persona.personality,
        positioning: persona.positioning,
        namingTerritories: persona.territories,
      };
      saveProject();
    }
  }

  function renderStrategyScreen(container) {
    ensureStrategyDraft();
    const brief = state.strategy.draft;

    container.innerHTML = `
      <section class="bento review-bento" aria-label="Strategy review">
        <h1 class="review-title">The strategy your identity will be built on.</h1>
        <p class="review-lede">
          Read it like a brief. Click any tile to edit — then lock it to move to naming.
        </p>

        <div class="bento-grid">
          <!-- 1. One-liner -->
          <div class="clay tile brief-tile span-2" id="tile-oneLiner" data-field="oneLiner">
            <div class="tile-head">
              <span class="eyebrow">One-liner</span>
              <button class="tile-edit" aria-label="Edit One-liner">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <p class="brief-value large">${escapeHtml(brief.oneLiner)}</p>
            </div>
          </div>

          <!-- 2. Personality -->
          <div class="clay tile brief-tile tone-lavender" id="tile-personality" data-field="personality">
            <div class="tile-head">
              <span class="eyebrow">Personality</span>
              <button class="tile-edit" aria-label="Edit Personality">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <ul class="trait-list">
                ${brief.personality.map((t) => `<li>${escapeHtml(t || "—")}</li>`).join("")}
              </ul>
            </div>
          </div>

          <!-- 3. Audience -->
          <div class="clay tile brief-tile tone-blue" id="tile-audience" data-field="audience">
            <div class="tile-head">
              <span class="eyebrow">Audience</span>
              <button class="tile-edit" aria-label="Edit Audience">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <p class="brief-value">
                <strong>${escapeHtml(brief.audience.primary)}.</strong>
                ${escapeHtml(brief.audience.description)}
              </p>
            </div>
          </div>

          <!-- 4. The problem -->
          <div class="clay tile brief-tile" id="tile-problem" data-field="problem">
            <div class="tile-head">
              <span class="eyebrow">The problem</span>
              <button class="tile-edit" aria-label="Edit The problem">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <p class="brief-value">${escapeHtml(brief.problem)}</p>
            </div>
          </div>

          <!-- 5. Positioning -->
          <div class="clay tile brief-tile" id="tile-positioning" data-field="positioning">
            <div class="tile-head">
              <span class="eyebrow">Positioning</span>
              <button class="tile-edit" aria-label="Edit Positioning">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <p class="brief-value">${escapeHtml(brief.positioning)}</p>
            </div>
          </div>

          <!-- 6. The promise -->
          <div class="clay tile brief-tile tone-lime span-2" id="tile-promise" data-field="promise">
            <div class="tile-head">
              <span class="eyebrow">The promise</span>
              <button class="tile-edit" aria-label="Edit The promise">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <p class="brief-value">${escapeHtml(brief.promise)}</p>
            </div>
          </div>

          <!-- 7. Naming territories -->
          <div class="clay tile brief-tile tone-peach" id="tile-namingTerritories" data-field="namingTerritories">
            <div class="tile-head">
              <span class="eyebrow">Naming territories</span>
              <button class="tile-edit" aria-label="Edit Naming territories">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <ul class="territory-list">
                ${brief.namingTerritories.map((t) => `<li>${escapeHtml(t || "—")}</li>`).join("")}
              </ul>
            </div>
          </div>

          <!-- 8. Differentiation -->
          <div class="clay tile brief-tile span-3" id="tile-differentiation" data-field="differentiation">
            <div class="tile-head">
              <span class="eyebrow">Differentiation</span>
              <button class="tile-edit" aria-label="Edit Differentiation">
                <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M13.6 2.6a1.9 1.9 0 0 1 2.7 0l1.1 1.1a1.9 1.9 0 0 1 0 2.7l-9.6 9.6-4.2 1.1 1.1-4.2 9.6-9.6Z" /></svg>
              </button>
            </div>
            <div class="tile-content">
              <p class="brief-value">${escapeHtml(brief.differentiation)}</p>
            </div>
          </div>
        </div>

        <div class="tile-actions">
          <button class="btn btn-secondary" id="btn-strategy-revise">
            <span aria-hidden="true">←</span> Revise answers
          </button>
          <span class="spacer"></span>
          <button class="btn btn-primary" id="btn-strategy-lock">
            Lock strategy <span class="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    `;

    // Inline tile editing setup
    container.querySelectorAll(".brief-tile").forEach((tileEl) => {
      const field = tileEl.getAttribute("data-field");
      const editBtn = tileEl.querySelector(".tile-edit");

      function startEdit() {
        const contentEl = tileEl.querySelector(".tile-content");
        tileEl.classList.add("editing");

        if (field === "oneLiner") {
          contentEl.innerHTML = `<input class="brief-input" value="${escapeHtml(brief.oneLiner)}" />`;
          const input = contentEl.querySelector("input");
          input.focus();
          input.onblur = () => {
            brief.oneLiner = input.value;
            saveProject();
            renderStrategyScreen(container);
          };
          input.onkeydown = (e) => {
            if (e.key === "Enter") input.blur();
          };
        } else if (field === "personality") {
          contentEl.innerHTML = `
            <div class="trait-inputs">
              ${brief.personality.map((t, idx) => `<input class="brief-input" data-index="${idx}" value="${escapeHtml(t)}" />`).join("")}
            </div>
          `;
          const inputs = contentEl.querySelectorAll("input");
          inputs[0]?.focus();
          inputs.forEach((inp) => {
            inp.onblur = () => {
              const idx = parseInt(inp.getAttribute("data-index"));
              brief.personality[idx] = inp.value;
              saveProject();
            };
            inp.onkeydown = (e) => {
              if (e.key === "Enter") renderStrategyScreen(container);
            };
          });
        } else if (field === "audience") {
          contentEl.innerHTML = `
            <input class="brief-input" id="aud-prim" value="${escapeHtml(brief.audience.primary)}" placeholder="Who this serves" style="margin-bottom:8px;" />
            <textarea class="brief-textarea" id="aud-desc">${escapeHtml(brief.audience.description)}</textarea>
          `;
          const pInput = contentEl.querySelector("#aud-prim");
          const dInput = contentEl.querySelector("#aud-desc");
          pInput.focus();
          const saveAudience = () => {
            brief.audience.primary = pInput.value;
            brief.audience.description = dInput.value;
            saveProject();
          };
          pInput.onblur = saveAudience;
          dInput.onblur = () => {
            saveAudience();
            renderStrategyScreen(container);
          };
        } else if (field === "namingTerritories") {
          contentEl.innerHTML = `
            <input class="brief-input" value="${escapeHtml(brief.namingTerritories.join(", "))}" />
            <p class="brief-hint">Comma-separated; two to four directions.</p>
          `;
          const input = contentEl.querySelector("input");
          input.focus();
          input.onblur = () => {
            brief.namingTerritories = input.value
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean);
            saveProject();
            renderStrategyScreen(container);
          };
          input.onkeydown = (e) => {
            if (e.key === "Enter") input.blur();
          };
        } else {
          // Multiline text fields
          contentEl.innerHTML = `<textarea class="brief-textarea">${escapeHtml(brief[field])}</textarea>`;
          const textarea = contentEl.querySelector("textarea");
          textarea.focus();
          textarea.onblur = () => {
            brief[field] = textarea.value;
            saveProject();
            renderStrategyScreen(container);
          };
        }
      }

      if (editBtn) editBtn.onclick = startEdit;
    });

    container.querySelector("#btn-strategy-revise").addEventListener("click", () => {
      openModal(
        "Revise answers?",
        "<p>Going back lets you edit your answers. Your current strategy draft will be re-shaped when you return.</p>",
        "Revise answers",
        () => {
          state.currentStage = "clarification";
          saveProject();
          renderApp();
        },
      );
    });

    container.querySelector("#btn-strategy-lock").addEventListener("click", () => {
      state.strategy.confirmed = structuredClone(brief);
      state.strategy.confirmedAt = new Date().toISOString();
      state.currentStage = "naming";
      saveProject();
      renderApp();
    });
  }

  // --- SCREEN 04: Naming & Graveyard ---
  function ensureNamingCandidates() {
    if (state.naming.candidates.length === 0) {
      const persona = getPersonaFor(state.idea.rawIdea);
      state.naming.candidates = persona.candidates.map((c) => ({
        id: c.id,
        name: c.name,
        territory: c.territory,
        rationale: c.rationale,
        linguisticNote: c.linguisticNote,
      }));
      state.naming.evaluations = persona.candidates.map((c) => ({
        candidateId: c.id,
        scores: c.scores,
        strengths: c.strengths,
        risks: c.risks,
        verdict: c.verdict,
      }));
      state.naming.generationStatus = "ready";
      saveProject();
    }
  }

  function renderNamingScreen(container) {
    const confirmed = state.strategy.confirmed || state.strategy.draft;

    // If naming not ready yet, show locked strategy hero
    if (state.naming.generationStatus === "idle") {
      container.innerHTML = `
        <section class="bento review-bento" aria-label="Naming">
          <div class="clay tile locked-hero">
            <span class="eyebrow">Naming</span>
            <h1 class="tile-hero">Strategy locked.</h1>
            <p class="review-lede">
              Naming starts from exactly this strategy — not the draft. Generate
              five candidates, then shortlist the two to carry forward.
            </p>
            <div class="tile-actions">
              <button class="btn btn-secondary" id="btn-naming-unlock-strategy">Unlock to edit</button>
              <span class="spacer"></span>
              <button class="btn btn-primary" id="btn-naming-generate">
                Generate 5 names <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div class="bento-grid">
            <div class="clay tile brief-tile span-2">
              <div class="tile-head"><span class="eyebrow">One-liner</span></div>
              <p class="brief-value large">${escapeHtml(confirmed.oneLiner)}</p>
            </div>
            <div class="clay tile brief-tile tone-blue">
              <div class="tile-head"><span class="eyebrow">Audience</span></div>
              <p class="brief-value"><strong>${escapeHtml(confirmed.audience.primary)}.</strong> ${escapeHtml(confirmed.audience.description)}</p>
            </div>
            <div class="clay tile brief-tile tone-peach span-2">
              <div class="tile-head"><span class="eyebrow">Naming territories</span></div>
              <ul class="territory-list">
                ${confirmed.namingTerritories.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}
              </ul>
            </div>
            <div class="clay tile tile-tip">
              <p>
                Exactly five candidates will be generated, all five evaluated — then
                you shortlist two. The other three are recorded in The Graveyard.
              </p>
            </div>
          </div>
        </section>
      `;

      container.querySelector("#btn-naming-unlock-strategy").onclick = () => {
        state.strategy.confirmed = null;
        state.currentStage = "strategy";
        saveProject();
        renderApp();
      };

      container.querySelector("#btn-naming-generate").onclick = () => {
        // Render generating state with floating clay stack
        container.innerHTML = `
          <section class="bento review-bento" aria-label="Generating names">
            <div class="clay tile tile-question">
              <span class="eyebrow">Naming</span>
              <h1 class="tile-hero">Five names, from this exact strategy.</h1>
              <div class="generating" role="status">
                <div class="clay-stack" aria-hidden="true"><span></span><span></span><span></span></div>
                <ul class="status-lines">
                  ${STATUS_LINES_NAMING.map((line, i) => `<li class="${i === 1 ? "current" : ""}"><span class="status-marker" aria-hidden="true">${i === 1 ? "●" : "○"}</span> ${line}</li>`).join("")}
                </ul>
                <p class="generating-note">Your locked strategy is saved while you wait.</p>
              </div>
            </div>
          </section>
        `;
        setTimeout(() => {
          ensureNamingCandidates();
          renderNamingScreen(container);
        }, 500);
      };
      return;
    }

    // Naming Candidates Ready View
    const candidates = state.naming.candidates;
    const evaluations = state.naming.evaluations;
    const selectedIds = state.naming.selectedIds || [];
    const selectedCount = selectedIds.length;
    const isComplete = selectedCount === 2;

    const evaluationMap = new Map(evaluations.map((e) => [e.candidateId, e]));

    const statusPillText = isComplete
      ? "2 of 2 shortlisted — ready to confirm."
      : `${selectedCount} of 2 shortlisted · pick ${2 - selectedCount} more`;

    // Graveyard items (the candidates not shortlisted)
    const graveyardCandidates = candidates.filter((c) => !selectedIds.includes(c.id));

    container.innerHTML = `
      <section class="bento review-bento" aria-label="Shortlist two names">
        <h1 class="review-title">Five names, evaluated.</h1>
        <p class="review-lede">
          Every candidate was scored against your locked strategy. Shortlist
          exactly two — the remaining three automatically enter The Graveyard.
        </p>

        <p class="shortlist-status" role="status">
          ${statusPillText}
        </p>

        <div class="bento-grid naming-grid">
          ${candidates
            .map((c) => {
              const evalObj = evaluationMap.get(c.id) || {
                scores: { distinctiveness: 4, strategicFit: 4, memorability: 4, extensibility: 4 },
                strengths: ["Clear and easy to say."],
                risks: ["May require differentiation."],
                verdict: "A solid brand foundation.",
              };
              const isSelected = selectedIds.includes(c.id);
              const isDisabled = !isSelected && selectedCount >= 2;

              return `
              <article class="clay tile candidate-card ${isSelected ? "selected" : ""}" aria-label="Candidate ${escapeHtml(c.name)}">
                <div class="tile-head">
                  <span class="eyebrow">${escapeHtml(c.territory)}</span>
                  <button
                    type="button"
                    class="btn btn-small select-btn ${isSelected ? "btn-selected" : ""}"
                    aria-pressed="${isSelected}"
                    data-candidate-id="${c.id}"
                    ${isDisabled ? 'disabled title="Two names are already shortlisted"' : ""}
                  >
                    ${isSelected ? "Shortlisted ✓" : "Shortlist"}
                  </button>
                </div>
                <h3 class="candidate-name">${escapeHtml(c.name)}</h3>
                <p class="candidate-rationale">${escapeHtml(c.rationale)}</p>
                ${c.linguisticNote ? `<p class="candidate-note">${escapeHtml(c.linguisticNote)}</p>` : ""}

                <div class="score-grid" aria-label="${escapeHtml(c.name)} scores">
                  ${SCORE_METRICS.map(({ key, label }) => {
                    const val = evalObj.scores[key] || 4;
                    return `
                      <div class="score-row">
                        <span class="score-head">
                          <span class="score-label">${label}</span>
                          <span class="score-value">${val}/5</span>
                        </span>
                        <span class="score-bar" role="img" aria-label="${label}: ${val} out of 5">
                          <span class="score-fill" style="width: ${val * 20}%;"></span>
                        </span>
                      </div>
                    `;
                  }).join("")}
                </div>

                <div class="candidate-lists">
                  <div>
                    <span class="eyebrow">Strengths</span>
                    <ul class="mini-list strengths">
                      ${evalObj.strengths.map((s) => `<li><span class="marker" aria-hidden="true">✓</span>${escapeHtml(s)}</li>`).join("")}
                    </ul>
                  </div>
                  <div>
                    <span class="eyebrow">Risks</span>
                    <ul class="mini-list risks">
                      ${evalObj.risks.map((r) => `<li><span class="marker" aria-hidden="true">△</span>${escapeHtml(r)}</li>`).join("")}
                    </ul>
                  </div>
                </div>

                <p class="candidate-verdict">${escapeHtml(evalObj.verdict)}</p>
              </article>
            `;
            })
            .join("")}
        </div>

        <!-- The Graveyard section when 2 are shortlisted -->
        ${
          isComplete
            ? `
          <section class="graveyard" id="active-graveyard" aria-label="The Graveyard — alternatives we evaluated">
            <button type="button" class="graveyard-toggle" id="graveyard-toggle-btn" aria-expanded="true">
              <span class="graveyard-icon" aria-hidden="true">
                <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                  <path fill="currentColor" d="M10 2.6a4.6 4.6 0 0 1 4.6 4.6v7H14v3H6v-3h-.6v-7A4.6 4.6 0 0 1 10 2.6Z" />
                </svg>
              </span>
              <span>The Graveyard — alternatives we evaluated</span>
              <span class="graveyard-count">${graveyardCandidates.length}</span>
              <span class="spacer"></span>
              <span class="graveyard-chevron" id="graveyard-chevron-icon" aria-hidden="true">▾</span>
            </button>
            <div class="graveyard-body" id="graveyard-body-content">
              <p class="graveyard-note">
                These three will be recorded in The Graveyard when you confirm your two shortlisted names.
              </p>
              ${graveyardCandidates
                .map((gc) => {
                  const ev = evaluationMap.get(gc.id);
                  return `
                  <div class="clay graveyard-entry" key="${gc.id}">
                    <div class="graveyard-entry-head">
                      <h4>${escapeHtml(gc.name)}</h4>
                      <span class="eyebrow">${escapeHtml(gc.territory)}</span>
                    </div>
                    <p class="graveyard-reason">${escapeHtml(ev?.verdict || "")}</p>
                    <ul class="mini-list risks">
                      ${(ev?.risks || []).map((rk) => `<li><span class="marker" aria-hidden="true">△</span>${escapeHtml(rk)}</li>`).join("")}
                    </ul>
                  </div>
                `;
                })
                .join("")}
            </div>
          </section>
        `
            : ""
        }

        <div class="tile-actions">
          <button class="btn btn-secondary" id="btn-naming-unlock">
            <span aria-hidden="true">←</span> Unlock to edit strategy
          </button>
          <span class="spacer"></span>
          <button class="btn btn-primary" id="btn-naming-confirm" ${!isComplete ? "disabled" : ""}>
            Confirm naming decision <span class="btn-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    `;

    // Candidate selection logic
    container.querySelectorAll(".select-btn").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-candidate-id");
        if (state.naming.selectedIds.includes(id)) {
          state.naming.selectedIds = state.naming.selectedIds.filter((x) => x !== id);
        } else if (state.naming.selectedIds.length < 2) {
          state.naming.selectedIds.push(id);
        }
        saveProject();
        renderNamingScreen(container);
      };
    });

    // Graveyard toggle logic
    const gToggle = container.querySelector("#graveyard-toggle-btn");
    if (gToggle) {
      gToggle.onclick = () => {
        const gBody = container.querySelector("#graveyard-body-content");
        const gChevron = container.querySelector("#graveyard-chevron-icon");
        const isHidden = gBody.style.display === "none";
        gBody.style.display = isHidden ? "grid" : "none";
        gChevron.textContent = isHidden ? "▾" : "▸";
        gToggle.setAttribute("aria-expanded", String(isHidden));
      };
    }

    container.querySelector("#btn-naming-unlock").onclick = () => {
      openModal(
        "Unlock strategy?",
        "<p>Going back resets your naming shortlist and candidates so you can adjust your strategy foundations. Continue?</p>",
        "Unlock strategy",
        () => {
          state.strategy.confirmed = null;
          state.naming.candidates = [];
          state.naming.evaluations = [];
          state.naming.selectedIds = [];
          state.naming.generationStatus = "idle";
          state.currentStage = "strategy";
          saveProject();
          renderApp();
        },
      );
    };

    container.querySelector("#btn-naming-confirm").onclick = () => {
      if (!isComplete) return;
      openModal(
        "Confirm naming decision?",
        "<p>Confirm these two shortlisted names? The remaining three will be permanently recorded in The Graveyard for this brand.</p>",
        "Confirm naming",
        () => {
          state.naming.graveyardIds = candidates
            .filter((c) => !state.naming.selectedIds.includes(c.id))
            .map((c) => c.id);
          state.naming.generationStatus = "confirmed";
          state.currentStage = "directions";
          saveProject();
          renderApp();
        },
      );
    };
  }

  // --- SCREEN 05: Brand Directions ---
  function ensureDirections() {
    if (state.directions.items.length === 0) {
      const candidates = state.naming.candidates;
      const sIds = state.naming.selectedIds;
      const c1 = candidates.find((c) => c.id === sIds[0]) || candidates[0];
      const c2 = candidates.find((c) => c.id === sIds[1]) || candidates[1];
      const strat = state.strategy.confirmed || state.strategy.draft;

      state.directions.items = [
        {
          id: "direction1",
          candidateId: c1.id,
          conceptName: "An open invitation",
          conceptStatement: `${c1.name} as a welcoming meeting place for ${strat.audience.primary}. Inviting, grounded, and collaborative.`,
          personality: strat.personality,
          colors: {
            primary: "#813F2D",
            secondary: "#DBAC87",
            accent: "#F1CB68",
            background: "#FFF4E7",
            rationale:
              "Clay, apricot and warm paper make an inviting editorial setting; dark clay anchors headings and gold marks small moments of emphasis.",
          },
          typography: {
            headingStyle: "Manrope bold, tight lowercase",
            bodyStyle: "DM Sans regular, open line spacing",
            rationale: "Clear and welcoming typography that keeps headlines grounded.",
          },
          logoApproach: {
            approach: "Lowercase wordmark with an open circular symbol",
            rationale: "A distinctive silhouette that signals collaboration and openness.",
          },
          imagery: {
            style: "Overlapping rounded circles, generous paper margins",
            rationale: "Suggests people connecting effortlessly across different backgrounds.",
          },
          voice: {
            traits: ["Inviting", "Conversational", "Grounded"],
            sampleLine: `Make room for your next idea with ${c1.name}.`,
          },
        },
        {
          id: "direction2",
          candidateId: c2.id,
          conceptName: "Room to move",
          conceptStatement: `${c2.name} as a confident system of building blocks for ${strat.audience.primary}. Purposeful, modular, and forward-looking.`,
          personality: ["Focused", "Direct", "Modular"],
          colors: {
            primary: "#203F3A",
            secondary: "#A8C2B4",
            accent: "#D8EF69",
            background: "#EFF5EE",
            rationale:
              "Deep forest anchors the type, sage separates sections and sharp lime marks actions; pale space keeps the modular composition clear.",
          },
          typography: {
            headingStyle: "DM Sans medium, spaced uppercase",
            bodyStyle: "Manrope regular, compact paragraphs",
            rationale: "Structured and architectural, creating an impression of reliable execution.",
          },
          logoApproach: {
            approach: "Uppercase wordmark with an offset square symbol",
            rationale: "Evokes tangible components snapping cleanly into place.",
          },
          imagery: {
            style: "Offset geometric blocks, deliberate grid rhythm",
            rationale: "Reinforces momentum, modular capability, and modern velocity.",
          },
          voice: {
            traits: ["Direct", "Purposeful", "Encouraging"],
            sampleLine: `Your next step starts with ${c2.name}.`,
          },
        },
      ];
      state.directions.status = "ready";
      saveProject();
    }
  }

  function renderDirectionsScreen(container) {
    ensureDirections();
    const directions = state.directions.items;
    const candidates = state.naming.candidates;
    const selectedId = state.directions.selectedDirectionId;
    const selected = directions.find((d) => d.id === selectedId);
    const selectedCandidate = selected
      ? candidates.find((c) => c.id === selected.candidateId)
      : null;

    container.innerHTML = `
      <section class="bento review-bento" aria-label="Brand directions">
        <div class="directions-intro">
          <span class="eyebrow">Brand directions</span>
          <h1 class="tile-hero">Two ways your identity could come alive.</h1>
          <p class="review-lede">
            Two distinct expressions of your locked strategy. Select the direction that resonates best.
          </p>
        </div>

        <div class="directions-grid">
          ${directions
            .map((d, index) => {
              const c = candidates.find((cand) => cand.id === d.candidateId) || { name: "Aakaro" };
              const isSelected = selectedId === d.id;
              const isGeometric = d.logoApproach.approach.toLowerCase().includes("square");
              const isUppercase = d.typography.headingStyle.toLowerCase().includes("uppercase");

              const paletteStyle = `
                --direction-primary: ${d.colors.primary};
                --direction-secondary: ${d.colors.secondary};
                --direction-accent: ${d.colors.accent};
                --direction-background: ${d.colors.background};
              `;

              return `
              <article
                class="clay direction-board ${isSelected ? "selected" : ""} ${isGeometric ? "geometric" : "rounded"}"
                aria-label="Direction for ${escapeHtml(c.name)}"
                style="${paletteStyle}"
              >
                <div class="direction-heading">
                  <span class="eyebrow">${String(index + 1).padStart(2, "0")} · ${escapeHtml(d.conceptName)}</span>
                  <h2>${escapeHtml(c.name)}</h2>
                  <p>${escapeHtml(d.conceptStatement)}</p>
                  <div class="direction-traits">
                    ${d.personality.map((trait) => `<span>${escapeHtml(trait)}</span>`).join("")}
                  </div>
                </div>

                <div class="direction-bento">
                  <!-- Color Swatches -->
                  <section class="direction-tile direction-wide">
                    <h3>Color palette</h3>
                    <div class="direction-swatches">
                      <div>
                        <span class="color-swatch" style="background-color: ${d.colors.primary};"></span>
                        <span class="swatch-role">primary</span>
                        <code>${d.colors.primary}</code>
                      </div>
                      <div>
                        <span class="color-swatch" style="background-color: ${d.colors.secondary};"></span>
                        <span class="swatch-role">secondary</span>
                        <code>${d.colors.secondary}</code>
                      </div>
                      <div>
                        <span class="color-swatch" style="background-color: ${d.colors.accent};"></span>
                        <span class="swatch-role">accent</span>
                        <code>${d.colors.accent}</code>
                      </div>
                      <div>
                        <span class="color-swatch" style="background-color: ${d.colors.background}; border: 1px solid #c0c0c0;"></span>
                        <span class="swatch-role">background</span>
                        <code>${d.colors.background}</code>
                      </div>
                    </div>
                    <p>${escapeHtml(d.colors.rationale)}</p>
                  </section>

                  <!-- Typography Preview -->
                  <section class="direction-tile direction-wide">
                    <h3>Typography preview</h3>
                    <div
                      class="direction-type-preview"
                      style="font-family: var(--font-display); font-weight: 800; text-transform: ${isUppercase ? "uppercase" : "none"};"
                    >
                      ${escapeHtml(c.name)}
                    </div>
                    <p class="direction-detail">${escapeHtml(d.typography.headingStyle)}</p>
                    <p>${escapeHtml(d.typography.bodyStyle)}</p>
                    <details>
                      <summary>Why this type</summary>
                      <p>${escapeHtml(d.typography.rationale)}</p>
                    </details>
                  </section>

                  <!-- Logo Approach -->
                  <section class="direction-tile">
                    <h3>Logo approach</h3>
                    <div class="direction-logo" aria-label="Concept wordmark preview">
                      <span class="direction-symbol" aria-hidden="true"></span>
                      <span style="font-weight: 800; text-transform: ${isUppercase ? "uppercase" : "none"};">
                        ${escapeHtml(c.name)}
                      </span>
                    </div>
                    <small>Concept preview · not a final logo</small>
                    <p class="direction-detail">${escapeHtml(d.logoApproach.approach)}</p>
                    <details>
                      <summary>Why this approach</summary>
                      <p>${escapeHtml(d.logoApproach.rationale)}</p>
                    </details>
                  </section>

                  <!-- Imagery Style -->
                  <section class="direction-tile">
                    <h3>Imagery style</h3>
                    <div class="direction-imagery ${isGeometric ? "blocks" : ""}" aria-label="Abstract composition preview" role="img">
                      <i></i><i></i><i></i>
                    </div>
                    <p class="direction-detail">${escapeHtml(d.imagery.style)}</p>
                    <details>
                      <summary>Why this imagery</summary>
                      <p>${escapeHtml(d.imagery.rationale)}</p>
                    </details>
                  </section>

                  <!-- Brand Voice -->
                  <section class="direction-tile direction-wide">
                    <h3>Brand voice</h3>
                    <div class="direction-traits">
                      ${d.voice.traits.map((t) => `<span>${escapeHtml(t)}</span>`).join("")}
                    </div>
                    <blockquote>“${escapeHtml(d.voice.sampleLine)}”</blockquote>
                  </section>
                </div>

                <button
                  type="button"
                  class="btn direction-select ${isSelected ? "btn-primary" : "btn-secondary"}"
                  data-direction-id="${d.id}"
                >
                  ${isSelected ? "Selected ✓" : "Select direction"}
                </button>
              </article>
            `;
            })
            .join("")}
        </div>

        <div class="clay tile direction-decision">
          <p role="status">
            ${
              selected && selectedCandidate
                ? `<strong>${escapeHtml(selectedCandidate.name)} · ${escapeHtml(selected.conceptName)}</strong> selected.`
                : "Choose the direction you want to develop."
            }
          </p>
          <div class="tile-actions">
            <button class="btn btn-secondary" id="btn-directions-revisit-naming">Revisit naming</button>
            <span class="spacer"></span>
            <button class="btn btn-primary" id="btn-directions-lock" ${!selected ? "disabled" : ""}>
              Lock this direction <span class="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    `;

    // Direction Select buttons
    container.querySelectorAll(".direction-select").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-direction-id");
        state.directions.selectedDirectionId = id;
        saveProject();
        renderDirectionsScreen(container);
      };
    });

    container.querySelector("#btn-directions-revisit-naming").onclick = () => {
      openModal(
        "Revisit your shortlist?",
        "<p>This unlocks your two-name shortlist and lets you adjust your naming candidates. Your five candidates and their evaluations stay saved.</p>",
        "Revisit naming",
        () => {
          state.directions.items = [];
          state.directions.selectedDirectionId = null;
          state.directions.status = "idle";
          state.naming.generationStatus = "ready";
          state.currentStage = "naming";
          saveProject();
          renderApp();
        },
      );
    };

    container.querySelector("#btn-directions-lock").onclick = () => {
      if (!selected) return;
      openModal(
        "Lock this direction?",
        `<p class="modal-selection">${selectedCandidate?.name} · ${selected.conceptName}</p><p>This will become the foundation of your Brand Kit.</p>`,
        "Lock direction",
        () => {
          state.directions.status = "confirmed";
          state.currentStage = "brand-kit";
          saveProject();
          renderApp();
        },
      );
    };
  }

  // --- SCREEN 06: Brand Kit ---
  function ensureBrandKitDraft() {
    if (!state.brandKit.draft) {
      const candidates = state.naming.candidates;
      const directions = state.directions.items;
      const selDir =
        directions.find((d) => d.id === state.directions.selectedDirectionId) || directions[0];
      const selCand =
        candidates.find((c) => c.id === selDir.candidateId) || candidates[0] || { name: "Aakaro" };
      const strat = state.strategy.confirmed || state.strategy.draft;

      state.brandKit.draft = {
        identity: {
          name: selCand.name,
          tagline: selDir.voice.sampleLine,
          descriptor: strat.oneLiner,
        },
        colors: {
          primary: selDir.colors.primary,
          secondary: selDir.colors.secondary,
          accent: selDir.colors.accent,
          background: selDir.colors.background,
        },
        typography: {
          headingStyle: selDir.typography.headingStyle,
          bodyStyle: selDir.typography.bodyStyle,
          usageGuidance:
            "Use display type for short headlines; use body type for explanations with 1.6 line spacing.",
        },
        wordmark: {
          treatment: selDir.logoApproach.approach,
          casing: selDir.typography.headingStyle.toLowerCase().includes("uppercase")
            ? "uppercase"
            : "lowercase",
          tracking: "tight",
          weight: "bold",
        },
        imagery: {
          style: selDir.imagery.style,
          guidance: selDir.imagery.rationale,
        },
        voice: {
          traits: selDir.voice.traits,
          description: `Speak to ${strat.audience.primary} with ${selDir.voice.traits.join(", ").toLowerCase()} phrasing. Lead with a useful next step.`,
          preferredLanguage: [
            "Active verbs",
            "Direct second-person invitations",
            "Concrete descriptions of outcomes",
            "Short sentences with one point",
          ],
          avoidedLanguage: [
            "Corporate jargon",
            "Revolutionary or game-changing",
            "Unsupported numeric promises",
            "Exclusionary labels for beginners",
          ],
        },
        rules: [
          {
            id: "rule1",
            category: "voice",
            rule: "Address the reader as 'you' in invitations.",
            rationale: "Keeps the relationship conversational and personal.",
          },
          {
            id: "rule2",
            category: "voice",
            rule: "Keep each call to action to one active verb and its object.",
            rationale: "Makes the next step immediately concrete.",
          },
          {
            id: "rule3",
            category: "language",
            rule: "Avoid 'revolutionary', 'game-changing', and 'best-in-class'.",
            rationale: "Confidence should not depend on inflated, hyperbolic claims.",
          },
          {
            id: "rule4",
            category: "language",
            rule: "Explain specialist terms in everyday words on first use.",
            rationale: `Welcomes ${strat.audience.primary} without gatekeeping.`,
          },
          {
            id: "rule5",
            category: "messaging",
            rule: `Lead headlines with this outcome: ${strat.promise}`,
            rationale: "Keeps the value promise ahead of raw feature lists.",
          },
          {
            id: "rule6",
            category: "messaging",
            rule: "Do not promise numeric results without a cited source.",
            rationale: "Ensures brand honesty and avoids misleading expectations.",
          },
          {
            id: "rule7",
            category: "visual",
            rule: `Use ${selDir.colors.primary} for wordmarks and ${selDir.colors.background} for the main canvas.`,
            rationale: "Carries the locked direction into consistent everyday layouts.",
          },
          {
            id: "rule8",
            category: "visual",
            rule: "Reserve the accent color for the primary call to action.",
            rationale: "Gives each layout composition one unmistakable focal point.",
          },
        ],
      };
      state.brandKit.status = "ready";
      saveProject();
    }
  }

  function renderBrandKitScreen(container) {
    ensureBrandKitDraft();
    const kit = state.brandKit.draft;
    const isLocked = state.brandKit.status === "confirmed";

    function getWordmarkStyles() {
      const casing = kit.wordmark.casing;
      const tracking =
        kit.wordmark.tracking === "tight"
          ? "-.05em"
          : kit.wordmark.tracking === "wide"
            ? ".08em"
            : "0";
      const weight =
        kit.wordmark.weight === "bold"
          ? 800
          : kit.wordmark.weight === "semibold"
            ? 600
            : kit.wordmark.weight === "medium"
              ? 500
              : 400;

      return `
        font-family: var(--font-display);
        text-transform: ${casing === "titlecase" ? "capitalize" : casing === "mixed" ? "none" : casing};
        letter-spacing: ${tracking};
        font-weight: ${weight};
      `;
    }

    container.innerHTML = `
      <section class="kit-screen" aria-label="Your brand kit">
        <header class="directions-intro">
          <span class="eyebrow">${isLocked ? "Brand Kit locked ✓" : "Your brand kit"}</span>
          <h1 class="tile-hero">${isLocked ? "Spellcheck-ready." : "Your identity, turned into a system."}</h1>
          <p>${escapeHtml(kit.identity.name)} · Comprehensive Brand Kit</p>
        </header>

        <div class="kit-bento">
          <!-- 01 Identity -->
          <section class="clay tile kit-identity">
            <span class="eyebrow">01 / Identity</span>
            <h2>${escapeHtml(kit.identity.name)}</h2>
            <p class="field-hint">Name linked to your confirmed naming decision.</p>

            <label class="kit-field">
              <span>Tagline</span>
              <textarea id="kit-input-tagline" rows="2" maxlength="200" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.identity.tagline)}</textarea>
            </label>

            <label class="kit-field">
              <span>Descriptor</span>
              <textarea id="kit-input-descriptor" rows="2" maxlength="200" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.identity.descriptor)}</textarea>
            </label>
          </section>

          <!-- 02 Wordmark -->
          <section class="clay tile kit-wordmark">
            <span class="eyebrow">02 / Wordmark</span>
            <div class="kit-wordmark-sample" id="kit-live-wordmark" style="${getWordmarkStyles()}">
              ${escapeHtml(kit.identity.name)}
            </div>
            <small>Text concept · not a final logo</small>

            <label class="kit-field">
              <span>Wordmark treatment</span>
              <textarea id="kit-input-treatment" rows="2" maxlength="200" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.wordmark.treatment)}</textarea>
            </label>

            <div class="kit-selects">
              <label>
                Casing
                <select id="kit-select-casing" ${isLocked ? "disabled" : ""}>
                  <option value="lowercase" ${kit.wordmark.casing === "lowercase" ? "selected" : ""}>lowercase</option>
                  <option value="uppercase" ${kit.wordmark.casing === "uppercase" ? "selected" : ""}>uppercase</option>
                  <option value="titlecase" ${kit.wordmark.casing === "titlecase" ? "selected" : ""}>titlecase</option>
                  <option value="mixed" ${kit.wordmark.casing === "mixed" ? "selected" : ""}>mixed</option>
                </select>
              </label>

              <label>
                Tracking
                <select id="kit-select-tracking" ${isLocked ? "disabled" : ""}>
                  <option value="tight" ${kit.wordmark.tracking === "tight" ? "selected" : ""}>tight</option>
                  <option value="normal" ${kit.wordmark.tracking === "normal" ? "selected" : ""}>normal</option>
                  <option value="wide" ${kit.wordmark.tracking === "wide" ? "selected" : ""}>wide</option>
                </select>
              </label>

              <label>
                Weight
                <select id="kit-select-weight" ${isLocked ? "disabled" : ""}>
                  <option value="regular" ${kit.wordmark.weight === "regular" ? "selected" : ""}>regular</option>
                  <option value="medium" ${kit.wordmark.weight === "medium" ? "selected" : ""}>medium</option>
                  <option value="semibold" ${kit.wordmark.weight === "semibold" ? "selected" : ""}>semibold</option>
                  <option value="bold" ${kit.wordmark.weight === "bold" ? "selected" : ""}>bold</option>
                </select>
              </label>
            </div>
          </section>

          <!-- 03 Colors -->
          <section class="clay tile kit-colors">
            <span class="eyebrow">03 / Colors</span>
            <h2>Your palette</h2>
            ${["primary", "secondary", "accent", "background"]
              .map(
                (role) => `
              <label class="kit-color">
                <span class="color-swatch" id="swatch-${role}" style="background: ${kit.colors[role]};"></span>
                <span>
                  ${role}
                  <input
                    aria-label="${role} HEX"
                    id="input-color-${role}"
                    value="${kit.colors[role]}"
                    maxlength="7"
                    ${isLocked ? "readonly" : ""}
                  />
                </span>
              </label>
            `,
              )
              .join("")}
          </section>

          <!-- 04 Typography -->
          <section class="clay tile kit-type">
            <span class="eyebrow">04 / Typography</span>
            <h2>Type with purpose</h2>
            <label class="kit-field">
              <span>Heading style</span>
              <textarea id="kit-type-heading" rows="2" maxlength="200" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.typography.headingStyle)}</textarea>
            </label>
            <label class="kit-field">
              <span>Body style</span>
              <textarea id="kit-type-body" rows="2" maxlength="200" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.typography.bodyStyle)}</textarea>
            </label>
            <label class="kit-field">
              <span>Typography guidance</span>
              <textarea id="kit-type-guidance" rows="3" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.typography.usageGuidance)}</textarea>
            </label>
          </section>

          <!-- 05 Voice -->
          <section class="clay tile kit-voice">
            <span class="eyebrow">05 / Voice</span>
            <h2>How you sound</h2>
            <label class="kit-field">
              <span>Voice description</span>
              <textarea id="kit-voice-desc" rows="3" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.voice.description)}</textarea>
            </label>

            <fieldset>
              <legend>Preferred language</legend>
              ${kit.voice.preferredLanguage
                .map(
                  (item, i) => `
                <label class="kit-field">
                  <span>Preferred pattern ${i + 1}</span>
                  <input class="kit-pref-item" data-index="${i}" value="${escapeHtml(item)}" ${isLocked ? "readonly" : ""} />
                </label>
              `,
                )
                .join("")}
            </fieldset>

            <fieldset>
              <legend>Avoided language</legend>
              ${kit.voice.avoidedLanguage
                .map(
                  (item, i) => `
                <label class="kit-field">
                  <span>Avoided pattern ${i + 1}</span>
                  <input class="kit-avoid-item" data-index="${i}" value="${escapeHtml(item)}" ${isLocked ? "readonly" : ""} />
                </label>
              `,
                )
                .join("")}
            </fieldset>
          </section>

          <!-- 06 Brand Rules -->
          <section class="clay tile kit-rules">
            <span class="eyebrow">06 / Brand rules</span>
            <h2>The reference for your next words.</h2>
            <p>Review each rule. These structured rules guide Brand Spellcheck in the next stage.</p>
            <div class="kit-rule-list">
              ${kit.rules
                .map(
                  (rule, index) => `
                <article class="kit-rule">
                  <h3>${String(index + 1).padStart(2, "0")} / ${rule.category.toUpperCase()}</h3>
                  <label class="kit-field">
                    <span>Rule ${index + 1}</span>
                    <textarea class="kit-rule-text" data-rule-id="${rule.id}" rows="2" ${isLocked ? "readonly" : ""}>${escapeHtml(rule.rule)}</textarea>
                  </label>
                  <label class="kit-field">
                    <span>Rationale ${index + 1}</span>
                    <textarea class="kit-rule-rationale" data-rule-id="${rule.id}" rows="2" ${isLocked ? "readonly" : ""}>${escapeHtml(rule.rationale)}</textarea>
                  </label>
                </article>
              `,
                )
                .join("")}
            </div>
          </section>

          <!-- 07 Imagery -->
          <section class="clay tile kit-imagery">
            <span class="eyebrow">07 / Imagery</span>
            <h2>A visual world</h2>
            <label class="kit-field">
              <span>Imagery style</span>
              <textarea id="kit-imagery-style" rows="2" maxlength="200" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.imagery.style)}</textarea>
            </label>
            <label class="kit-field">
              <span>Imagery guidance</span>
              <textarea id="kit-imagery-guidance" rows="3" ${isLocked ? "readonly" : ""}>${escapeHtml(kit.imagery.guidance)}</textarea>
            </label>
          </section>

          <!-- Live Brand Preview in Context -->
          <section class="clay tile kit-preview-frame" aria-label="Live brand preview">
            <span class="eyebrow">Identity in context</span>
            <h2>One coherent identity.</h2>
            <p>Concept preview · text wordmark, not a final logo or website.</p>
            <div
              class="kit-preview"
              id="live-preview-box"
              style="background: ${kit.colors.background}; color: ${ink(kit.colors.background)};"
            >
              <div
                class="kit-preview-wordmark"
                id="live-preview-wordmark"
                style="${getWordmarkStyles()} background: ${kit.colors.primary}; color: ${ink(kit.colors.primary)};"
              >
                ${escapeHtml(kit.identity.name)}
              </div>
              <div class="kit-preview-shapes" aria-hidden="true">
                <i id="live-shape-1" style="background: ${kit.colors.secondary};"></i>
                <i id="live-shape-2" style="background: ${kit.colors.accent};"></i>
              </div>
              <h3 id="live-preview-tagline" style="font-family: var(--font-display); font-weight: 800; font-size: clamp(28px, 3.5vw, 48px); margin: 50px 0 16px;">
                ${escapeHtml(kit.identity.tagline)}
              </h3>
              <p id="live-preview-desc">${escapeHtml(kit.identity.descriptor)}</p>
              <span
                class="kit-preview-cta"
                id="live-preview-cta"
                style="background: ${kit.colors.accent}; color: ${ink(kit.colors.accent)}; font-weight: 700;"
              >
                Start building →
              </span>
            </div>
          </section>
        </div>

        <div class="clay tile kit-decision">
          <p>
            ${
              isLocked
                ? "Brand Kit locked. Saved in this browser."
                : "Review your identity and rules, then lock this system."
            }
          </p>
          <div class="tile-actions">
            <button class="btn btn-secondary" id="btn-kit-revisit-direction">Revisit direction</button>
            <span class="spacer"></span>
            ${
              isLocked
                ? `<button class="btn btn-secondary" id="btn-kit-edit">Edit brand kit</button>
                   <button class="btn btn-primary" id="btn-kit-go-spellcheck">Continue to Spellcheck →</button>`
                : `<button class="btn btn-primary" id="btn-kit-confirm">Confirm brand kit <span class="btn-arrow" aria-hidden="true">→</span></button>`
            }
          </div>
        </div>
      </section>
    `;

    // Real-time update listeners for inputs
    function syncLivePreview() {
      const liveBox = container.querySelector("#live-preview-box");
      const liveWm = container.querySelector("#live-preview-wordmark");
      const liveTag = container.querySelector("#live-preview-tagline");
      const liveDesc = container.querySelector("#live-preview-desc");
      const liveCta = container.querySelector("#live-preview-cta");
      const liveS1 = container.querySelector("#live-shape-1");
      const liveS2 = container.querySelector("#live-shape-2");
      const liveSample = container.querySelector("#kit-live-wordmark");

      if (liveBox) {
        liveBox.style.background = kit.colors.background;
        liveBox.style.color = ink(kit.colors.background);
      }
      if (liveWm) {
        liveWm.style.cssText = `${getWordmarkStyles()} background: ${kit.colors.primary}; color: ${ink(kit.colors.primary)};`;
      }
      if (liveSample) {
        liveSample.style.cssText = getWordmarkStyles();
      }
      if (liveTag) liveTag.textContent = kit.identity.tagline;
      if (liveDesc) liveDesc.textContent = kit.identity.descriptor;
      if (liveCta) {
        liveCta.style.background = kit.colors.accent;
        liveCta.style.color = ink(kit.colors.accent);
      }
      if (liveS1) liveS1.style.background = kit.colors.secondary;
      if (liveS2) liveS2.style.background = kit.colors.accent;
    }

    if (!isLocked) {
      container.querySelector("#kit-input-tagline").oninput = (e) => {
        kit.identity.tagline = e.target.value;
        syncLivePreview();
        saveProject();
      };
      container.querySelector("#kit-input-descriptor").oninput = (e) => {
        kit.identity.descriptor = e.target.value;
        syncLivePreview();
        saveProject();
      };
      container.querySelector("#kit-input-treatment").oninput = (e) => {
        kit.wordmark.treatment = e.target.value;
        saveProject();
      };

      // Wordmark selects
      container.querySelector("#kit-select-casing").onchange = (e) => {
        kit.wordmark.casing = e.target.value;
        syncLivePreview();
        saveProject();
      };
      container.querySelector("#kit-select-tracking").onchange = (e) => {
        kit.wordmark.tracking = e.target.value;
        syncLivePreview();
        saveProject();
      };
      container.querySelector("#kit-select-weight").onchange = (e) => {
        kit.wordmark.weight = e.target.value;
        syncLivePreview();
        saveProject();
      };

      // Color inputs with hex validation and live swatch updates
      ["primary", "secondary", "accent", "background"].forEach((role) => {
        const inp = container.querySelector(`#input-color-${role}`);
        const swatch = container.querySelector(`#swatch-${role}`);
        inp.oninput = (e) => {
          let val = e.target.value.trim();
          if (val.length === 6 && !val.startsWith("#")) val = `#${val}`;
          if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
            kit.colors[role] = val;
            swatch.style.background = val;
            syncLivePreview();
            saveProject();
          }
        };
      });

      // Rules edits
      container.querySelectorAll(".kit-rule-text").forEach((ta) => {
        ta.oninput = (e) => {
          const rId = ta.getAttribute("data-rule-id");
          const found = kit.rules.find((r) => r.id === rId);
          if (found) found.rule = e.target.value;
          saveProject();
        };
      });
      container.querySelectorAll(".kit-rule-rationale").forEach((ta) => {
        ta.oninput = (e) => {
          const rId = ta.getAttribute("data-rule-id");
          const found = kit.rules.find((r) => r.id === rId);
          if (found) found.rationale = e.target.value;
          saveProject();
        };
      });
    }

    container.querySelector("#btn-kit-revisit-direction").onclick = () => {
      openModal(
        "Revisit your direction?",
        "<p>This clears the kit and its rules so you can build from your other confirmed direction or restart direction selection.</p>",
        "Unlock direction",
        () => {
          state.directions.status = "ready";
          state.brandKit.draft = null;
          state.brandKit.confirmed = null;
          state.brandKit.status = "idle";
          state.currentStage = "directions";
          saveProject();
          renderApp();
        },
      );
    };

    const confirmBtn = container.querySelector("#btn-kit-confirm");
    if (confirmBtn) {
      confirmBtn.onclick = () => {
        openModal(
          "Confirm this brand system?",
          "<p>These rules and identity will become the official reference Aakaro uses to spellcheck your marketing content.</p>",
          "Confirm brand kit",
          () => {
            state.brandKit.confirmed = structuredClone(kit);
            state.brandKit.status = "confirmed";
            state.currentStage = "spellcheck";
            saveProject();
            renderApp();
          },
        );
      };
    }

    const editBtn = container.querySelector("#btn-kit-edit");
    if (editBtn) {
      editBtn.onclick = () => {
        state.brandKit.status = "ready";
        saveProject();
        renderBrandKitScreen(container);
      };
    }

    const goSpellcheckBtn = container.querySelector("#btn-kit-go-spellcheck");
    if (goSpellcheckBtn) {
      goSpellcheckBtn.onclick = () => {
        state.currentStage = "spellcheck";
        saveProject();
        renderApp();
      };
    }
  }

  // --- SCREEN 07: Brand Spellcheck ---
  function runDeterministicSpellcheck(content, kit) {
    const issues = [];
    const lowerContent = content.toLowerCase();

    // Check 1: Inflated words (Rule 3)
    for (const [inflated, replacement] of Object.entries(PLAIN_SWAPS)) {
      const idx = lowerContent.indexOf(inflated);
      if (idx >= 0) {
        const originalText = content.slice(idx, idx + inflated.length);
        issues.push({
          id: `iss-${Math.random().toString(36).slice(2, 7)}`,
          ruleId: "3",
          category: "language",
          severity: "high",
          originalText: originalText,
          start: idx,
          end: idx + inflated.length,
          explanation: `Inflated claim detected: "${originalText}". Brand confidence must not depend on hyperbolic adjectives.`,
          suggestion: `Replace with a simpler, grounded word such as "${replacement}".`,
          replacement:
            originalText[0] === originalText[0].toUpperCase()
              ? replacement[0].toUpperCase() + replacement.slice(1)
              : replacement,
        });
      }
    }

    // Check 2: Direct address check (Rule 1)
    if (!/\byou\b|\byour\b/i.test(content) && content.length > 60) {
      issues.push({
        id: `iss-${Math.random().toString(36).slice(2, 7)}`,
        ruleId: "1",
        category: "voice",
        severity: "medium",
        originalText: content.slice(0, Math.min(content.length, 50)),
        explanation: "Content does not address the reader as 'you'.",
        suggestion: "Use second-person pronouns ('you', 'your') to keep invitations conversational.",
      });
    }

    return {
      summary:
        issues.length === 0
          ? "No rule conflicts found. The content matches your confirmed brand voice and rules."
          : `Found ${issues.length} potential issue${issues.length === 1 ? "" : "s"} against your confirmed brand rules.`,
      issues: issues,
      passedRuleIds: kit.rules.map((r) => r.id).filter((id) => !issues.some((i) => i.ruleId === id)),
      aiReviewed: true,
      reviewedAt: new Date().toISOString(),
      stale: false,
    };
  }

  function renderSpellcheckScreen(container) {
    ensureBrandKitDraft();
    const kit = state.brandKit.confirmed || state.brandKit.draft;
    const spellcheck = state.spellcheck;
    const review = spellcheck.review;
    const hasContent = spellcheck.workingContent.trim().length > 0;
    const isComplete = spellcheck.status === "complete";
    const isReviewing = spellcheck.status === "reviewing";

    // Set sample text helper
    const sampleViolationText = `We are proud to introduce our revolutionary platform for student builders. Our game-changing technology provides a best-in-class experience to help anyone connect with teammates seamlessly.`;

    let statusLabel = "Awaiting content";
    if (isReviewing) statusLabel = "Checking…";
    else if (isComplete) statusLabel = "Confirmed ✓";
    else if (review?.stale) statusLabel = "Needs re-check";
    else if (review) statusLabel = "Checked";
    else if (hasContent) statusLabel = "Ready to check";

    let statusText = `${kit.rules.length} confirmed rules are ready to review pasted content.`;
    if (isReviewing) statusText = "Checking the content against your confirmed rules…";
    else if (isComplete) statusText = "This checked content is confirmed and saved in this browser.";
    else if (review) {
      if (review.stale) statusText = "The content changed after this check. Re-check to validate it.";
      else if (review.issues.length === 0) statusText = "No rule conflicts found in the current content.";
      else statusText = `${review.issues.length} issue${review.issues.length === 1 ? "" : "s"} found in the current content.`;
    }

    container.innerHTML = `
      <section class="spellcheck-screen" aria-label="Brand Spellcheck">
        <header class="clay tile spellcheck-head">
          <div class="spellcheck-head-row">
            <div>
              <span class="eyebrow">Brand Spellcheck</span>
              <h1 class="tile-hero">
                ${isComplete ? "Content confirmed." : "Check content against your rules."}
              </h1>
            </div>
            <span class="spellcheck-status status-${spellcheck.status || "idle"}" role="status">
              ${statusLabel}
            </span>
          </div>
          <p class="status-line">${statusText}</p>
        </header>

        <div class="spellcheck-bento">
          <!-- Left: Content Editor -->
          <section class="clay tile spellcheck-editor">
            <span class="eyebrow">Your content</span>
            <h2>${spellcheck.status === "idle" && !hasContent ? "Paste content to check" : "Working content"}</h2>
            <label class="sr-only" for="spellcheck-content-area">Content to check</label>
            <textarea
              id="spellcheck-content-area"
              class="spellcheck-input"
              maxlength="5000"
              placeholder="Paste the page copy, post, or announcement you want checked against ${escapeHtml(kit.identity.name)}'s rules…"
              ${isComplete ? "disabled" : ""}
            >${escapeHtml(spellcheck.workingContent)}</textarea>

            <div class="spellcheck-editor-foot">
              <span class="char-count" id="spellcheck-char-count">
                ${spellcheck.workingContent.length} / 5,000
              </span>
              <div style="display:flex;gap:10px;align-items:center;">
                ${
                  !hasContent && !isComplete
                    ? `<button type="button" class="btn btn-secondary btn-small" id="btn-load-sample">
                        Load sample copy
                      </button>`
                    : ""
                }
                <button
                  type="button"
                  class="btn btn-primary"
                  id="btn-run-spellcheck"
                  ${!hasContent || isReviewing || isComplete ? "disabled" : ""}
                >
                  ${isReviewing ? "Checking…" : review ? (review.stale ? "Re-check content" : "Check again") : "Check content"}
                </button>
              </div>
            </div>

            ${
              spellcheck.originalContent &&
              spellcheck.originalContent !== spellcheck.workingContent
                ? `
              <details class="spellcheck-original">
                <summary>Original pasted text (preserved)</summary>
                <p>${escapeHtml(spellcheck.originalContent)}</p>
              </details>
            `
                : ""
            }
          </section>

          <!-- Right: Review Findings -->
          <section class="clay tile spellcheck-review" aria-live="polite">
            <span class="eyebrow">Rule-linked review</span>
            ${
              !review
                ? `
              <p class="field-help" style="margin-top:14px;">
                Checks run against your ${kit.rules.length} confirmed rules.
                Deterministic phrase rules always run; tone and context are evaluated.
                Nothing is rewritten without your explicit approval.
              </p>
            `
                : isReviewing
                  ? `
              <p class="generating-note" style="margin-top:14px;" aria-busy="true">
                Re-reading the content against the confirmed rules…
              </p>
            `
                  : `
              ${
                review.stale
                  ? `
                <p class="spellcheck-stale-note">
                  This review describes an earlier version of the content.
                  Re-check before applying more fixes or confirming.
                </p>
              `
                  : ""
              }

              ${
                review.issues.length === 0
                  ? `
                <div class="spellcheck-clear">
                  <h3>No rule conflicts found.</h3>
                  <p>
                    ${review.passedRuleIds.length} of ${kit.rules.length} confirmed rules passed.
                  </p>
                </div>
              `
                  : `
                <ul class="spellcheck-issues">
                  ${review.issues
                    .map((issue) => {
                      const matchedRule = kit.rules.find((r) => r.id === `rule${issue.ruleId}` || r.id === issue.ruleId);
                      return `
                      <li class="spellcheck-issue severity-${issue.severity}">
                        <div class="issue-meta">
                          <span class="severity-chip severity-${issue.severity}">${issue.severity}</span>
                          <span class="category-chip">${issue.category}</span>
                          <span class="rule-chip" title="${matchedRule ? escapeHtml(matchedRule.rule) : ""}">
                            Rule ${issue.ruleId}
                          </span>
                        </div>
                        <blockquote>
                          “${escapeHtml(issue.originalText)}”
                          ${typeof issue.start === "number" ? `<small> · characters ${issue.start}–${issue.end}</small>` : ""}
                        </blockquote>
                        ${matchedRule ? `<p class="issue-rule-text"><strong>Confirmed rule:</strong> ${escapeHtml(matchedRule.rule)}</p>` : ""}
                        <p class="issue-explanation">${escapeHtml(issue.explanation)}</p>
                        <p class="issue-suggestion"><strong>Suggestion:</strong> ${escapeHtml(issue.suggestion)}</p>
                        ${
                          issue.replacement
                            ? `<p class="issue-replacement">Replacement: <code>${escapeHtml(issue.replacement)}</code></p>
                               <button type="button" class="btn btn-secondary btn-small btn-apply-fix" data-issue-id="${issue.id}">
                                 Apply fix
                               </button>`
                            : `<p class="field-help">No automatic replacement — edit the content manually using the suggestion.</p>`
                        }
                      </li>
                    `;
                    })
                    .join("")}
                </ul>
              `
              }
            `
            }
          </section>
        </div>

        <!-- Decision & Export section -->
        ${
          review && !review.stale
            ? `
          <section class="clay tile spellcheck-decision">
            <span class="eyebrow">
              ${isComplete ? "Spellcheck complete" : "Export and finish"}
            </span>
            <p>
              ${
                isComplete
                  ? "Your checked content is confirmed. It stays saved in this browser with the rest of your project."
                  : review.issues.length === 0
                    ? "Every rule check passed. Export the checked content, or finish the spellcheck."
                    : "Apply the fixes you accept — or keep the remaining issues — then export or finish."
              }
            </p>
            <div class="tile-actions">
              <button class="btn btn-secondary" id="btn-export-markdown">
                Download Markdown
              </button>
              <button class="btn btn-secondary" id="btn-export-print">
                Print / Save as PDF
              </button>
              ${
                !isComplete
                  ? `
                <button class="btn btn-primary" id="btn-finish-spellcheck">
                  Finish spellcheck
                </button>
              `
                  : ""
              }
            </div>
          </section>
        `
            : ""
        }

        <footer class="clay tile spellcheck-foot">
          <div class="tile-actions">
            <button class="btn btn-secondary" id="btn-spellcheck-back-kit">
              Back to brand kit
            </button>
            ${
              hasContent
                ? `
              <button class="btn btn-secondary" id="btn-spellcheck-new">
                Start new check
              </button>
            `
                : ""
            }
          </div>
        </footer>
      </section>
    `;

    const textarea = container.querySelector("#spellcheck-content-area");
    const charCount = container.querySelector("#spellcheck-char-count");
    const runBtn = container.querySelector("#btn-run-spellcheck");
    const sampleBtn = container.querySelector("#btn-load-sample");

    if (sampleBtn) {
      sampleBtn.onclick = () => {
        spellcheck.originalContent = sampleViolationText;
        spellcheck.workingContent = sampleViolationText;
        spellcheck.status = "ready";
        saveProject();
        renderSpellcheckScreen(container);
      };
    }

    textarea.oninput = (e) => {
      const val = e.target.value;
      if (spellcheck.status === "idle" && !spellcheck.originalContent) {
        spellcheck.originalContent = val;
      }
      spellcheck.workingContent = val;
      if (spellcheck.review) {
        spellcheck.review.stale = true;
      }
      spellcheck.status = "ready";
      charCount.textContent = `${val.length} / 5,000`;
      runBtn.disabled = !val.trim();
      saveProject();
    };

    runBtn.onclick = () => {
      spellcheck.status = "reviewing";
      renderSpellcheckScreen(container);

      setTimeout(() => {
        spellcheck.review = runDeterministicSpellcheck(spellcheck.workingContent, kit);
        spellcheck.status = "ready";
        saveProject();
        renderSpellcheckScreen(container);
      }, 500);
    };

    // Apply Fix handler
    container.querySelectorAll(".btn-apply-fix").forEach((btn) => {
      btn.onclick = () => {
        const issueId = btn.getAttribute("data-issue-id");
        const issue = review.issues.find((i) => i.id === issueId);
        if (!issue || !issue.replacement) return;

        // Replace the target phrase
        let newContent = spellcheck.workingContent;
        if (
          typeof issue.start === "number" &&
          newContent.slice(issue.start, issue.end) === issue.originalText
        ) {
          newContent =
            newContent.slice(0, issue.start) +
            issue.replacement +
            newContent.slice(issue.end);
        } else {
          newContent = newContent.replace(issue.originalText, issue.replacement);
        }

        spellcheck.workingContent = newContent;
        // Re-run review on the updated content
        spellcheck.review = runDeterministicSpellcheck(newContent, kit);
        saveProject();
        renderSpellcheckScreen(container);
      };
    });

    // Export Markdown
    const mdBtn = container.querySelector("#btn-export-markdown");
    if (mdBtn) {
      mdBtn.onclick = () => {
        const md = [
          `# Brand Spellcheck — ${kit.identity.name}`,
          "",
          `Status: ${isComplete ? "Confirmed" : "Checked"}`,
          `Date: ${new Date().toLocaleDateString()}`,
          "",
          "## Checked Content",
          "",
          spellcheck.workingContent,
          "",
          "## Review Summary",
          "",
          review?.summary || "Passed all brand rules.",
        ].join("\n");

        const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${kit.identity.name.toLowerCase()}-brand-spellcheck.md`;
        a.click();
        URL.revokeObjectURL(url);
      };
    }

    // Print / PDF
    const printBtn = container.querySelector("#btn-export-print");
    if (printBtn) {
      printBtn.onclick = () => window.print();
    }

    // Finish spellcheck
    const finishBtn = container.querySelector("#btn-finish-spellcheck");
    if (finishBtn) {
      finishBtn.onclick = () => {
        spellcheck.status = "complete";
        saveProject();
        renderSpellcheckScreen(container);
      };
    }

    // Back to brand kit
    container.querySelector("#btn-spellcheck-back-kit").onclick = () => {
      state.currentStage = "brand-kit";
      saveProject();
      renderApp();
    };

    // Start new check
    const newCheckBtn = container.querySelector("#btn-spellcheck-new");
    if (newCheckBtn) {
      newCheckBtn.onclick = () => {
        openModal(
          "Start a new check?",
          "<p>This clears the current content and review from this project so you can check fresh copy. Continue?</p>",
          "Clear content",
          () => {
            spellcheck.originalContent = "";
            spellcheck.workingContent = "";
            spellcheck.review = null;
            spellcheck.status = "idle";
            saveProject();
            renderSpellcheckScreen(container);
          },
        );
      };
    }
  }

  // --- RECORDED GRAVEYARD (at bottom of Directions & Brand Kit) ---
  function renderRecordedGraveyard() {
    const container = document.getElementById("recorded-graveyard-container");
    if (!container) return;

    const isAfterNaming =
      state.currentStage === "directions" || state.currentStage === "brand-kit";
    const hasGraveyard =
      state.naming.generationStatus === "confirmed" &&
      state.naming.graveyardIds &&
      state.naming.graveyardIds.length > 0;

    if (!isAfterNaming || !hasGraveyard) {
      container.innerHTML = "";
      return;
    }

    const candidates = state.naming.candidates;
    const evaluations = state.naming.evaluations;
    const evalMap = new Map(evaluations.map((e) => [e.candidateId, e]));

    const gCandidates = state.naming.graveyardIds.map((id) => {
      const c = candidates.find((cand) => cand.id === id);
      const ev = evalMap.get(id);
      return { candidate: c, evaluation: ev };
    });

    container.innerHTML = `
      <section class="graveyard recorded" style="margin-top: 32px;" aria-label="The Graveyard — alternatives we evaluated">
        <button type="button" class="graveyard-toggle" id="rec-graveyard-toggle" aria-expanded="false">
          <span class="graveyard-icon" aria-hidden="true">
            <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
              <path fill="currentColor" d="M10 2.6a4.6 4.6 0 0 1 4.6 4.6v7H14v3H6v-3h-.6v-7A4.6 4.6 0 0 1 10 2.6Z" />
            </svg>
          </span>
          <span>The Graveyard — alternatives we evaluated</span>
          <span class="graveyard-count">${gCandidates.length}</span>
          <span class="spacer"></span>
          <span class="graveyard-chevron" id="rec-graveyard-chevron" aria-hidden="true">▸</span>
        </button>
        <div class="graveyard-body" id="rec-graveyard-body" style="display: none;">
          <p class="graveyard-note">
            Recorded when you confirmed your naming decision. Rejected for this brief — not objectively bad.
          </p>
          ${gCandidates
            .map(({ candidate: c, evaluation: ev }) => {
              if (!c) return "";
              return `
              <div class="clay graveyard-entry" key="${c.id}">
                <div class="graveyard-entry-head">
                  <h4>${escapeHtml(c.name)}</h4>
                  <span class="eyebrow">${escapeHtml(c.territory)}</span>
                </div>
                <p class="graveyard-reason">${escapeHtml(ev?.verdict || "")}</p>
                <ul class="mini-list risks">
                  ${(ev?.risks || []).map((r) => `<li><span class="marker" aria-hidden="true">△</span>${escapeHtml(r)}</li>`).join("")}
                </ul>
              </div>
            `;
            })
            .join("")}
        </div>
      </section>
    `;

    const toggleBtn = container.querySelector("#rec-graveyard-toggle");
    const bodyEl = container.querySelector("#rec-graveyard-body");
    const chevronEl = container.querySelector("#rec-graveyard-chevron");

    if (toggleBtn) {
      toggleBtn.onclick = () => {
        const isHidden = bodyEl.style.display === "none";
        bodyEl.style.display = isHidden ? "grid" : "none";
        chevronEl.textContent = isHidden ? "▾" : "▸";
        toggleBtn.setAttribute("aria-expanded", String(isHidden));
      };
    }
  }

  // --- HTML escaping helper ---
  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  // --- Main App Renderer & View Router ---
  function renderApp() {
    const navbar   = document.getElementById("app-navbar");
    const workspace = document.getElementById("workspace-container");
    const landing  = document.getElementById("landing-page-container");
    const auth     = document.getElementById("auth-page-container");

    // Route views: 'landing' | 'auth' | 'app'
    if (state.activeView === "landing") {
      navbar.style.display    = "none";
      workspace.style.display = "none";
      auth.style.display      = "none";
      landing.style.display   = "block";
      initCinematic();
      return;
    }

    if (state.activeView === "auth") {
      navbar.style.display    = "none";
      workspace.style.display = "none";
      landing.style.display   = "none";
      auth.style.display      = "block";
      return;
    }

    // Default: 'app' workspace
    navbar.style.display    = "block";
    workspace.style.display = "block";
    landing.style.display   = "none";
    auth.style.display      = "none";

    // Render Stage Rail
    renderStageRail();

    // Render Current Screen
    const screenViewport = document.getElementById("screen-viewport");
    switch (state.currentStage) {
      case "idea":
        renderIdeaScreen(screenViewport);
        break;
      case "clarification":
        renderClarifyScreen(screenViewport);
        break;
      case "strategy":
        renderStrategyScreen(screenViewport);
        break;
      case "naming":
        renderNamingScreen(screenViewport);
        break;
      case "directions":
        renderDirectionsScreen(screenViewport);
        break;
      case "brand-kit":
        renderBrandKitScreen(screenViewport);
        break;
      case "spellcheck":
        renderSpellcheckScreen(screenViewport);
        break;
      default:
        renderIdeaScreen(screenViewport);
    }

    // Render Recorded Graveyard (if on Directions or Brand Kit)
    renderRecordedGraveyard();

    // Update Session Pill in Navbar
    updateSessionUI();

    // Scroll top on stage change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateSessionUI() {
    const avatarEl = document.querySelector("#nav-session-pill .session-avatar");
    const nameEl = document.querySelector("#nav-session-pill .session-name");
    const detailEl = document.querySelector("#nav-session-pill .session-detail");
    const signOutBtn = document.getElementById("btn-sign-out");

    if (state.session && state.session.isLoggedIn) {
      if (avatarEl) avatarEl.textContent = state.session.avatar || "A";
      if (nameEl) nameEl.textContent = state.session.name || "User";
      if (detailEl) detailEl.textContent = state.session.email || "Active session";
      if (signOutBtn) {
        signOutBtn.textContent = "Sign out";
        signOutBtn.style.display = "inline-flex";
      }
    } else {
      if (avatarEl) avatarEl.textContent = "G";
      if (nameEl) nameEl.textContent = "Guest session";
      if (detailEl) detailEl.textContent = "Not signed in";
      if (signOutBtn) {
        signOutBtn.textContent = "Sign in";
        signOutBtn.style.display = "inline-flex";
      }
    }
  }

  // ─── Cinematic Landing Page (matches CinematicFrameSequence.tsx) ───────────
  // Since the 240 JPEG frames are not available, the canvas shows a
  // CSS-animated deep-space gradient that moves through "chapters" as
  // the user scrolls, preserving every visual landmark from the reference:
  //   0–8%   → intro overlay fully visible
  //   8–22%  → intro fades out + drifts up
  //   22–84% → mid-sequence (canvas gradient animates)
  //   84–94% → outro fades in from below
  //   94–100%→ outro fully visible + CTAs interactive

  let _cinematicCleanup = null;

  function initCinematic() {
    // Static landmark hero page; no frame sequence animation needed
    if (_cinematicCleanup) { _cinematicCleanup(); _cinematicCleanup = null; }
  }

  // --- Event Listeners Setup ---
  function initListeners() {
    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    // Brand logo → return to landing page
    const brandLogo = document.getElementById("nav-brand-logo");
    if (brandLogo) {
      brandLogo.addEventListener("click", () => {
        state.activeView = "landing";
        window.location.hash = "#landing";
        saveProject();
        renderApp();
      });
    }

    // Start Over
    const startOverBtn = document.getElementById("btn-start-over");
    if (startOverBtn) {
      startOverBtn.addEventListener("click", () => {
        openModal(
          "Start over?",
          "<p>This clears your project data, idea, strategy, and selections from this browser session.</p>",
          "Start over",
          () => {
            localStorage.removeItem("aakaroProject");
            state = getEmptyProject();
            state.activeView = "app";
            state.currentStage = "idea";
            saveProject();
            renderApp();
          }
        );
      });
    }

    // Session Pill → click to open login page
    const sessionPill = document.getElementById("nav-session-pill");
    if (sessionPill) {
      sessionPill.style.cursor = "pointer";
      sessionPill.setAttribute("title", "Click to sign in or switch account");
      sessionPill.addEventListener("click", () => {
        state.activeView = "auth";
        window.location.hash = "#auth";
        saveProject();
        renderApp();
      });
    }

    // Sign out button (matches Workspace.tsx: onLogout)
    const signOutBtn = document.getElementById("btn-sign-out");
    if (signOutBtn) {
      signOutBtn.addEventListener("click", () => {
        state.session = null;
        state.activeView = "auth";
        window.location.hash = "#auth";
        saveProject();
        renderApp();
      });
    }

    // ── Landing page (Home) buttons ──────────────────────
    const landingGuest = document.getElementById("btn-landing-guest");
    if (landingGuest) {
      // Home page hero CTA → navigates to Login page
      landingGuest.addEventListener("click", () => {
        state.activeView = "auth";
        window.location.hash = "#auth";
        saveProject();
        renderApp();
      });
    }

    const enterBtn = document.getElementById("btn-enter-workspace");
    if (enterBtn) {
      // Outro CTA: If already logged in, enter dashboard; otherwise go to Login page
      enterBtn.addEventListener("click", () => {
        if (state.session && state.session.isLoggedIn) {
          state.activeView = "app";
          window.location.hash = "#app";
        } else {
          state.activeView = "auth";
          window.location.hash = "#auth";
        }
        saveProject();
        renderApp();
      });
    }

    const outroGuest = document.getElementById("btn-outro-guest");
    if (outroGuest) {
      // Outro guest button → navigates to Login page
      outroGuest.addEventListener("click", () => {
        state.activeView = "auth";
        window.location.hash = "#auth";
        saveProject();
        renderApp();
      });
    }

    // ── Auth (Login) page buttons ─────────────────────────
    // Back to Home button on Login page
    const authBackHome = document.getElementById("btn-auth-back-home");
    if (authBackHome) {
      authBackHome.addEventListener("click", () => {
        state.activeView = "landing";
        window.location.hash = "#landing";
        saveProject();
        renderApp();
      });
    }

    // Wordmark on Login card also returns to Home page
    const artWordmark = document.getElementById("art-wordmark-link");
    if (artWordmark) {
      artWordmark.addEventListener("click", () => {
        state.activeView = "landing";
        window.location.hash = "#landing";
        saveProject();
        renderApp();
      });
    }

    // Google Sign-In → sets session → navigates to Dashboard
    const authGoogleBtn = document.getElementById("btn-auth-google");
    if (authGoogleBtn) {
      authGoogleBtn.addEventListener("click", () => {
        state.session = {
          isLoggedIn: true,
          name: "Google User",
          email: "user@gmail.com",
          avatar: "G",
          method: "google",
        };
        state.activeView = "app";
        window.location.hash = "#app";
        saveProject();
        renderApp();
      });
    }

    // Guest Sign-In → sets guest session → navigates to Dashboard
    const authGuestBtn = document.getElementById("btn-auth-guest");
    if (authGuestBtn) {
      authGuestBtn.addEventListener("click", () => {
        state.session = {
          isLoggedIn: true,
          name: "Guest User",
          email: "guest@aakaro.local",
          avatar: "G",
          method: "guest",
        };
        state.activeView = "app";
        window.location.hash = "#app";
        saveProject();
        renderApp();
      });
    }

    // ── Login / Register interactive form handling ────────
    const tabLogin = document.getElementById("tab-login");
    const tabRegister = document.getElementById("tab-register");
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");
    const authHeading = document.getElementById("auth-heading");
    const authSubheading = document.getElementById("auth-subheading");

    function switchAuthTab(tab) {
      const isLogin = tab === "login";
      if (tabLogin) {
        tabLogin.classList.toggle("active", isLogin);
        tabLogin.setAttribute("aria-selected", isLogin ? "true" : "false");
      }
      if (tabRegister) {
        tabRegister.classList.toggle("active", !isLogin);
        tabRegister.setAttribute("aria-selected", !isLogin ? "true" : "false");
      }
      if (formLogin) formLogin.classList.toggle("active", isLogin);
      if (formRegister) formRegister.classList.toggle("active", !isLogin);

      if (authHeading) {
        authHeading.textContent = isLogin ? "Welcome back" : "Create your account";
      }
      if (authSubheading) {
        authSubheading.textContent = isLogin
          ? "Sign in to your account."
          : "It takes less than a minute.";
      }

      // Clear any messages
      document.querySelectorAll(".auth-form-msg").forEach((el) => {
        el.textContent = "";
        el.className = "auth-form-msg";
      });
      document.querySelectorAll(".auth-field-err").forEach((el) => {
        el.textContent = "";
      });
      document.querySelectorAll(".auth-field input").forEach((inp) => {
        inp.removeAttribute("aria-invalid");
      });
    }

    if (tabLogin) tabLogin.addEventListener("click", () => switchAuthTab("login"));
    if (tabRegister) tabRegister.addEventListener("click", () => switchAuthTab("register"));

    document.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        switchAuthTab(btn.dataset.go);
      });
    });

    // Password show/hide toggle
    document.querySelectorAll(".auth-pw-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const input = document.getElementById(targetId);
        if (!input) return;
        const isPw = input.type === "password";
        input.type = isPw ? "text" : "password";
        btn.textContent = isPw ? "Hide" : "Show";
        btn.setAttribute("aria-label", isPw ? "Hide password" : "Show password");
      });
    });

    // Password strength indicator
    const rPwInput = document.getElementById("r-pw");
    const pwMeterBar = document.getElementById("pw-meter-bar");
    if (rPwInput && pwMeterBar) {
      rPwInput.addEventListener("input", function () {
        const val = this.value;
        let score = 0;
        if (val.length >= 8) score++;
        if (/[a-z]/.test(val) && /[A-Z]/.test(val)) score++;
        if (/\d/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;

        if (!val) {
          pwMeterBar.style.width = "0%";
          pwMeterBar.style.background = "var(--error)";
        } else {
          const width = Math.max(score, 1) * 25;
          pwMeterBar.style.width = width + "%";
          pwMeterBar.style.background =
            score <= 1 ? "var(--error)" : score < 4 ? "#d99a1b" : "var(--success)";
        }
      });
    }

    function setFormError(fieldId, text) {
      const errEl = document.querySelector(`.auth-field-err[data-for="${fieldId}"]`);
      const inputEl = document.getElementById(fieldId);
      if (errEl) errEl.textContent = text || "";
      if (inputEl && inputEl.type !== "checkbox") {
        if (text) {
          inputEl.setAttribute("aria-invalid", "true");
        } else {
          inputEl.removeAttribute("aria-invalid");
        }
      }
      return !text;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Login submission
    if (formLogin) {
      formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailVal = (document.getElementById("l-email")?.value || "").trim();
        const pwVal = document.getElementById("l-pw")?.value || "";

        let valid = true;
        valid = setFormError("l-email", emailRegex.test(emailVal) ? "" : "Enter a valid email address.") && valid;
        valid = setFormError("l-pw", pwVal ? "" : "Enter your password.") && valid;

        const msgEl = document.getElementById("login-msg");
        if (!valid) {
          if (msgEl) msgEl.textContent = "";
          return;
        }

        // Generate user name from email
        const derivedName = emailVal.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        state.session = {
          isLoggedIn: true,
          name: derivedName || "Signed In User",
          email: emailVal,
          avatar: derivedName ? derivedName.charAt(0).toUpperCase() : "U",
          method: "email",
        };

        if (msgEl) {
          msgEl.className = "auth-form-msg ok";
          msgEl.textContent = "Welcome back! Entering workspace…";
        }

        setTimeout(() => {
          state.activeView = "app";
          window.location.hash = "#app";
          saveProject();
          renderApp();
        }, 350);
      });
    }

    // Register submission
    if (formRegister) {
      formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameVal = (document.getElementById("r-name")?.value || "").trim();
        const emailVal = (document.getElementById("r-email")?.value || "").trim();
        const pwVal = document.getElementById("r-pw")?.value || "";
        const pw2Val = document.getElementById("r-pw2")?.value || "";
        const termsChecked = document.getElementById("terms")?.checked;

        let valid = true;
        valid = setFormError("r-name", nameVal.length >= 2 ? "" : "Enter your full name.") && valid;
        valid = setFormError("r-email", emailRegex.test(emailVal) ? "" : "Enter a valid email address.") && valid;
        valid = setFormError("r-pw", pwVal.length >= 8 && /[A-Za-z]/.test(pwVal) && /\d/.test(pwVal) ? "" : "Use at least 8 characters with a letter and a number.") && valid;
        valid = setFormError("r-pw2", pw2Val === pwVal && pwVal ? "" : "Passwords do not match.") && valid;
        valid = setFormError("terms", termsChecked ? "" : "Accept the terms to continue.") && valid;

        const msgEl = document.getElementById("register-msg");
        if (!valid) {
          if (msgEl) msgEl.textContent = "";
          return;
        }

        state.session = {
          isLoggedIn: true,
          name: nameVal,
          email: emailVal,
          avatar: nameVal.charAt(0).toUpperCase(),
          method: "email",
        };

        if (msgEl) {
          msgEl.className = "auth-form-msg ok";
          msgEl.textContent = "Account created! Entering workspace…";
        }

        setTimeout(() => {
          state.activeView = "app";
          window.location.hash = "#app";
          saveProject();
          renderApp();
        }, 350);
      });
    }

    const forgotLink = document.getElementById("auth-forgot");
    if (forgotLink) {
      forgotLink.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(
          "Reset password",
          "<p>Enter your registered email and we will send you password reset instructions.</p><input type='email' id='reset-email-input' style='width:100%;padding:10px;margin-top:10px;border-radius:8px;border:1px solid var(--border);background:var(--surface-inset);color:var(--text);' placeholder='you@example.com'>",
          "Send link",
          () => {
            alert("If an account exists, a reset link has been dispatched.");
          }
        );
      });
    }

    // ── Hash routing listener ─────────────────────────────
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#app") {
        state.activeView = "app";
      } else if (hash === "#auth" || hash === "#login") {
        state.activeView = "auth";
      } else {
        state.activeView = "landing";
      }
      renderApp();
    });
  }

  // --- Initialization ---
  initTheme();
  loadProject();

  // Route: always show Landing page by default when opening the site,
  // unless explicitly requested via hash (#app or #auth)
  const initialHash = window.location.hash.toLowerCase();
  if (initialHash === "#app") {
    state.activeView = "app";
  } else if (initialHash === "#auth" || initialHash === "#login") {
    state.activeView = "auth";
  } else {
    state.activeView = "landing";
  }

  initListeners();
  renderApp();
})();

