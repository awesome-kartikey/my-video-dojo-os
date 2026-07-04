export interface SceneData {
  num: number;
  video: string;
  audio: string;
  title: string;
  description: string;
}

export const SCENES_DATA: SceneData[] = [
  {
    num: 1,
    video: "scene-01-landing.mp4",
    audio: "voiceover/scene-01-landing.mp3",
    title: "DOJO 2.0 Overview",
    description: "Industry 4.0 workforce command center unifying manpower planning, skill matrix development, gamified training, and quality metrics tracking."
  },
  {
    num: 4,
    video: "scene-04-kpis.mp4",
    audio: "voiceover/scene-04-kpis.mp3",
    title: "Manpower Dashboard KPIs",
    description: "Direct visual tracking of shift coverages, absenteeism rates, employee attrition metrics, and overall workforce utilization indexes."
  },
  {
    num: 5,
    video: "scene-05-charts.mp4",
    audio: "voiceover/scene-05-charts.mp3",
    title: "Analytical Trends & Charts",
    description: "Visualizes daily overtime trends, attrition reasons, department headcount splits, and lists live operational alerts."
  },
  {
    num: 6,
    video: "scene-06-drilldown.mp4",
    audio: "voiceover/scene-06-drilldown.mp3",
    title: "Detail Metric Drilldowns",
    description: "Click any dashboard chart to view an expanded breakdown modal with metric definitions and underlying data formulas."
  },
  {
    num: 7,
    video: "scene-07-skillmatrix.mp4",
    audio: "voiceover/scene-07-skillmatrix.mp3",
    title: "Interactive Skill Matrix",
    description: "Visual, color-coded grid representing factory-wide operator competencies from Level 1 (Beginner) to Level 5 (Expert)."
  },
  {
    num: 8,
    video: "scene-08-skill-assessment.mp4",
    audio: "voiceover/scene-08-skill-assessment.mp3",
    title: "Skill Assessment Update",
    description: "Quickly update individual skill levels using an interactive slider. Changes propagate across dashboards instantly."
  },
  {
    num: 12,
    video: "scene-12-management.mp4",
    audio: "voiceover/scene-12-management.mp3",
    title: "Executive Management Control",
    description: "High-level overview of compliance scores, customer defect trends, training adherence, and PDF report downloads."
  },
  {
    num: 13,
    video: "scene-13-defects-crud.mp4",
    audio: "voiceover/scene-13-defects-crud.mp3",
    title: "Customer Defects Logging",
    description: "Searchable and sortable quality logging system. Easily add, edit, or delete customer-reported defect incidents."
  },
  {
    num: 15,
    video: "scene-15-actionplans.mp4",
    audio: "voiceover/scene-15-actionplans.mp3",
    title: "Corrective Action Plans",
    description: "Track continuous improvement tasks with owners, progress sliders, priority levels, and dynamic status badges."
  },
  {
    num: 17,
    video: "scene-17-quick-attendance.mp4",
    audio: "voiceover/scene-17-quick-attendance.mp3",
    title: "Quick Attendance Logging",
    description: "Zero-navigation modal to log shift attendance, instantly recalculating dashboard coverage and absenteeism metrics."
  },
  {
    num: 30,
    video: "",
    audio: "voiceover/scene-30-outro.mp3",
    title: "DOJO 2.0 Command Center",
    description: "Connected, visual, and intelligence-driven manufacturing operations. Build a smarter factory workforce today."
  }
];
