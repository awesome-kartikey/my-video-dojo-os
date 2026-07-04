# DOJO 2.0 — Screen Recording Shooting Script

> Record every page, chart, table, and CRUD operation for the product demo video.

---

## Setup

### Prerequisites
- App running: `npm run dev` in `dojo-os-app/`
- Browser: Chrome at **1280×720** (windowed or DevTools device mode)
- Screen recorder: OBS, CleanShot, Screen Studio, or QuickTime — record at **30fps**
- Login as any employee (e.g., "Rajesh Kumar") before recording dashboards

### Recording Tips
- **Shot length**: Hold each interaction for 2–3 seconds of stillness before/after clicking
- **Cursor**: Show cursor clicks — record with cursor visible
- **Audio**: Record VO separately. The screen recording is purely visual
- **One take per scene**: Errors can be edited out; don't over-polish
- **Naming convention**: Save clips as `scene-XX-description.mp4`

---

## Scene-by-Scene Shooting Guide

---

### SCENE 1: Landing Page Hook

**Route**: `/` (not logged in, full page)

| Action | Details |
|--------|---------|
| Open browser at `localhost:3000` | Full 1280×720 viewport |
| Hold for 3 seconds | Show hero — "DOJO 2.0" wordmark, tagline |
| Slow scroll (2s) | Reveal 4 feature cards: Manpower Planning, DOJO Workshops, AR/VR Simulators, Management Review |
| Hold for 3 seconds | Let the 4 cards sit on screen |
| Slow scroll (1s) | Show "About DOJO 2.0" section at bottom |

**Clip**: `scene-01-landing.mp4`

---

### SCENE 2: Employee Login

**Route**: `/login`

| Action | Details |
|--------|---------|
| Navigate to `/login` | Full page |
| Click search input | Cursor clicks in the "Search employee by name or code..." field |
| Type "Raj" slowly | One character at a time — show autocomplete filtering |
| Click "Rajesh Kumar" | Cursor selects the employee card |
| Wait for redirect | Dashboard loads automatically |

**Clip**: `scene-02-login.mp4`

---

### SCENE 3: Dashboard Shell & Navigation

**Route**: `/manpower` (after login)

| Action | Details |
|--------|---------|
| Land on Manpower Dashboard | Hold for 2s to show the full layout |
| **Hover sidebar** | Move cursor to the left sidebar icons — show it expand from icon-only to labeled |
| Click sidebar items slowly | Navigate through each section: |
| | → Click **Skill Matrix** (wait 2s) |
| | → Click **DOJO Workshops** (wait 2s) |
| | → Click **Employees** (wait 2s) |
| | → Click back to **Dashboard** / Manpower |
| **Toggle theme** | Click the sun/moon icon in header — show light mode switch |
| **Breadcrumb** | Click a few items to show breadcrumb update |

**Clip**: `scene-03-navigation.mp4`

---

### SCENE 4: Manpower Dashboard — KPI Row

**Route**: `/manpower`

| Action | Details |
|--------|---------|
| Full dashboard view | Hold for 3s |
| **Call out each KPI card** with cursor: | |
| → Shift A (Required vs Actual) | 2s hover |
| → Shift B | 2s hover |
| → Shift C | 2s hover |
| → Absenteeism % + trend arrow | 2s hover |
| → Attrition % | 2s hover |
| → Coverage gauge | 2s hover |
| → Utilization gauge | 2s hover |
| → Today's OT gauge | 2s hover |
| Move cursor across the date picker | Click date input, pick a different date |
| Click "PDF Export" button | Show download trigger |

**Clip**: `scene-04-kpis.mp4`

---

### SCENE 5: Manpower Dashboard — Charts & Trends

**Route**: `/manpower`

| Action | Details |
|--------|---------|
| Hover over **Absenteeism Trend line chart** | 3s — let the line and data points be visible |
| Hover over **Attrition Trend** line chart | 3s |
| Hover over **Attrition Reasons pie chart** | 3s — hover on a pie segment for tooltip |
| Hover over **Department Headcounts bar chart** | 3s |
| Hover over **Overtime Trend** line chart | 3s |
| Hover over **Training Scores by Module** | 3s |
| Scroll down | Show **Live Operational Alerts** feed at the bottom |

**Clip**: `scene-05-charts.mp4`

---

### SCENE 6: Drill-Down & Chart Modal

**Route**: `/manpower`

| Action | Details |
|--------|---------|
| Click the **expand icon** (⛶) on a chart | Opens ChartModal — dark backdrop, full-size chart |
| Hold for 3s | Show the expanded chart |
| Click the **info icon** (ℹ) | Opens InfoModal with metric description |
| Hold for 3s | Read the description |
| Click outside/closes modal | Return to dashboard |

**Clip**: `scene-06-drilldown.mp4`

---

### SCENE 7: Skill Matrix

**Route**: `/skills`

| Action | Details |
|--------|---------|
| Full page — the interactive table | Hold for 3s |
| **Call out color coding**: Beginner (red), Novice (orange), Intermediate (yellow), Advanced (green), Expert (blue) | Hover over a cell of each color |
| **Search** by name | Click search bar, type "Raj" — table filters |
| **Filter by category** | Click category dropdown, select "Quality" |
| **Sort a column** | Click a column header — show sort order change |
| Clear filters | Return to full table view |

**Clip**: `scene-07-skillmatrix.mp4`

---

### SCENE 8: Skill Level Assessment

**Route**: `/skills`

| Action | Details |
|--------|---------|
| Click a skill cell for an employee | Opens **Level Modal** |
| Show current level | 2s |
| Drag slider or click new level | Change from e.g. 3 → 4 |
| Click **Save** | Toast notification: "Skill updated!" |
| Table cell updates | New color/badge shows immediately |

**Clip**: `scene-08-skill-assessment.mp4`

---

### SCENE 9: Mini-DOJO — Game Library

**Route**: `/minidojo`

| Action | Details |
|--------|---------|
| Full page — game grid | Hold for 3s |
| **Show "Your Skill Levels"** at top | Hover over the employee skill badges |
| **Scroll through games** | Slowly scroll down the game list |
| Hover over a game card | Show card with title, skill mapping, Play button |
| Click **Play** on "5S Sort" | Game loads |

**Clip**: `scene-09-game-library.mp4`

---

### SCENE 10: Mini-DOJO — Playing a Game

**Route**: `/minidojo` → specific game

| Action | Details |
|--------|---------|
| **5S Sort game loads** | Show timer counting (45s), instruction text |
| **Drag/categorize items** | Move items into Sort, Set in Order, Shine, Standardize, Sustain bins |
| **Score increments** with each correct answer | Show the score counter climbing |
| Timer runs out | Game ends — `onComplete` fires |
| **Result screen** | Score shown, auto-submits to backend |

**Clip**: `scene-10-game-play.mp4`

---

### SCENE 11: Mini-DOJO — Score Submission & Skill Update

**Route**: `/minidojo` (return to game list after playing)

| Action | Details |
|--------|---------|
| Back at game list | Show that employee's skill level for the game has **changed** |
| Toast notification appears | "Skill updated! +15 XP" |
| Navigate to `/training-attempts` | Show the new attempt record in the table |

**Clip**: `scene-11-score.mp4`

---

### SCENE 12: Management Review Dashboard

**Route**: `/management`

| Action | Details |
|--------|---------|
| Full page — exec summary | Hold for 3s — note the staggered entrance animation (GSAP) |
| **Executive Summary card** | Hover — shows AI compliance score text |
| **Compliance Score gauge** | Show the large gauge with percentage |
| Hover over **Customer Defect Trend** | 2s |
| Hover over **Internal Rejection Trend** | 2s |
| Hover over **Defect Severity pie chart** | 2s |
| Hover over **Rejection by Dept bar chart** | 2s |
| **Training Adherence** progress bar | Hover — 78% |
| **Action Plan Progress** | Hover — grouped bars |
| Click **"Download Board Report (PDF)"** | Export triggers |

**Clip**: `scene-12-management.mp4`

---

### SCENE 13: Customer Defects — Table & CRUD

**Route**: `/customer-defects`

| Action | Details |
|--------|---------|
| Full page — data table | Hold for 2s |
| **Search** by customer name | Type "Auto" — table filters |
| **Sort by severity** | Click column header |
| Click **"+ Add Defect"** | Opens modal form |
| Fill in fields: | |
| → Customer: "NewCorp" | Type it |
| → Product: "Bracket A" | Type it |
| → Part Number: "BR-001" | Type it |
| → Defect Type: select from dropdown | Click dropdown, pick "Surface Scratch" |
| → Quantity: "5" | Type |
| → Severity: "Major" | Click dropdown |
| Click **Save** | Toast success, table updates with new row |
| **Edit** an existing row | Click edit icon on a row |
| Change quantity | 7 → 3 |
| Click **Save** | Toast, table updates |
| **Delete** a row | Click delete icon, confirm |
| Toast: "Defect deleted" | |

**Clip**: `scene-13-defects-crud.mp4`

---

### SCENE 14: Internal Rejections — Table & CRUD

**Route**: `/internal-rejections`

| Action | Details |
|--------|---------|
| Full table | Hold for 2s |
| Click **"+ Add"** | Fill department, process, defect type, quantity, disposal action |
| Save | Toast |

**Clip**: `scene-14-rejections.mp4`

---

### SCENE 15: Action Plans — Full Lifecycle

**Route**: `/action-plans`

| Action | Details |
|--------|---------|
| Full table — Title, Category, Owner, Target Date, Progress, Status, Priority | Hold for 3s |
| **Progress bars** visible on active plans | Hover over one |
| Click **"+ Add Action Plan"** | Opens form |
| Fill: Title "Reduce surface scratches", Category "Quality", Owner "Rajesh K." | |
| Set target date, priority | |
| Click **Save** | Toast, table updates |
| **Edit** an existing plan — update progress to 75% | Shows progress bar change |
| **Status badge** | Changes from "Open" to "In Progress" |

**Clip**: `scene-15-actionplans.mp4`

---

### SCENE 16: Quick-Add FAB Menu

**Route**: From any dashboard page (e.g., `/manpower`)

| Action | Details |
|--------|---------|
| Cursor moves to bottom-right **FAB (+)** button | 2s hover |
| Click the **FAB** | Speed-dial menu expands with 7 options |
| Hover over each option slowly: | |
| → Quick Attendance 📋 | 1s each |
| → Quick Overtime ⏰ | |
| → Quick Movement 🔄 | |
| → Quick Employee 👤 | |
| → Quick Defect ⚠️ | |
| → Quick Rejection ❌ | |
| → Quick Action Plan 📝 | |

**Clip**: `scene-16-fab-menu.mp4`

---

### SCENE 17: Quick-Add Form — Attendance

**Route**: Via FAB on any dashboard page

| Action | Details |
|--------|---------|
| Click **"Quick Attendance"** from FAB | Modal opens |
| Select employee from searchable dropdown | Type "Raj" → select |
| Date picker (defaults to today) | Show it |
| Select shift (A/B/C) | Click "A" |
| Set status (Present/Absent/Leave/Holiday) | Click "Present" |
| Set in-time / out-time | Type or use picker |
| Click **Save** | Toast: "Attendance recorded" |
| Navigate to `/attendance` | Show the new record in table |

**Clip**: `scene-17-quick-attendance.mp4`

---

### SCENE 18: Employee List — CRUD

**Route**: `/employees`

| Action | Details |
|--------|---------|
| Full employee table | Hold for 2s |
| Search by name/code | Type filter |
| Filter by department or status | Click dropdowns |
| Click **"+ Add Employee"** | Opens modal |
| Fill: Emp Code, Name, Department, Designation, Status, Shift, Plant | Type each |
| Click **Save** | Toast + new row |
| **Edit** an employee | Change designation or department |
| **Save** | Shows update |
| Show status filter (Active/Inactive) | |

**Clip**: `scene-18-employees.mp4`

---

### SCENE 19: Employee Movements

**Route**: `/employee-movements`

| Action | Details |
|--------|---------|
| Full table — Employee, Movement Type, Reason, Date | Hold for 2s |
| Click **"+ Add Movement"** | Opens form |
| Select employee | From dropdown |
| Select movement type | Joined / Resigned / Transferred / Promoted |
| Enter reason | e.g. "Promoted to Team Lead" |
| Select date | |
| Click **Save** | Toast + new record |

**Clip**: `scene-19-movements.mp4`

---

### SCENE 20: Training Modules

**Route**: `/training-modules`

| Action | Details |
|--------|---------|
| Table: Code, Title, Category, Duration, Passing Score | Hold for 2s |
| Click **"+ Add"** | Add a new module |
| Fill: Code "TNG-006", Title "Lean Six Sigma", Category "Quality", Hours "12", Passing Score "80" | |
| Save | |

**Clip**: `scene-20-training-modules.mp4`

---

### SCENE 21: Training Plans

**Route**: `/training-plans`

| Action | Details |
|--------|---------|
| Table + bar chart showing plan adherence | Hold for 3s |
| Hover over chart | Show data point tooltip |
| Add a new training plan | Fill month, department, category, planned vs completed |

**Clip**: `scene-21-training-plans.mp4`

---

### SCENE 22: Training Attempts

**Route**: `/training-attempts`

| Action | Details |
|--------|---------|
| Table: Employee, Module, Score, Passed badge, Date, Attempt # | Hold for 3s |
| Filter by Passed/Failed | Click dropdown |
| Show the most recent attempt (from game played earlier) | |

**Clip**: `scene-22-training-attempts.mp4`

---

### SCENE 23: AR/VR Simulators

**Route**: `/simulators`

| Action | Details |
|--------|---------|
| Full page — 3 info cards | Hold for 3s |
| Hover over **Critical Process Training (VR)** | Card highlight |
| Hover over **Material Handling (AR)** | Card highlight |
| Hover over **Fire & Safety Training (VR)** | Card highlight |
| Click "Learn More" on one | Show placeholder (no action needed) |

**Clip**: `scene-23-arvr.mp4`

---

### SCENE 24: Workforce Utilization

**Route**: `/workforce-utilization`

| Action | Details |
|--------|---------|
| Table: Date, Department, Available Hours, Utilized Hours, Loss Hours | Hold for 2s |
| Add a new record | Fill and save |
| Show the utilization trend if charted | |

**Clip**: `scene-24-utilization.mp4`

---

### SCENE 25: Manpower Planning Form

**Route**: `/manpower-form`

| Action | Details |
|--------|---------|
| Table: Department, Shift, Required, Buffer Planned, Actual | Hold for 2s |
| Add a new plan | Fill form |
| Save | |

**Clip**: `scene-25-manpower-plan.mp4`

---

### SCENE 26: Employee Skills Assignment

**Route**: `/employee-skills`

| Action | Details |
|--------|---------|
| Junction table: Employee ↔ Skill with Level, Score, XP | Hold for 2s |
| Add a new assignment | Select employee + skill + level |
| Save | |

**Clip**: `scene-26-employee-skills.mp4`

---

### SCENE 27: Skills Form (Admin)

**Route**: `/skills-form`

| Action | Details |
|--------|---------|
| Skill taxonomy table: Name, Category | Hold for 2s |
| Add a new skill | e.g. "Forklift Operation" under "Safety" |

**Clip**: `scene-27-skills-admin.mp4`

---

### SCENE 28: Attendance Records (standalone)

**Route**: `/attendance`

| Action | Details |
|--------|---------|
| Full table | Hold for 2s |
| Search/filter by date, employee, status | |
| Add, edit, delete a record | Quick demo |

**Clip**: `scene-28-attendance.mp4`

---

### SCENE 29: Overtime Records

**Route**: `/overtime`

| Action | Details |
|--------|---------|
| Full table | Hold for 2s |
| Add a new overtime record | Date, hours, approved by |

**Clip**: `scene-29-overtime.mp4`

---

## Summary of All Clips

| # | Clip | Duration (est.) |
|---|------|----------------|
| 1 | Landing page | 10s |
| 2 | Employee login | 8s |
| 3 | Dashboard navigation & sidebar | 15s |
| 4 | KPI cards | 20s |
| 5 | Charts & trends | 20s |
| 6 | Drill-down modal | 10s |
| 7 | Skill matrix table & filters | 12s |
| 8 | Skill level assessment | 8s |
| 9 | Game library | 10s |
| 10 | Playing a game | 15s |
| 11 | Score submission & skill update | 10s |
| 12 | Management review | 18s |
| 13 | Customer defects CRUD | 20s |
| 14 | Internal rejections | 8s |
| 15 | Action plans lifecycle | 15s |
| 16 | FAB menu | 8s |
| 17 | Quick-add attendance | 12s |
| 18 | Employee CRUD | 15s |
| 19 | Employee movements | 10s |
| 20 | Training modules | 8s |
| 21 | Training plans | 8s |
| 22 | Training attempts | 8s |
| 23 | AR/VR simulators | 10s |
| 24 | Workforce utilization | 8s |
| 25 | Manpower planning | 8s |
| 26 | Employee skills | 8s |
| 27 | Skills form | 6s |
| 28 | Attendance records | 8s |
| 29 | Overtime records | 6s |

---

## Post-Recording: File Organization

Place all `.mp4` clips in:

```
my-video/public/videos/
├── scene-01-landing.mp4
├── scene-02-login.mp4
├── scene-03-navigation.mp4
...
├── scene-29-overtime.mp4
```

Then update the Remotion composition to swap mock `<ScreenFrame>` components with:

```tsx
import { Video } from "@remotion/media";
import { staticFile } from "remotion";

<Video src={staticFile("videos/scene-04-kpis.mp4")} style={{ borderRadius: 12 }} />
```
