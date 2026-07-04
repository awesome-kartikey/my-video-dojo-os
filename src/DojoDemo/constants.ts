export const FPS = 30;

export const SCENE = {
  welcome: { dur: 30 * FPS, label: "Welcome" },
  login: { dur: 30 * FPS, label: "Login" },
  navigation: { dur: 45 * FPS, label: "Dashboard Navigation" },
  manpower: { dur: 90 * FPS, label: "Manpower Dashboard" },
  drilldown: { dur: 45 * FPS, label: "Drill-Down Analysis" },
  skillMatrix: { dur: 60 * FPS, label: "Skill Matrix" },
  minidojo: { dur: 75 * FPS, label: "Mini-DOJO Workshops" },
  gameShowcase: { dur: 45 * FPS, label: "Game Variety Showcase" },
  management: { dur: 60 * FPS, label: "Management Review" },
  quality: { dur: 60 * FPS, label: "Quality & Action Plans" },
  quickAdd: { dur: 45 * FPS, label: "Quick-Add Data Entry" },
  employees: { dur: 45 * FPS, label: "Employee Management" },
  training: { dur: 45 * FPS, label: "Training Management" },
  arvr: { dur: 30 * FPS, label: "AR/VR Simulators" },
  closing: { dur: 20 * FPS, label: "Closing" },
} as const;

export const TOTAL_FRAMES = Object.values(SCENE).reduce(
  (sum, s) => sum + s.dur,
  0,
);

export const ACCENT = "#22d3ee";
export const ACCENT_DIM = "#0891b2";
export const BG_FROM = "#0f172a";
export const BG_TO = "#020617";
export const CARD_BG = "rgba(30, 41, 59, 0.8)";
export const TEXT_MAIN = "#f1f5f9";
export const TEXT_MUTED = "#94a3b8";

export const FEATURES = [
  { icon: "👥", label: "Manpower Planning" },
  { icon: "🎮", label: "DOJO Workshops" },
  { icon: "🥽", label: "AR/VR Simulators" },
  { icon: "📊", label: "Management Review" },
];

export const GAMES = [
  { title: "5S Sort", skill: "5S", icon: "📦" },
  { title: "Defect Spotter", skill: "Quality Inspection", icon: "🔍" },
  { title: "CNC Sequence", skill: "CNC Operations", icon: "⚙️" },
  { title: "Gauge Calibration", skill: "Measurement", icon: "📏" },
];

export const NAV_SECTIONS = [
  { section: "Overview", items: ["Dashboard", "Skill Matrix", "DOJO Workshops"] },
  { section: "Employees", items: ["Roster", "Attendance", "Movements"] },
  { section: "Quality", items: ["Defects", "Rejections", "Action Plans"] },
  { section: "Training", items: ["Modules", "Plans", "Attempts"] },
] as const;
