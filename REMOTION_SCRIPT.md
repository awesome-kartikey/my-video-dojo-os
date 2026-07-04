# DOJO 2.0 — Remotion Product Demo Script

> Target: 30 FPS · 2.5 words/sec VO · ~5,910 total frames (~3.3 min)

---

| Scene # | Duration (Frames) | Narrator Voiceover (VO) | Visual Execution & Animations | Remotion & React Component Mapping |
| :--- | :--- | :--- | :--- | :--- |
| **1** | 150 (5s) | "DOJO 2.0 — the Industry 4.0 platform for manufacturing workforce management, skill development, and operational excellence." | Dark gradient background. "DOJO 2.0" wordmark scales in over 20 frames (0.8→1). Subtitle fades in at frame 20. Four feature icons (Manpower, Workshops, AR/VR, Management) slide up staggered, one every 8 frames starting at frame 45. Subtle cyan radial glow behind text. | `<Sequence durationInFrames={150}>`. `<Background>` dark gradient. `<AnimatedTitle>` with interpolate(frame, [0,20], [0.8,1]) scale. `<FeatureCard>` staggered with index * 8 delay. `<Audio>` voiceover. Hard cut to Scene 2. |
| **2** | 300 (10s) | "Manufacturing leaders face three critical challenges: they lack real-time visibility into workforce capacity, they struggle to track and develop employee skills, and quality issues slip through without clear corrective action. Spreadsheets and siloed tools can't keep up." | Screen recording of `/login` page fading in. Cursor types "Raj" in the search field character by character (simulated or real). Employee cards appear below. Cursor clicks "Rajesh Kumar". Brief loading spinner, then dashboard loads. | `<Sequence durationInFrames={300}>`. `<Video>` src=staticFile("videos/scene-02-login.mp4") with fade-in. Or `<Img>` screenshot sequence. Crossfade entrance (interpolate opacity 0→1 over 15 frames). Hard cut to Scene 3. |
| **3** | 240 (8s) | "DOJO 2.0 brings everything together in one unified dashboard. The collapsible sidebar organizes navigation into five logical groups — Overview, Employees, Planning, Quality, and Training — so you're never more than one click from any module." | Screen recording of dashboard shell. Cursor hovers over collapsed sidebar icons → sidebar expands showing labels. Cursor clicks through sidebar items: Dashboard, Skill Matrix, DOJO Workshops, Employees. Breadcrumb updates with each click. Theme toggle clicked to show light mode briefly. | `<Sequence durationInFrames={240}>`. `<Video>` of screen recording. Optionally overlay an animated `SidebarMock` component (positioned absolutely) if using static screenshots. Hard cut to Scene 4. |
| **4** | 360 (12s) | "The Manpower Dashboard is your operational command center. At a glance, you see shift coverage across A, B, and C shifts with required versus actual headcount. Absenteeism trends, attrition rates, and workforce utilization gauges give you the full picture — all updated in real time." | Screen recording of `/manpower` page. Cursor sweeps across the KPI card row: Shift A (24/28), Shift B, Shift C, Absenteeism 3.2% with ↓ arrow, Attrition 8.7%. Cursor hovers over each gauge card: Coverage 86%, Utilization 74%, Today's OT 42h. Date picker is clicked and a different date is selected → KPIs update. | `<Sequence durationInFrames={360}>`. `<Video>` of screen recording. If using static image, split into 2-3 sequential screenshots with subtle zoom (interpolate scale 1→1.02 over 120 frames each). Hard cut to Scene 5. |
| **5** | 360 (12s) | "Beyond the KPIs, rich charts reveal deeper trends. The absenteeism line chart shows daily fluctuations. The attrition trend tracks workforce stability over twelve months. A pie chart breaks down attrition by reason. Department headcounts, overtime trends, training scores — every metric tells a story." | Screen recording scrolling down the dashboard. Cursor hovers over each chart type in sequence: Absenteeism Trend (line chart), Attrition Reasons (pie chart — hover pie segment for tooltip), Department Headcounts (bar chart), Overtime Trend (line chart), Training Scores by Module (bar chart). Scroll further to show Live Operational Alerts feed at bottom. | `<Sequence durationInFrames={360}>`. `<Video>` of scrolling screen recording. Alternatively, 4-5 sequential static chart screenshots, each with a slow pan (interpolate translateY -10→0 over 60 frames). Hard cut to Scene 6. |
| **6** | 270 (9s) | "Need to dive deeper? Click the expand icon on any chart to open a full-screen modal with larger axes and richer detail. The info button explains exactly what each metric measures and how it's calculated — no more guessing what the numbers mean." | Screen recording: Cursor clicks the expand icon (⛶) on the Absenteeism Trend chart. Dark modal overlay animates in. Full-size chart appears. Cursor clicks the info icon (ℹ) — a side panel slides in with metric description: "Absenteeism Rate: Percentage of scheduled workforce absent over the selected period." Cursor clicks outside modal to close. | `<Sequence durationInFrames={270}>`. `<Video>` of the drill-down interaction. On close, a quick fade-out (10 frames). Hard cut to Scene 7. |
| **7** | 300 (10s) | "The Skill Matrix visualizes your entire workforce's competency at a glance. Levels are color-coded from 1, Beginner in red, to 5, Expert in cyan. Search by employee name, filter by skill category, or sort any column to identify gaps and strengths across your teams." | Screen recording of `/skills` page. Cursor hovers over cells of each color level: red (1), orange (2), yellow (3), green (4), cyan (5). Cursor clicks search bar, types "Raj" → table filters to show matching employees. Cursor clicks Category dropdown, selects "Quality" → table filters. Cursor clicks a column header → column sorts ascending, then descending. | `<Sequence durationInFrames={300}>`. `<Video>` of skill matrix interactions. For screenshot approach: show table, then overlay animated filter/search elements. Hard cut to Scene 8. |
| **8** | 210 (7s) | "Updating a skill is just as easy. Click any cell, assess the employee's level on a scale of 1 to 5, and save. The matrix updates instantly, and the change flows through to the dashboard analytics." | Screen recording: Cursor clicks a skill cell (e.g., Rajesh K. / 5S at level 3). Level Modal opens. Cursor drags slider from 3 to 4. Clicks "Save". Toast notification: green "Skill updated!" The table cell re-renders with level 4 badge (now green). | `<Sequence durationInFrames={210}>`. `<Video>` of assessment interaction. Toast animation overlay (optional). Hard cut to Scene 9. |
| **9** | 270 (9s) | "Mini-DOJO Workshops take skill development further with fifteen interactive training games. Each game maps to a real manufacturing skill — from 5S sorting and CNC sequence planning to defect spotting and gauge calibration. Employees play, learn, and level up." | Screen recording of `/minidojo` page. Top section shows "Your Skill Levels" with employee badges. Game grid shows cards with titles, skill mappings, and Play buttons. Cursor scrolls through the grid slowly. Cursor hovers over "5S Sort" card — card highlights. Cursor clicks "Play" on 5S Sort. | `<Sequence durationInFrames={270}>`. `<Video>` of game library. For screenshot: game grid with hover highlight effect (interpolate border opacity). Hard cut to Scene 10. |
| **10** | 360 (12s) | "Here's how a game works. The 5S Sort game presents items that need to be categorized into Sort, Set in Order, Shine, Standardize, and Sustain. A 45-second timer adds urgency. Drag each item into the correct bin — correct answers increment your score. It's fast, engaging, and effective." | Screen recording of 5S Sort game. Timer at top counting down from 45. Items displayed: "Wrench", "Oil can", "Safety manual", "Floor marker", etc. Cursor drags "Wrench" to "Set in Order" bin — correct! Score increments with animation. Drags "Oil can" to "Shine" — correct. Continues for several items. Timer hits 0. Result screen shows score. | `<Sequence durationInFrames={360}>`. `<Video>` of full game interaction. If game screen recording is short, loop or slow-mo. Hard cut to Scene 11. |
| **11** | 180 (6s) | "When the game ends, the score is automatically submitted. DOJO 2.0 creates a training attempt record, calculates experience points, and updates the employee's skill level — all in one seamless operation." | Screen recording: Game result screen fades. Back at `/minidojo` game list. Toast notification appears: "Skill updated! +15 XP". The skill level badge for 5S has changed. Optional: navigate to `/training-attempts` to show the new attempt row in the table. | `<Sequence durationInFrames={180}>`. `<Video>` of post-game flow. Toast overlay and badge update animation. Hard cut to Scene 12. |
| **12** | 360 (12s) | "For leadership, the Management Review dashboard consolidates everything into an executive summary. The compliance score gauge gives a single health metric. Customer defect and internal rejection trends are charted side by side. Training adherence and action plan progress complete the picture — board-report ready with one click." | Screen recording of `/management` page. GSAP staggered entrance visible (cards animate in one by one). Cursor hovers over Executive Summary card. Hovers over Compliance Score gauge (87%). Cursor sweeps across Customer Defect Trend chart, then Internal Rejection Trend. Hovers over Defect Severity pie chart segments. Hovers over Training Adherence progress bar (78%). Cursor clicks "Download Board Report (PDF)" — export triggers. | `<Sequence durationInFrames={360}>`. `<Video>` of management dashboard. For screenshot approach: show the page with staggered entrance simulated by sequential opacity animations. Hard cut to Scene 13. |
| **13** | 360 (12s) | "Quality tracking is thorough and traceable. The Customer Defects page gives you a searchable, sortable table of every reported issue. Create a new defect record, edit an existing one, or delete resolved entries. Each defect can be linked to an action plan for full corrective lifecycle tracking." | Screen recording of `/customer-defects`. Cursor clicks search bar, types "Auto" → table filters. Cursor clicks "+ Add Defect". Modal form opens. Cursor fills each field: Customer "NewCorp", Product "Bracket A", Part Number "BR-001", Defect Type "Surface Scratch" (from dropdown), Quantity "5", Severity "Major". Clicks Save. Toast appears. New row in table. Cursor clicks edit on an existing row, changes quantity, saves. Cursor clicks delete on a row, confirms — row removed. | `<Sequence durationInFrames={360}>`. `<Video>` of full CRUD cycle. Form fill can be real-time or fast-forwarded. Hard cut to Scene 14. |
| **14** | 180 (6s) | "Internal rejections follow the same pattern — log the issue by department and process, track quantities and disposal actions. Every rejection feeds into the management dashboard trends automatically." | Screen recording of `/internal-rejections`. Brief table view. Cursor clicks "+ Add", fills a rejection record (Department: "Assembly", Process: "Welding", Defect: "Porosity", Quantity: "3", Disposal: "Rework"). Saves. Toast. | `<Sequence durationInFrames={180}>`. `<Video>` of rejection CRUD. Hard cut to Scene 15. |
| **15** | 270 (9s) | "Action Plans close the loop. Each plan has an owner, target date, priority level, and a progress bar. As work progresses, the status moves from Open to In Progress to Completed. These plans are surfaced on both the quality pages and the management dashboard." | Screen recording of `/action-plans`. Table shows Title, Category, Owner, Target Date, Progress bars, Status badges, Priority. Cursor clicks "+ Add Action Plan". Fills form: Title "Reduce surface scratches on Bracket A", Category "Quality", Owner "Rajesh K.", Target Date next Friday, Priority "High". Saves. New row appears. Cursor clicks edit on a plan, sets progress to 75% — progress bar updates visually. Status badge changes. | `<Sequence durationInFrames={270}>`. `<Video>` of action plan lifecycle. Progress bar animation (interpolate width). Hard cut to Scene 16. |
| **16** | 270 (9s) | "For supervisors on the go, the Quick-Add floating action button is available from any dashboard page. Click the plus button and a speed-dial menu fans out with seven data entry forms — Attendance, Overtime, Movement, Employee, Defects, Rejections, and Action Plans." | Screen recording from `/manpower`. Cursor moves to bottom-right FAB (+). Cursor clicks FAB — circular speed-dial menu expands with 7 icon-labeled options. Cursor hovers over each: Quick Attendance, Quick Overtime, Quick Movement, Quick Employee, Quick Defect, Quick Rejection, Quick Action Plan. Cursor clicks "Quick Attendance". | `<Sequence durationInFrames={270}>`. `<Video>` of FAB interaction. For screenshot: overlay animated FAB menu with staggered radial appearance (interpolate opacity + translate for each item). Hard cut to Scene 17. |
| **17** | 270 (9s) | "The Quick Attendance form opens as a modal — no page navigation required. Select the employee from a searchable dropdown, pick the date and shift, set the status, and save. The entry is recorded instantly and the manpower dashboard cache is automatically refreshed." | Screen recording: Quick Attendance modal open. Cursor clicks employee dropdown, types "Raj" → selects Rajesh Kumar. Date defaults to today. Cursor selects shift "A". Sets status "Present". Sets in-time and out-time. Clicks Save. Toast: green "Attendance recorded". Modal closes. Cursor navigates to `/attendance` to show the new record in the table. | `<Sequence durationInFrames={270}>`. `<Video>` of quick-add form flow. Modal open/close animation. Hard cut to Scene 18. |
| **18** | 300 (10s) | "The Employee Management hub gives you full control over your workforce roster. Search and filter employees, add new hires, update designations, and manage employee movements — transfers, promotions, and resignations — all with full history tracking." | Screen recording of `/employees`. Table with search bar. Cursor searches by name. Clicks "+ Add Employee". Modal form: fills Emp Code "EMP-042", Name "Vikram Singh", Department "CNC", Designation "Operator", Status "Active", Shift "B", Plant "Plant 1". Saves. New row. Cursor navigates to `/employee-movements`. Clicks "+ Add Movement". Selects employee, Movement Type "Promoted", Reason "Promoted to Senior Operator", date. Saves. | `<Sequence durationInFrames={300}>`. `<Video>` of employee management + movement flow. Hard cut to Scene 19. |
| **19** | 300 (10s) | "Training management is fully integrated. Define training modules with passing scores, schedule training plans by month and department, and review every attempt with scores and pass/fail results. The entire training lifecycle — from module creation to skill verification — lives here." | Screen recording of `/training-modules`. Brief table view. Switch to `/training-plans` — show table and adherence chart. Cursor hovers over chart. Switch to `/training-attempts` — filter by Passed/Failed, show recent attempt from game play. | `<Sequence durationInFrames={300}>`. `<Video>` montage of three training pages. 100 frames each. Hard cut to Scene 20. |
| **20** | 210 (7s) | "Looking ahead, DOJO 2.0 supports next-generation training through AR and VR simulators for critical process training, material handling, and fire safety — bringing immersive, risk-free practice to the shop floor." | Screen recording of `/simulators`. Three info cards: Critical Process Training (VR) with headset icon, Material Handling (AR) with glasses icon, Fire & Safety Training (VR) with flame icon. Cursor hovers over each card. Each card has a "Learn More" button (placeholder). Clean, minimal page. | `<Sequence durationInFrames={210}>`. `<Video>` of simulators page. Cards can have hover scale effect (1→1.03). Hard cut to Scene 21. |
| **21** | 240 (8s) | "DOJO 2.0 connects the shop floor to the boardroom. Operational dashboards, skill development, interactive training, quality tracking, and executive reporting — all in one platform. Build a smarter workforce. Contact your DOJO 2.0 representative to schedule a personalized walkthrough." | Dark gradient background. DOJO 2.0 logo scales in. Tagline "Build a Smarter Workforce" fades in below. Six feature items fade in staggered as a 3x2 grid: Operational Dashboards, Skill Matrix, DOJO Workshops, Management Review, Quick Data Entry, AR/VR Training. All elements hold to end. | `<Sequence durationInFrames={240}>`. `<Background>` dark gradient. `<AnimatedTitle>` with scale-in. Feature items with staggered opacity (interpolate, delay = index * 8). `<Audio>` voiceover. Final frame holds. Fade to black over last 15 frames (interpolate opacity 1→0). |

---

## Appendix A: Audio File Map

| Scene | Audio File | Est. Duration |
| :--- | :--- | :--- |
| 1 | `voiceover/dojo-demo/scene-01-title.mp3` | 5s |
| 2 | `voiceover/dojo-demo/scene-02-problem.mp3` | 10s |
| 3 | `voiceover/dojo-demo/scene-03-solution.mp3` | 8s |
| 4 | `voiceover/dojo-demo/scene-04-login.mp3` | 7s |
| 5 | `voiceover/dojo-demo/scene-05-navigation.mp3` | 9s |
| 6 | `voiceover/dojo-demo/scene-06-kpis.mp3` | 12s |
| 7 | `voiceover/dojo-demo/scene-07-charts.mp3` | 12s |
| 8 | `voiceover/dojo-demo/scene-08-drilldown.mp3` | 9s |
| 9 | `voiceover/dojo-demo/scene-09-skillmatrix.mp3` | 10s |
| 10 | `voiceover/dojo-demo/scene-10-assessment.mp3` | 7s |
| 11 | `voiceover/dojo-demo/scene-11-gamelibrary.mp3` | 9s |
| 12 | `voiceover/dojo-demo/scene-12-gameplay.mp3` | 12s |
| 13 | `voiceover/dojo-demo/scene-13-score.mp3` | 6s |
| 14 | `voiceover/dojo-demo/scene-14-management.mp3` | 12s |
| 15 | `voiceover/dojo-demo/scene-15-defects.mp3` | 12s |
| 16 | `voiceover/dojo-demo/scene-16-rejections.mp3` | 6s |
| 17 | `voiceover/dojo-demo/scene-17-actionplans.mp3` | 9s |
| 18 | `voiceover/dojo-demo/scene-18-quickadd.mp3` | 9s |
| 19 | `voiceover/dojo-demo/scene-19-employees.mp3` | 10s |
| 20 | `voiceover/dojo-demo/scene-20-training.mp3` | 10s |
| 21 | `voiceover/dojo-demo/scene-21-arvr.mp3` | 7s |
| 22 | `voiceover/dojo-demo/scene-22-outro.mp3` | 8s |

## Appendix B: Transition Map

| From → To | Transition | Frames |
| :--- | :--- | :--- |
| All scenes | Hard cut | 0 |
| Scene 21 → End | Fade to black | 15 |

## Appendix C: Data Flow for Real Recordings

When substituting real screen recordings for mock components:

```tsx
// In each scene's Sequence:
<Sequence durationInFrames={360}>
  <Video src={staticFile("videos/scene-06-kpis.mp4")} />
  <Audio src={staticFile("voiceover/dojo-demo/scene-06-kpis.mp3")} />
</Sequence>
```

For static screenshots with zoom/pan effect:

```tsx
const frame = useCurrentFrame();
const scale = interpolate(frame, [0, 360], [1, 1.03], {
  extrapolateRight: "clamp",
  easing: Easing.bezier(0.16, 1, 0.3, 1),
});
const translateY = interpolate(frame, [0, 360], [0, -10], {
  extrapolateRight: "clamp",
});

return (
  <Img
    src={staticFile("screenshots/manpower-kpis.png")}
    style={{ scale, translate: `0 ${translateY}px` }}
  />
);
```
