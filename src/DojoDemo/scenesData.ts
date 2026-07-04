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
    num: 2,
    video: "scene-02-login.mp4",
    audio: "voiceover/scene-02-login.mp3",
    title: "Instant Roster Login",
    description: "Passwordless profile-based search and login designed specifically for fast, friction-free employee identification on the production floor."
  },
  {
    num: 3,
    video: "scene-03-navigation.mp4",
    audio: "voiceover/scene-03-navigation.mp3",
    title: "Command Center Navigation",
    description: "Sidebar navigation groups key operational modules. Top breadcrumb trails keep supervisors oriented across sections."
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
    num: 9,
    video: "scene-09-game-library.mp4",
    audio: "voiceover/scene-09-game-library.mp3",
    title: "Mini-DOJO Game Library",
    description: "Renders available gamified training modules mapping to core competencies to transform skill development into active learning."
  },
  {
    num: 10,
    video: "scene-10-game-play.mp4",
    audio: "voiceover/scene-10-game-play.mp3",
    title: "Gamified 5S Sort Game",
    description: "Interactive drag-and-drop game for sorting factory floor items under time pressure to test real operational knowledge."
  },
  {
    num: 11,
    video: "scene-11-score.mp4",
    audio: "voiceover/scene-11-score.mp3",
    title: "Training Results Feedback",
    description: "Gameplay scores are automatically recorded on the backend to award experience points and update skill levels."
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
    num: 14,
    video: "scene-14-rejections.mp4",
    audio: "voiceover/scene-14-rejections.mp3",
    title: "Internal Rejections Audit",
    description: "Track quality issues caught internally by department, process step, defect type, and assigned disposal action."
  },
  {
    num: 15,
    video: "scene-15-actionplans.mp4",
    audio: "voiceover/scene-15-actionplans.mp3",
    title: "Corrective Action Plans",
    description: "Track continuous improvement tasks with owners, progress sliders, priority levels, and dynamic status badges."
  },
  {
    num: 16,
    video: "scene-16-fab-menu.mp4",
    audio: "voiceover/scene-16-fab-menu.mp3",
    title: "Floating Speed-Dial Menu",
    description: "Floating Action Button fanning out into seven instant entry options for rapid, on-the-floor data logging."
  },
  {
    num: 17,
    video: "scene-17-quick-attendance.mp4",
    audio: "voiceover/scene-17-quick-attendance.mp3",
    title: "Quick Attendance Logging",
    description: "Zero-navigation modal to log shift attendance, instantly recalculating dashboard coverage and absenteeism metrics."
  },
  {
    num: 18,
    video: "scene-18-employees.mp4",
    audio: "voiceover/scene-18-employees.mp3",
    title: "Employee Roster Hub",
    description: "Comprehensive workforce roster managing employee codes, departments, designations, shifts, and active status."
  },
  {
    num: 19,
    video: "scene-19-movements.mp4",
    audio: "voiceover/scene-19-movements.mp3",
    title: "Employee Career Movements",
    description: "Auditable history logs tracking employee joins, resignations, department transfers, and promotions."
  },
  {
    num: 20,
    video: "scene-20-training-modules.mp4",
    audio: "voiceover/scene-20-training-modules.mp3",
    title: "Training Master Taxonomy",
    description: "Manage learning modules, course durations in hours, passing score thresholds, and department training plans."
  },
  {
    num: 21,
    video: "scene-21-training-plans.mp4",
    audio: "voiceover/scene-21-training-plans.mp3",
    title: "Training Plans Scheduling",
    description: "Define and schedule target training hours per department by month to track adherence percentages."
  },
  {
    num: 22,
    video: "scene-22-training-attempts.mp4",
    audio: "voiceover/scene-22-training-attempts.mp3",
    title: "Training Attempt Records",
    description: "Verifiable log of all module attempts, showing scores, pass/fail status, dates, and attempt sequences."
  },
  {
    num: 23,
    video: "scene-23-arv.mp4",
    audio: "voiceover/scene-23-arv.mp3",
    title: "Advanced AR/VR Simulators",
    description: "Immersive training modules for high-risk operations, safety audits, and complex material handling logistics."
  },
  {
    num: 24,
    video: "scene-24-utilization.mp4",
    audio: "voiceover/scene-24-utilization.mp3",
    title: "Workforce Hour Utilization",
    description: "Log daily available, utilized, and downtime loss hours by department to measure overall production efficiency."
  },
  {
    num: 25,
    video: "scene-25-manpower-plan.mp4",
    audio: "voiceover/scene-25-manpower-plan.mp3",
    title: "Manpower Allocation Targets",
    description: "Set required headcount and safety buffer targets per shift to define the dashboard's comparison baselines."
  },
  {
    num: 26,
    video: "scene-26-employee-skills.mp4",
    audio: "voiceover/scene-26-employee-skills.mp3",
    title: "Employee Skill Assignments",
    description: "Map specific competencies to employees, establishing their baseline levels, scores, and experience points."
  },
  {
    num: 27,
    video: "scene-27-skills-admin.mp4",
    audio: "voiceover/scene-27-skills-admin.mp3",
    title: "Centralized Skills Taxonomy",
    description: "Manage the master classification list of skill names and categories across the entire factory platform."
  },
  {
    num: 28,
    video: "scene-28-attendance.mp4",
    audio: "voiceover/scene-28-attendance.mp3",
    title: "Attendance Records Audit",
    description: "Dedicated historical log for searching, updating, or deleting logged attendance sheets and timestamps."
  },
  {
    num: 29,
    video: "scene-29-overtime.mp4",
    audio: "voiceover/scene-29-overtime.mp3",
    title: "Overtime Records Approvals",
    description: "Track and approve extra shift hours by operator to manage labor costs and prevent plant floor burnout."
  },
  {
    num: 30,
    video: "",
    audio: "voiceover/scene-30-outro.mp3",
    title: "DOJO 2.0 Command Center",
    description: "Connected, visual, and intelligence-driven manufacturing operations. Build a smarter factory workforce today."
  }
];
